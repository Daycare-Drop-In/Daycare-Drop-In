import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

//COMPONENT IMPORTS
import LogOutButton from "../LogOutButton/LogOutButton";
import ProviderPhotoGallery from "../ProviderPhotoGallery/ProviderPhotoGallery";
import ProviderAvailabilityTable from "../ProviderAvailabilityTable/ProviderAvailabilityTable";
import ProviderBookingsTable from "../ProviderBookingsTable/ProviderBookingsTable";
import ProviderBookingProcess from "../ProviderBookingProcess/ProviderBookingProcess";

function ProviderHomePage() {
  const dispatch = useDispatch();
  // const { providerId } = useParams();
  const userId = useSelector((store) => store.user.id);

  useEffect(() => {
    //dispatches request for provider info based on userID
    console.log("Dispatching request for data of provider-user ID:", userId);
    dispatch({ type: "GET_PROVIDER_USER", payload: userId });
  }, []);

  const provider = useSelector((store) => store.provider);

  console.log("THESE ARE THE PROVIDER DETAILS:", provider);

  return (
    <div className="container">
      <div className="provider-header">
        <div className="provider-business-name">
          <h1>{provider.business_name}</h1>
        </div>
        <div className="provider-name"></div>
      </div>

      <div className="provider-profile-photo"></div>

      <div className="provider-contact-info"></div>

      <ProviderAvailabilityTable />

      <ProviderBookingProcess />

      <div className="provider-bio"></div>
      <div className="business-description"></div>

      <ProviderPhotoGallery />

      <ProviderBookingsTable />

      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default ProviderHomePage;
