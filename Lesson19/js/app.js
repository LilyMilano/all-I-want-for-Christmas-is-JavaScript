const personas = [
	new Persona('Mariana', 'Milano'),
	new Persona('Ramón', 'Milano'),
];

function mostrarPersonas() {
	console.log('Mostrar personas:');
	let texto = '';
	for (let persona of personas) {
		console.log(persona);
		texto += `<li>${persona.name} ${persona.lastname}</li>`;
	}
	document.getElementById('personas').innerHTML = texto;
}

function agregarPersona() {
	const formulario = document.forms['formulario'];
	const name = formulario['name'];
	const lastname = formulario['lastname'];

	if (name.value != '' && lastname.value != '') {
		const persona = new Persona(name.value, lastname.value);
		console.log(persona);
		personas.push(persona);
		mostrarPersonas();
	} else {
		console.log('No information to add');
	}
}
