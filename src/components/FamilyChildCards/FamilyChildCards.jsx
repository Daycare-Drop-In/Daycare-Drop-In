import React from 'react';
import { Card, CardContent, CardMedia, CardActionArea, IconButton, Typography, Button, Container, Grid, Box, CardHeader, CardActions, TextField, Dialog, DialogContent, DialogTitle } from '@mui/material'
// import EditIcon from "@mui/icons-material/Edit";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import ChildCareIcon from '@mui/icons-material/ChildCare';
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Checkbox from '@mui/material/Checkbox';



function FamilyChildCards() {
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();

    const myKid = {
        family_id: user.family_id,
        firstName: "",
        lastName: "",
        birthdate: "",
        allergies: "",
        pottyTrained: false,
        photo_url: "",
    };

    const [newChild, setNewChild] = useState(myKid);
    const [clicked, setClicked] = useState(false);

    const registerChild = () => {
        dispatch({ type: "POST_CHILD", payload: myKid });
        setClicked(!clicked);
        setNewChild(myKid);
        console.log('adding new child');

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
            {!clicked ? (
                <IconButton
                    sx={{
                        display: "flex",
                        flexDirection: "row",

                        mb: -2,
                    }}
                    onClick={() => setClicked(!clicked)}
                >
                    <Typography variant="h4">Add a child</Typography>
                    <ChildCareIcon sx={{ fontSize: "3rem", ml: 3 }} />


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

                                mb: -2
                            }}
                        >
                            <CardHeader
                                title={"Add a new child"}
                                align={"center"}
                            />
                            <IconButton
                                size="large"
                                onClick={() => setClicked(!clicked)}
                            >
                                <CloseOutlinedIcon />
                            </IconButton>
                        </CardContent>
                        <Box
                            component="form"
                            onSubmit={registerChild}
                            autoComplete='off'
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
                                value={newChild.firstName}
                                onChange={(event) =>
                                    setNewChild({
                                        ...newChild,
                                        firstName: event.target.value,
                                    })
                                }
                            />

                            <TextField
                                placeholder="Last Name"
                                required
                                name="last name"
                                sx={{ bgcolor: "white" }}
                                type="text"
                                margin="normal"
                                fullWidth
                                label="Last Name"
                                value={newChild.lastName}
                                onChange={(event) =>
                                    setNewChild({
                                        ...newChild,
                                        lastName: event.target.value,
                                    })
                                }
                            />

                            <TextField
                                placeholder="YYYY/MM/DD"
                                required
                                name="birthdate"
                                sx={{ bgcolor: "white" }}
                                type="text"
                                margin="normal"
                                fullWidth
                                label=""
                                value={newChild.birthdate}
                                onChange={(event) =>
                                    setNewChild({
                                        ...newChild,
                                        birthdate: event.target.value,
                                    })
                                }
                            />
                            <TextField
                                placeholder="Allergies"
                                required
                                name="allergies"
                                sx={{ bgcolor: "white" }}
                                type="text"
                                margin="normal"
                                fullWidth
                                label="Allergies"
                                value={newChild.allergies}
                                onChange={(event) =>
                                    setNewChild({
                                        ...newChild,
                                        allergies: event.target.value,
                                    })
                                }
                                />
                                <TextField
                                placeholder="Potty  Trained"
                                required
                                name="potty trained"
                                sx={{ bgcolor: "white" }}
                                type="text"
                                margin="normal"
                                fullWidth
                                label="Potty-Trained"
                                value={newChild.pottyTrained}
                                onChange={(event) =>
                                    setNewChild({
                                        ...newChild,
                                        pottyTrained: event.target.value,
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



