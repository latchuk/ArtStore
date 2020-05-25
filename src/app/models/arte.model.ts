export class Arte {

    id: string;
    nome: string;
    descricao: string;
    dataCadastro: Date;
    dataEdicao: Date;
    valor: number;

    imagens: string[];
    tags: string[];

    idEstilo: string; // Cubismo, Realismo, etc...
    idTamanho: string; // A4, A3, 30 x 25, etc...
    idTecnica: string; // Aquarela, Grafite, Mista, etc...
    idTema: string; // Pet, Pessoas famosas, Personagens, etc...
    idSuperficie: string; // Madeira, Tela, Papel, etc...

}
