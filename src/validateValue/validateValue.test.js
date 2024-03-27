const validateValue = require('./validateValue')

test('Value validation', () => {
  expect(validateValue(50)).toBe(true)
})

describe('validateValue', () => {
  test('Correct value', () => {
    expect(validateValue(50)).toBe(true)
  })
  test('Min', () => {
    expect(validateValue(-1)).toBe(false)
  })
  test('Max', () => {
    expect(validateValue(101)).toBe(false)
  })
  test('Max', () => {
    expect(validateValue(0)).toBe(true)
  })
  test('Max', () => {
    expect(validateValue(100)).toBe(true)
  })
})
