import { createSlice } from '@reduxjs/toolkit';

const loremSlice = createSlice({
  name: 'lorem',
  initialState: {
    data: [],
    isSuccess: false,
    message: '',
    loading: false,
  },
  reducers: {},
  // https://redux-toolkit.js.org/api/createSlice#the-extrareducers-map-object-notation
  extraReducers: () => {},
});

export default loremSlice;
