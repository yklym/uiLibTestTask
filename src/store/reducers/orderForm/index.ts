import { PetType } from 'src/types/pet';
import { type IOrderFormState } from './types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: IOrderFormState = {
  selectedPetOptions: null,
  discountCode: '',
  userNotes: ''
};

const OrderFormSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setSelectedPet(state, { payload }: PayloadAction<PetType | null>) {
      state.selectedPetOptions = payload;
    },
    setDiscountCode(state, { payload }: PayloadAction<string>) {
      state.discountCode = payload;
    },
    setUserNotes(state, { payload }: PayloadAction<string>) {
      state.userNotes = payload;
    }
    // could be good to use more abstract action if we have more fields
    // like:
    // setOrderField(
    //   state,
    //   { payload }: PayloadAction<{ fieldName: keyof IOrderFormState; value: IOrderFormState[keyof IOrderFormState] }>
    // ) {
    //   const { fieldName, value } = payload;
    //   state[fieldName] = value;
    // }
  }
});

export const { setSelectedPet, setDiscountCode, setUserNotes } = OrderFormSlice.actions;

export default OrderFormSlice.reducer;
