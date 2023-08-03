import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom/cjs/react-router-dom";
import PublicProviderAvailabilityRow from "../PublicProviderAvailabilityRow/PublicProviderAvailabilityRow";

function PublicProviderAvailabilityTable() {

  const dispatch = useDispatch();
  const history = useHistory();
  const providerId = useParams();
  const availabilityArray = useSelector((store) => store.availability);

  // console.log("Provider availability from reducer:", availabilityArray);
  // console.log("providerId from useParams:", providerId);



  useEffect(() => {
    //dispatches request for specific provider availability using id from useParams
    console.log("Dispatching request for data of familyId:", providerId);
    dispatch({ type: "GET_PROVIDER_AVAILABILITY", payload: providerId });
  }, []);

  // const formattedDate = (availableDate) => {
  //   return new Date(availableDate).toLocaleDateString('en-US', {
  //     month: '2-digit',
  //     day: '2-digit',
  //     year: 'numeric',
  //   });
  // };

  /* Notes for routing from public availability table to booking process:
  - each child td != 0 needs to render a booking button
  - booking button should collect the following information in a 'start booking' function and pass it to the booking process:
      - entryRow.id (=== availability.id)
      - entryRow.[age category] (=== number of available spots for that age category)
      - user.id (needed in order to get the user's associated family id, child ids, responsible adult ids)
  */

  // const startBooking = (entryRowId) => {
  //   console.log('in startBooking function in ProviderAvailabilityTable, and providerId and entryRow.id are:', providerId, entryRowId)
  //   history.push(`/booking/${providerId}/${entryRowId}`)
  // }

  return (
    <div className="container">
      <table border="1">
        <tr>
          <th>Date</th>
          <th>Infant</th>
          <th>Toddler</th>  
          <th>Pre-K</th>
          <th>School-Age</th>
        </tr>
        <tbody>
        {availabilityArray.map((entryRow) => (
          <PublicProviderAvailabilityRow key={entryRow.id} entryRow={entryRow}/>
        ))}
        </tbody>
      </table>
    </div>
  );
}

export default PublicProviderAvailabilityTable;
