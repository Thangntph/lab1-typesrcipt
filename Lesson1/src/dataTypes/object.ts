//khai báo
interface IUser {
    id: number,
    name: string,
    password: string,
    email: string
}
//kế thừa
interface IAdmin extends IUser{
    is_admin: boolean
}
//Khai báo
type TUser = {
    id: number,
    name: string,
    password: string,
    email: string
}
