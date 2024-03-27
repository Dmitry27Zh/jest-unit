const delay = require('./delay')

describe('delay', () => {
  test('Correct value', async () => {
    const sum = await delay(() => 2 + 2, 1000)
    expect(sum).toBe(4)
  })
})
