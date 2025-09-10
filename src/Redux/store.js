import { configureStore } from '@reduxjs/toolkit';
import notesReducer from '../Components/TodoSlice'

export const store = configureStore({
   reducer: {
    notes: notesReducer,
  },
})

export default store;

//Redux Toolkit’s configureStore expects a reducer function.
//notesReducer = TodoSlice.reducer (the actual function Redux needs).
