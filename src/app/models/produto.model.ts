export class Produto {

  id: string;
  nome: string;
  descricao: string;

  imagens: string[];
  tags: string[];

  idEstilo: string; // Cubismo, Realismo, etc...
  idTamanho: string;
  idTecnica: string; // Aquarela, Grafite, Mista, etc...
  idTema: string; // Pet, Pessoas famosas, Personagens, etc...
  idSuperficie: string; // Madeira, Tela, Papel, etc...

}
