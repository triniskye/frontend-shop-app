import React, { useState, useEffect } from 'react';
import DealCard from './DealCard';
import Scroll from './Scroll';
import axios from 'axios';

const Home = () => {
  const [mealDeals, setMealDeals] = useState([])


  useEffect(()=>{
    getDeals()
  }, [])
  const getDeals = async()=>{
    try{
      const response = await axios.get(`${process.env.REACT_APP_API}/deals`)
      setMealDeals(response.data)
    }
    catch(err){
      console.log(`error while fetching deals ===> ${err}`)
    }
  }

 const cards = mealDeals.map((item)=>{
   return(
     <div key={item._id}>     
     <DealCard item={item}/>
     </div>
   )
 })

  return (
    <div>
      
      <h1 className="title">Harrisville Takeaway & General Store</h1>
     <Scroll height={75}>
      {/* Drinks */}
      
      <div className='drinks-card'>
      <h2 className='smaller-title'>Cold Drinks!</h2>
        <div className='drinks'>
          <p><b>Smoothies:</b></p>
          <p><i>Berry Go Round, Mango Madness: </i>$6 Large, $4 Regular</p>

          <p><b>Milkshakes:</b></p>
          <p><i>Chocolate, Coffee, Strawberry, Vanilla, Caramel, Banana, Lime, Turkish Delight, Blue Heaven: <br/></i>$6 Large, $4 Regular</p>
        
          <p><b>Thickshakes & Frappes:</b></p>
          <p><i>Chocolate, Coffee, Strawberry, Vanilla, Caramel, Banana, Lime, Turkish Delight, Blue Heaven: <br/> </i>$6.50 Large, $4.50 Regular</p>
        </div>

      </div>
      {/* meal deals */}
      <h2 className="title-left">Current Meal Deals</h2>
      <div style={{display:"grid", gridTemplateColumns:"50vw 50vw"}}>
        {mealDeals.length > 0 ? cards : <>Loading...</>}
      </div>
      </Scroll>
    </div>
  );
}

export default Home;