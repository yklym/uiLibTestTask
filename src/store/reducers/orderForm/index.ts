import { type IOrderFormState } from './types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: IOrderFormState = {
  inputValue: ''
};

const OrderFormSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setValue(state, action: PayloadAction<string>) {
      state.inputValue = action.payload;
    }
  }
});

export const { setValue } = OrderFormSlice.actions;

export default OrderFormSlice.reducer;
