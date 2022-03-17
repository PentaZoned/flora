import React, { useEffect } from 'react';
import { Paper, styled, Grid, Typography, Button} from '@mui/material';
import useStyles from '../../styles';
import ButtonBase from '@mui/material/ButtonBase';
import img from "../../images/BF167-11KM_R.jpg";
//import background from "../../images/flower-bouquet-wrapped-gift-box-paper-bag-with-hand-drawn-face-isolated-white-background_23-2148102749.jpg"
//import background from "../../images/istockphoto-1208300986-612x612.jpg";
import background from "../../images/depositphotos_363122966-stock-photo-flat-with-spring-shopping-holiday.jpg";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const Cart = () => {
    const [ state, dispatch ] = useStoreContext();
    const [getCheckout, {data}] = useLazyQuery(QUERY_CHECKOUT);
    
    const classes = useStyles();  

    useEffect(() => {
        async function getCart() {
            const cart = await idbPromise('cart', 'get');
            dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart]});
        }
        if (!state.cart.length){
            getCart();
        }
    }, [state.cart.length, dispatch]);

    function toggleCart() {
        dispatch({ type: TOGGLE_CART });
    }

    // Calcuate the shopping cart total amount
    function calculateTotal() {
        let sum = 0;
        state.cart.forEach((item) => {
            sum += item.price * item.purchaseQuantity;
        });
        return sum.toFixed(2);
    }

    function submitCheckout() {
        const productIds = [];
        state.cart.forEach((item) => {
            for(let i = 0; i < item.purchaseQuantity; i++){
                productIds.push(item._id);
            }
        });
        getCheckout({
            variables: {products: productIds},
        });
    }

    if (!state.cartOpen){
        return (
            <div className="cart-closed" onClick={toggleCart}>
                <ShoppingCartIcon
                    className={classes.clickableIcon}
                />
            </div>
        );
    }


  return (
      <div style={{
          backgroundImage: `url(${background})`, 
          width: '100%',
          marginTop: '0',
      }}>
          <Typography>
              Shopping Cart
          </Typography>
    <Paper
      sx={{
        p: 20,
        margin: 'auto',
        //marginTop: '5vw',
        marginLeft: '5vw',
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={5}>
        <Grid item>
            {state.cart.length ? (
                <div>
                    {state.cart.map((item) => (
                        <CartItem key={item._id} item={item} />
                    ))}
                </div>
            )}
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="flower" src={img} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                Standard license
              </Typography>
              <Typography variant="body2" gutterBottom>
                Full resolution 1920x1080 • JPEG
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ID: 1030114
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer' }} variant="body2">
                Remove
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              $19.00
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
    </div>
  );
}