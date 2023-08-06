import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { Container, Typography, Box, Grid, Divider, Button, IconButton, Collapse } from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

//COMPONENT IMPORTS
import LogOutButton from "../LogOutButton/LogOutButton";
import ProviderPhotoGallery from "../ProviderPhotoGallery/ProviderPhotoGallery";
import ProviderAvailabilityTable from "../ProviderAvailabilityTable/ProviderAvailabilityTable";
import ProviderBookingsTable from "../ProviderBookingsTable/ProviderBookingsTable";
import ProviderBookingProcess from "../ProviderBookingProcess/ProviderBookingProcess";
import ProviderEditDetails from "./ProviderEditDetails";
import ProviderAvailabilityForm from "../ProviderAvailabilityForm/ProviderAvailabilityForm";

function ProviderHomePage() {
  const dispatch = useDispatch();
   const user = useSelector((store) => store.user);
   const provider = useSelector((store)=> store.providerUser)

  useEffect(()=>{
    dispatch({ type: "GET_PROVIDER_USER", payload: user.id });
  }, [])
  // const { providerId } = useParams();
  // const userId = useSelector((store) => store.user.id);

  console.log("THESE ARE THE PROVIDER DETAILS:", provider);

  const [editMode, setEditMode] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const flip = {
		open: {
			transform: "rotate(180deg)",
		},
		close: {
			transform: "rotate(0)",
		},
  };

  return (
		<>
			<div className="provider-header">
				<div className="provider-business-name">
					<h2>{provider.business_name}</h2>
				</div>
				<div className="provider-name"></div>
			</div>
			<div className="provider-profile-photo">
				<img src={provider.provider_pic} height="200" />
			</div>



			<IconButton
      color="secondary">
				<IconButton 
        color="secondary"
        onClick={() => setExpanded(!expanded)}>
					{!expanded ? (
						<Typography variant="h6"> My profile info</Typography>
					) : (
						<Typography variant="h6"> Close </Typography>
					)}
					<ExpandMoreIcon sx={!expanded ? flip.close : flip.open} />
				</IconButton>
			</IconButton>



			<Collapse in={expanded} timeout="auto" unmountOnExit>
				<div className="edit-button">
					{!editMode ? (
						<Button
							sx={{ my: 1 }}
							variant="outlined"
							onClick={() => setEditMode(true)}
						>
							Edit Info
						</Button>
					) : (
						<Button
							sx={{ my: 1 }}
							variant="outlined"
							onClick={() => setEditMode(false)}
						>
							Cancel
						</Button>
					)}
				</div>

				{editMode ? (
					<div>
						<ProviderEditDetails provider={provider} />
					</div>
				) : (
					<>
						<div className="provider-contact-info">
							<p>
								<b>Provider Name:</b> {provider.first_name}{" "}
								{provider.last_name}
							</p>
							<p>
								<b>License:</b> {provider.license}{" "}
							</p>
							<p>
								<b>Address:</b> {provider.street_address}{" "}
								{provider.unit} {provider.city} {provider.state}
								{provider.zip}
							</p>
							<p>
								<b>Email:</b> {provider.email}
							</p>
						</div>

						<div className="provider-bio">
							<h2>About Me:</h2>
							<p>{provider.personal_description}</p>
						</div>

						<div className="daycare-details">
							<h2>About {provider.business_name}:</h2>
							<p>
								<b>Hours:</b> {provider.hours_start} {"- "}
								{provider.hours_end}
							</p>
							<p>
								<b>Meals provided? </b>
								{provider.meals ? "Yes" : "No"}{" "}
							</p>
							<p>{provider.business_description}</p>
						</div>
					</>
				)}
			</Collapse>

			<Divider my={1} />

			<Typography mt={2} variant="h6">
				Upcoming Drop-ins
			</Typography>
			<ProviderBookingsTable provider={provider} />

			<Divider my={1} />

			<Typography mt={2} variant="h6">
				Add availability
			</Typography>
			<ProviderAvailabilityForm provider={provider} />

			<Divider my={1} />

			<Typography mt={2} variant="h6">
				My availabilities
			</Typography>
			<ProviderAvailabilityTable provider={provider} />

			<Divider my={1} />

			<Typography mt={2} variant="h6">
				My photos
			</Typography>
			<ProviderPhotoGallery provider={provider} />
		</>
  );
}

// this allows us to use <App /> in index.js
export default ProviderHomePage;
