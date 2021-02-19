import './Array'

describe("Test filter function", () => {
  it("Able to filter using given function", () => {
    const inputArray = [1, 2, 3, 4, 5]
    const filterOdd = (num) => num % 2 === 0
    const expectedArr = inputArray.filter(filterOdd)
    expect(inputArray.myFilter(filterOdd)).toEqual(expectedArr)
  })

  it("Tests index param", () => {
    const inputArray = [1, 2, 3, 4, 5]
    const filterOddIndexes = (_, index) => index % 2 == 0
    const expectedArr = inputArray.filter(filterOddIndexes)
    expect(inputArray.myFilter(filterOddIndexes)).toEqual(expectedArr)
  })

  it("Returns instance array on each call", () => {
    const inputArray = [1, 2, 3, 4, 5]
    const mockFilterFN = jest.fn()
    inputArray.myFilter(mockFilterFN)
    expect(mockFilterFN).toHaveBeenCalledTimes(inputArray.length)
    expect(mockFilterFN).toHaveBeenCalledWith(expect.anything(), expect.anything(), inputArray)
  })
})

