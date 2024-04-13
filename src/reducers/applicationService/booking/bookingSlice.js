import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reservation: {
    dateDebut: new Date().toISOString(),
    dateFin: "",
    adults: 1,
    children: 0,
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
