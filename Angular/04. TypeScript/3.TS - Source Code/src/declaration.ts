export class Point {
    x: number;
    y: number;

    private getterExample: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    get GetterExample() {
        return {
            x: this.x,
            y: this.y
        }
    }

    set GetterExample(value) {
        (!value || isNaN(value)) {
            return;
        }
        this.getterExample = value;
    }

    add(point: Point) {
        return new Point(this.x + point.x, this.y + point.y);
    }
}

var p1 = new Point(0, 10);
var p2 = new Point(10, 20);
var p3 = p1.add(p2); // {x:10,y:30}


p1.GetterExample

