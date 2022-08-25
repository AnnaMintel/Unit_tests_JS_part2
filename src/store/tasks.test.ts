import { ActionType, calculator, div, getSumOfNums, getTriangleType, mult, sub, sum, summ } from "./tasks"


// 1st lesson
 test ("check sum of numbers", () => {
    // 1 - тестовые данные
    const a:number = 3
    const b:number = 7
    // 2 - выполнение тестируемого кода
    const result = sum(a, b)
    // 3 - проверка результата
    expect(result).toBe(10)
 })

 //2 way sun function
 test ("check sum of numbers", () => {
    expect(sum(3,7)).toBe(10)
 }) 

 test ("check * of numbers", () => {
    expect(mult(3,7)).toBe(21)
 })

 test ("check divide of numbers", () => {
    expect(div(35,7)).toBe(5)
 })

 test ("check minus of numbers", () => {
    expect(sub(10,7)).toBe(3)
 })


test("calculator", () => {
    const actionSum: ActionType = {type: "sum", number: 7}
    expect(calculator(3,  actionSum)).toBe(10)

    const actionMult: ActionType = {type: "mult", number: 7}
    expect(calculator(3, actionMult) ).toBe(21)

    const actionDiv: ActionType = {type: "div", number: 7}
    expect(calculator(35, actionDiv) ).toBe(5)

    const actionSub: ActionType = {type: "sub", number: 7}
    expect(calculator(10, actionSub) ).toBe(3)
})
  

// 2nd lesson
//1
test("check sum of nums", () => {
   expect(summ(3, 4, 6, 10)).toBe(23)
})

//2
test("check side of triangle", () => {
   expect(getTriangleType(6, 4, 6)).toBe("01")
   expect(getTriangleType(6, 6, 6)).toBe("10")
   expect(getTriangleType(1, 2, 3)).toBe("00")
   expect(getTriangleType(4, 11, 9)).toBe("11")
})

//3
test("check sum", () => {
   expect(getSumOfNums (6)).toBe(6)
   expect(getSumOfNums (0)).toBe(0)
   expect(getSumOfNums (123)).toBe(6)
})