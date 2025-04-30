'use client'
import { IProduct } from "@/interfaces/product.interface";
import { useEffect, useState } from "react";
import { getProducts } from "./api";
import ProductCard from "@/components/product/ProductCard";

export default function Products(){
    const [products, setProducts] = useState<IProduct[]>([])

    async function findProducts(){
        const products = await getProducts()
        setProducts(products)
    }

    useEffect( () => {
        findProducts()
    }, [])

   return (
    <div className="mt-8 w-full flex flex-col justify-center items-center">
        <h1 className="text-4xl text-gray-600 mb-5">Produtos</h1>
        
        <div className="flex justify-around flex-wrap">
        {
            products.map((product) => (
                <ProductCard key={product.id}
                product= {product} />
            ))
        }
        </div>
    </div>
    )
}