import { configureStore } from "@reduxjs/toolkit";
import bookingReducer from "./reducers/applicationService/booking/bookingSlice";
const store = configureStore({
  reducer: {
    booking: bookingReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
