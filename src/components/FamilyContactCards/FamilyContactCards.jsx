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

function FamilyContactCards() {
	const dispatch = useDispatch();
    useEffect(()=>{
			dispatch({ type: "GET_ADULTS", payload: user.family_id});
    },[])
	const user = useSelector((store) => store.user);
    const rAdult = useSelector((store)=> store.responsibleAdults)

	const responsibleAdult = {
		family_id: user.family_id,
		first_name: "",
		last_name: "",
		phone_number: "",
		email: "",
		relationship_to_child: "",
		photo_url: "",
	};

	const [newAdult, setNewAdult] = useState(responsibleAdult);
	const [open, setOpen] = useState(false);

	const addNewAdult = () => {
		dispatch({ type: "POST_ADULT", payload: newAdult});
		setOpen(!open);
		setNewAdult(responsibleAdult);
		console.log("Submitting");
	};

	return (
		<Container
			maxWidth={"sm"}
			sx={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
			}}
		>
			{!open ? (
				<IconButton
					sx={{
						display: "flex",
						flexDirection: "row",

						mb: 0,
					}}
					onClick={() => setOpen(!open)}
				>
					<Typography variant="h5">Add an adult</Typography>
					<PersonAddAlt1Icon sx={{ fontSize: "3rem", ml: 3 }} />
				</IconButton>
			) : (
				<Card
					elevation={8}
					sx={{
						mb: 2,
						bgcolor: "#F2F2F2",
						color: "#4b00a1",
						borderRadius: 4,
					}}
				>
					<CardContent>
						<CardContent
							sx={{
								display: "flex",
								flexDirection: "row",
								justifyContent: "space-between",
								mb: -2,
							}}
						>
							<CardHeader
								title={"New responsible adult"}
								align={"center"}
							/>
							<IconButton
								size="large"
								onClick={() => setOpen(!open)}
							>
								<CloseOutlinedIcon />
							</IconButton>
						</CardContent>

						<Box
							component="form"
							onSubmit={addNewAdult}
							autoComplete="off"
						>
							<TextField
								placeholder="First Name"
								required
								name="first_name"
								sx={{ bgcolor: "white" }}
								type="text"
								margin="normal"
								fullWidth
								label="First Name"
								value={newAdult.first_name}
								onChange={(event) =>
									setNewAdult({
										...newAdult,
										first_name: event.target.value,
									})
								}
							/>
							<TextField
								placeholder="Last Name"
								required
								name="last_name"
								sx={{ bgcolor: "white" }}
								type="text"
								margin="normal"
								fullWidth
								label="Adult's Last Name"
								value={newAdult.last_name}
								onChange={(event) =>
									setNewAdult({
										...newAdult,
										last_name: event.target.value,
									})
								}
							/>
							<TextField
								placeholder="Phone Number"
								required
								name="phone_number"
								sx={{ bgcolor: "white" }}
								type="text"
								margin="normal"
								fullWidth
								label="Phone number"
								value={newAdult.phone_number}
								onChange={(event) =>
									setNewAdult({
										...newAdult,
										phone_number: event.target.value,
									})
								}
							/>
							<TextField
								placeholder="Email"
								required
								name="email"
								sx={{ bgcolor: "white" }}
								type="text"
								margin="normal"
								fullWidth
								label="email"
								value={newAdult.email}
								onChange={(event) =>
									setNewAdult({
										...newAdult,
										email: event.target.value,
									})
								}
							/>
							<TextField
								placeholder="Relationship"
								required
								name="relationship_to_child"
								sx={{ bgcolor: "white" }}
								type="text"
								margin="normal"
								fullWidth
								label="Relationship to child"
								value={newAdult.relationship_to_child}
								onChange={(event) =>
									setNewAdult({
										...newAdult,
										relationship_to_child:
											event.target.value,
									})
								}
							/>
							<Container
								sx={{
									display: "flex",
									flexDirection: "column",
									justifyContent: "space-evenly",
									width: "100%",
								}}
							>
								<Typography>Photo:</Typography>
								<TextField
									// placeholder="Photo"
									required
									fullWidth
									name="photo_url"
									sx={{ bgcolor: "white" }}
									type="url"
									margin="normal"
									// label="Picture"
									value={newAdult.photo_url}
									onChange={(event) =>
										setNewAdult({
											...newAdult,
											photo_url: event.target.value,
										})
									}
								/>
							</Container>

							<Button
								type="submit"
								sx={{ m: 2 }}
								variant="contained"
								size="large"
							>
								Save
							</Button>
						</Box>
					</CardContent>
				</Card>
			)}
            <Typography variant="h7" sx={{mb:1}}>
                Family name's responsible adults

            </Typography>
			{rAdult?.map((adult) => (
				<Card
                key={adult.id}
                sx={{ width: "100%", mb:1.5 }} raised>
					<Grid container spacing={1}>
						<Grid item>
							<CardMedia
								component="img"
								sx={{ objectFit: "contain", height: 80 }}
								image={adult.photo_url}
								alt={"profile picture"}
							/>
						</Grid>
					</Grid>
				</Card>
			))}
		</Container>
	);
	// <div className="container">
	//     <h2>Contact Card</h2>
	//     <p>This component will be mapped over to create contact cards
	//         for each 'Responsible Adult'.</p>
	//     <p>Included info: Name, contact info, misc info.</p>
	//     <p>The page owner should also be able to edit each card.</p>
	// </div>
}

export default FamilyContactCards;
