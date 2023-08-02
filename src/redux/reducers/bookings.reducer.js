const bookings = (state = {}, action) => {
  switch (action.type) {
    case "SET_BOOKINGS":
      return action.payload;
    default:
      return state;
  }
};


/* To call the two separate streams of booking process data:

*/

export default bookings;
