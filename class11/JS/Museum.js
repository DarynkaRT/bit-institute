class Museum {
    constructor() {
        this.pieces = [];
    }
    getPieces() {
        return this.pieces
    }
    setPieces(pieces) {
    }

    initializeGallery() {
        let piece1 = new Piece("Rumiko Takahashi", "  (Niigata, Japón, 10 de octubre de 1957) es una mangaka japonesa.1​ Estudió química en la universidad, al mismo tiempo que dibujaba mangas.Artista prolífica y con obras de diversas temáticas, Rumiko Takahashi ha sido y es una de las artistas del manga más notables, con obras como Urusei Yatsura, Maison Ikkoku, Ranma ½ e InuYasha entre otras muchas, por su gran trayectoria y éxito se ha ganado el título de 'La Reina del manga'.​");
        let piece2 = new Piece("Inuyasha (1996)", "Se basa en la historia de una joven llamada Kagome que al cumplir 15 años viaja a través del tiempo por medio de un pozo magico (que se encuentra en un templo que esta en su casa) hasta regresar a la epoca de las guerras civiles es alla donde encuentra al personaje principal (Inuyasha). ");
        let piece3 = new Piece("Kagome", "Es una chica de 15 años de edad, estudiante de tercero de secundaria y proveniente de la época contemporánea.13Es la reencarnación de Kikyō, la misma sacerdotisa que había sellado a InuYasha y muerto hace 50 años. Debido a esto, Kagome tiene la esfera de Shikon (o esfera de los 4 espíritus) en su interior y tiene poderes espirituales y la capacidad de percibir la presencia de los fragmentos de la perla de Shikon (perla de los cuatro espíritus).13Kagome, conforme avanza la historia, se enamora de InuYasha. Al final de la serie desea desaparecer la perla de shikon, pidiendo así el deseo correcto. Su seiyū es Satsuki Yukino.");
        let piece4 = new Piece("Inuyasha", "Inuyasha (犬夜叉? trad. Inu: Perro, Yasha: del demonio Yaksha, figurativamente 'demonio')11 es un hanyō (mitad humano y bestia). Fue sellado por Kikyō durante cincuenta años en el árbol sagrado del cual despierta gracias a Kagome.12InuYasha, al comienzo, solo busca la perla de Shikon(más conocida por la perla de los cuatro espíritus en castellano) para convertirse en un yōkai (demonio) completo. Posee las características de un demonio-perro: fiero, indomable y obstinado. Su padre le deja la espada Tessaiga (Tetsusaiga tal y como es llamada en el manga/ y colmillo de acero en la versión latina)");
        let piece5 = new Piece("Naraku", "Naraku (奈落 Naraku, lit. Infierno) es el antagonista principal del manga y anime InuYasha. Es un ser despiadado y cruel pero extremadamente inteligente.Naraku es un demonio que ha causado desgracia para todos los que tengan contacto con la perla de shikon, por ejemplo a la sacerdotisa Kikyo quien fue su primera víctima junto a Inuyasha; después Miroku por la maldición en su mano (Kazaana o agujero negro), sigue Sango una exterminadora de monstruos a la que Naraku mató a toda su familia y usó a su hermano menor Kohaku para sus trabajos sucios. Después a Kōga, matando a casi toda su tribu.");
        this.pieces.push(piece1)
        this.pieces.push(piece2)
        this.pieces.push(piece3)
        this.pieces.push(piece4)
        this.pieces.push(piece5)
    }
}