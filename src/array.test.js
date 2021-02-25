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




describe("Test every() function", () => {
  it("Able to pass test using given function", () => {
    const testArr = [1, 2, 3, 5]
    const isLess = x => x < 6 === 0
    const expectedRes = testArr.myEvery(isLess)
    expect(testArr.myEvery(isLess)).toEqual(expectedRes) // True
  })

  it("Another check", () => {
    const testArr = [1, 2, 3, 5]
    const isGreater = x => x > 6 === 1
    const expectedRes = testArr.myEvery(isGreater)
    expect(testArr.myEvery(isGreater)).toEqual(expectedRes) // false
  })
})



describe("Test Array.myPush()", () => {
 
  it("Able to pass test using given function", () => {
    const inputArray = [1, 2, 3, 4];
    expect(inputArray.myPush(6)).toEqual(5)
  })

  it("Count of element", () => {
    const inputArray = [1, 2, 3, 4, 6, 7];
    expect(inputArray.myPush(10)).toEqual(7)
  })

})



