import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function ProviderBookingsTable() {
  const dispatch = useDispatch();
  const provider_id = useSelector((store) => store.provider.id);

  useEffect(() => {
    provider_id &&
      console.log(
        "Dispatching request for bookings data of provider:",
        provider_id
      );
    dispatch({ type: "GET_PROVIDER_BOOKINGS", payload: provider_id });
  }, [provider_id]);

  const booking = useSelector((store) => store.booking);

  console.log(booking)
  return (
    <div className="container">
      <table border="1">
        <thead>
          <tr>
            <th>Service Date</th>
            <th>Family Name</th>
            <th>Child Name</th>
            <th>Age Category</th>
            <th>Drop-Off Contact</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
}

export default ProviderBookingsTable;
