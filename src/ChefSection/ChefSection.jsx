import React, { useEffect, useState } from 'react';
import {  Container, Spinner } from 'react-bootstrap';
import ChefCard from './ChefCard/ChefCard';



const ChefSection = () => {
  const [chefItems,setChefItems] = useState([])

  

  useEffect(()=>{
    fetch(`https://dream-ten-server-atik56rahman-gmailcom.vercel.app/chefData`)
    .then(res =>res.json())
    .then(data => setChefItems(data))
    .catch(error =>console.log(error))
  },[])


     
    return (
  
  <Container style={{display:'grid', gridTemplateColumns:"repeat(3,1fr)" , gap:'15px'}} className='mt-5'>

    {
        chefItems.map(chefItem =>  <ChefCard
        key={chefItem.id}
        chefItem={chefItem}
        >
      </ChefCard>
              
        )
       }

</Container>


      
    );
};

export default ChefSection;