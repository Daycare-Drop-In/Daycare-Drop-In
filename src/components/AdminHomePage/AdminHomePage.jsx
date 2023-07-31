import React from "react";
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import AdminProviderTable from "../AdminProviderTable/AdminProviderTable";
import AdminFamilyTable from "../AdminFamilyTable/AdminFamilyTable";


function AdminHomePage() {

    const user = useSelector((store) => store.user);

  return (
    <div className="container">
      <h1>This is the Admin Home Page</h1>
      <h2>Welcome, {user.username}!</h2>
        {/* <p>Your ID is: {user.id}</p> */}
        <LogOutButton className="btn" />
      <AdminProviderTable />
      <AdminFamilyTable />
    </div>
  );
}

export default AdminHomePage;
