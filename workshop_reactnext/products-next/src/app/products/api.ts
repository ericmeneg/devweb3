import { IProduct, IProductRequest } from '@/interfaces/product.interface'

const apiUrl = 'http://localhost:3000/products'

export async function getProducts(): Promise<IProduct[]>{
    try{
        const response = await fetch(apiUrl)
        const json = await response.json()
        return json
    }
    catch{
        return []
    }
}

export async function createProduct(data: IProductRequest){
    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    if (response.status == 201){
        alert('Produto cadastrado com sucesso!')
    }

    console.log(response)
}

export async function getOneProductById(id: string): Promise<IProduct | null> {
    const response = await fetch(apiUrl+'/'+id)
    if (response.status != 200) return null
    const json = await response.json()
    return json
}