import { PetType } from 'src/types/pet';
import { type IOrderFormState } from './types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: IOrderFormState = {
  selectedPetOptions: null
};

const OrderFormSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setSelectedPet(state, action: PayloadAction<PetType | null>) {
      state.selectedPetOptions = action.payload;
    }
  }
});

export const { setSelectedPet } = OrderFormSlice.actions;

export default OrderFormSlice.reducer;
