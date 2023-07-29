import React, { useEffect, useState } from "react";
import {
	Box,
	Card,
	CardHeader,
	CardContent,
	CardActions,
	CardMedia,
    Chip,
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

import { useDispatch, useSelector } from "react-redux";
function ListPageProviderCards({ choice }) {
	const dispatch=useDispatch(	)
    const gItem = {
		mx: 0.5,
		p: 1.5,
		mb: .75,
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		border: "1px solid transparent",
		borderRadius: 4,
		bgcolor: "#eee6f5",
		width: "6.5em",
	};
	const bioItem = {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		ml:-1.5
	};
    const availItem = {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		ml:-2

	};
    const availItem2= {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",

	};
	const notChip = {
		mb: .5,
		border: "1px solid purple",
		borderRadius: 8,
		width:'100%',
		mx:2,
		display:'flex',
		flexDirection:'column'

	};
	const visitProvider = (id) =>{
		console.log('PROVIDER ID', id);
		// dispatch({type:'VISIT_PROVIDER', payload:choice.provider_id})
	}
	return (
		<Container maxWidth="xs">
			<Card
				sx={{
					width: "107%",
					mb: 1.5,
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					borderRadius: 4,
					ml: -1,
				}}
				raised
			>
				<CardContent
					sx={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-evenly",
						mb: -3,
						mt: -1,
					}}
				>
					<CardContent
						sx={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "flex-start",
							mb: -3,
							ml: -2.5,
						}}
					>
						<Typography variant="h7" align="left">
							{choice.biz_name}
						</Typography>
						<Typography
							variant="caption"
							align="left"
							sx={{ mt: 0.25 }}
						>
							{choice.provider_open} - {choice.provider_close}
						</Typography>
						<Typography
							variant="body2"
							align="left"
							color="purple"
							sx={{ mb: 0.25 }}
						>
							{choice.provider_city}, {choice.provider_zip}
						</Typography>
					</CardContent>
					<CardContent sx={{ mx: -3 }}>
						<Chip
							label={`${choice.on_date}`}
							variant="outlined"
							size="small"
							sx={{ mb: 1, borderColor: "green" }}
						/>
					</CardContent>
				</CardContent>
				<CardContent
					sx={{
						width: "100%",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
					}}
				>
					<Grid container spacing={0.5} sx={{ mb: 2, width: "100%" }}>
						<Grid item xs={3} sx={{ ml: -2 }}>
							<CardMedia
								component="img"
								sx={{ objectFit: "contain", height: 55 }}
								image={choice.provider_photo}
								alt={"profile picture"}
							/>
						</Grid>

						<Grid item xs={2} sx={bioItem}>
							<Typography
								variant="caption"
								align="left"
								sx={{ mb: 1 }}
							>
								${choice.provider_fee}/day
							</Typography>
							<Typography
								variant="caption"
								align="left"
								sx={{ mb: 1 }}
							>
								Meal: {choice.provider_meal ? "✅" : "❌"}
							</Typography>
						</Grid>

						<Grid item xs={3} sx={availItem}>
							<Box sx={notChip}>
								<Typography variant="caption" align="center">
									Infant: {choice.infant}
								</Typography>
							</Box>
							<Box sx={notChip}>
								<Typography variant="caption" align="center">
									Toddler: {choice.toddler}
								</Typography>
							</Box>
						</Grid>

						<Grid item xs={4} sx={availItem2}>
							<Box sx={notChip}>
								<Typography variant="caption" align="center">
									Pre-K: {choice.pre_k}
								</Typography>
							</Box>
							<Box sx={notChip}>
								<Typography variant="caption" align="center">
									School Age: {choice.schoolage}
								</Typography>
							</Box>
						</Grid>
					</Grid>
				</CardContent>
				<Button
					sx={{ mx: 6, mb: 2.5, p: 1, mt: -1 }}
					variant="contained"
					onClick={() => visitProvider(choice.provider_id)}
				>
					See this provider's page
				</Button>
			</Card>
		</Container>
	);
}

export default ListPageProviderCards;
{
	/* <Grid container spacing={1}>
						<Grid item sx={rowItem}>
							<Grid item sx={gItem}>
								<Typography
									variant="body"
									align="center"
									sx={{ mb: 1 }}
								>
									{choice.infant}
								</Typography>
								<Typography variant="caption" align="center">
									Infant
								</Typography>
							</Grid>

							<Grid item sx={gItem}>
								<Typography
									variant="body"
									align="center"
									sx={{ mb: 1 }}
								>
									{choice.toddler}
								</Typography>
								<Typography variant="caption" align="center">
									Toddler
								</Typography>
							</Grid>
							<Grid item sx={gItem}>
								<Typography
									variant="body"
									align="center"
									sx={{ mb: 1 }}
								>
									{choice.pre_k}
								</Typography>
								<Typography variant="caption" align="center">
									Pre-K
								</Typography>
							</Grid>
							<Grid item sx={gItem}>
								<Typography
									variant="body"
									align="center"
									sx={{ mb: 1 }}
								>
									{choice.schoolage}
								</Typography>
								<Typography variant="caption" align="center">
									School age
								</Typography>
							</Grid>
						</Grid>
					</Grid> */
}
{
	/* <h2>Provider Name: {choice.biz_name}</h2>
			<p>Availabilty for: {choice.date}</p>
			<p>Age Groups</p>
			<p>Infant: {choice.infant}</p>
			<p>Toddler: {choice.toddler}</p>
			<p> Pre-K: {choice.pre_k}</p>
			<p> School age: {choice.schoolage}</p>
			<p>Meal: {choice.provider_meal}</p>
			<p> Opens: {choice.provider_open}</p>
			<p>Closes: {choice.provider_close}</p>
			<p>Address: {choice.provider_street}</p>
			<p> Unit # {choice.provider_unit}</p>
			<p>City: {choice.provider_city}</p>
			<p> State: {choice.provider_state}</p>
			<p>Zip: {choice.provider_zip}</p> */
}
{
	/* <h2>Provider Cards</h2>
			<p>
				This will be the component that gets mapped over within the List
				Page to display clickable info Cards for each provider
			</p> */
}