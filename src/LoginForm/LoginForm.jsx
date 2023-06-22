import React, { useContext, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const LoginForm = () => {
  const [error ,setError] = useState('')
  const [success ,setSuccess] = useState('')
  const navigate = useNavigate()
  const {signInUser,auth,loader} = useContext(AuthContext)
  const provider = new GoogleAuthProvider()
  const githubProvider = new GithubAuthProvider()


    const handleLoginForm =(event) =>{
        event.preventDefault()
        const form = event.target
        const email= form.email.value
        const password= form.password.value 
        console.log(email,password)

        signInUser(email,password)
        .then( result=>{
            const loggedInUser = result.user
            console.log(loggedInUser)
            setError('')
            setSuccess('sucess!!!')
            navigate("/");
         

         })

         .catch(error =>{
          console.log(error.message)
          setSuccess('')
          setError(error.message)
        })
        

    }

// google sign in start 
    const handleGoogleLogin = ()=>{
      signInWithPopup(auth,provider) 
      .then((result)=>{
        const loggedInUser = result.user
        console.log(loggedInUser)
         navigate("/");
      
        
      })
      .catch(error =>{
        console.log(error.message)
        setSuccess('')
        setError(error.message)
        
      })

    }
    // google sign in end

    // github sign in start
    const handleGithubLogin = ()=>{
      signInWithPopup(auth,githubProvider) 
      .then((result)=>{
        const loggedInUser = result.user
        console.log(loggedInUser)
         navigate("/");
      
        
      })
      .catch(error =>{
        console.log(error.message)
        setSuccess('')
        setError(error.message)
        
      })

    }
    
    // github sign in end

    return (
      <> 
      <Header></Header>  
      <Container>
      <Row className='align-items-center'>
        <Col sm={4} lg={4} md={4}>
          <div className='w-100 mx-auto  shadow p-5 rounded' >
          <p className='text-info'>Login by social method :</p>
          <Button onClick={handleGoogleLogin} className='mb-2' variant="primary">SignIn with Google</Button> <br/>
          <Button onClick={handleGithubLogin } variant="secondary">SignIn with Github</Button>
          </div>
      

        </Col>
        <Col sm={8} lg={8} md={8}>
        <Form onSubmit={handleLoginForm} className='w-75 mx-auto mt-5 shadow p-5 rounded'>
            <h4>Please login here to see more details</h4>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className='fs-5'>Email address</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter your email" required />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className='fs-5'>Password</Form.Label>
          <Form.Control type="password" name='password' placeholder="Enter your Password" required />
        </Form.Group>
     
        <Button className='mb-2 px-4' variant="primary" type="submit">
          SIGN IN
        </Button>    <br/>

        

        <Form.Text className='text-secondary' style={{fontSize:'20px'}}>
         Not a member ? Please <Link to='/registration'>Register</Link> here
      </Form.Text>
      <Form.Text className='text-danger' style={{fontSize:'20px'}}>
            <p>{error}</p>
      </Form.Text>
      </Form>
      </Col>
      </Row>
     
    </Container>
    <Footer></Footer>




        {/* <Form onSubmit={handleLoginForm} className='w-50 mx-auto mt-5 shadow p-5 rounded'>
            <h4>Please login here to see more details</h4>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className='fs-5'>Email address</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter your email" required />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className='fs-5'>Password</Form.Label>
          <Form.Control type="password" name='password' placeholder="Enter your Password" required />
        </Form.Group>
     
        <Button className='mb-2 px-4' variant="primary" type="submit">
          SIGN IN
        </Button>  <br/>
        <Form.Text className='text-secondary' style={{fontSize:'20px'}}>
         Not a member ? Please <Link to='/registration'>Register</Link> here
      </Form.Text>
      <Form.Text className='text-danger' style={{fontSize:'20px'}}>
            <p>{error}</p>
      </Form.Text>
      </Form> */}

      </>
    );
};

export default LoginForm;