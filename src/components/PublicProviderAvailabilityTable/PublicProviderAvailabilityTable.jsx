import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom";

function ProviderAvailabilityTable() {
  const dispatch = useDispatch();
  const provider_id = useParams();
  const availabilityArray = useSelector((store) => store.availability);

  console.log("Provider availability from reducer:", availabilityArray);

  
/* Notes for routing from public availability table to booking process:
- each child td != 0 needs to render a booking button
- booking button should collect the following information in a 'start booking' function and pass it to the booking process:
    - entryRow.id (=== availability.id)
    - entryRow.[age category] (=== number of available spots for that age category)
    - user.id (needed in order to get the user's associated family id, child ids, responsible adult ids)
*/

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
            <td>{entryRow.date}</td>
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
