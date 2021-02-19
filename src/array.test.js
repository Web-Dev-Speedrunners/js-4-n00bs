import './Array'

describe("Test filter() function", () => {
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

describe("Test Object.keys() function", () => {
  it("Tests iterations", () => {
    const inputArray = [1, 2, 3, 4, 5]
    const originalKeys = inputArray.keys()
    const myKeys = inputArray.myKeys()
    for(let i = 0 ; i < inputArray.length ; i++){
      expect(myKeys.next()).toEqual(originalKeys.next())
    }
    expect(myKeys.next()).toEqual({
      value: undefined,
      done: true
    })
  })

  it("Tests for...of loop compatibility", () => {
    const inputArray = [1, 2, 3, 4, 5]

    const expectedResult = []
    for(const entry of inputArray.keys()) expectedResult.push(entry)
    
    let index = 0
    for(let entry of inputArray.myKeys()){
      expect(entry).toEqual(expectedResult[index++])
    }
  })
})

describe("Test includes() function", () => {
  it("Tests include from whole array", () => {
    const testArr = [1, 2, 3]
    expect(testArr.myIncludes(2)).toEqual(true)
    expect(testArr.myIncludes(2)).toEqual(true)
    expect(testArr.myIncludes(4)).toEqual(false)
    expect([1, 2, NaN].myIncludes(NaN)).toEqual(true)
  })

  it("Tests positive startIndex", () => {
    const testArr = [1, 2, 3]
    expect(testArr.myIncludes(3, 3)).toEqual(false)
    expect(testArr.includes(1, 100)).toEqual(false)
    expect(testArr.includes(3, 1)).toEqual(true)
  })

  it("Tests negative startIndex", () => {
    const testArr = [1, 2, 3]
    expect(testArr.myIncludes(3, -1)).toEqual(true)
    expect(testArr.myIncludes(3, -100)).toEqual(true)
    expect(testArr.myIncludes(1, -2)).toEqual(false)
  })
})