import React from "react";

function ProviderBookingsTable() {
  return (
    <div className="container">
      <h3>Provider Bookings Table</h3>
      <p>
        This will contain a table of the provider's upcoming bookings, organized
        by date.
      </p>
      <p>It should ONLY be visible to the provider (user id = provider id)</p>
      <p>
        Each listing should contain a clickable link to the relevant family home
        page.
      </p>
      <p>(And maybe directly to the child details?)</p>
    </div>
  );
}

export default ProviderBookingsTable;
