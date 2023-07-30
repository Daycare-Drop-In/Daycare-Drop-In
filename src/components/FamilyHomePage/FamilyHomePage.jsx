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

  const family = useSelector((store) => store.family);

  console.log("THESE ARE THE FAMILY DETAILS:", family);

  return (
    <div className="container">
      <div className="family-home-page-header">
        <h2>
          Welcome, {user.first_name} {user.last_name}!
        </h2>
        <LogOutButton className="btn" />
        <center>
          <h1>{family.family_name} Home Page</h1>
        </center>
      </div>

      <div className="family-photo">
        <center>
          {" "}
          <img src={family.photo_url} height="200" />
        </center>
      </div>
      <div className="family-bio"></div>

      <div className="family-details">
        <p>
          <b>Primary Address: </b>
          {family.street_address} {family.unit}
          {", "}
          {family.city} {family.state} {family.zip}
        </p>
        <p>
          <b>Family Access Code:</b> {family.access_code}
        </p>
      </div>

      <h3>Kids in this Family</h3>
      <p>button to add a kid</p>
      <h3>Responsible Adults</h3>
      <p>button to add a card</p>
      <FamilyContactCards />

      <FamilyChildCards />
      <LogOutButton className="btn" />

      <FamilyDropOffs />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default FamilyHomePage;
