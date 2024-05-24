import { DISCOUNT_CODE_LENGTH, DISCOUNT_CODE__INTEGERS_LENGTH } from '../config';
import { stallAwait } from '../helpers/stallAwait';

function generateLetters(len = 4) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < len) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

// mock request to server to check if discount code is valid
async function mockDiscountCodeGenerate() {
  try {
    //Can change 7 to 2 for longer results.
    const lettersPart = generateLetters(DISCOUNT_CODE_LENGTH - DISCOUNT_CODE__INTEGERS_LENGTH);
    const numbersPart = (Math.random() * Math.pow(10, DISCOUNT_CODE__INTEGERS_LENGTH)).toFixed(0);

    await stallAwait(2500);
    return `${lettersPart.toUpperCase()}${numbersPart}`;
  } catch (e) {
    console.error(e);
    return '';
  }
}

export { mockDiscountCodeGenerate };
