import { configureStore } from '@reduxjs/toolkit';
import  userDetail from './reduxSlice/userDetailSlice';

const store = configureStore({
  reducer: {
    app: userDetail,
  },
});

export default store;