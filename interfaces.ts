interface UserAge {
    age: number
}

interface User extends UserAge{
    name: string
    email: string
}

const user: User = {
    email: "sdasda",
    name: "sddsa",
    age: 11
}
