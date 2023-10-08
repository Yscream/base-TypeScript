function entity<T>(args: T): T {
    return args
}

entity<number>(1)
entity<string>("str")
entity<boolean>(true)
//..., etc.

class Channel<T> {
    private name: T

    constructor(name: T) {
        this.name = name
    }

    getName(): T {
        return this.name
    }
}

new Channel<string>("Dota2")
new Channel<number>(22)


// arrow func
const entity2 = <T>(args: T): T => {
    return args
}

// interface
interface Pair<K, V> {
    key: K
    value: V
}

const pair1: Pair<string, number> = {
    key: "1",
    value: 1
}
const pair2: Pair<string, boolean> = {
    key: "1",
    value: true
}
const pair3: Pair<string, string> = {
    key: "1",
    value: "cool"
}

// generic by default
type Length = {
    length: number
}
function getNameLength<T extends Length>(unit: T): number {
    return unit.length
}

getNameLength("bebra")
getNameLength([1,2,3])
