import { encrypt } from '../src/encrypt';

test('Should encrypt with abcdefg', () => {
  const te = new TextEncoder();
  const u8a = te.encode('abcdefg');
  expect(encrypt(u8a).toString(16)).toBe('c2e9');
});
