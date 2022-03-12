class Person {

    static nextId = 0;
    data = new Map();
    
    constructor(name, age, pass){
        this.id = Person.getStaticId();
        this.name = name;
        this.age = age;
        
        this.getPrivateData = () => console.log(pass);
    }

    sayHello(){
        console.log(`My name is ${this.name}`);
    }

    

    static whoAreThey(p1, p2){
        console.log(`${p1.name} and ${p2.name} are best friends`);
    }
    static getStaticId(){
        return Person.nextId++;
    }

    toString(){
        return `${this.name} (age: ${this.age}, id: ${this.id})`
    }
}

let person1 = new Person('Ivan', 30, 'Bugs Bunny');
let person2 = new Person('Peter', 20, 'Miki Mouse');
let person3 = new Person('Rody', 40, 'Cena');
console.log(person1);
console.log(person2);
console.log(person3);

person1.sayHello()

person2.getPrivateData()

console.log(person2.toString());

Person.whoAreThey(person1, person2)