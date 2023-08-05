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

function AddAdultForm () {

    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);

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
        console.log('this is new adult', newAdult);
		dispatch({ type: "POST_ADULT", payload: newAdult });
		setOpen(!open);
		setNewAdult(responsibleAdult);
		console.log("Submitting");
	};

    function fileSelected(event) {
		console.log("IN FILE SELECTED");
		const selectedFile = event.target.files[0];
		console.log("selectedFile", selectedFile);
		dispatch({
			type: "AWS_ADULT_PHOTO",
			payload: {
				file: selectedFile,
			},
		});
	}



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
					<Typography color={'#409a0f'} variant="h5">Add an adult</Typography>
					<PersonAddAlt1Icon
						sx={{
							fontSize: "2rem",
							ml: 1,
							my: 3,
							color: "#409a0f",
						}}
					/>
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
								InputLabelProps={{ shrink: true }}
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
								InputLabelProps={{ shrink: true }}
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
								InputLabelProps={{ shrink: true }}
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
								InputLabelProps={{ shrink: true }}
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
								InputLabelProps={{ shrink: true }}
							/>

							<TextField
								// placeholder="Photo"
								required
								fullWidth
								name="photo_url"
								sx={{ bgcolor: "white" }}
								type="file"
								margin="normal"
								label="Picture"
								onChange={fileSelected}
								InputLabelProps={{ shrink: true }}
							/>

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
		</Container>
	);
}

export default AddAdultForm