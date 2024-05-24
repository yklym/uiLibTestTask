import React from 'react';
import { TextInput } from 'src/components/common/input/TextInput';
import { useAppDispatch } from 'src/hooks/useAppDispatch';
import { useAppSelector } from 'src/hooks/useAppSelector';
import { setUserNotes } from 'src/store/reducers/orderForm';

function OrderSceneUserNoteSection() {
  const dispatch = useAppDispatch();
  const userNotesInputValue = useAppSelector((state) => state.orderForm.userNotes);

  const handleChange = (value: string) => {
    dispatch(setUserNotes(value));
  };

  return (
    <TextInput
      value={userNotesInputValue}
      onChange={handleChange}
      label="Special notes"
      isMultiline
    />
  );
}

export { OrderSceneUserNoteSection };
