// 1st lesson
export const sum = (a: number, b: number) => {
    return a + b;
}
export const mult = (a: number, b: number): number => {
    return a * b;
}
export const div = (a: number, b: number): number => {
    return a / b;
}
export const sub = (a: number, b: number): number => {
    return a - b;
}

// a - data (исходный параметр), {type: "sum" (тип измененияЖ  плюс, минус и тд), number(второе число) }
export type ActionType = {
    type: "sum" | "mult" | "div" | "sub"
    number: number
}
export const calculator = (state: number, action: ActionType) => {
    switch (action.type) {
        case "sum":
            return state + action.number
        case "mult":
            return state * action.number
        case "div":
            return state / action.number
        case "sub":
            return state - action.number
        default:
            return state
    }
}

// 2nd lesson
// 1 - функция принимает параметром целые положительные числа и возвращает их сумму
export const summ = (...numbers: Array<number>) => {
    return numbers.reduce((acc, el) => acc + el)
}

// 2 - функция getTriangleType
export const getTriangleType = (a: number, b: number, c: number) => {

    let result;

    if ((a == b && a !== c) || (a == c && a !== b) || (c == b && c !== a)) {
        result = "01"
    } else if (a == b && a == c) {
        result = "10"
    } else if (a >= b + c || b >= a + c || c >= b + a || a == 0 || b == 0 || c == 0) {
        result = "00"
    } else {
        result = "11"
    }
    return result;
}

// 3 - функция getSum of nums
export const getSumOfNums = (number: number) => {
    return number.toString().split("").reduce((a, b) => a + Number(b), 0)
}

// 4 - функция isEvenSumGenerator
export const isEvenSumGenerator = (arr: Array<number>) => {
    let evenArr:any = [];
    let unEvenArr:any = [];
    for (let i = 0; i < arr.length; i++) {

        if (i % 2 == 0) (
            evenArr.push(arr[i])
        )
        if (i % 2 != 0) {
            unEvenArr.push(arr[i])
        }
    }
    function arrayEvenSum(){
        let sum1 = 0;
        for(let i = 0; i < evenArr.length; i++){
            sum1 += evenArr[i];
     }
     return sum1
    }
     function arrayUNEvenSum (){
        let sum2 = 0;
        for(let i = 0; i < unEvenArr.length; i++){
            sum2 += unEvenArr[i];
     }
     return sum2
    }
     return arrayEvenSum() > arrayUNEvenSum() ? true : false
}
//2 variant
export const isEvenSumGenerator2 = (arr: Array<number>) => {
    let odd = 0;
    let even = 0;
    arr.reduce( (acc, el, index) =>index % 2 === 0 ? even += el : odd += el)
    return even > odd
}

// 5 - функция isSquare
// export const isSquare = (pl1: number, pl2: number) => {
//     let diametrCircle = 0
//     let diametrSquare = 0

//     return 
// }