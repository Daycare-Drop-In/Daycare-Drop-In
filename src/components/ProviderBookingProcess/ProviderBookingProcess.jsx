import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom/cjs/react-router-dom";
import { FormControl, Card, CardContent, CardMedia, CardActionArea, Form, IconButton, Typography, Button, Container, Grid, Box, CardHeader, CardActions, TextField, Dialog, DialogContent, DialogTitle } from '@mui/material';
import Stack from '@mui/material/Stack';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

function ProviderBookingProcess() {

        const dispatch = useDispatch();
        const { providerId, availabilityId, familyId } = useParams();
        const user = useSelector((store) => store.user);
        const booking = useSelector((store) => store.bookingProcess);
        const availability = useSelector((store) => store.availability);
        const children = useSelector((store) => store.children);
        const responsibleAdults = useSelector((store) => store.responsibleAdults);



        // console.log("in ProviderBookingProcess and providerId from useParams is providerId:", providerId);
        // console.log(" in ProviderBookingProcess and availabilityId from useParams is providerId:", availabilityId);
        console.log('in ProviderBookingProcess and booking from store is:', booking);
        // console.log('in ProviderBookingProcess and user.id from store is:', user.id);
        console.log('in ProviderBookingProcess and user from store is:', user);
        // console.log('in ProviderBookingProcess and user.family_id from store is:', user.family_id);
        console.log('in ProviderBookingProcess and availability from store is:', availability);
        console.log('in ProviderBookingProcess and children store is:', children);
        console.log('in ProviderBookingProcess and responsibleAdults store is:', responsibleAdults);



        const [childId, setChildId] = useState();
        const [adultId, setAdultId] = useState();
        const [agreed, setAgreed] = useState(true);

        const [age, setAge] = useState(['Infant', 'Toddler', 'Pre-K', 'School age']);

        const picked = {
                age: "",
                name: "",
        };
        const [userChoice, setUserChoice] = useState(picked);

        // const ageInDays = (ageInYears) => (ageInYears * 365);
        // const infantMaxAge = ageInDays(1);
        // const toddlerMaxAge = ageInDays(2);
        // const prekMaxAge = ageInDays(5);

        // const calculateDaysOld = (birthday) => {
        //         const now = new Date();
        //         const birthDate = new Date(birthday);
        //         const timeDifference = now.getTime() - birthDate.getTime();
        //         const daysOld = Math.floor(timeDifference / (1000 * 3600 * 24));
        //         return daysOld;
        // };

        // Example usage:
        // const birthday = formattedDate(child.child_age); // Replace this with the actual birthday
        // const daysOld = calculateDaysOld(birthday);
        // console.log("Days old:", daysOld);


        // brings in new info on page loads
        useEffect(() => {
                // dispatch requests for booking data based on providerId from useParams, specific booking
                // availability from useParams, and family booking data from user id
                dispatch({ type: "GET_FAMILY_BOOKING_PROCESS_DATA", payload: user.id });
                dispatch({ type: "GET_PROVIDER_BOOKING_PROCESS_DATA", payload: providerId });
                dispatch({ type: "GET_BOOKING_AVAILABILITY", payload: availabilityId });
                dispatch({ type: "GET_CHILDREN", payload: familyId });
                dispatch({ type: "GET_ADULTS", payload: familyId });
        }, []);

        // quick delay on loading to ensure dom doesn't break while data arrives
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
        };




        // /* Booking process notes:

        // RENDER:

        //      "You are booking a spot for one [child age category] at [provider.business_name] for the date [service date]."

        //     "Which child is this spot for?"

        //             - drop down menu renders all child.first_names
        //             ---> select of one gathers child_id to a UseState [childID, setChildID]

        //     "Is an adult besides you going to be dropping off/picking up?"

        //             - drop down menu renders all responsible_adult.first_name + responsible_adult.last_name
        //             - default value of dropdown menu is "I'll be handling pickup/dropoff"
        //             ---> select of one gathers responsible_adult.id to a UseState [responsibleAdult, setResponsibleAdult]

        //      Button Continue with Booking gathers info (to useState [bookingInfo, setBookingInfo]?), renders the contract view

        //               bookingInfo = {
        //                 provider_id = provider.id,
        //                 family_id = family.id,
        //                 user_id = user.id,
        //                 child_id = child.id,
        //                 responsible_adult_id = responsible_adult.id, -- can be null
        //                 user_id = user.id
        //                 service_date = entryRow.date
        //                 **** some kind of variable that will allow us to subtract 1 from the correct age column in provider availability!
        //               }

        //      Render contract language, autofilled with user.first_name, user.last_name, etc

        //             - check box to indicate agreement, sets value of [checkbox, setCheckbox] to "true" 
        //                   - if "false" (unchecked) a click on the submit button triggers a sweetalert saying 
        //                   "you must agree to the contract to proceed"

        //      Submit button click

        //             - dispatches bookingInfo to "POST_BOOKING"
        //             - POST_BOOKING goes to '/api/booking'
        //                     - SQL query needs to:
        //                           - Post to bookings table
        //                           - Update provider availability by subtracting 1 from the correct child age category column
        //             - triggers some kind of confirmation or error modal for user

        // */

        // formatting for inputs
        const btn = { my: 1, mx: 1, height: "3.5rem", padding: 1 };
        const drop = { mx: 0.75, width: 159, my: 1 };

        // formats dates for appearance
        const formattedDate = (date) => {
                return new Date(date).toLocaleDateString('en-US', {
                        month: '2-digit',
                        day: '2-digit',
                        year: 'numeric',
                });
        };

        // hanldes click of check box for agreeing to provider contract
        const markAgreed = () => {
                setAgreed(!agreed)
                console.log('checkbox has been clicked, triggering markAgreed, and agreed is now:', agreed);

        };
        

        // collects all data for new booking post
        const newBooking = {
                provider_id: providerId,
                family_id: familyId,
                user_id: user.id,
                child_id: childId,
                responsible_adult_id: adultId,
                service_date: formattedDate(availability[0].date)
        };

        console.log('newBooking is now:', newBooking);

        const makeBooking = () => {
                dispatch({
                        type: "POST_BOOKING",
                        payload: newBooking
                });
                // - dispatches bookingInfo to "POST_BOOKING"
                // - POST_BOOKING goes to '/api/booking'
                //         - SQL query needs to:
                //               - Post to bookings table
                //               - Update provider availability by subtracting 1 from the correct child age category column
                // - triggers some kind of confirmation or error modal for user

        };



        return (
                <>
                        <Typography>
                                You have selected to book a spot at {booking.providerData.business_name} for {formattedDate(availability[0].date)}.
                                Please select the appropriate age group, which child will be attending, and who will be dropping off the child.
                        </Typography>
                        <FormGroup>
                                <FormControl sx={drop}>
                                        <InputLabel id="age-group-required-label">
                                                Child Age Group
                                        </InputLabel>
                                        <Select
                                                labelId="age-group-required-label"
                                                id="age-select-required"
                                                value={userChoice.age}
                                                label="Age *"
                                                onChange={(e) => {
                                                        setUserChoice({ ...userChoice, age: e.target.value });
                                                }}
                                        >
                                                {(availability[0].infant && availability[0].infant > 0) && (
                                                        <MenuItem value={age}>
                                                                Infant
                                                        </MenuItem>
                                                )}
                                                {(availability[0].toddler && availability[0].toddler > 0) && (
                                                        <MenuItem value={age}>
                                                                Toddler
                                                        </MenuItem>
                                                )}
                                                {(availability[0].pre_k && availability[0].pre_k > 0) && (
                                                        <MenuItem value={age}>
                                                                Pre-K
                                                        </MenuItem>
                                                )}
                                                {(availability[0].schoolage && availability[0].schoolage > 0) && (
                                                        <MenuItem value={age}>
                                                                School-age
                                                        </MenuItem>
                                                )}

                                        </Select>
                                </FormControl>
                                <FormControl>
                                        <InputLabel id="age-group-required-label">
                                                Child Name
                                        </InputLabel>
                                        <Select
                                                labelId="which-child-selector"
                                                id="child-selector"
                                                value={childId}
                                                label="Child *"
                                                input={<OutlinedInput label="Which child is this spot for?" />}
                                                onChange={(event) => setChildId(event.target.value)}
                                        >
                                                {children.map((child, i) => {
                                                        // if (userChoice.age <=> calculateDaysOld(formattedDate(child.child_age))) {
                                                        {
                                                                return (<MenuItem key={i} value={child.id}>
                                                                        {child.first_name}
                                                                </MenuItem>
                                                                );
                                                        }
                                                })}
                                        </Select>
                                </FormControl>
                                <FormControl>
                                        <InputLabel id="age-group-required-label">
                                                Who is dropping off?
                                        </InputLabel>
                                        <Select
                                                labelId="which-adult-selector"
                                                id="adult-selector"
                                                value={adultId}
                                                label="Who will be handling pickup/dropoff?"
                                                input={<OutlinedInput label="Who will be handling pickup/dropoff?" />}
                                                onChange={(event) => setAdultId(event.target.value)}
                                        >
                                                {responsibleAdults.map((adult, i) => {
                                                        {
                                                                return (<MenuItem key={i} value={adult.id}>
                                                                        {adult.first_name}
                                                                </MenuItem>
                                                                );
                                                        }
                                                })}
                                        </Select>
                                </FormControl>
                                <Typography>{booking.providerData.contract_language}</Typography>
                                <Typography>If above information is correct and you agree to provider's contract, please click here to agree, and then submit.</Typography>
                                <FormControl>
                                        <FormControlLabel
                                                value={agreed}
                                                required
                                                control={<Checkbox />}
                                                label="Click to Agree"
                                                onClick={() => markAgreed()}
                                        />
                                </FormControl>

                                <Button
                                        onClick={() => makeBooking}>
                                        SUBMIT BOOKING
                                </Button>
                        </FormGroup>
                </>
        );
}

export default ProviderBookingProcess;
