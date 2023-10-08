type TypeUser = {
    name: string
    age: number
}

const user:TypeUser = {
    age: 21,
    name: "Yehor"
}

//---------

type TypeAddress = {
    city: string
    country: string
}

const address: TypeAddress = {
    country: "Ukraine",
    city: "Dnipro",
}

//merge types

const common = {
    ...user, ...address
}

//or

let common2: TypeUser & TypeAddress

common2 = {
    ...user, ...address
}

//or

type Car = {
    name: string
    model: string
}

type Person = {
    fName: string
    lName: string
} & Car

const person: Person = {
    fName: "Max",
    lName: "Wayne",
    name: "Audi",
    model: "RS7"
}