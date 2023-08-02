import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom/cjs/react-router-dom";

function PublicProviderAvailabilityRow({ entryRow }) {

    const dispatch = useDispatch();
    const history = useHistory();
    const providerId = useParams();

    console.log('in PublicProviderAvailabilityRow and providerId is:', providerId.id);
    // console.log('in PublicProviderAvailabilityRow and entryRow is:', entryRow);
    // console.log('in PublicProviderAvailabilityRow and entryRow.infant is:', entryRow.infant);

    // formats dates for table appearance
    const formattedDate = (availableDate) => {
        return new Date(availableDate).toLocaleDateString('en-US', {
            month: '2-digit',
            day: '2-digit',
            year: 'numeric',
        });
    };

    const startBooking = (entryRowId) => {
      console.log('in startBooking function in ProviderAvailabilityTable, and providerId and entryRow.id are:', providerId, entryRowId)
      history.push(`/booking/${providerId.id}/${entryRowId}`)
    }

    return (
        <>
            <tr
            onClick={startBooking(entryRow.id)}
            >
                <td>{formattedDate(entryRow.date)}</td>
                <td>{entryRow.infant}</td>
                <td>{entryRow.toddler}</td>
                <td>{entryRow.pre_k}</td>
                <td>{entryRow.schoolage}</td>
            </tr>
        </>
    )
}

export default PublicProviderAvailabilityRow;