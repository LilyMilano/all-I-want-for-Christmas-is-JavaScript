const personas = [
    new Persona('Mariana', 'Milano'),
    new Persona('Ramón', 'Milano')
];

function mostrarPersonas(){
    console.log('Mostrar personas:');
    let texto = '';
    for(let persona of personas){
        console.log(persona);
        texto += `<li>${persona.name} ${persona.lastname}</li>`;
    }
    document.getElementById('personas').innerHTML = texto;
}