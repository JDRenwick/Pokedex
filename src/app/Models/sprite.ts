export class Sprite {
    type: "Regular" | "Shiny";
    sex: "Male" | "Female";
    src: string;

    constructor(type: "Regular" | "Shiny", sex: "Male" | "Female", src: string) {
        this.type = type;
        this.sex = sex;
        this.src = src;
    }
}