import { configureStore } from "@reduxjs/toolkit"
import contactReducer from "./slices/contactSlice"

export const store = configureStore({
  reducer: {
    contact: contactReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
      },
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
