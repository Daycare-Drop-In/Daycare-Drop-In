import React from "react";
import { useSelector } from "react-redux";
import AdminHomePage from "../AdminHomePage/AdminHomePage";
import ProviderHomePage from "../ProviderHomePage/ProviderHomePage";
import FamilyHomePage from "../FamilyHomePage/FamilyHomePage";

function UserHomePage() {
  const user = useSelector((store) => store.user);
  const userType = user.user_type;

  console.log("Inside user home page for user: ", user);
  console.log("user type is:", userType);

  let homePage;

  if (userType === "admin") {
    homePage = <AdminHomePage />;
  } else if (userType === "family") {
    homePage = <FamilyHomePage />;
  } else if (userType === "provider") {
    homePage = <ProviderHomePage />;
  }
  return <div className="container">{homePage}</div>;


}

export default UserHomePage;

