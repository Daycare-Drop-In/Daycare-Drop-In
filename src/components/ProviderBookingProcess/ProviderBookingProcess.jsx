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
        const provider = useSelector((store) => store.provider);

        // bring in sweetalerts
        const MySwal = withReactContent(Swal);



        console.log("in ProviderBookingProcess and providerId from useParams is providerId:", Number(providerId));
        console.log(" in ProviderBookingProcess and availabilityId from useParams is providerId:", Number(availabilityId));
        console.log(" in ProviderBookingProcess and availabilityId from useParams is providerId:", Number(familyId));
        // console.log('in ProviderBookingProcess and booking from store is:', booking);
        // console.log('in ProviderBookingProcess and user.id from store is:', user.id);
        // console.log('in ProviderBookingProcess and user from store is:', user);
        // console.log('in ProviderBookingProcess and user.family_id from store is:', user.family_id);
        // console.log('in ProviderBookingProcess and availability from store is:', availability);
        // console.log('in ProviderBookingProcess and children store is:', children);
        // console.log('in ProviderBookingProcess and responsibleAdults store is:', responsibleAdults);
        console.log('in ProviderBookingProcess and provider store is:', provider);



        // const [childId, setChildId] = useState('');
        const [childData, setChildData] = useState({ id: '', name: '' });
        const [adultData, setAdultData] = useState({ id: '', name: '' });
        // const [childData, setChildData] = useState({ id: '', name: '' });
        const [ageGroup, setAgeGroup] = useState('');
        const [agreed, setAgreed] = useState(false);
        console.log('in ProviderBookingProcess and agreed is:', agreed);
        console.log('in ProviderBookingProcess and ageGroup is:', ageGroup);
        console.log('in ProviderBookingProcess and childData is:', childData);
        console.log('in ProviderBookingProcess and adultData is:', adultData);


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
                // dispatch({ type: "GET_FAMILY_BOOKING_PROCESS_DATA", payload: user.id });
                dispatch({ type: "GET_PROVIDER_BOOKING_PROCESS_DATA", payload: Number(providerId) });
                dispatch({ type: "GET_BOOKING_AVAILABILITY", payload: Number(availabilityId) });
                dispatch({ type: "GET_CHILDREN", payload: Number(familyId) });
                dispatch({ type: "GET_ADULTS", payload: Number(familyId) });
                dispatch({ type: "GET_PROVIDER", payload: Number(providerId) });
                console.log('in ProviderBookingProcess useEffect and providerId is:', providerId);
                console.log('in ProviderBookingProcess useEffect and Number(providerId) is:', Number(providerId));

                
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
        };

        const handleChildSelect = (event) => {
                const { value } = event.target;
                const selectedChild = children.find((child) => child.id === value);
                setChildData({ id: value, name: selectedChild ? selectedChild.first_name : '' });
        };

        const handleAdultSelect = (event) => {
                const { value } = event.target;
                const selectedAdult = responsibleAdults.find((adult) => adult.id === value);
                setAdultData({ id: value, name: selectedAdult ? selectedAdult.first_name : '' });
        };

        // collects all data for new booking post
        const newBooking = {
                provider_id: Number(providerId),
                family_id: Number(familyId),
                child_id: childData.id,
                responsible_adult_id: adultData.id,
                user_id: user.id,
                service_date: formattedDate(availability[0].date)
        };

        console.log('newBooking is now:', newBooking);

        const makeBooking = (event) => {
                event.preventDefault();
                const newAvailability = { ...availability[0] };
                if (ageGroup === "infant") {
                        newAvailability.infant -= 1;
                } else if (ageGroup === "toddler") {
                        newAvailability.toddler -= 1;
                } else if (ageGroup === "pre_k") {
                        newAvailability.pre_k -= 1;
                } else if (ageGroup === "schoolage") {
                        newAvailability.schoolage -= 1;
                }
                dispatch({
                        type: "POST_BOOKING",
                        payload: newBooking
                });
                dispatch({
                        type: "UPDATE_AVAILABILITY",
                        payload: newAvailability
                });
                MySwal.fire({
                        title: `Booking confirmed for ${childData.name} on ${newBooking.service_date} at ${provider.business_name}!`,
                        text: "Make another booking or return to home?",
                        icon: "success",
                        showCloseButton: true,
                        showDenyButton: true,
                        confirmButtonText: 'BOOK AGAIN',
                        denyButtonText: `HOME`,
                        confirmButtonColor: "#2E9CCA",
                        denyButtonColor: "#390854",
                }).then((result) => {
                        // if (result.isConfirmed) {
                        //     history.push('/search');
                        // } else if (result.isDenied) {
                        //     history.push('/library');
                        // }
                })
                //     MySwal.fire({
                //         title: "Changes saved!",
                //         icon: "success",
                //         showButtons: false,
                //     })
                //     MySwal.fire({
                //         title: "Please confirm you want to delete this book from your MyBrary.",
                //         text: "Click confirm to complete deletion.",
                //         icon: "warning",
                //         showCancelButton: true,
                //         confirmButtonText: "Delete",
                //         cancelButtonText: "Cancel",
                //     }).then((result) => {
                //         if (result.isConfirmed) {
                //             MySwal.fire("Book deleted!", {
                //                 icon: "success",
                //                 timer: 1000,
                //                 buttons: false,
                //             });
                //         //     dispatch({
                //         //         type: 'DELETE_USER_BOOK',
                //         //         payload: bookDetails[0].book_id
                //         //     });
                //         //     history.push('/library');
                //         } else {
                //             MySwal.fire("Delete canceled!", {
                //                 icon: "info",
                //                 timer: 1500,
                //                 buttons: false,
                //             })
                //         }
                //     })
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
                                                value={ageGroup}
                                                label="Child Age Group"
                                                onChange={(event) => setAgeGroup(event.target.value)}
                                        >
                                                {(availability[0].infant && availability[0].infant > 0) && (
                                                        <MenuItem value="infant">
                                                                Infant
                                                        </MenuItem>
                                                )}
                                                {(availability[0].toddler && availability[0].toddler > 0) && (
                                                        <MenuItem value="toddler">
                                                                Toddler
                                                        </MenuItem>
                                                )}
                                                {(availability[0].pre_k && availability[0].pre_k > 0) && (
                                                        <MenuItem value="pre_k">
                                                                Pre-K
                                                        </MenuItem>
                                                )}
                                                {(availability[0].schoolage && availability[0].schoolage > 0) && (
                                                        <MenuItem value="schoolage">
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
                                                value={childData.id}
                                                label="Child Name"
                                                // input={<OutlinedInput label="Child Name" />}
                                                // onChange={(event) => setChildId(event.target.value)}
                                                onChange={handleChildSelect}
                                                
                                        >
                                                {children.map((child, i) => {
                                                        // if (userChoice.age <=> calculateDaysOld(formattedDate(child.child_age))) {
                                                        return (
                                                                <MenuItem key={i} value={child.id}>
                                                                        {child.first_name}
                                                                </MenuItem>
                                                        )
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
                                                value={adultData.id}
                                                label="Who is dropping off?"
                                                // input={<OutlinedInput label="Who is dropping off?" />}
                                                // onChange={(event) => setAdultId(event.target.value)}
                                                onChange={handleAdultSelect}

                                                
                                        >
                                                {responsibleAdults.map((adult, i) => {
                                                        return (
                                                                <MenuItem key={i} value={adult.id}>
                                                                        {adult.first_name}
                                                                </MenuItem>
                                                        )
                                                })}
                                        </Select>
                                </FormControl>
                                <Typography>{booking.providerData.contract_language}</Typography>
                                <FormControl>
                                        <FormControlLabel
                                                checked={agreed}
                                                required
                                                control={<Checkbox />}
                                                label="Click to Agree"
                                                onClick={markAgreed}
                                        />
                                </FormControl>
                                {agreed ? (<>
                                        {/* <Typography>Having agreed to provider's contract, please click here to book this spot for {}.</Typography> */}
                                        <Button onClick={makeBooking}>CONFIRM BOOKING</Button>
                                </>) : (
                                        <Button disabled>CONFIRM BOOKING</Button>
                                )}
                        </FormGroup >
                </>
        );
}

export default ProviderBookingProcess;
