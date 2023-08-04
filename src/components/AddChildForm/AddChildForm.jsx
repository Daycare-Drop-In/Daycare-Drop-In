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

function addChildForm() {
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);

    const myKid = {

        family_id: user.family_id,
        first_name: "",
        last_name: "",
        birthdate: "",
        allergies: "",
        photo_url: "",
        potty_trained: false

    };

    const [newChild, setNewChild] = useState(myKid);
    const [clicked, setClicked] = useState(false);




    const registerChild = (event) => {
        event.preventDefault();
        console.log('birthday', newChild.birthdate);
        console.log('this is new child', newChild);
        dispatch({ type: "POST_CHILD", payload: newChild });
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
                            encType="multipart/form-data"
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
                                value={newChild.first_name}
                                onChange={(event) =>
                                    setNewChild({
                                        ...newChild,
                                        first_name: event.target.value,
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
                                value={newChild.last_name}
                                onChange={(event) =>
                                    setNewChild({
                                        ...newChild,
                                        last_name: event.target.value,
                                    })
                                }
                            />

                            <TextField
                                placeholder="YYYY/MM/DD"
                                required
                                name="birthdate"
                                sx={{ bgcolor: "white" }}
                                type="date"
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

                            <Container
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-evenly",
                                    width: "100%",
                                }}
                            >
                                <FormControl>
                                    <FormGroup>
                                        <FormControlLabel
                                            label="Potty Trained"
                                            labelPlacement="end"
                                            control={
                                                <Checkbox
                                                    // checked={newChild.potty_trained}
                                                    onClick={() =>
                                                        setNewChild({
                                                            ...newChild,
                                                            potty_trained: true
                                                        })
                                                    }
                                                />
                                            }
                                        />
                                    </FormGroup>
                                </FormControl>

                                <Typography>Photo:</Typography>

                                <TextField

                                    fullWidth
                                    name="photo_url"
                                    sx={{ bgcolor: "white" }}
                                    type="url"
                                    margin="normal"
                                    // label="Picture"
                                    value={newChild.photo_url}
                                    onChange={(event) =>
                                        setNewChild({
                                            ...newChild,
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




        </Container>
    )
}

export default addChildForm