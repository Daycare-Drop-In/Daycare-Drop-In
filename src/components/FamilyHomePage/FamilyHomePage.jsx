import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

//Component Imports
import LogOutButton from "../LogOutButton/LogOutButton";
import FamilyContactCards from "../FamilyContactCards/FamilyContactCards";
import FamilyChildCards from "../FamilyChildCards/FamilyChildCards";
import FamilyDropOffs from "../FamilyDropOffs/FamilyDropOffs";
import AddChildForm from "../AddChildForm/AddChildForm";
import AddAdultForm from "../AddAdultForm/AddAdultForm"

function FamilyHomePage() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const rAdult = useSelector((store) => store.responsibleAdults)
  const children = useSelector((store => store.children))
  const families = useSelector((store) => store.families)


  useEffect(() => {
    //dispatches request for family info based on userID
    console.log("Dispatching request for data of family-user ID:", user.id);
    dispatch({ type: "GET_FAMILY_USER", payload: user.id });
    dispatch({type: "GET_CHILDREN", payload: user.family_id })
    dispatch({ type: "GET_ADULTS", payload: user.family_id });
  }, []);

  console.log('these are the children of this family', children);

  const family = useSelector((store) => store.family);

  console.log("THESE ARE THE FAMILY DETAILS:", families);

  return (
    <div className="container">
      <div className="family-home-page-header">
        <h2>
          Welcome, {user.first_name} {user.last_name}!
          <br></br>
          <img src={user.photo_url} height="200" />
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
      
      <h3>Responsible Adults</h3>
      <p>button to add a card</p>
      <AddAdultForm/>
      <AddChildForm />
      
      

      {/* need to map this component  */}
      {children?.map((kid)=>(
        
      <FamilyChildCards key={kid.id} kid={kid} />
      ))}

      {rAdult?.map((adult) => (
        <FamilyContactCards key={adult.id} adult={adult} />
      ))}

      <LogOutButton className="btn" />

      <FamilyDropOffs />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default FamilyHomePage;
