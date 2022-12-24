//? person is an Object
        
let person = {      
    name:'Juan',
    surname: 'Perez',
    email: 'jperez@gmail.com',
    age: 28,
    language: 'es',
    get lang(){
        return this.language.toUpperCase();
    },
    set lang(lang){
        this.language = lang.toUpperCase();
    },
    get fullName(){
        return this.name + ' ' + this.surname;
    }
};

console.log(person.lang);       //  ES
person.lang = 'en';
console.log(person.language);   //  EN
console.log(person.fullName);   //  Juan Perez

