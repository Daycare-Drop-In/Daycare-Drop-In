import React, { useEffect } from "react";
import { Card, CardContent, CardMedia, CardActionArea, IconButton, Typography, Button, Container, Grid, Box, CardHeader, CardActions, TextField, Dialog, DialogContent, DialogTitle } from '@mui/material';
// import EditIcon from "@mui/icons-material/Edit";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import ChildCareIcon from '@mui/icons-material/ChildCare';
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormData from "form-data"




function FamilyChildCards({kid}) {


    const dispatch = useDispatch();




    const user = useSelector((store) => store.user);


    const updatedMyKid = {
        childId: kid.id || "",
        first_name: kid.first_name || "",
        last_name: kid.last_name || "",
        allergies: kid.allergies || "",
        potty_trained: kid.potty_trained,
        family_id: kid.family_id

    }



    const [updatedChild, setUpdatedChild] = useState(updatedMyKid)




    const [edit, setEdit] = useState(false)



    const editChild = (event) => {
        event.preventDefault();
        console.log(updatedChild);
        dispatch({type: "UPDATE_CHILD", payload: updatedChild});
        setEdit(!edit);

        setUpdatedChild(updatedMyKid);
        console.log('updated child is', updatedChild);
    }

    const makeUpdatedChild = (kid) =>{
        console.log('MAKE UPDATED CHILD', kid);
        setUpdatedChild({...updatedChild, childId: kid.id})
        setUpdatedChild({...updatedChild, first_name: kid.first_name})
        setUpdatedChild({...updatedChild, last_name: kid.last_name})
        setUpdatedChild({...updatedChild, allergies: kid.allergies})
        setUpdatedChild({...updatedChild, potty_trained: kid.potty_trained})
        setUpdatedChild({...updatedChild, family_id: kid.family_id})







    }

    const deleteKid = (childId) => {

        console.log('Clicked delete', childId);
        dispatch({type: "DELETE_CHILD", payload: {id: childId, familyId: user.family_id}})
    }

    // console.log('NEW CHILD OBJECT', newChild);
    console.log('updated CHILD', updatedChild);
    return (
		<Container
			maxWidth={"sm"}
			sx={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
			}}
		>
			{/* <Typography variant="h7" sx={{ mb: 1 }}>
                All My Children
            </Typography> */}
			<Grid container spacing={1}>
				<Grid
					item
					xs={12}
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					{/* {!edit ? (

                    ) : */}

					<Card
						sx={{
							width: "100%",
							objectFit: "contain",
							mb: 1.5,
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
							borderRadius: 4,
						}}
						raised
						key={kid.id}
					>
						<CardContent
							sx={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								mb: 2,
								mt: 3,
								ml: 2,
							}}
						>
							<Typography
								variant="h6"
								color="text.secondary"
								textAlign="center"
							>
								<b>
									{kid.first_name} {kid.last_name}
								</b>
							</Typography>
							<CardMedia
								component="img"
								sx={{ objectFit: "contain", height: 80 }}
								image={kid.photo_url}
								alt={"profile picture"}
							/>
							<Typography variant="h8" color="text.secondary">
								<b>Allergies:</b> {kid.allergies}
							</Typography>
							<Typography variant="h8" color="text.secondary">
								<b>Potty Trained:</b>{" "}
								{JSON.stringify(kid.potty_trained)}
							</Typography>
						</CardContent>
						<Button
							onClick={() => deleteKid(kid.id)}
							sx={{ color: "red" }}
						>
							Delete
						</Button>

						{!edit ? (
							<Button
								onClick={() => {
									makeUpdatedChild(kid), setEdit(!edit);
								}}
							>
								Edit
							</Button>
						) : (
							<Box
								component="form"
								onSubmit={editChild}
								autoComplete="off"
							>
								<IconButton
									size="large"
									onClick={() => setEdit(!edit)}
								>
									<CloseOutlinedIcon />
								</IconButton>
								<TextField
									autoComplete="off"
									placeholder="First Name"
									name="first_name"
									sx={{ bgcolor: "white" }}
									type="text"
									margin="normal"
									fullWidth
									label="First Name"
									value={updatedChild.first_name}
									onChange={(event) =>
										setUpdatedChild({
											...updatedChild,
											first_name: event.target.value,
										})
									}
								/>
								<TextField
									autoComplete="off"
									placeholder="Last Name"
									name="last name"
									sx={{ bgcolor: "white" }}
									type="text"
									margin="normal"
									fullWidth
									label="last name"
									value={updatedChild.last_name}
									onChange={(event) =>
										setUpdatedChild({
											...updatedChild,
											last_name: event.target.value,
										})
									}
								/>

								{/* <TextField
                                placeholder="YYYY/MM/DD"
                                required
                                name="birthdate"
                                sx={{ bgcolor: "white" }}
                                type="date"
                                margin="normal"
                                fullWidth
                                label=""
                                value={kid.birthdate}
                                onChange={(event) =>
                                    setUpdatedChild({
                                        ...updatedChild,
                                        birthdate: event.target.value,
                                    })
                                }
                            /> */}
								<TextField
									autoComplete="off"
									placeholder="allergies"
									name="allergies"
									sx={{ bgcolor: "white" }}
									type="text"
									margin="normal"
									fullWidth
									label="allergies"
									value={updatedChild.allergies}
									onChange={(event) =>
										setUpdatedChild({
											...updatedChild,
											allergies: event.target.value,
										})
									}
								/>
								<FormControl>
									<FormGroup>
										<FormControlLabel
											label="Potty Trained"
											labelPlacement="end"
											control={
												<Checkbox
													checked={
														updatedChild.potty_trained
													}
													onClick={() =>
														setUpdatedChild({
															...updatedChild,
															potty_trained: true,
														})
													}
												/>
											}
										/>
									</FormGroup>
								</FormControl>
								<Button
									type="submit"
									sx={{ m: 2 }}
									variant="contained"
									size="large"
								>
									Save
								</Button>
							</Box>
						)}
					</Card>
				</Grid>
			</Grid>
		</Container>
		// <div className="container">
		//     <h2>Child Card</h2>
		//     <p>This component will be mapped over to create child cards
		//         for each child within the family</p>
		//     <p>Included info: name, age, potty training status, allergies, misc info.</p>
		//     <p>The page owner should also be able to edit each card. </p>
		// </div>
	);
}




export default FamilyChildCards;



