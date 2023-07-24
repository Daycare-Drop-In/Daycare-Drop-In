import React from "react";
import AdminProviderTable from "../AdminProviderTable/AdminProviderTable";
import AdminFamilyTable from "../AdminFamilyTable/AdminFamilyTable";
function AdminHomePage() {
  return (
    <div className="container">
      <h1>AdminHomePage</h1>
      <AdminProviderTable />
      <AdminFamilyTable />
    </div>
  );
}

export default AdminHomePage;
