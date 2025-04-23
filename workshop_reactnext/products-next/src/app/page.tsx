import Link from "next/link";

export default function Home() {
  return(
    <div>
      <h1 className='font-extrabold'>Home</h1>
      <nav>
        <Link href='/users'>Users</Link> <br />
        <Link href='/posts'>Posts</Link>
      </nav>
    </div>
  )
}