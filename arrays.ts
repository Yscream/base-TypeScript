let arr:string[]

arr = ["1","2","3"]

//old way to declare
let oldArr:Array<string>

//type read-only
const numbers:ReadonlyArray<number> = [0,1,2]
// numbers[0] = 10 error: Index signature in type  readonly number[]  only permits reading
// numbers.push(1) error: Property 'push' does not exist on type 'readonly number[]'.

//tuples
type TypeArray = [number, string, null]

const newArray:TypeArray = [1, "2", null]