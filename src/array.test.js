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


describe("Test some() function", () => {
  it("Able to pass test using given function", () => {
    const testArr = [1, 2, 3, 5, NaN]
    const isEven = x => x % 2 === 0
    const expectedRes = testArr.some(isEven)
    expect(testArr.mySome(isEven)).toEqual(expectedRes) // True
  })

  it("Able to ignore undefined", () => {
    const testArr = [,,,,,2]
    const isEven = x => x % 2 === 0
    const expectedRes = testArr.some(isEven)
    expect(testArr.mySome(isEven)).toEqual(expectedRes) // False
  })

  it("Able to test for NaN", () => {
    const testArr = [, 2, 3, 4, 5, NaN]
    const res = testArr.mySome(isNaN)
    const expectedRes = testArr.some(isNaN)
    expect(res).toEqual(expectedRes)
  })
})

describe("Test indexOf() function", () => {
  it("Tests indexOf on different starting index", () => {
    const testArr = ['ant', 'bison', 'camel', 'duck', 'bison']
    let search = 'bison'

    let startIndex = 0
    let res = testArr.myIndexOf(search, startIndex)
    let expectedRes = testArr.indexOf(search, startIndex)
    expect(res).toEqual(expectedRes) 

    startIndex = 2
    res = testArr.myIndexOf(search, startIndex)
    expectedRes = testArr.indexOf(search, startIndex)
    expect(res).toEqual(expectedRes) 
  })

  it("Tests out of bounds", () => {
    const testArr = [ 1, 2, 3, 4]
    let search = 4
    let startIndex = 5

    let res = testArr.myIndexOf(search, startIndex)
    let expectedRes = testArr.indexOf(search, startIndex)
    expect(res).toEqual(expectedRes) 
  })

  it("Test NaN values", () => {
    const testArr = [1, 2, 3, NaN]
    const search = NaN
    const res = testArr.myIndexOf(search)
    const expectedRes = testArr.indexOf(search)
    expect(res).toEqual(expectedRes)
  })
})

describe("Test Object.values() function", () => {
  it("Tests on different datatypes (number, array, objects, undefined)", () => {
    const objCollection = {
      number: 777,
      array: ['a', 'b', 'c', 'd', ],
      object: {
        a: 0,
        b: 1,
        c: 2,
      }
    }

    for (const key in objCollection) {
      if (Object.hasOwnProperty.call(objCollection, key)) {
        const element = objCollection[key]
        const res = Object.grabValues(element)
        const expectedRes = Object.values(element)
        expect(res).toEqual(expectedRes)
      }
    }
    
  })

  it("Tests on edge case values", () => {
    const objCollection = {
      nan: NaN,
      array: [,,,]
    }

    for (const key in objCollection) {
      if (Object.hasOwnProperty.call(objCollection, key)) {
        const element = objCollection[key];
        const res = Object.grabValues(element)
        const expectedRes = Object.values(element)
        expect(res).toEqual(expectedRes)
      }
    }
  })

  it("Test for undefined", () => {
    const invalidVal = undefined
    expect( () => {Object.values(invalidVal)}).toThrow(new TypeError("Cannot convert undefined or null to object"))
    expect( () => {Object.grabValues(invalidVal)} ).toThrow(new Error("Cannot convert undefined or null to object"))
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


describe("Test Array.myMap()", () => {
  it("Maps function on array", () => {
    const inputArray = [1, 2, 3, 4]
    const isEven = (index) => index % 2 == 0
    const expectedArr = [false, true, false, true]
    expect(inputArray.myMap(isEven)).toEqual(expectedArr)
  })

  it("Correctly passes index", () => {
    const inputArray = [0, 0, 0, 0]
    const expectedArr = [0, 1, 2, 3]
    const toIndex = (_, i) => i
    expect(inputArray.myMap(toIndex)).toEqual(expectedArr)
  })

})

describe("Test Array.myReduce()", () => {
  it("Reduces with no params", () => {
    const inputArray = [1, 2, 3, 4];
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    expect(inputArray.myReduce(reducer)).toEqual(10)
  })

  it("Reduces with one param", () => {
    const inputArray = [1, 2, 3, 4];
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    expect(inputArray.myReduce(reducer, 4)).toEqual(14)
  })
})

describe("Test Array.lastIndexOf()", () => {
  it("Gets last index of item at end", () => {
    const inputArray = [1, 2, 3, 4];
    expect(inputArray.lastIndexOf(4)).toEqual(3)
  })
  it("Gets last index of item in middle", () => {
    const inputArray = [1, 2, 3, 4];
    expect(inputArray.lastIndexOf(3)).toEqual(2)
  })
  it("Gets last index first item", () => {
    const inputArray = [1, 2, 3, 4];
    expect(inputArray.lastIndexOf(1)).toEqual(0)
  })

  it("Return -1 if not found", () => {
    const inputArray = [1, 2, 3, 4];
    expect(inputArray.lastIndexOf(-1)).toEqual(-1)
  })
})