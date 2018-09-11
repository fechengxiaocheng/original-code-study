const includes = require('./index');
test('if formIndex greater than length , return false', () => {
    expect([1,2,3].includes(1, 100)).toBeFalsy();
})

test('if length of array === 0, return false', () => {
    expect([].includes(1)).toBeFalsy();
}) 

test('formIndex < 0', () => {
    expect([1,2,3].includes(1, -100)).toBeTruthy();
    expect([1,2,3].includes(3, -2)).toBeTruthy();
    expect([1,2,3].includes(1, -2)).toBeFalsy();
})

test('[1,2,3] includes 1', () => {
  expect([1,2,3].includes(2, 1)).toBeTruthy();
})
