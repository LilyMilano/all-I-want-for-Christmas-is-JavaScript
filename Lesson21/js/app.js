const incomes = [new Income('Lottery', 2100.0), new Income('Car sale', 1500)];

const outflows = [
	new Outflow('Apartment rent', 900),
	new Outflow('Clothes', 400),
];

let loadApp = () => {
	loadHeading();
	loadIncomes();
	loadOutflows();
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

const loadIncomes = () => {
	let incomesHTML = '';
	for (let income of incomes) {
		incomesHTML += createIncomeHTML(income);
	}
	document.getElementById('incomes-list').innerHTML = incomesHTML;
};

const createIncomeHTML = (income) => {
	let incomeHTML = `
	<div class="element styleCleaner">
    <div class="element_description">${income.description}</div>
    <div class="right styleCleaner">
        <div class="element_value">${currencyFormat(income.value)}</div>
        <div class="element_delete">
            <button class='element_delete--btn'>
                <ion-icon name="close-circle-outline" onclick='deleteIncome(${
									income.id
								})'></ion-icon>
            </button>
        </div>
    </div>
</div>
	`;
	return incomeHTML;
};

const deleteIncome = (id) => {
	let indexToDelete = incomes.findIndex((income) => income.id === id);
	incomes.splice(indexToDelete, 1);
	loadHeading();
	loadIncomes();
};

const loadOutflows = () => {
	let outflowsHTML = '';
	for (let outflow of outflows) {
		outflowsHTML += createOutflowHTML(outflow);
	}
	document.getElementById('outflows-list').innerHTML = outflowsHTML;
};

const createOutflowHTML = (outflow) => {
	let outflowHTML = `
	<div class="element styleCleaner">
    <div class="element_description">${outflow.description}</div>
    <div class="right styleCleaner">
        <div class="element_value">- ${currencyFormat(outflow.value)}</div>
        <div class="element_percentage">${percentageFormat(
					outflow.value / totalOutflows()
				)}</div>
        <div class="element_delete">
            <button class='element_delete--btn'>
                <ion-icon name="close-circle-outline" onclick='deleteOutflow(${
									outflow.id
								})'></ion-icon>
            </button>
        </div>
    </div>
</div>
	`;
	return outflowHTML;
};

let deleteOutflow = (id) => {
	let indexToDelete = outflows.findIndex((outflow) => outflow.id === id);
	outflows.splice(indexToDelete, 1);
	loadHeading();
	loadOutflows();
};

let addData = () => {
	let formulary = document.forms['formulary'];
	let type = formulary['type'];
	let description = formulary['description'];
	let value = formulary['value'];
	if (description.value !== '' && value.value !== '') {
		if (type.value === 'income') {
			incomes.push(new Income(description.value, +value.value));
			loadHeading();
			loadIncomes();
		} else if (type.value === 'outflow') {
			outflows.push(new Outflow(description.value, +value.value));
			loadHeading();
			loadOutflows();
		}
	}
};
