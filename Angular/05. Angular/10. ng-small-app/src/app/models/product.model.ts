import { DomSanitizer } from '@angular/platform-browser'

let images = [
    "https://cdn.iconscout.com/public/images/icon/free/png-512/product-box-packaging-logistic-pack-347760bf399c39ac-512x512.png",
    "https://images.designtrends.com/wp-content/uploads/2016/04/01102639/Packed-Products-Icon.png"
];
let idIndex = 0;

export class ProductModel {
    public name: string = ''
    public description: string = ''
    public image: string = ''
    public id: number;
    
    constructor() {
        this.id = ++idIndex;
        this.image = images[idIndex % images.length];  
    }

    getSafeImage() {
        // TODO
    }

    loadData(data) {
        if (typeof(data) !== "object" || !data) return this;
        [
            "name",
            "description"
        ].forEach((key) => {
            if ((key in data) && typeof(data[key]) === typeof(this[key])) {
                this[key] = data[key];
            } 
        });

        return this;
    }
}