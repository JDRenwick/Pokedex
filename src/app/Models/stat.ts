export class Stat {
    stat: {
        name: string;
    }
    base_stat: number

    constructor(name: string) {
        this.stat.name = name;
    }
}