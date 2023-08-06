import React, {useState, useEffect} from "react";
import MenuCard from "./MenuCard";
import ShowCard from "./ShowCard";
import UpdateItemForm from "./UpdateItemForm";
import NewItem from "./NewItem";
import Scroll from "./Scroll";
import axios from "axios";
import { useSelector } from "react-redux";


function Menu(props){
    const user = useSelector((state)=> state.auth.userDetails);
    const [items, setItems] = useState([]);
    const [viewModal, setViewModal] = useState(false);
    const [viewForm, setViewForm] = useState(false);
    const [viewNewForm, setViewNewForm] = useState(false);
    const [id, setId] = useState("");
    
  useEffect(() => {
    start()
  }, []);
async function start(){
  const response = await axios.get(`${process.env.REACT_APP_API}/menu_items`)

  setItems(response.data)
}

  let burgerCards = items.map((item) => {
    switch(item.food_type){
      case "burger":
        return (
          <div key={item._id}>
            <MenuCard className={""} getToken={props.getToken} item={item} toggle={toggle} toggleForm={toggleForm} changeId={changeId}/>
          </div>
        )      
    }
  });
  let rollCards = items.map((item) => {

    switch(item.food_type){
      case "roll":
        return (
          <div key={item._id}>
            <MenuCard className={""} getToken={props.getToken} item={item} toggle={toggle} toggleForm={toggleForm} changeId={changeId}/>
          </div>
        )      
    }
  });
  let hotBoxCards = items.map((item) => {
    switch(item.food_type){
      case "hot_box":
        return (
          <div key={item._id}>
            <MenuCard className={""} getToken={props.getToken} item={item} toggle={toggle} toggleForm={toggleForm} changeId={changeId}/>
          </div>
        )      
    }
  });
  let fishCards = items.map((item) => {
    switch(item.food_type){
      case "fish":
        return (
          <div key={item._id}>
            <MenuCard className={""} getToken={props.getToken} item={item} toggle={toggle} toggleForm={toggleForm} changeId={changeId}/>
          </div>
        )      
    }
  });
  let kidsMealCards = items.map((item) => {
    switch(item.food_type){
      case "kids_meal":
        return (
          <div key={item._id}>
            <MenuCard className={""} getToken={props.getToken} item={item} toggle={toggle} toggleForm={toggleForm} changeId={changeId}/>
          </div>
        )      
    }
  });
  let mealDealCards = items.map((item) => {
    switch(item.food_type){
      case "meal_deal":
        return (
          <div key={item._id}>
            <MenuCard className={"meal-deal-menu-card"}  getToken={props.getToken} item={item} toggle={toggle} toggleForm={toggleForm} changeId={changeId}/>
          </div>
        )      
    }
  });
  let chickenCards = items.map((item) => {
    switch(item.food_type){
      case "chicken":
        return (
          <div key={item._id}>
            <MenuCard className={""} getToken={props.getToken} item={item} toggle={toggle} toggleForm={toggleForm} changeId={changeId}/>
          </div>
        )      
    }
  });
  let chipsCards = items.map((item) => {
    switch(item.food_type){
      case "chips":
        return (
          <div key={item._id}>
            <MenuCard className={""} getToken={props.getToken} item={item} toggle={toggle} toggleForm={toggleForm} changeId={changeId}/>
          </div>
        )      
    }
  });
  function toggle(){
    setViewModal(!viewModal);
  }
  function toggleForm(){
    setViewForm(!viewForm);
  }
  function toggleNewForm(){
    setViewNewForm(!viewNewForm);
  }
  function changeId(newId){
    setId(newId);
  }

    return(
        
        <div>
            <h1><span className="title">Menu</span><span>{user.name ? <button className="newButton" onClick={toggleNewForm}>Create New Item</button> : <></>}</span></h1>
            <Scroll height={80}>
            {viewModal ?<ShowCard viewModal={viewModal} id={id} toggle={toggle}/>: <></>}
            {viewForm ? <UpdateItemForm viewForm={viewForm} id={id} toggleForm={toggleForm}/> : <></>}
            {viewNewForm? <NewItem viewNewForm={viewNewForm} toggleForm={toggleNewForm}/> : <></>}
            {/* burgers */}
            <h2 className="title-left">Burgers 🍔</h2>
            <div className="cardsArea">
            {items.length > 0 ? burgerCards : <>Loading...</>}
            </div>
            {/* rolls */}
            <h2 className="title-left">Rolls 🌭</h2>
            <div className="cardsArea">
            {items.length > 0 ? rollCards : <>Loading...</>}
            </div>
            {/* chicken */}
            <h2 className="title-left">Chicken 🍗</h2>
            <div className="cardsArea">
            {items.length > 0 ? chickenCards : <>Loading...</>}
            </div>
            {/* chips */}
            <h2 className="title-left">Chips 🍟 </h2>
            <div className="cardsArea">
            {items.length > 0 ? chipsCards : <>Loading...</>}
            </div>
            {/* hot box */}
            <h2 className="title-left">Hot Box 🥧 </h2>
            <div className="cardsArea">
            {items.length > 0 ? hotBoxCards : <>Loading...</>}
            </div>
            {/* fish */}
            <h2 className="title-left">Fish 🐟</h2>
            <div className="cardsArea">
            {items.length > 0 ? fishCards : <>Loading...</>}
            </div>
            {/* kids meals */}
            <h2 className="title-left">Kids Meals </h2>
            <div className="cardsArea">
            {items.length > 0 ? kidsMealCards : <>Loading...</>}
            </div>
            {/* meal deals */}
            <h2 className="title-left">Meal Deals </h2>
            <div className="cardsArea">
            {items.length > 0 ? mealDealCards : <>Loading...</>}
            </div>
            </Scroll>
        </div>
    );
}

export default Menu;