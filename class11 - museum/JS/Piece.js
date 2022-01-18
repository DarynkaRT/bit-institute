class Piece{
  constructor(titulo, description){
    this.titulo = titulo;
    this.description = description;
  }

  getTitulo(){
    return this.titulo;
  }

  setTitulo( titulo ){
    this.titulo = titulo
  }

  getDescription(){
    return this.description
  }
  
  setDescription( description ){
    this.description = description
  }
}