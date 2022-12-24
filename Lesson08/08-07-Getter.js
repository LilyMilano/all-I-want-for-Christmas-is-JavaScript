//? person is an Object
        
let person = {      
    name:'Juan',
    surname: 'Perez',
    email: 'jperez@gmail.com',
    age: 28,
    // fullName: function(){
    //     return this.name + ' ' + this.surname;
    // }
    get fullName(){
        return this.name + ' ' + this.surname;
    }
};

// Call function fullName as a property:
console.log(person.fullName);   //  Juan Perez
