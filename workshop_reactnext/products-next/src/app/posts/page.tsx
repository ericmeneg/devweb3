'use client'
import { useState, useEffect } from 'react'
import { IPost } from '../../interfaces/post.interface'
import Link from 'next/link'

export default function Posts() {
    const [posts, setPosts] = useState<IPost[]>([])

    useEffect(() => {
        async function carregarPosts(){
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const json = await response.json()
            setPosts(json)
        }

        carregarPosts()
    }, [])

    return(
        <>
        <h1 className="font-extrabold">Posts</h1>
        <Link href='/'>Home</Link>
        <div className='grid grid-cols-3 gap-5'>
        {
            posts.map((post) => (
                <div className='border-1' key={post.id}>{post.title}</div>
            ))
        }
        </div>
        </>
    )
}