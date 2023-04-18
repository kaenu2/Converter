const data = {
	euro: 89.64,
	usd: 81.55,
};

let valueOne = 'rub';
let valueTwo = 'usd';

const oneInput = document.getElementById('one');
const twoInput = document.getElementById('two');
const selectOne = document.querySelector('.list-one');
const selectTwo = document.querySelector('.list-two');

const calcConverter = (selectOne, selectTwo, value) => {
	if (selectOne === 'rub' && selectTwo === 'rub') {
		twoInput.value = value;
	}
	if (selectOne === 'rub' && selectTwo === 'usd') {
		twoInput.value = (value * data.usd).toFixed(2);
	}
	if (selectOne === 'rub' && selectTwo === 'euro') {
		twoInput.value = (value * data.euro).toFixed(2);
	}

	if (selectOne === 'usd' && selectTwo === 'usd') {
		twoInput.value = value;
	}
	if (selectOne === 'usd' && selectTwo === 'rub') {
		twoInput.value = (value * data.usd).toFixed(2);
	}
	if (selectOne === 'usd' && selectTwo === 'euro') {
		twoInput.value = ((value * data.usd) / data.euro).toFixed(2);
	}

	if (selectOne === 'euro' && selectTwo === 'euro') {
		twoInput.value = value;
	}
	if (selectOne === 'euro' && selectTwo === 'rub') {
		twoInput.value = (value * data.euro).toFixed(2);
	}
	if (selectOne === 'euro' && selectTwo === 'usd') {
		twoInput.value = ((value * data.euro) / data.usd).toFixed(2);
	}
};

calcConverter(valueOne, valueTwo, oneInput.value);

selectOne.onchange = (e) => {
	let i = selectOne.value;
	valueOne = i;
	calcConverter(valueOne, valueTwo, oneInput.value);
};
selectTwo.onchange = (e) => {
	let i = selectTwo.value;
	valueTwo = i;
	calcConverter(valueOne, valueTwo, oneInput.value);
};

oneInput.oninput = (e) => {
	if (e.target.value === '') return;
	const value = e.target.value;
	calcConverter(valueOne, valueTwo, value);
};
