export class Games{
    id:number;
    name:String;
    link:String;
    imageLink:String;
    desc:String;
    constructor(id:number,
        name:String,
        link:String,
        imageLink:String,
        desc:String){
            this.id=id;
            this.name=name;
            this.link=link;
            this.imageLink=imageLink;
            this.desc=desc;
        }

}