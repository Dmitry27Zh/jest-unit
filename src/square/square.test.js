const square = require('./square')

describe('mapArrToStrings', () => {
  let mockValue
  beforeEach(() => {
    mockValue = Math.random()
  })
  beforeAll(() => {})
  test('Correct value', () => {
    expect(square(2)).toBe(4)
    expect(square(2)).toBeLessThan(5)
    expect(square(2)).toBeGreaterThan(3)
    expect(square(2)).not.toBeUndefined()
  })
  test('Math pow call', () => {
    const spyMathPow = jest.spyOn(Math, 'pow')
    square(2)
    expect(spyMathPow).toBeCalledTimes(1)
  })
  test('No Math pow call', () => {
    const spyMathPow = jest.spyOn(Math, 'pow')
    square(1)
    expect(spyMathPow).toBeCalledTimes(0)
  })
  afterEach(() => {
    jest.clearAllMocks()
  })
  afterAll(() => {})
})
