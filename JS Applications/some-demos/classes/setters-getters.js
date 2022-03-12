//Accessor Properties - are methods that mimic values

class Circle {

    constructor(radius, border){ // if the property is declared in the constructor, cannot declare get outside the constructor. will be infinitive recursion. in stead declare in constructor as this._radius = radius and the can do setter which change _radius;
        this.radius = radius;
        this._border = border;
    }

    // get ---> return the value as стойност
    get diameter(){
        return this.radius * 2;
    }

    get area(){
        return this.radius ** 2 * Math.PI
    }

    get border() {
        return this._border;
    }

    //set ---> 
    set diameter(value){
        if(typeof value != 'number'){
            throw new TypeError('the value must be a NUMBER')
        }
        this.radius = value / 2;
    }

    set border(value){
        this._border = value; 
    }
    /* getDiameter(){
        return this.radius * 2;
    } */
}

const c = new Circle(4, 0.2);

//before setter
console.log(c);
console.log(c.diameter);
console.log(c.area);

//setter
c.diameter = 3333; // подаваме новата стойност, все едно подаваме стойност на свойство

//after setter
console.log(c);
console.log(c.diameter);
console.log(c.area);

//read-only properties are withOUT setter

