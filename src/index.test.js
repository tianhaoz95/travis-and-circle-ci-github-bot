import { TestClass } from './index.js'

test('adds 1 + 2 to equal 3', () => {
    var test_object = new TestClass();
    expect(test_object.add(1, 2)).toBe(3);
});