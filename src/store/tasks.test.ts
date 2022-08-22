import { sum } from "./tasks"


 test ("check sum of numbers", () => {
    // 1 - тестовые данные
    const a:number = 3
    const b:number = 7
    // 2 - выполнение тестируемого кода
    const result = sum(a, b)
    // 3 - проверка результата
    expect(result).toBe(10)
 })