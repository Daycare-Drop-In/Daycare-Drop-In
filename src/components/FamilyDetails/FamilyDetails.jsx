import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { Card, CardContent, CardMedia, CardActionArea, IconButton, Typography, Button, Container, Grid, Box, CardHeader, CardActions, TextField, Dialog, DialogContent, DialogTitle } from '@mui/material';


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
    const family = useSelector((store) => store.family);
    const rAdult = useSelector((store) => store.responsibleAdults);
    const allMyKids = useSelector((store) => store.children);

    // console.log('these are the children of this family', children);
    // console.log('THESE ARE THE FAMILY DETAILS:', family);
    // console.log('these are the responsibleAdults of this family:', rAdult);

    useEffect(() => {
        //dispatches request for family info based on familyId
        console.log("Dispatching request for data of familyId:", familyId);
        dispatch({ type: "GET_FAMILY", payload: familyId });
        dispatch({ type: "GET_CHILDREN", payload: familyId });
        dispatch({ type: "GET_ADULTS", payload: familyId });
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
        <>
            <div className="family-home-page-header">
                <center>
                    <h1>{family[0].family_name} Family</h1>
                </center>
            </div>
            <Grid container columns={{ xs: 12 }} spacing={1}>
                <Grid item
                    xs={12}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                    <img
                        src={family[0].photo_url}
                        style={{ width: "80%", height: "auto" }}
                        alt="Family Photo"
                    />
                </Grid>
                <Grid item
                    xs={12}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center"
                    }}
                >
                    <Typography
                        variant="p"
                        sx={tF}
                    >
                        Primary Address:
                    </Typography>
                    <Typography
                        variant="p"
                        sx={tF}
                    >
                        {family[0].street_address} {family[0].unit}
                    </Typography>
                    <Typography
                        variant="p"
                        sx={tF}
                    >
                        {family[0].city} {family[0].state} {family[0].zip}
                    </Typography>
                </Grid>
                <Grid item
                    xs={12}
                    textAlign="center"
                >
                    <h3>Responsible Adults</h3>
                </Grid>
                <Grid item
                    xs={12}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: "center",
                        justifyContent: 'center',
                    }}
                >
                    {rAdult.length === 0 ? (
                        <Typography
                            variant="p"
                        >No additional caretakers.</Typography>
                    ) :
                        rAdult?.map((adult) => (
                            <Card
                                key={adult.id}
                                sx={{ width: "75%", mb: 1.5 }} raised>
                                <CardContent>
                                    <Typography variant="h7" color="text.secondary"><b>{adult.first_name}</b></Typography>
                                    <CardMedia
                                        component="img"
                                        sx={{ objectFit: "contain", height: 80 }}
                                        image={adult.photo_url}
                                        alt={"profile picture"}
                                    />
                                </CardContent>
                            </Card>
                        ))
                    }
                </Grid>
                <Grid item
                    xs={12}
                    textAlign="center"
                >
                    <h3>Kids in this Family</h3>
                </Grid>
                <Grid item
                    xs={12}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: "center",
                        justifyContent: 'center',
                    }}
                >
                    {allMyKids.length === 0 ? (
                        <Typography
                            variant="p"
                        >No children added.</Typography>
                    ) :
                        allMyKids?.map((kid) => (
                            <Card
                                key={kid.id}
                                sx={{ width: "75%", mb: 1.5 }} raised>
                                <CardContent>
                                    <Typography variant="h7" color="text.secondary"><b>{kid.first_name}</b></Typography>
                                    <CardMedia
                                        component="img"
                                        sx={{ objectFit: "contain", height: 90 }}
                                        image={kid.photo_url}
                                        alt={"profile picture"}
                                    />
                                </CardContent>
                            </Card>
                        ))
                    }
                </Grid>
            </Grid>
        </>
    );
}

export default FamilyDetails;
