import TestClass from './index.js'

test('adds 1 + 2 to equal 3', () => {
    expect(TestClass.add(1, 2)).toBe(3);
});