interface Car {
    id: number
    name: string
    price: number
    yearBuilt: number
}
//omit
interface CarCreate extends Omit<Car, 'id'>{}
const car1: CarCreate = {
    name: "Audi",
    price: 100000,
    yearBuilt: 2022
}

//pick
interface CarID extends Pick<Car, 'id'>{}
const car2: CarID = {
    id: 1
}

//partial - makes fields optional
interface OptionalCar extends Partial<Car>{}
const car3: OptionalCar = {         //no error

}

//read-only - make fields only for read
interface ReadOnlyCar extends Readonly<Car>{}


//custom type
//name and price might be as string and number
type CarRecord = Record<"name" | "price", string | number>
const car4: CarRecord = {
    name: 1,
    price: "sss"
}
const car5: CarRecord = {
    name: "Audi",
    price: 100000
}

