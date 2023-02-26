export function getFormattedCurrencyByCountry(num: number, country: string): string {
	let formattedNum: string;

	switch (country) {
		case 'BR':
			formattedNum = num.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
			break;
		case 'USA':
			formattedNum = num.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
			break;
		case 'Japan':
			formattedNum = num.toLocaleString('ja-JP', {style: 'currency', currency: 'JPY'});
			break;
		case 'Germany':
			formattedNum = num.toLocaleString('de-DE', {style: 'currency', currency: 'EUR'});
			break;

		default:
			formattedNum = num.toLocaleString();
	}

	return formattedNum;
}