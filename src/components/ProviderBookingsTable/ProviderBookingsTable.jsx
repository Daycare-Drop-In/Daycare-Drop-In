import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Container,
  TableContainer,
  TableBody,
  Table,
  TableRow,
  TableCell,
  TableHead,
  Paper,
} from "@mui/material";


function ProviderBookingsTable({ provider }) {
  const dispatch = useDispatch();
  const provider_id = provider.id

  // useEffect(() => {
  //   // provider_id &&
  //     console.log(
  //       "Dispatching request for bookings data of provider:",
  //       provider_id
  //     );
  //   dispatch({ type: "GET_PROVIDER_BOOKINGS", payload: provider_id });
  // }, []);

  const bookingsArray = useSelector((store) => store.bookings);
  console.log("HERE ARE THE BOOKINGSSSSSS:", bookingsArray);

  const calculateAge = (birthdate) => {
    // Convert birthdate string to a Date object
    const birthdateObj = new Date(birthdate);

    // Calculate the difference between current date and birthdate
    const currentDate = new Date();
    const exactAge = currentDate - birthdateObj;

    // Calculate years and months
    const ageInYears = Math.floor(exactAge / (365 * 24 * 60 * 60 * 1000));
    const ageInMonths = Math.floor(
      (exactAge % (365 * 24 * 60 * 60 * 1000)) / (30 * 24 * 60 * 60 * 1000)
    );

    // Format the result as a string
    const childAge = `${ageInYears} yrs ${ageInMonths} mos`;

    return childAge;
  };


  return (
    <>
      <Paper sx={{ height: "100%", overflow: "auto" }} elevation={6}>
        <TableContainer sx={{ maxHeight: "385px" }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Date</TableCell>
                <TableCell align="left">Child</TableCell>
                <TableCell align="left">Age</TableCell>
                <TableCell align="left">Family</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {bookingsArray?.map((booked) => (
                <TableRow
                  key={booked.id}
                  sx={{
                    "&:last-child td, &:last-child th": {
                      border: 0,
                    },
                  }}
                >
                  <TableCell>{booked.booked_day}</TableCell>
                  <TableCell>{booked.child_first_name}</TableCell>
                  <TableCell>{calculateAge(booked.child_age)}</TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      color="secondary"
                      sx={{ fontSize: ".75em", mr: 0 }}
                      component={Link}
                      to={`/details/family/${booking.family_id}`}
                    >
                      {booked.fam_account_name}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
    // <div className="container">
    //   <table border="1">
    //     <thead>
    //       <tr>
    //         <th>Service Date</th>
    //         <th>Family Name</th>
    //         <th>Child Name</th>
    //         <th>Age</th>
    //         <th>Drop-Off/Pickup</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {bookingsArray?.map((booking) => (
    //         <tr key={booking.booking_id}>
    //           <td>{booking.booked_day}</td>
    //           <td>{booking.fam_account_name}</td>
    //           <td>{booking.child_first_name}</td>
    //           <td>{calculateAge(booking.child_age)}</td>
    //           <td>
    //             {booking.adult_first_name} ({booking.adult_relationship})
    //           </td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </div>
  );
}

export default ProviderBookingsTable;
