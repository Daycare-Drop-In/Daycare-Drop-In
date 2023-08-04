import React, { useEffect, useState } from "react";
import {
	Box,
	Card,
	CardHeader,
	CardContent,
	CardActions,
	CardMedia,
	Button,
	Container,
	Grid,
	TextField,
	Typography,
	Dialog,
	DialogContent,
	DialogTitle,
	IconButton,
	CardActionArea,
} from "@mui/material";

import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import { useDispatch, useSelector } from "react-redux";

function FamilyContactCards({adult}) {
	const dispatch = useDispatch();
	const user = useSelector((store) => store.user);

	
	

	const deleteAdult = (adultId) => {

		console.log('Clicked delete', adultId);
		dispatch({ type: "DELETE_ADULT", payload: { id: adultId, familyId: user.family_id } })
	}

	return (
		
			<Container>
				
			<Grid container spacing={1}>
				
				<Grid item
				xs={12}
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
				}}
				>
					
					{/* {rAdult?.map((adult) => ( */}

						<Card
							
							sx={{
								width: "50%",
								objectFit: "contain",
								mb: 1.5,
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
								borderRadius: 4
							}} raised>


							<CardContent
								sx={{
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
									mb: 2,
									mt: 3,
									ml: 2
								}}
							>
								<Typography variant="h6" color="text.secondary" textAlign="center"
									sx={{ mt: -4 }}
								><b>{adult.first_name} {adult.last_name}</b>
								</Typography>

								<CardMedia
									component="img"
									sx={{ objectFit: "contain", height: 80 }}
									image={adult.photo_url}
									alt={"profile picture"}
								/>
								<Typography variant="h8" color="text.secondary"><b>Relation:</b> {adult.relationship_to_child}</Typography>
								<Typography variant="h8" color="text.secondary"><b>Email:</b> {adult.email}</Typography>
							</CardContent>
							<Button onClick={() => deleteAdult(adult.id)}
							sx={{color: "red"}}
							>Delete
							</Button>


						</Card>

					
				</Grid>
			</Grid>
		</Container>
	);
	
}

export default FamilyContactCards;
