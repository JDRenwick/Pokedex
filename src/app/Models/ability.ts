export class Ability {
    ability: {
        name: string;
    }
    is_hidden: boolean

    constructor(name: string) {
        this.ability.name = name;
    }
}