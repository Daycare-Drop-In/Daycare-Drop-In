import React from "react";
import AdminHomePage from "../AdminHomePage/AdminHomePage";
import ProviderHomePage from "../ProviderHomePage/ProviderHomePage";
import FamilyHomePage from "../FamilyHomePage/FamilyHomePage";

function UserHomePage() {
  return (
    <div className="container">
      {/* <AdminHomePage /> */}
      <FamilyHomePage />
      <ProviderHomePage />
    </div>
  );
}

export default UserHomePage;
