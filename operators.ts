interface Person{
    name: string
    age: number
}

type PersonKeys = keyof Person // 'name'|'age'

const key: PersonKeys  = 'name'
const key2: PersonKeys = 'age'


type User = {
    _id: number
    name: string
    email:string
    createdAt: Date
}

type UserKeysNoMeta = Exclude<keyof User, '_id'| 'createdAt'>
type UserKeysNoMeta2 = Pick<User, 'name'|'email'>