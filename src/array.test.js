import './Array'

describe("Runs simple tests", () => {
  it("Tests filter", () => {
    const inputArray = [1, 2, 3, 4, 5]
    const expectedOutput = [2, 4]
    const filterOdd = (num) => num % 2 === 0
    expect(inputArray.myFilter(filterOdd)).toEqual(expectedOutput)
  })
})