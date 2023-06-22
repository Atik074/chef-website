import React from 'react';
import logo from './logo/four o four.png'

const ErrorPage = () => {
    return (
        <div>
            <h2>Oppsss !!!</h2>
            <img className='w-100 mx-auto mt-5' src={logo} alt="" />
        </div>
    );
};

export default ErrorPage;