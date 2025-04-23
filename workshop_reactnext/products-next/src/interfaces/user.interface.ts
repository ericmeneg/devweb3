export interface IUser {
    id: number,
    name: string,
    username: string,
    email: string,
    address: IAdress
  }

export interface IAdress {
    street: string,
    city: string,
    zipcode: string
}