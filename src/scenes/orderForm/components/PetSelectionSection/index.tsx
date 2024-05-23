import React from 'react';
import { InputLabel } from 'src/components/common/input/InputLabel';
import { RadioButton } from 'src/components/common/input/RadioButton';
import { useAppDispatch } from 'src/hooks/useAppDispatch';
import { useAppSelector } from 'src/hooks/useAppSelector';
import { PetType } from 'src/types/pet';
import { setSelectedPet } from 'src/store/reducers/orderForm';

import { PET_OPTIONS_LABELS_MAP, PET__TYPE_OPTIONS } from './helpers';

function OrderScenePetSelection() {
  const selectedPetOptions = useAppSelector((state) => state.orderForm.selectedPetOptions);
  const dispatch = useAppDispatch();

  const handleSelectPet = (petType: PetType, value: boolean) => {
    if (value) {
      dispatch(setSelectedPet(petType));
    }
  };

  return (
    <div className="my-2">
      <InputLabel>Pick a pettie:</InputLabel>
      <div className="flex flex-col">
        {PET__TYPE_OPTIONS.map((petType) => (
          <RadioButton
            checked={petType === selectedPetOptions}
            key={petType}
            label={PET_OPTIONS_LABELS_MAP[petType]}
            onSetValue={(value) => handleSelectPet(petType, value)}
          />
        ))}
      </div>
    </div>
  );
}

export { OrderScenePetSelection };
