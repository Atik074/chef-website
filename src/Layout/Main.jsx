import React from 'react';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import ChefSection from '../ChefSection/ChefSection';
import Service from '../Services/Service';
import HealthService from '../Services/HealthService/HealthService';
import Footer from '../Footer/Footer';





const Main = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
          <ChefSection></ChefSection>
          <Service></Service>
          <HealthService></HealthService>
          <Footer></Footer>
          
           
           
     
        </div>
    );
};

export default Main;