const lanscape = 0;
const portrait = 1;
const square = 2;
const panorama = 3

enum PhotoOrientation {
    lanscape = 0,
    portrait = 1,
    square = 2,
    panorama = 3
};

interface Photo {
    url: string
    type: number
    user: string
}

const photography = {
    url: "https://algo.com",
    type: 3,
    user: "user1"
}

if(photography.type === PhotoOrientation.panorama){
    // make the validation
}
  // without initializing
enum PhotoOrientation2 {
    lanscape,
    portrait,
    square,
    panorama
};

enum PhotoOrientation3 {
    lanscape = 10,
    portrait,
    square,
    panorama
}

console.log(PhotoOrientation3)

enum Country {
    Bolivia = 'bol',
    Colombia = 'col',
    Mexico = 'mex',
    EEUU = 'usa'
}

const country: Country = Country.Colombia;
console.log('country', country);