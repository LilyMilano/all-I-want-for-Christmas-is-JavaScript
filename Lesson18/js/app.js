console.log('Calculator Application');

function addition() {
	const formulary = document.getElementById('formulary');
	let addendA = formulary['addendA'];
	let addendB = formulary['addendB'];
	let result = parseInt(addendA.value) + parseInt(addendB.value);
	if (isNaN(result)) result = 'Operation does not include numbers';
	document.getElementById('result').innerHTML = `Result: ${result}`;
    console.log(`Result: ${result}`);
}
