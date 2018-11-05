import * as index from '../src/index';

test('Should have encrypt available', () => {
  expect(index.encrypt).toBeTruthy();
});
