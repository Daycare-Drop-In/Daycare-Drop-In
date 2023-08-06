import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { Divider, Card, CardContent, CardMedia, CardActionArea, IconButton, Typography, Button, Container, Grid, Box, CardHeader, CardActions, TextField, Dialog, DialogContent, DialogTitle } from '@mui/material';


//Component Imports
// import LogOutButton from "../LogOutButton/LogOutButton";
// import FamilyContactCards from "../FamilyContactCards/FamilyContactCards";
// import FamilyChildCards from "../FamilyChildCards/FamilyChildCards";
// import FamilyDropOffs from "../FamilyDropOffs/FamilyDropOffs";

function FamilyDetails() {
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);
    const children = useSelector((store => store.children));
    const familyId = useParams();
    const family = useSelector((store) => store.familyDetails);
    const rAdult = useSelector((store) => store.responsibleAdults);
    const allMyKids = useSelector((store) => store.children);

    // console.log('these are the children of this family', children);
    // console.log('THESE ARE THE FAMILY DETAILS:', family);
    // console.log('these are the responsibleAdults of this family:', rAdult);

    useEffect(() => {
        //dispatches request for family info based on familyId
        console.log("Dispatching request for data of familyId:", familyId.id);
        dispatch({ type: "GET_FAMILY_DETAILS", payload: familyId.id });
        dispatch({ type: "GET_CHILDREN", payload: familyId.id });
        dispatch({ type: "GET_ADULTS", payload: familyId.id });
    }, []);

    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        // Simulate an asynchronous API call to fetch book details
        setTimeout(() => {
            // Set isLoading to false once the data is fetched
            setIsLoading(false);
        }, 75);
    }, []); // Empty dependency array to run the effect only once

    if (isLoading) {
        // Render a loading state or a placeholder component
        return <div>Loading...</div>;
    }
    const tF = {
        marginBottom: 0,
        marginTop: 0,
        marginLeft: 5,
        textAlign: "left",
        fontSize: "1rem",
        fontWeight: "bold",
        color: "black",
    }

    return (
		<Container maxWidth="xs">
			<Typography align="center" variant="h5">
				{family.family_name} Family
			</Typography>

			<Grid container columns={{ xs: 12 }} spacing={1}>
				<Grid
					item
					xs={12}
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						mb: -4.5,
					}}
				>
					<img
						src={family.photo_url}
						style={{ width: "80%", height: "auto" }}
						alt="Family Photo"
					/>
				</Grid>
				<Grid
					item
					xs={12}
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						mb: -1,
					}}
				>
					<Box sx={tF}>
						<Typography sx={{ fontWeight: "bold" }}>
							Primary Address:
						</Typography>
						<Typography>
							{family.unit
								? `${family.street_address} ${family.unit}`
								: `${family.street_address}`}
						</Typography>
						<Typography>
							{`${family.city}, ${family.state} ${family.zip}`}
						</Typography>
					</Box>
					<Divider sx={{ my: 2 }} variant="middle" />

					{/* <Typography variant="p" sx={tF}>
						Primary Address:
					</Typography>
					<Typography variant="p" sx={tF}>
						{family.street_address} {family.unit}
					</Typography>
					<Typography variant="p" sx={tF}>
						{family.city} {family.state} {family.zip}
					</Typography> */}
				</Grid>
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
					<Typography mb={2} variant="h5">
						Responsible Adults
					</Typography>
					{rAdult.length === 0 ? (
						<Typography variant="p">
							No additional caretakers.
						</Typography>
					) : (
						rAdult?.map((adult) => (
							<Card
								key={adult.id}
								sx={{ width: "75%", mb: 1.5 }}
								raised
							>
								<CardContent>
									<Typography
										variant="h7"
										color="text.secondary"
									>
										<b>{adult.first_name}</b>
									</Typography>
									<CardMedia
										component="img"
										sx={{
											objectFit: "contain",
											height: 80,
										}}
										image={adult.photo_url}
										alt={"profile picture"}
									/>
								</CardContent>
							</Card>
						))
					)}
				</Grid>

				<Grid item xs={12} textAlign="center">
					<Divider sx={{ my: 2 }} variant="middle" />
					<Typography mb={1} variant="h5">
						Kids in this Family
					</Typography>
				</Grid>
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
					{allMyKids.length === 0 ? (
						<Typography variant="p">No children added.</Typography>
					) : (
						allMyKids?.map((kid) => (
							<Card
								key={kid.id}
								sx={{ width: "75%", mb: 1.5 }}
								raised
							>
								<CardContent>
									<Typography
										variant="h7"
										color="text.secondary"
									>
										<b>{kid.first_name}</b>
									</Typography>
									<CardMedia
										component="img"
										sx={{
											objectFit: "contain",
											height: 90,
										}}
										image={kid.photo_url}
										alt={"profile picture"}
									/>
								</CardContent>
							</Card>
						))
					)}
				</Grid>
			</Grid>
		</Container>
	);
}

export default FamilyDetails;
