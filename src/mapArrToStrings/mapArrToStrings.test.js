const mapArrToStrings = require('./mapArrToStrings')

describe('mapArrToStrings', () => {
  test('Correct value', () => {
    expect(mapArrToStrings([1, 2, 3])).toEqual(['1', '2', '3'])
  })
  test('Mixed', () => {
    expect(mapArrToStrings([1, 2, 3, null, 'sjjsj'])).toEqual(['1', '2', '3'])
  })
  test('Empty', () => {
    expect(mapArrToStrings([])).toEqual([])
  })
  test('Negative', () => {
    expect(mapArrToStrings([1, 2, 3, 4])).not.toEqual([1, 2, 3, 4])
  })
})
