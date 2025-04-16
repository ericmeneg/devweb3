import Image from "next/image";
import Link from "next/link";

interface IUser {
  id: number,
  name: string,
  username: string,
  email: string
}

const result = await fetch('https://jsonplaceholder.typicode.com/users') 
const users: IUser[] = await result.json()

export default async function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1> Lista de Usuários</h1>
      <ul>
        {
          users.map((user: IUser) => (
            <li key={user.id}>{user.name} = {user.email}</li>
          ))
        }
      </ul>
    </div>
  );
}
