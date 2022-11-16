import { configureStore } from "@reduxjs/toolkit"
//import { type } from "os"
import reservationsReducer from "../features/reservationSlice"
import customerSlice from "../features/customerSlice"

export const store = configureStore({
    reducer: {
        reservations: reservationsReducer,
        customers:  customerSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;