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
    const rowItem = {
		p: 1,
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-between",
        align: 'center'

	};
	return (
		<div className="container">
			<Card
				sx={{
					width: "100%",
					mb: 1.5,
					p: 1,
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					borderRadius: 4,
				}}
				raised
			>
				<CardContent sx={{display:'flex', justifyContent:'center' }}>
					<Typography variant="h5" align="center">
						{choice.biz_name}
					</Typography>
				</CardContent>
				<CardContent sx={{ width: "80%", mb: 1, display:'flex', flexDirection:'column', justifyContent:'center' }}>
					<Grid container spacing={1} sx={{ mb: 2 }}>
						<Grid item sx={{ ml: 4, p:.75 }}>
							<CardMedia
								component="img"
								sx={{ objectFit: "contain", height: 80 }}
								image={choice.provider_photo}
								alt={"profile picture"}
							/>
							<Typography variant="caption" align="center">
								{choice.provider_open} AM - {choice.provider_close}PM
							</Typography>
						</Grid>

						<Grid item sx={gItem}>
							<Typography
								variant="body"
								align="left"
								sx={{ mb: 1 }}
							>
								${choice.provider_fee}
							</Typography>
							<Typography
								variant="body"
								align="left"
								sx={{ mb: 1 }}
							>
								Meal: {choice.provider_meal ? "✅" : "❌"}
							</Typography>
							<Typography variant="body" align="left">
								{choice.provider_zip}
							</Typography>
						</Grid>
					</Grid>
					<Grid
						container
						spacing={1}
						sx={{ display: "flex", justifyContent: "center" }}
					>
						<Chip
							label={`Availability for ${choice.on_date}`}
							variant="outlined"
							size="small"
							sx={{ mb: 1 }}
						/>
					</Grid>

					<Grid container spacing={1}>
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
					</Grid>
				</CardContent>
			</Card>

			{/* <h2>Provider Name: {choice.biz_name}</h2>
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
			<p>Zip: {choice.provider_zip}</p> */}
			{/* <h2>Provider Cards</h2>
			<p>
				This will be the component that gets mapped over within the List
				Page to display clickable info Cards for each provider
			</p> */}
		</div>
	);
}

export default ListPageProviderCards;
