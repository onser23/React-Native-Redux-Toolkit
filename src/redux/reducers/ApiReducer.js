import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  data: {},
  loader: false,
  error: '',
};

export const ApiCall = () => {
  return dispatch => {
    dispatch(ApiCallStart());

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(response => {
        console.log(response);
        dispatch(ApiSuccess(response));
      })
      .catch(err => {
        console.log(err);
        dispatch(ApiFailure());
      });
  };
};

export const ApiReducer = createSlice({
  name: 'apireducer',
  initialState,
  reducers: {
    ApiCallStart: state => {
      state.loader = true;
    },
    ApiSuccess: (state, action) => {
      state.loader = false;
      state.data = action.payload;
    },
    ApiFailure: (state, action) => {
      state.loader = false;
      state.error = action.payload;
    },
  },
});

export const {ApiCallStart, ApiSuccess, ApiFailure} = ApiReducer.actions;

export default ApiReducer.reducer;
