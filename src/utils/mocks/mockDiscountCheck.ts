import { stallAwait } from '../helpers/stallAwait';

// mock request to server to check if discount code is valid
async function mockDiscountCheck(code: string) {
  try {
    console.log('testing code', code, ' ...');

    await stallAwait(1500);
    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
}

export { mockDiscountCheck };
