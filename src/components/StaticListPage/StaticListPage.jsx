import React from "react";
import StaticProviderCards from "../StaticListProviderCards/StaticProviderCards";

function StaticListView() {
  return (
    <div className="container">
      <h1>Static List View</h1>
      <p>
        This will be the static list of all the providers who have registered
        with the site
      </p>

      {/* This component will get mapped over in order to generate the list */}
      <StaticProviderCards />
    </div>
  );
}

export default StaticListView;
