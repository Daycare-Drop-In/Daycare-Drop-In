import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

//COMPONENT IMPORTS
import LogOutButton from "../LogOutButton/LogOutButton";
import ProviderPhotoGallery from "../ProviderPhotoGallery/ProviderPhotoGallery";
import ProviderAvailabilityTable from "../ProviderAvailabilityTable/ProviderAvailabilityTable";
import ProviderBookingsTable from "../ProviderBookingsTable/ProviderBookingsTable";
import ProviderBookingProcess from "../ProviderBookingProcess/ProviderBookingProcess";
import ProviderEditDetails from "./ProviderEditDetails";

function ProviderHomePage({ provider }) {
  const dispatch = useDispatch();
  // const { providerId } = useParams();
  const userId = useSelector((store) => store.user.id);

  console.log("THESE ARE THE PROVIDER DETAILS:", provider);

  const [editMode, setEditMode] = useState(false);

  return (
    <div className="container">
      <div className="provider-header">
        <div className="provider-business-name">
          <h1>{provider.business_name}</h1>
        </div>
        <div className="provider-name"></div>
      </div>

      <div className="provider-profile-photo">
        <img src={provider.provider_pic} height="200" />
      </div>
      <div className="edit-button">
        {!editMode ? (
          <button onClick={() => setEditMode(true)}>Edit Info</button>
        ) : (
          <button onClick={() => setEditMode(false)}>Cancel</button>
        )}
      </div>

      {editMode ? (
        <div>
          <ProviderEditDetails provider={provider} />
        </div>
      ) : (
        <>
          <div className="provider-contact-info">
            <p>
              <b>Provider Name:</b> {provider.first_name} {provider.last_name}
            </p>
            <p>
              <b>License:</b> {provider.license}{" "}
            </p>
            <p>
              <b>Address:</b> {provider.street_address} {provider.unit}{" "}
              {provider.city} {provider.state}
              {provider.zip}
            </p>
            <p>
              <b>Email:</b> {provider.email}
            </p>
          </div>

          <div className="provider-bio">
            <h2>About Me:</h2>
            <p>{provider.personal_description}</p>
          </div>

          <div className="daycare-details">
            <h2>About {provider.business_name}:</h2>
            <p>
              <b>Hours:</b> {provider.hours_open}
              {" AM - "}
              {provider.hours_close}
              {"PM"}
            </p>
            <p>
              <b>Meals provided? </b>
              {provider.meals ? "Yes" : "No"}{" "}
            </p>
            <p>{provider.business_description}</p>
          </div>
        </>
      )}

      <ProviderAvailabilityTable provider={provider} />

      <ProviderPhotoGallery provider={provider} />

      <ProviderBookingsTable provider={provider} />

    </div>
  );
}

// this allows us to use <App /> in index.js
export default ProviderHomePage;
