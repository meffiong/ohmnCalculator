function colorCombo(bandAColor, bandBColor, bandCColor, bandDColor){
	var a;
	var b;
	var d;

	var round = {
		round: function(value, decimals) {
	  		return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
		}
	}

	switch(bandAColor){
		case 'black':
			a = "0";
			break;
		case 'brown':
			a = "1";
			break;
		case 'red':
			a = "2";
			break;
		case 'orange':
			a = "3";
			break;
		case 'yellow':
			a = "4";
			break;
		case 'green':
			a = "5";
			break;
		case 'blue':
			a = "6";
			break;
		case 'violet':
			a = "7";
			break;
		case 'grey':
			a = "8";
			break;
		case 'white':
			a = "9";
			break;
	}

	switch(bandBColor){
		case 'black':
			b = "0";
			break;
		case 'brown':
			b = "1";
			break;
		case 'red':
			b = "2";
			break;
		case 'orange':
			b = "3";
			break;
		case 'yellow':
			b = "4";
			break;
		case 'green':
			b = "5";
			break;
		case 'blue':
			b = "6";
			break;
		case 'violet':
			b = "7";
			break;
		case 'grey':
			b = "8";
			break;
		case 'white':
			b = "9";
			break;
	}

	var value = a + b

	switch(bandCColor){
		case 'pink':
			value = value * .001;
			break;
		case 'silver':
			value = value * .01;
			break;
		case 'gold':
			value = value * .1;
			break;
		case 'black':
			value = value;
			break;
		case 'brown':
			value = value * 10;
			break;
		case 'red':
			value = value * 100;
			break;
		case 'orange':
			value = value * 1000;
			break;
		case 'yellow':
			value = value * 10000;
			break;
		case 'green':
			value = value * 100000;
			break;
		case 'blue':
			value = value * 1000000;
			break;
		case 'violet':
			value = value * 10000000;
			break;
		case 'grey':
			value = value * 100000000;
			break;
		case 'white':
			value = value * 1000000000;
			break;
	}

	var d = value * .2;
	switch(bandDColor){
		case 'pink':
			d = value * .2;
			break;
		case 'silver':
			d = value * .1;
			break;
		case 'gold':
			d = value * .05;
			break;
		case 'black':
			d = value * .2;
			break;
		case 'brown':
			d = value * .01;
			break;
		case 'red':
			d = value * .02;
			break;
		case 'orange':
			d = value * .2;
			break;
		case 'yellow':
			d = value * .05;
			break;
		case 'green':
			d = value * .005;
			break;
		case 'blue':
			d = value * .0025;
			break;
		case 'violet':
			d = value * .001;
			break;
		case 'grey':
			d = value * .0005;
			break;
		case 'white':
			d = value * .2;
			break;
	}

	return (round.round(value, 3));


}

module.exports = colorCombo