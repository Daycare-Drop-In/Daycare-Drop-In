import React from "react";
import { useSelector } from "react-redux";

//COMPONENT IMPORTS
import LogOutButton from "../LogOutButton/LogOutButton";
import ProviderPhotoGallery from "../ProviderPhotoGallery/ProviderPhotoGallery";
import ProviderAvailabilityTable from "../ProviderAvailabilityTable/ProviderAvailabilityTable";
import ProviderBookingsTable from "../ProviderBookingsTable/ProviderBookingsTable";
import ProviderBookingProcess from "../ProviderBookingProcess/ProviderBookingProcess";

function ProviderHomePage() {
  const user = useSelector((store) => store.user);
  return (
    <div className="container">
      <h1>This is a Provider Home Page</h1>
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>

      <h3>Provider Info</h3>
      <p>Description!</p>
      <p>Bio!</p>
      <p>Contact Info!</p>
      <p>Edit capabilities for all of this, if you are the provider!</p>
      <ProviderAvailabilityTable />


      <ProviderBookingProcess />

      <ProviderPhotoGallery />
     

      <ProviderBookingsTable />

      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default ProviderHomePage;
