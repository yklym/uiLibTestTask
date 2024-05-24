import { PetType } from 'src/types/pet';

export interface IOrderFormState {
  selectedPetOptions: PetType | null;
  discountCode: string;
  userNotes: string;
}
