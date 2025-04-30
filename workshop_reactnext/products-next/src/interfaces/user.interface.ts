export interface IUser {
  id: number;
  name: string;
  email: string;
}

export interface IUserRequest {
  password: string,
  name: string,
  email: string
}