import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_PRODUCT } from '../../utils/queries';

import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Button from '@mui/material/Button';

import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
        color: '#ff6d75',
    },
    '& .MuiRating-iconHover': {
        color: '#ff3d47',
    },
});

const SingleItem = () => {

    const { id } = useParams();

    const { loading, data } = useQuery(QUERY_SINGLE_PRODUCT, {
        variables: { _id: id },
    });

    const product = data?.product || {};
    console.log(product);
    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: "white", height: "5vh" }} />
        <div style={{
            display: "block",
            justifyContent: "center"
        }}>
            <img src={`../${product.image}`} />
            <h2>
                {product.title}
            </h2>
                <h3 className='product-price'>Price: ${product.price}</h3>
                <Button variant="contained">Add to cart</Button>
            <p>
                {product.description}
            </p>
            <p>
                <StyledRating
                    name="customized-color"
                    defaultValue={0}
                    getLabelText={(value: number) => `${value} Heart${value !== 1 ? 's' : ''}`}
                    precision={0.5}
                    icon={<FavoriteIcon fontSize="inherit" />}
                    emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                />
            </p>

        </div>
        </Container>
    </React.Fragment>
    );
};

export default SingleItem;