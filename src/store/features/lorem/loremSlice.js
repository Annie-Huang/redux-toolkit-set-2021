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
  extraReducers: {
    [getLorem.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [getLorem.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.isSuccess = true;
    },
    [getLorem.rejected]: (state, { payload }) => {
      state.loading = false;
      state.message = payload;
      state.isSuccess = false;
    },
  },
});

export default loremSlice;
