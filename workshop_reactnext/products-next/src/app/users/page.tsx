'use client'

import Link from "next/link"
import { carregarUsers, cadastrarUser }  from "./api";
import { useEffect, useState } from "react";
import { IUser, IUserRequest } from "@/interfaces/user.interface";
import { useForm } from "react-hook-form";

export default function Users() {
    const[users, setUsers] =  useState<IUser[]>([])
    async function carregarDados(){
      const users = await carregarUsers()
      setUsers(users)
    }

    useEffect(()=>{
      carregarDados()
    },[])

    const { register, handleSubmit } = useForm<IUserRequest>()
    async function onSubmit(data: IUserRequest){
      const user = await cadastrarUser(data)
      console.log(user)
      carregarDados()
    }

    //componentizar o formulário depois
    return (
      <div>
        <form onSubmit = {handleSubmit(onSubmit)}>
          <input type='text' placeholder = "Nome" {...register('name')}/>
          <input type='text' placeholder= "Email" {...register('email')}/>
          <input type='password' placeholder= "Senha" {...register('password')}/>
          <button type="submit">Cadastrar</button>
        </form>
        <hr />
        <h1 className='font-extrabold'>Users</h1>
        <Link href='/'>Home</Link>
        <h1>Lista de users</h1>
        <ul>
          { users.map((user) => (
            <li key={user.id}>{user.id} - {user.name} | {user.email}</li>
          )) }
        </ul>
      </div>
    );
  }