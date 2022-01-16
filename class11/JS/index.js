let museum = new Museum();
museum.initializeGallery();

function showInfoByOnMouseAutor(){
  
  let pieceMuseum = museum.getPieces();
  var messageAutor = document.getElementById('messageAutor');
  messageAutor.innerHTML = pieceMuseum[0].getDescription();

  var titleAutor = document.getElementById('titleAutor');
  titleAutor.innerHTML = pieceMuseum[0].getTitulo();

};


function showInfoByOnMouseManga(){
  
  let pieceMuseum = museum.getPieces();
  var messageManga = document.getElementById('messageManga');
  messageManga.innerHTML = pieceMuseum[1].getDescription();


  var titleManga = document.getElementById('titleManga');
  titleManga.innerHTML = pieceMuseum[1].getTitulo();

};

function showInfoByOnClicKagome(){
  
  let pieceMuseum = museum.getPieces();
  alert(pieceMuseum[2].getDescription())

};

function showInfoByOnClicInuyasha(){

  let pieceMuseum = museum.getPieces();
  var textInuyasha = document.getElementById('textInuyasha');
  textInuyasha.innerHTML = pieceMuseum[3].getDescription();
  
  var messageInuyasha = document.getElementById('messageInuyasha');
  if(messageInuyasha.style.display == 'none' || messageInuyasha.style.display==""){

    messageInuyasha.style.display = 'block'
    
  }else{

    messageInuyasha.style.display = 'none'
    
  }

};
function showInfoByOnClicNaraku(){
  
  let pieceMuseum = museum.getPieces();
  var textNaraku = document.getElementById('textNaraku');
  textNaraku.innerHTML = pieceMuseum[4].getDescription();

  var messageNaraku = document.getElementById('messageNaraku');
  
  if(messageNaraku.style.display == 'none' || messageNaraku.style.display==""){

    messageNaraku.style.display = 'block'

  }else{

    messageNaraku.style.display = 'none'

  }

};
