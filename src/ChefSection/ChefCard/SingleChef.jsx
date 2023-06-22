import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { AiFillLike} from 'react-icons/ai';
import Header from '../../Header/Header';
import Rating from 'react-rating';
import {  FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../../Footer/Footer';




const SingleChef = () => {
    const data = useLoaderData()
   
   
  
    const { chefName,title,degree,email,phone,foodName1,foodName2,foodName3,ingredients1,ingredients2,ingredients3,cookingMethod1,cookingMethod2,cookingMethod3,rating,likes, chefImg, experience,recipesItems} = data

    const notify = (event) => {
      event.currentTarget.disabled = true;
      toast("added your favourite item!")
     
      
    }
 ;




    return (
        <>
        <Header></Header>
        <Container>
     
        <div className='d-flex bg-black align-items-center'>
          <img className='' src={chefImg} />

        <div className='text-white fs-5'>
        <h3 className='text-decoration-underline'>Address of Chef :</h3>
                <p className='mb-0'>ChefName : {chefName}</p>
                <p className='mb-0'>Degree : {degree}</p>
                <p className='mb-0'>Title : {title}</p>
                <p className='mb-0'>Email : {email}</p>
                <p className='mb-0'>Phone's number : {phone}</p>
               <p className='mb-0 '>Years of experience :         {experience}+</p>
               <p className='
               mb-0'>Number of recipes: {recipesItems}</p>
               <p className='mb-0 '>people likes : <AiFillLike></AiFillLike> {likes}</p>
               </div>



        </div>

  {/* food recipe cards */}

 <div className="d-flex mt-5 gap-3">

    <Card>
      <Card.Body>
        <Card.Title>Recepie Name : {foodName1}</Card.Title>
        <Card.Text>
          <div className='fs-5'>
          <p className='mb-0 text-info'> food Ingredients are:</p>
          <ul>
            <li className='mb-0'>{ingredients1[1]}, </li>
           <li className='mb-0'>{ingredients1[2]}, </li>
           <li className='mb-0'>{ingredients1[3]}, </li>
           <li className='mb-0'>{ingredients1[4]}, </li>
           <li className='mb-0'>{ingredients1[5]} </li> </ul>
         </div>

         <div className='fs-5'>
         <p className='mb-0 text-success fs-5'> Cooking methods are:</p>
         <ol> 
           <li className='mb-0'>{cookingMethod1[1]}, </li>
           <li className='mb-0'>{cookingMethod1[2]}, </li>
           <li className='mb-0'>{cookingMethod1[3]}, </li>
           <li className='mb-0'>{cookingMethod1[4]}, </li>
           <li className='mb-0'>{cookingMethod1[5]} </li> </ol>
         </div>
          </Card.Text>
          <div className='d-flex'>
            <div className='flex-grow-1'>
            <Button onClick={notify}  variant="primary">Favourite</Button>
            <ToastContainer />
            </div>
          

         <div  >
        <Rating 
     placeholderRating={rating[0]}
    emptySymbol={<FaStarHalfAlt ></FaStarHalfAlt>}
     placeholderSymbol={<FaStar className='text-warning fs-5' ></FaStar>}
            fullSymbol={<FaStar ></FaStar>}
      />
     <span className='fs-5 mx-1 text-warning'>{rating[0]}</span>
         </div>
       
      

          </div>
        
       

      </Card.Body>
    </Card>

    <Card>
      <Card.Body>
        <Card.Title>Recepie Name : {foodName2}</Card.Title>
        <Card.Text>
          <div className='fs-5'>
          <p className='mb-0 text-info'> food Ingredients are:</p>
          <ul>
          <li className='mb-0'>{ingredients2[1]}, </li>
           <li className='mb-0'>{ingredients2[2]}, </li>
           <li className='mb-0'>{ingredients2[3]}, </li>
           <li className='mb-0'>{ingredients2[4]}, </li>
           <li className='mb-0'>{ingredients2[5]} </li> </ul>
         </div>

         <div className='fs-5'>
         <p className='mb-0 text-success fs-5'> Cooking methods are:</p>
         <ol> 
           <li className='mb-0'>{cookingMethod2[1]}, </li>
           <li className='mb-0'>{cookingMethod2[2]}, </li>
           <li className='mb-0'>{cookingMethod2[3]}, </li>
           <li className='mb-0'>{cookingMethod2[4]}, </li>
           <li className='mb-0'>{cookingMethod2[5]} </li> </ol>
         </div>
          </Card.Text>
          <div className='d-flex'>
            <div className='flex-grow-1'>
            <Button onClick={notify} variant="primary">Favourite</Button>
            <ToastContainer />
            </div>
          

         <div >
         <Rating
     placeholderRating={rating[1]}
    emptySymbol={<FaStarHalfAlt></FaStarHalfAlt>}
     placeholderSymbol={<FaStar className='text-warning fs-5'></FaStar>}
     fullSymbol={<FaStar></FaStar>}
      />
        <span className='fs-5 text-warning'>{rating[1]}</span>
         </div>

          </div>
      </Card.Body>
    </Card>

    <Card>
      <Card.Body>
        <Card.Title>Recepie Name : {foodName3}</Card.Title>
        <Card.Text>
          <div className='fs-5'>
          <p className='mb-0 text-info'> food Ingredients are:</p>
          <ul>
            <li className='mb-0'>{ingredients3[1]}, </li>
           <li className='mb-0'>{ingredients3[2]}, </li>
           <li className='mb-0'>{ingredients3[3]}, </li>
           <li className='mb-0'>{ingredients3[4]}, </li>
           <li className='mb-0'>{ingredients3[5]} </li> </ul>
         </div>

         <div className='fs-5'>
         <p className='mb-0 text-success fs-5'> Cooking methods are:</p>
         <ol> 
           <li className='mb-0'>{cookingMethod3[1]}, </li>
           <li className='mb-0'>{cookingMethod3[2]}, </li>
           <li className='mb-0'>{cookingMethod3[3]}, </li>
           <li className='mb-0'>{cookingMethod3[4]}, </li>
           <li className='mb-0'>{cookingMethod3[5]} </li> </ol>
         </div>
          </Card.Text>

          <div className='d-flex'>
            <div className='flex-grow-1'>
            <Button onClick={notify} variant="primary">Favourite</Button>
            <ToastContainer />
            </div>
          

         <div >
         <Rating
     placeholderRating={rating[2]}
    emptySymbol={<FaStarHalfAlt></FaStarHalfAlt>}
     placeholderSymbol={<FaStar className='text-warning fs-5'></FaStar>}
     fullSymbol={<FaStar></FaStar>}
      />
        <span className='fs-5 text-warning'>{rating[2]}</span>
         </div>
        </div>
    
      </Card.Body>
    </Card>



  
    </div>



        
       </Container>
        <Footer></Footer>
        </>
   


    );
};

export default SingleChef;