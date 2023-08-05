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
  const user = useSelector((store) => store.user);

  useEffect(() => {
		dispatch({ type: "GET_FAMILY_BOOKINGS", payload: user.family_id });

  }, []);

  const bookingsArray = useSelector((store) => store.bookings);
  console.log("HERE ARE THE BOOKINGSSSSSS:", bookingsArray);

  const headWide = {
		width: ".6",
		pr: 1.5,
		backgroundColor: "#390854",
		color: "white",
  };
  const headLeft = { backgroundColor: "#390854", color: "white", width: ".2" };
  const headCenter = {
		width: ".4",
		pl: 3.20,
		backgroundColor: "#390854",
		color: "white",
  };

  const wideRow ={ pl:0, pr:.9}
  const leftRow ={p:0, fontSize:'.5em'}
  const rightRow ={pr:0.75, mx:0 }


  return (
		<Paper sx={{ height: "100%", overflow: "auto" }} elevation={6}>
			<TableContainer sx={{ maxHeight: "385px" }}>
				<Table stickyHeader aria-label="sticky table">
					<TableHead>
						<TableRow key="headRow">
							<TableCell sx={headLeft} align="left">
								Child
							</TableCell>
							<TableCell sx={headCenter} align="left">
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
									// component="th"
									// scope="row"
									sx={{ leftRow }}
								>
									{booked.child_first_name}
								</TableCell>

								<TableCell
									sx={{ fontSize: ".8em", p: 0 }}
									align="center"
								>
									{booked.booked_day}
								</TableCell>

								<TableCell align="right" sx={wideRow}>
									<Button
										variant="outlined"
										color="secondary"
										sx={{
											borderColor: "#390854",
											fontSize: ".51em",
											mr: 0,
											p: 0.55,
											color:'#390854'
										}}
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
