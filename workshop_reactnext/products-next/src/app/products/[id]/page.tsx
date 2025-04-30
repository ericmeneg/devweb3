import { getOneProductById } from "../api"

export default async function ProductView({params}: {
    params: Promise<{id: string}>
}) {
    const {id} = await params // igual a const id= await params.id
    const product  = await getOneProductById(id)
    if (!product){
        return(<h1>Produto não encontrado</h1>)
    }
    return(
        <div>{product?.name} - {product?.price}</div>
    )
} 