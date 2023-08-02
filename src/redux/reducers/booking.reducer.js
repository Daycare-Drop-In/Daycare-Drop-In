const booking = (state = [], action) => {
  switch (action.type) {
    case "SET_BOOKINGS":
      return action.payload;
    case "SET_FAMILY_BOOKING_PROCESS_DATA":
      return action.payload;
    case "SET_PROVIDER_BOOKING_PROCESS_DATA":
      return action.payload;
    default:
      return state;
  }
};

export default booking;
