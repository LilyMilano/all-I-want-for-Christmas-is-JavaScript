class Person{
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    }  
}

let person1 = new Person('Juan', 'Perez');
console.log(person1);   //  Person { name: 'Juan', surname: 'Perez' }

let person2 = new Person('Carlos', 'Lara');
console.log(person2);   //  Person { name: 'Carlos', surname: 'Lara' }
