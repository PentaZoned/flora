import React from 'react';
import { Link } from 'react-router-dom';
import useStyles from '../../styles';
import {Typography, Container} from '@mui/material';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function FlowerCard({flowers}) {
  const classes = useStyles();
  return (
    <main>
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
          {flowers.map((item) => (
            <ImageListItem key={item.name.image}>
              <img
                src={item.name.image}
                srcSet={item.name.image}
                alt={item.name.description}
                loading="lazy"
              />
              <ImageListItemBar
                title={<div>{item.name.title}</div>}
                position="below"
              />
              <Stack direction="row" >
                <Button 
                  className={classes.buttons} 
                  variant="contained"
                  // onClick={event => window.open(flower.id)}
                  >
                    Buy This
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

