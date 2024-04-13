import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reservation: {
    dateDebut: new Date().toISOString(),
    dateFin: null,
    adults: "1personne",
    children: "child0child",
  },
};
const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    setReservation: (state, action) => {
      state.reservation = action.payload;
    },
  },
});

export const { setReservation } = bookingSlice.actions;

export default bookingSlice.reducer;
