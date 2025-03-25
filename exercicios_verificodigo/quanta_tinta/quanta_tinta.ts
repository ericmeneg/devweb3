function calculoTinta(area: number): object{
    let nroLatas: number = 0
    let nroGaloes: number = 0
    if (area <= 64.8){
        nroGaloes = Math.ceil(area/64.8)
        return {
            latas: 0,
            galoes: nroGaloes
        }
    } else {
        nroLatas = Math.floor(area / 108)
        if (area % 108 <= 64.8){
            nroGaloes = Math.ceil(area/64.8)
        } else {
            nroLatas ++
        }
        return {
            latas: nroLatas,
            galoes: nroGaloes
        }
    }
}