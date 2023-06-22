import React from 'react';
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import './Banner.css'


const Banner = () => {
    return (
        <Container>
           <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 "
          src="https://nomoneynotime.com.au/uploads/recipes/shutterstock_2042520416-1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h2 className='text-title'>Appetite Pizza Food</h2>
           <p className='text-desc fs-5'>Realy it is very testing  food.it price is cheap.in different its  price are changed .its very delicious food.to grow and fresh your mind come to our shop</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://shorturl.at/gNTVW"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 className='text-title'>Delicious Pizza Food</h3>
           <p className='text-desc fs-5'>Realy it is very testing  food.it price is cheap.in different its  price are changed .its very delicious food.to grow and fresh your mind come to our house</p>
        </Carousel.Caption  >
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/mixed-pizza-with-various-ingridients_140725-3790.jpg?w=2000"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3 className='text-title'>Spicy Hot Pizza Food</h3>
          <p  className='text-desc fs-5'>
           Realy it is very testing  food.it price is cheap.in different its  price are changed .its very delicious food.to grow and fresh your mind come to our house
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
            
        </Container>
    );
};

export default Banner;