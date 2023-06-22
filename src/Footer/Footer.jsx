import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaInstagramSquare, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <Container>
            <div className='d-flex align-items-center px-5 py-4  gap-5 bg-black mt-5 rounded justify-content-between'>
                <div className='text-white'>
                    <h4>Find us in social media on:</h4>
                    <FaFacebook className='fs-3 mx-3 mt-2'></FaFacebook>
                     <FaYoutube className='fs-3 mx-3 mt-2'></FaYoutube>
                     <FaInstagramSquare className='fs-3 mx-3 mt-2'></FaInstagramSquare>
                      <FaGithub className='fs-3 mx-3 mt-2'></FaGithub>
                </div>

             <div>
    <Form className='mt-5'>
        <h4 className='text-white'>Join with us :</h4>
      <Form.Group  controlId="formBasicEmail">
       <Form.Control className='mb-4' type="email" placeholder="Enter email" />
       <Form.Control type="password" placeholder="Password" />
    </Form.Group>

     
    </Form> 
        </div>

    <div className='mt-5'>
        <Button variant="danger px-5 fs-4" type="Join Us"> Join Us
           </Button>
            </div>
            </div>
        </Container>
    );
};

export default Footer;