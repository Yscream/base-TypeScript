type TypeChannel = {
    name: string
}

function getChannel(name: string):TypeChannel {
    return {name: "1+1"}
}

//via arrow function
const getChannel2 = (name:string): TypeChannel => {
    return {name: "2+2"}
}

//arrow func as type
type TypeChannelArrowFunc = (name: string) => void


//func with ellipsis
const  getNumbers = (...numbers: number[]) => {
    return numbers
}
getNumbers(1,2,3,4)

//funcs overload
function getCar(name: string): string
function getCar(name: string, price: number): string
function getCar(name: string, price?:number): string { // price? - means that value might be undefined
    return price ? `Name ${name}, Цена ${price}` : `Название ${name}`
}

const car1 = getCar('Audi')
const car2 = getCar('Audi', 10000)
// const car3 = getCar('Audi', 10000, "Toyota") error: Expected 1-2 arguments, but got 3.
