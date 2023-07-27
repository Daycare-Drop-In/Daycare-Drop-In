import React from "react";
import { useSelector } from "react-redux";

//Component Imports
import LogOutButton from "../LogOutButton/LogOutButton";
import FamilyContactCards from "../FamilyContactCards/FamilyContactCards";
import FamilyChildCards from "../FamilyChildCards/FamilyChildCards";
import FamilyDropOffs from "../FamilyDropOffs/FamilyDropOffs";


function FamilyHomePage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div className="container">
      <h1>This is a Family Home Page</h1>
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>

      <h3>Family Details</h3>
      <p>Bio! Family photo! Other stuff?</p>

      <h3>Kids in this Family</h3>
      <p>button to add a kid</p>
      <h3>Responsible Adults</h3>
      <p>button to add a card</p>
      <FamilyContactCards />
      <FamilyChildCards />
      <LogOutButton className="btn" />


      <FamilyDropOffs/>

      
    </div>
  );
}

// this allows us to use <App /> in index.js
export default FamilyHomePage;
