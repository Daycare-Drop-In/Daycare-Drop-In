import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import {
	TableContainer,
	TableBody,
	Table,
	TableRow,
	TableCell,
    TableHead,
    Button,
    Paper
} from "@mui/material";

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

  const headWide = {
    width: ".5",
    pr: 1.5,
    backgroundColor: "purple",
    color: "white",
  };
  const headLeft = {pl:0.75, backgroundColor:'purple', color:'white' }
  const headRight = { backgroundColor: "purple", color: "white" };
  
  const wideRow ={ width: ".5", pr:1.5 }
  const leftRow ={pl:0.75}
  const rightRow ={pr:0.75 }


  return (
    <Paper sx={{ height: '100%', overflow: "auto" }} elevation={6}>
		<TableContainer sx={{ maxHeight: "385px" }}>
			<Table stickyHeader aria-label="sticky table">
				<TableHead>
					<TableRow>
						<TableCell sx={headLeft}>Child</TableCell>
						<TableCell sx={headRight} align="right">
							Date
						</TableCell>
						<TableCell sx={headWide} align="right">
							Provider
						</TableCell>
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
							<TableCell
								component="th"
								scope="row"
								sx={leftRow}
							>
								{booked.child_first_name}
							</TableCell>
							<TableCell align="right" sx={rightRow}>
								{booked.service_date}
							</TableCell>
							<TableCell align="right" sx={wideRow}>
								<Button
									variant="outlined"
									color="secondary"
									sx={{ fontSize: ".75em", mr: 0 }}
									component={Link}
									to={`/details/provider/${booked.provider_id}`}
								>
									{booked.biz_name}
								</Button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	</Paper>
    // <div className="container">
    //   <h2>Upcoming Dropoffs</h2>
    //   <table border="1">
    //     <thead>
    //       <tr>
    //         <th>Service Date</th>
    //         <th>Daycare Name</th>
    //         <th>Child Name</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {bookingsArray?.map((booking) => (
    //         <tr key={booking.booking_id}>
    //           <td>{booking.booked_day}</td>
    //           <td>{booking.biz_name}</td>
    //           <td>{booking.child_first_name}</td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </div>
  );
}

export default FamilyDropOffs;
