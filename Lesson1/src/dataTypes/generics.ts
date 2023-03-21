// Generics
function showStringData(a: string): string {
    return a
}

function showNumberData(a: number): number {
    return a
}

function showData<T>(a: T): T {
    return a
}
showData<number>(10)

const numArR = [1,2,3,4,5,6,7,8]
const stringArr = ["A", "B", "C"]
// const result = numArr.map(item => {
//     return item * item
// })

const we17307_maP = <T>(arr: T[], callback: (item: T, index: number) => T): T[] => {
    let temp = []
    for(let i = 0; i < arr.length; i++) {
        const newItem = callback(arr[i], i)
        temp.push(newItem)
    }
    return temp
}

const resulT = we17307_maP(stringArr, (item, index) => {
    return item + "-we17307" + " " + index
})

console.log(resulT);