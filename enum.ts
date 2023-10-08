enum EnumRoles {
    ADMIN = 0, GUEST = 1, USER = 2
}

interface User {
    role: EnumRoles
}

const user: User = {
    role: EnumRoles.ADMIN
}

//better to use const with enum to optimize
const enum EnumColors {
    black, pink, green
}

interface User2 {
    role: EnumRoles
    color: EnumColors
}

const user2: User2 = {
    role: EnumRoles.USER,
    color: EnumColors.pink
}

//reverse mapping
console.log(EnumRoles[EnumRoles.ADMIN])