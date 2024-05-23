import { configureStore } from '@reduxjs/toolkit';
import OrderFormReducer from './reducers/orderForm';

export const store = configureStore({
  reducer: {
    orderForm: OrderFormReducer
  }
});

export type AppStore = typeof store;

export type RootState = ReturnType<AppStore['getState']>;

export type AppDispatch = AppStore['dispatch'];

export {};
