export default function verificaCep(cep: string): boolean {
    const cepLimpo = cep.replace("-", "")
    if (cepLimpo.length !== 8 || Number.isNaN(cepLimpo)){
        return false
    }

    return true
}