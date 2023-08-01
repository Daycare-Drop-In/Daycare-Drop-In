import React from "react";

function ProviderBookingProcess() {
  /* Booking process notes:


  INFO WE NEED:

      Passed as params from 'startBooking' function in parent component PublicProviderAvailabilityTable

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

  return <div className="container"></div>;
}

export default ProviderBookingProcess;
