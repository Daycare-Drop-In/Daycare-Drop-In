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





function FamilyChildCards() {


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: "GET_CHILDREN", payload: user.family_id });
    }, [])
    const user = useSelector((store) => store.user);
    const allMyKids = useSelector((store) => store.children)



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
        dispatch({ type: "POST_CHILD", payload: newChild });
        setClicked(!clicked);
        setNewChild(myKid);
        console.log('adding new child');

    };

    const deleteKid = (childId) => {

        console.log('Clicked delete', childId);
        dispatch({type: "DELETE_CHILD", payload: {id: childId, familyId: user.family_id}})
    }

    console.log('NEW CHILD OBJECT', newChild);

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
                            {/* <TextField
                                placeholder="Potty  Trained"
                                name="potty trained"
                                sx={{ bgcolor: "white" }}
                                type="checkbox"
                                margin="normal"
                                fullWidth
                                label={"Potty Trained"}
                                value={newChild.potty_trained}
                                onClick={(event) =>
                                    setNewChild({
                                        ...newChild,
                                        potty_trained: true,
                                    })
                                }
                            /> */}

                            {/* <FormControlLabel 
                             control={<Checkbox />  }label="Potty Trained"
                             />    */}


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
                                            checked={newChild.potty_trained}
                                            onClick={(event) =>
                                                setNewChild({
                                                    ...newChild,
                                                    potty_trained:event.target.clicked
                                                })
                                            }
                                            />
                                        }
                                        />
                                    </FormGroup>
                                </FormControl>    

                                <Typography>Photo:</Typography>

                                <TextField
                                    required
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

                                <input type="file"  />
                                

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
            <Typography variant="h7" sx={{ mb: 1 }}>
                All My Children
            </Typography>
            <Grid container spacing={1}>
                <Grid item
                    xs={12}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    {allMyKids?.map((kid) => (
                        <Card
                            key={kid.id}
                            sx={{
                                width: "50%",
                                objectFit: "contain",
                                mb: 1.5,
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: 4
                            }}
                            raised>


                            <CardContent
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                mb: 2,
                                mt: 3,
                                ml: 2
                            }}
                            >
                                <Typography variant="h6" color="text.secondary" textAlign="center"><b>{kid.first_name}</b></Typography>
                                <CardMedia
                                    component="img"
                                    sx={{ objectFit: "contain", height: 80 }}
                                    image={kid.photo_url}
                                    alt={"profile picture"}
                                />
                                <Typography variant="h8">Potty Trained: {JSON.stringify(kid.potty_trained)}</Typography>
                            </CardContent>
                            <Button onClick={(event) => deleteKid(kid.id, event.preventDefault())}
                            sx={{color: "red"}}
                            >Delete</Button>



                        </Card>

                    ))}
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
    )
}




export default FamilyChildCards;



