enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
};
class Picture {
    public id: number;
    public title: string;
    private orientation: PhotoOrientation;

    public constructor(id: number, title: string, orientation: PhotoOrientation){
        this.id = id;
        this.title = title;
        this.orientation = orientation;
    };
    public kindOfOrientation(): void{
        console.log("the orientation is: ", this.orientation);
      };
    };
    
    const picture: Picture = new Picture(
      1, "es un lindo paisaje", PhotoOrientation.Landscape
    );

console.log(picture.id);

