import React, { useState } from 'react';
import { Button, Card  } from 'react-bootstrap';
import { AiOutlineArrowRight,AiFillLike } from 'react-icons/ai';
import './ChefCard.css'
import { Link } from 'react-router-dom';

const ChefCard = ({chefItem}) => {

  const {id, chefName,likes, chefImg,experience,recipesItems}  = chefItem
    return (
        <Card>
        <Card.Img variant="top" src={chefImg} />
        <Card.Body className='cardBody'>
          <Card.Title className='cardTitle'>{chefName}</Card.Title>
          <Card.Text className='my-3 card-desc'>
    
               <p className=' mb-0'>Years of experience :       {experience}+ years</p>
               <p className='
               mb-0'>Number of recipes: {recipesItems}</p>
               <p className='mb-0'>people likes : <AiFillLike></AiFillLike> {likes}</p>
           
          </Card.Text>
          <Button variant="dark fs-5">
          
            <Link to={`/singleChef/${id}`}>  View details   <AiOutlineArrowRight className='text-white'/>  </Link>
          </Button>
        </Card.Body>
      </Card>


    );
};

export default ChefCard;