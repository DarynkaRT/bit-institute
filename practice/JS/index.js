let museum = new Museum();
museum.initializeGallery();

const artPieces = museum.getPieces();

function showInfoByClickButton(){
  alert( artPieces[0].getDescription() )
};