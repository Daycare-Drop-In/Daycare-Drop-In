import React from "react";
import ListPageSearchBar from "../ListPageSearchBar/ListPageSearchBar";
import ProviderListCards from "../ListPageProviderCards/ListPageProviderCards";

function ListPage() {
  return (
    <div className="container">
      <h1>This is the Provider List Page</h1>

      {/* Here's the import for the search bar component */}
      <ListPageSearchBar />

      {/* This component will get mapped over to display the list of providers */}
      <ProviderListCards />
    </div>
  );
}

export default ListPage;
