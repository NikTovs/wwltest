import { configureStore } from "@reduxjs/toolkit";
import createPushFormSlice from './formReducer';

const store = configureStore({
  reducer: {
    form: createPushFormSlice
  },
});

export default store;