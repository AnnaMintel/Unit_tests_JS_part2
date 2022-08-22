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