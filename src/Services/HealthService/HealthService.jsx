import React from 'react';
import { Container } from 'react-bootstrap';
import './HealthService.css'

const HealthService = () => {
    return (
        <Container className='mt-5'>
            <div className='d-flex align-items-center justify-content-between '>
                 <div>
                    <img className='w-75 p-3 mt-5' src='https://shorturl.at/ayBFN' alt='' fluid/>
                </div>

              <div>
                     <h2 className='text-success mb-4'><i>Always Try to Eating Healthy Food</i></h2>
                     <p className='shadow fs-5 p-3 text-center '>Healthy food may you live longer</p>
                     <p className='shadow fs-5 p-3 text-center '>Healthy food build your body</p>
                     <p className='shadow fs-5 p-3 text-center'>Healthy food grow your immunity</p>
                     <p className='shadow fs-5 p-3 text-center'>Healthy food make  heart healthier</p>
                     <p className='shadow fs-5 p-3 text-center'>Healthy food Strengthens your bones</p>
                </div>
             </div>
  </Container>
    );
};

export default HealthService;