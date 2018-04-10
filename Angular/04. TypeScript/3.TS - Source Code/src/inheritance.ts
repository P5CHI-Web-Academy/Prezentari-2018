import {Point} from "./declaration";

class Point3D extends Point {
    z: number;

    constructor(x: number, y: number, z: number) {
        super(x, y);
        this.z = z;
    }

    add(point: Point3D) {
        var point2D = super.add(point);
        return new Point3D(point2D.x, point2D.y, this.z + point.z);
    }

}

var p1 = new Point3D(0, 10, 100);
var p2 = new Point3D(10, 20, 30);
var p3 = p2.add(p1); // {x:10,y:30}

console.log(p3);