const incomes = [new Income('Salary', 2000.0), new Income('Car sale', 1500)];

const outflows = [
	new Outflow('Apartment rental', 900),
	new Outflow('Clothes', 400),
];

let loadApp = () => {
	loadHeading();
};

let totalIncomes = () => {
	let totalIncome = 0;
	for (let income of incomes) {
		totalIncome += income.value;
	}
	return totalIncome;
};

let totalOutflows = () => {
	let totalOutflow = 0;
	for (let outflow of outflows) {
		totalOutflow += outflow.value;
	}
	return totalOutflow;
};

let loadHeading = () => {
	let budget = totalIncomes() - totalOutflows();
	let outflowPercentage = totalOutflows() / totalIncomes();
	document.getElementById('budget').innerHTML = currencyFormat(budget);
	document.getElementById('percentage').innerHTML =
		percentageFormat(outflowPercentage);
	document.getElementById('incomes').innerHTML = currencyFormat(totalIncomes());
	document.getElementById('outflows').innerHTML = currencyFormat(
		totalOutflows()
	);
};

const currencyFormat = (value) => {
	return value.toLocaleString('en-US', {
		style: 'currency',
		currency: 'USD',
		minimumFractionDigits: 2,
	});
};

const percentageFormat = (value) => {
	return value.toLocaleString('en-US', {
		style: 'percent',
		minimumFractionDigits: 2,
	});
};
