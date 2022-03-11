import React from 'react';
import { Link } from 'react-router-dom';
import useStyles from '../../styles';
import {Typography, Container} from '@mui/material';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Navbar from '../Navbar';
//import { products } from './server/seeds/data';
import img from "../../images/BF167-11KM_R.jpg"

//data.js needs to add an image path

export default function FlowerCard({products}) {
  const classes = useStyles();
  return (
    <main>
        <Navbar />
      <div>
        <Link to ="/">
        <div align="center">
            <Typography variant="h2" align="center" >
              Pick One or Two or More... 
            </Typography>
        </div>
      <div>
      <Container>
        <ImageList className={classes.imagelist} gap={30}>
          {products.map((item) => (
            <ImageListItem key={img}>
                <img 
                    src={img}
                />
              {/* <img
                src={item.name.image}
                srcSet={item.name.image}
                alt={item.name.description}
                loading="lazy"
              /> */}
              <ImageListItemBar
                title={<div>{item.title}</div>}
                position="below"
              />
              <Stack direction="row" >
                <Button 
                  className={classes.buttons} 
                  variant="contained"
                  // onClick={event => window.open(flower.id)}
                  >
                    Add to cart
                </Button>
              </Stack>
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
    </div>
    </Link>
    </div>
    </main>
  );
}

