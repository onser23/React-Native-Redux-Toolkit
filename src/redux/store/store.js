import {configureStore} from '@reduxjs/toolkit';
import CounterReducer from '../reducers/CounterReducer';
import ApiReducer from '../reducers/ApiReducer';
import logger from 'redux-logger';

export const store = configureStore({
  reducer: {
    counter: CounterReducer,
    apireducer: ApiReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});
