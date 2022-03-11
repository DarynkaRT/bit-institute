interface Carro{
    marca: string,
    modelo: number | string,
    tipo: number | string,
    anno: number
    techoCorredizo?: boolean
}

let Carro1: Carro ={
    marca: "mazda",
    modelo: 85,
    tipo: 326,
    anno: 2009,
    techoCorredizo: false
}

let Carro2: Carro = {
    marca: "dary",
    modelo: "chevrolet",
    tipo: 476,
    anno: 2022,
    techoCorredizo: false
}

function determineAnno(anno: number): number{
    return 2023 - anno;
}

if(determineAnno(Carro1.anno))

console.log(Carro1.modelo, Carro2.techoCorredizo);


