//TODO: Person Object Constructor Function:
function Person(name, surname, email){
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.fullName = function(){
        return this.name + ' ' + this.surname;
    }
};

Person.prototype.phone = '44332211'

let father = new Person( 'Juan', 'Perez', 'jperez@gmail.com');
father.phone = '11223344'
console.log(father.phone);      // 11223344    

let mother = new Person('Laura', 'Quintero', 'lquintero@gmail.com');
console.log(mother.phone);      // 44332211
