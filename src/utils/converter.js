export function ConvertTemp(value, fromUnit, toUnit) {
    const num = parseFloat(value);
    let conNum = 0;

    if (Number.isNaN(num)) {
        return 'invalid';
    }

    if (fromUnit === 'celsius' && toUnit === 'celsius') {
        conNum = num;
    } else if (fromUnit === 'celsius' && toUnit === 'fahrenheit') {
        conNum = (num * (9 / 5)) + 32;
    } else if (fromUnit === 'celsius' && toUnit === 'kelvin') {
        conNum = num + 273.15;
    } else if (fromUnit === 'fahrenheit' && toUnit === 'celsius') {
        conNum = (num - 32) * (5 / 9);
    } else if (fromUnit === 'fahrenheit' && toUnit === 'fahrenheit') {
        conNum = num;
    } else if (fromUnit === 'fahrenheit' && toUnit === 'kelvin') {
        conNum = (num - 32) * (5 / 9) + 273.15;
    } else if (fromUnit === 'kelvin' && toUnit === 'celsius') {
        conNum = num - 273.15;
    } else if (fromUnit === 'kelvin' && toUnit === 'fahrenheit') {
        conNum = (num - 273.15) * (9 / 5) + 32;
    } else if (fromUnit === 'kelvin' && toUnit === 'kelvin') {
        conNum = num;
    } else {
        return 'error'
    }
    return conNum;
}