import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function ProviderBookingsTable() {
  const dispatch = useDispatch();
  const provider_id = useSelector((store) => store.provider.id);

  useEffect(() => {
    console.log(
      "Dispatching request for bookings data of provider:",
      provider_id
    );
    dispatch({ type: "GET_PROVIDER_BOOKINGS", payload: provider_id });
  }, [provider_id]);

  return (
    <div className="container">
      <h3>Provider Bookings Table</h3>
    </div>
  );
}

export default ProviderBookingsTable;
