import React, { useCallback, useEffect, useState } from 'react';
import { TextInput } from 'src/components/common/input/TextInput';
import useDebounce from 'src/hooks/useDebounce';
import { DISCOUNT_CODE_LENGTH, DISCOUNT_CODE_REGEX } from 'src/utils/config';
import { fullStringMatch } from 'src/utils/helpers/fullStringMatch';
import { mockDiscountCheck } from 'src/utils/mocks/mockDiscountCheck';

const CODE_INPUT_DEBOUNCE_TIME = 500;

function OrderSceneDiscountSection() {
  const [codeInputValue, setCodeInputValue] = useState('');
  const [fieldError, setFieldError] = useState('');
  const [isLoading, setLoading] = useState(false);

  // confirm that the code was approved by server
  const [isApprovedCode, setApprovedCode] = useState(false);

  // as a rule such things are verified by backend so we should debounce few keystrokes
  const debouncedValue = useDebounce(codeInputValue, CODE_INPUT_DEBOUNCE_TIME);

  const fetchIsValidCode = useCallback(async (code: string) => {
    try {
      setLoading(true);

      const isValid = await mockDiscountCheck(code);

      if (!isValid) {
        setFieldError('Your discount code is invalid or was used already');
        return;
      }

      setLoading(false);

      setApprovedCode(true);
    } catch (e) {
      setFieldError("Seems we couldn't confirm your discount code. Try later");
    } finally {
      setLoading(false);
    }
  }, []);

  const onDebouncedInput = useCallback(() => {
    if (debouncedValue) {
      // simple check as example
      const isValid = fullStringMatch(debouncedValue, DISCOUNT_CODE_REGEX);

      if (!isValid) {
        setFieldError('Wrong code format! Example: TEST22');
        return;
      }
      fetchIsValidCode(debouncedValue);
    }
  }, [debouncedValue, fetchIsValidCode]);

  useEffect(() => {
    setFieldError('');
    setApprovedCode(false);
    onDebouncedInput();
  }, [debouncedValue, onDebouncedInput]);

  // to avoid ternaries like (isApprovedCode && 'success') || (fieldError && 'error') || 'default'
  const getInputSubLabel = () => {
    if (isApprovedCode) return `Your code was added to the order!`;
    if (fieldError) return fieldError;
    return '';
  };

  const getInputVariant = () => {
    if (isApprovedCode) return 'success';
    if (fieldError) return 'error';
    return 'default';
  };

  return (
    <>
      <TextInput
        variant={getInputVariant()}
        placeholder="TEST55"
        label="Discount code"
        isDisabled={isLoading}
        isLoading={isLoading}
        maxLength={DISCOUNT_CODE_LENGTH}
        subLabel={getInputSubLabel()}
        value={codeInputValue}
        onChange={setCodeInputValue}
      />
    </>
  );
}

export { OrderSceneDiscountSection };
