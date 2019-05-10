const test_package = require("./index.js")

test('adds 1 + 2 to equal 3', () => {
    expect(test_package.sanity_add(1, 2)).toBe(3);
});