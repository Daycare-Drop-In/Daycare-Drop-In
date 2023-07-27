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
        <div className="provider-header">
          <div className="provider-business-name">

          </div>
          <div className="provider-name">

          </div>
        </div>

      <div className="provider-profile-photo">
      </div>

     <div className="provider-contact-info">

     </div>

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
