import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const getLorem = createAsyncThunk(
  'lorem/getData',
  (arg, { rejectWithValue }) => {
    try {
      const { data } = axios.get('https://baconipsum.com/api/?type=tst');
      return data;
    } catch (error) {
      rejectWithValue(error.respond.data);
    }
  }
);

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
