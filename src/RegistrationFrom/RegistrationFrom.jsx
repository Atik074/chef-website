import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const RegistrationFrom = () => {
     const [error,setError] = useState('')
     const [success,setSuccess] = useState('')
    const {newUser} =useContext(AuthContext)
    const navigate = useNavigate()



    const handleRegistration = event =>{
    event.preventDefault()
        const form = event.target
        const name = form.name.value 
        const email= form.email.value
        const password= form.password.value 
        const photoUrl = form.photoUrl.value
        console.log(name,email,password,photoUrl)


        // validation in password
        
    if(!/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)){
      setError('Passworrd must be at least a symbol, upper and lowercase letters , a number & six digits.') 
      return;
    }

   


     
       newUser(email,password)
       .then( result=>{
          const newCreateUser = result.user
          console.log(newCreateUser)
          setError('')
          setSuccess('successfully login')
          navigate("/login")
         
       })
       .catch(error =>{
        console.log(error.message)
        setError(error.message)
        setSuccess('')
      })

    

     

    }


    return (
      <> 
      <Header></Header>
    
      <Form className=' w-50 mx-auto mt-4 shadow px-5 py-3 rounded' onSubmit={handleRegistration}>
            <h4>Please Registration here</h4>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className='fs-5'>Your name</Form.Label>
          <Form.Control type="text" name='name' placeholder="Enter your name" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className='fs-5'>Email address</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter your email" required />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className='fs-5'>Password</Form.Label>
          <Form.Control type="password" name='password' placeholder="Enter your Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicphoto-url">
          <Form.Label className='fs-5'>Photo URL:</Form.Label>
          <Form.Control type="url" id="photo-url" placeholder="Enter your img-url"  name="photoUrl"/>
        </Form.Group>
      
      <Button className='mt-2 px-4 mb-1' variant="primary" type="submit">
         SIGN UP
        </Button><br/>
        <Form.Text className='text-secondary' style={{fontSize:'20px'}}>
         All ready have an account ? Please <Link to='/login'>Login</Link>
      </Form.Text> 
       <p className='text-danger'>{error}</p> 
      <p className='text-success'>{success}</p>
     
      </Form>
    
     

      <Footer></Footer>


      </>
    );
};

export default RegistrationFrom;