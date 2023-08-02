import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom";

function ProviderAvailabilityTable() {
  const dispatch = useDispatch();
  const providerid = useParams();
  const availabilityArray = useSelector((store) => store.availability);

  console.log("Provider availability from reducer:", availabilityArray);

  useEffect(() => {
    //dispatches request for specific provider availability using id from useParams
    console.log("Dispatching request for data of familyId:", providerid);
    dispatch({ type: "GET_PROVIDER_AVAILABILITY", payload: providerid });
  }, []);

  const formattedDate = (availableDate) => {
    return new Date(availableDate).toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric',
    });
  };
  
  return (
    <div className="container">
      <table border="1">
        <tr>
          <th>Date</th>
          <th>Infant</th>
          <th>Toddler</th>
          <th>Preschooler</th>
          <th>School Age</th>
        </tr>
        <tr></tr>
        {availabilityArray.map((entryRow) => (
          <tr key={entryRow.id}>
            <td>{formattedDate(entryRow.date)}</td>
            <td>{entryRow.infant}</td>
            <td>{entryRow.toddler}</td>
            <td>{entryRow.pre_k}</td>
            <td>{entryRow.schoolage}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default ProviderAvailabilityTable;
