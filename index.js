const data = {
	euro: 89.64,
	usd: 81.70,
	kzt: 5.60,
};

let valueOne = 'rub';
let valueTwo = 'kzt';

const oneInput = document.getElementById('one');
const twoInput = document.getElementById('two');
const selectOne = document.querySelector('.list-one');
const selectTwo = document.querySelector('.list-two');

const calcConverter = (selectOne, selectTwo, value) => {
	if (selectOne === 'rub' && selectTwo === 'rub') {
		twoInput.value = value;
	}
	if (selectOne === 'rub' && selectTwo === 'usd') {
		twoInput.value = (value / data.usd).toFixed(2);
	}
	if (selectOne === 'rub' && selectTwo === 'euro') {
		twoInput.value = (value / data.euro).toFixed(2);
	}
	if (selectOne === 'rub' && selectTwo === 'kzt') {
		twoInput.value = (value * data.kzt).toFixed(2);
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
	if (selectOne === 'usd' && selectTwo === 'kzt') {
		twoInput.value = ((value * data.usd) * data.kzt).toFixed(2);
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
	if (selectOne === 'euro' && selectTwo === 'kzt') {
		twoInput.value = ((value * data.euro) * data.kzt).toFixed(2);
	}

	if (selectOne === 'kzt' && selectTwo === 'kzt') {
		twoInput.value = value;
	}
	if (selectOne === 'kzt' && selectTwo === 'rub') {
		twoInput.value = (value / data.kzt).toFixed(2);
	}
	if (selectOne === 'kzt' && selectTwo === 'usd') {
		twoInput.value = ((value / data.kzt) / data.usd).toFixed(4);
	}
	if (selectOne === 'kzt' && selectTwo === 'euro') {
		twoInput.value = ((value / data.kzt) / data.euro).toFixed(4);
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
