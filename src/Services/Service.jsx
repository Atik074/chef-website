import React from 'react';
import { Button, Container } from 'react-bootstrap';
import './Service.css'
import {GrNotes} from 'react-icons/gr';
import {RiBusLine} from 'react-icons/ri';
import {SiFoodpanda} from 'react-icons/si';





const Service = () => {
    return (
        <Container>
            <div className='mt-5 text-center py-5'>
            <h2 >How it Works</h2>
            <p className='fs-5 text-secondary'>We are highly active for your personal order and get ready for quick delivery</p>
            </div>

            <div className='d-flex justify-content-end bg-light shadow py-5'>
                <div>
                  <p className='sign-icon'><GrNotes/>
                    </p> 
                   <p className='fs-5 w-75'>Sign in and chose your favourite food</p>
                </div>
                <div>
                  <p className='sign-icon'><RiBusLine/>
                    </p> 
                   <p className='fs-5 w-75'>We will deliver your purchase</p>
                </div>
                <div >
                  <p className='sign-icon'><SiFoodpanda/>
                    </p> 
                   <p className='fs-5 w-75'>Enjoy our testy organic food</p>
                </div>    
            </div>
         
          

        </Container>
    );
};

export default Service;