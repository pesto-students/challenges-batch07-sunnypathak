import { bind } from './bindMethod';

describe('bind method', () => {
  // Feel free to add more test cases
  test('should return a function', () => {
    const foo = function func(x) {
      return x;
    };
    const obj = { a: 10 };
    expect(typeof bind(foo, obj)).toBe('function');
  });
  test('should hard bind a function to new context', () => {
    const foo = function func(x) {
      return this.y + x;
    };
    const obj = { y: 10 };
    const y = 100;
    const bar = bind(foo, obj);
    expect(bar(10)).toBe(20);
  });
});
