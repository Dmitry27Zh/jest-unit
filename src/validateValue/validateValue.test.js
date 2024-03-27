const validateValue = require('./validateValue')

test('Value validation', () => {
  expect(validateValue(50)).toBe(true)
})
