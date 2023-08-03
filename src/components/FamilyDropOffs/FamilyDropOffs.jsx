import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function FamilyDropOffs() {
  const dispatch = useDispatch();
  const family_id = useSelector((store) => store.family.id);

  useEffect(() => {
    family_id &&
      console.log(
        "Dispatching request for bookings data of family:",
        family_id
      );
    dispatch({ type: "GET_FAMILY_BOOKINGS", payload: family_id });
  }, [family_id]);

  const bookingsArray = useSelector((store) => store.bookings);
  console.log("HERE ARE THE BOOKINGSSSSSS:", bookingsArray);

  return (
    <div className="container">
      <h2>Upcoming Dropoffs</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Service Date</th>
            <th>Daycare Name</th>
            <th>Child Name</th>
          </tr>
        </thead>
        <tbody>
          {bookingsArray?.map((booking) => (
            <tr key={booking.booking_id}>
              <td>{booking.booked_day}</td>
              <td>{booking.biz_name}</td>
              <td>{booking.child_first_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FamilyDropOffs;
