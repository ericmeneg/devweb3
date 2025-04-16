import Link from "next/link";

export default function Menu() {
    return (
        <nav className="flex items-center justify-around my-5 border-1 border-solid border-gray-600">
            <Link href='/'>Home</Link>
            <Link href='/products'>Produtos</Link>
        </nav>
    )
}