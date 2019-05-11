import { Arrow } from './arrow';

export class Arrows {
    up: Arrow;
    left: Arrow;
    right: Arrow;
    down: Arrow;

    constructor(up: Arrow, left: Arrow, right: Arrow,  down: Arrow) {
        this.up = up;
        this.left = left;
        this.right = right;
        this.down = down;
    }
}