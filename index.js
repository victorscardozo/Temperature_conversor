function convertTemperature() {


	var fromSelect = document.getElementById('fromSelect');
	var toSelect = document.getElementById('toSelect');
	var temp = document.getElementById('temp');


	var fromUnit = fromSelect.value;
	var toUnit = toSelect.value;
	var temperature = temp.value;


	var convertedTemperature;

	if (fromUnit === 'Celcius') {
		if (toUnit === 'Farenheit') {
			convertedTemperature = (temperature * 9 / 5) + 32;
		} else if (toUnit === 'Kelvin') {
			convertedTemperature = parseFloat(temperature) + 273.15;
		} else {
			convertedTemperature = temperature;
		}



	} else if (fromUnit === 'Farenheit') {
		if (toUnit === 'Celcius') {
			convertedTemperature = (temperature - 32) * 5 / 9;
		} else if (toUnit === 'Kelvin') {
			convertedTemperature = (temperature - 32) * 5 / 9 + 273.15;
		} else {
			convertedTemperature = temperature;
		}



	} else if (fromUnit === 'Kelvin') {
		if (toUnit === 'Celcius') {
			convertedTemperature = temperature - 273.15;
		} else if (toUnit === 'Farenheit') {
			convertedTemperature = (temperature - 273.15) * 9 / 5 + 32;
		} else {
			convertedTemperature = temperature;
		}


	} else {
		convertedTemperature = temperature;
	}


	
	alert(convertedTemperature);
}