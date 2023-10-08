//ts has 3 modifiers:
//private
//public
//protect

class Car {
    name: string
    price: number

    constructor(name: string, price:number) {
        this.name = name
        this.price = price
    }

    //public by default
     getInfo(): string {
        return `${this.name}, ${this.price}`
    }
}

class Bus extends Car {
    constructor(name: string, price: number) {
        super(name, price);
    }

    test() {
        return this.getInfo()
    }
}

new Car("Audi", 100000).getInfo()
