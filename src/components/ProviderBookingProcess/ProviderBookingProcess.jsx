import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom/cjs/react-router-dom";
import { Card, CardContent, CardMedia, CardActionArea, Form, IconButton, Typography, Button, Container, Grid, Box, CardHeader, CardActions, TextField, Dialog, DialogContent, DialogTitle } from '@mui/material';
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
        const user = useSelector((store) => store.user);
        const booking = useSelector((store) => store.booking);
        const { providerId, availabilityId } = useParams();
        const [childId, setChildId] = useState();
        const [adult, setAdult] = useState();
        const [agreed, setAgreed] = useState(false);

        // console.log('in ProviderBookingProcess and booking from store is:', booking);
        // console.log('in ProviderBookingProcess and user.id from store is:', user.id);


        useEffect(() => {
                // console.log("in ProviderBookingProcess and providerId from useParams is providerId:", providerId);
                // console.log(" in ProviderBookingProcess and availabilityId from useParams is providerId:", availabilityId);

                // dispatch requests for booking data based on providerId from useParams, specific booking
                // availability from useParams, and family booking data from user id
                dispatch({ type: "GET_FAMILY_BOOKING_PROCESS_DATA", payload: user.id });
                dispatch({ type: "GET_PROVIDER_BOOKING_PROCESS_DATA", payload: providerId });
                dispatch({ type: "GET_BOOKING_AVAILABILITY", payload: availabilityId });
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
        /* Booking process notes:
      
      
        INFO WE NEED:
      
            Passed as props from 'startBooking' function in parent component PublicProviderAvailabilityTable
      
                - provider.id
                - user.id
                - availability.id (from entryRow.id)
                - child age category (from entryRow.[age category])
                - service date (from entryRow.date)
      
            Get request for
                - user.first_name, user.last_name
                - family.id of user.id ---> 
                        all 'child.id's of family.id
                                child.first_name, child.last_name
                          
                        'responsible_adult.id's of family.id
                                responsible_adult.first_name, responsible.adult.last_name
      
                - provider.business_name
                - provider.contract_language
        
        RENDER:
      
             "You are booking a spot for one [child age category] at [provider.business_name] for the date [service date]."
      
            "Which child is this spot for?"
      
                    - drop down menu renders all child.first_names
                    ---> select of one gathers child_id to a UseState [childID, setChildID]
           
            "Is an adult besides you going to be dropping off/picking up?"
      
                    - drop down menu renders all responsible_adult.first_name + responsible_adult.last_name
                    - default value of dropdown menu is "I'll be handling pickup/dropoff"
                    ---> select of one gathers responsible_adult.id to a UseState [responsibleAdult, setResponsibleAdult]
      
             Button Continue with Booking gathers info (to useState [bookingInfo, setBookingInfo]?), renders the contract view
      
                      bookingInfo = {
                        provider_id = provider.id,
                        family_id = family.id,
                        user_id = user.id,
                        child_id = child.id,
                        responsible_adult_id = responsible_adult.id, -- can be null
                        user_id = user.id
                        service_date = entryRow.date
                        **** some kind of variable that will allow us to subtract 1 from the correct age column in provider availability!
                      }
      
             Render contract language, autofilled with user.first_name, user.last_name, etc
      
                    - check box to indicate agreement, sets value of [checkbox, setCheckbox] to "true" 
                          - if "false" (unchecked) a click on the submit button triggers a sweetalert saying 
                          "you must agree to the contract to proceed"
      
             Submit button click
      
                    - dispatches bookingInfo to "POST_BOOKING"
                    - POST_BOOKING goes to '/api/booking'
                            - SQL query needs to:
                                  - Post to bookings table
                                  - Update provider availability by subtracting 1 from the correct child age category column
                    - triggers some kind of confirmation or error modal for user
      
        */


        const isAgreed = () => {
                // console.log('checkbox has been clicked, triggering isAgreed');
                if (agreed) {
                        setAgreed(false);
                }
                if (!agreed) {
                        setAgreed(true);
                }
                console.log('agreed is now:', agreed);
                return setAgreed;
        }

        const makeBooking = () => {

        }

        return (
                <>
                        <form>
                                <Typography>"You are booking a spot for one [age category{ }] at
                                        {/* {provider.business_name}  */}
                                        for the [date{ }] ."</Typography>

                                {/* <Select
                                        labelId="which-child-selector"
                                        id="child-selector"
                                        // value={child}
                                        label="Which child is this spot for?"
                                        input={<OutlinedInput label="Which child is this spot for?" />}
                                // onChange={(event) => setChild(event.target.value)}
                                >
                                        <MenuItem value={false}>Nope</MenuItem>
                                        <MenuItem value={true}>Yep!</MenuItem>
                                </Select>

                                <Select
                                        labelId="which-adult-selector"
                                        id="adult-selector"
                                        // value={adult}
                                        label="WIs an adult besides you going to be dropping off/picking up?"
                                        input={<OutlinedInput label="Is an adult besides you going to be dropping off/picking up?" />}
                                // onChange={(event) => setAdult(event.target.value)}
                                >
                                        <MenuItem value={false}>Nope</MenuItem>
                                        <MenuItem value={true}>Yep!</MenuItem>
                                </Select> */}
                        </form>

                        <FormGroup>
                                <FormControlLabel
                                        value={agreed}
                                        required
                                        control={<Checkbox />}
                                        label="Click to Agree"
                                        onClick={() => isAgreed()}
                                />
                        </FormGroup>
                </>
        );
}

export default ProviderBookingProcess;
