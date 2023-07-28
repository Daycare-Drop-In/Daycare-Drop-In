import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

//Component Imports
import LogOutButton from "../LogOutButton/LogOutButton";
import FamilyContactCards from "../FamilyContactCards/FamilyContactCards";
import FamilyChildCards from "../FamilyChildCards/FamilyChildCards";
import FamilyDropOffs from "../FamilyDropOffs/FamilyDropOffs";

function FamilyHomePage() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  useEffect(() => {
    //dispatches request for family info based on userID
    console.log("Dispatching request for data of family-user ID:", user.id);
    dispatch({ type: "GET_FAMILY_USER", payload: user.id });
  }, []);

  return (
    <div className="container">
      <h1>This is a Family Home Page</h1>
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>

      <h3>Family Details</h3>
      <p>Bio! Family photo! Other stuff?</p>

      <h3>Kids in this Family</h3>
      <p>button to add a kid</p>
      <FamilyChildCards />

      <h3>Responsible Adults</h3>
      <p>button to add a card</p>
      <FamilyContactCards />
      <LogOutButton className="btn" />

      <FamilyDropOffs />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default FamilyHomePage;
