export function ConvertLen(value, fromUnit, toUnit) {
    const num = parseFloat(value);
    let conNum = 0;

    if (Number.isNaN(num)) {
        return 'invalid';
    }

    if((fromUnit === 'meters' && toUnit === 'meters') || (fromUnit === 'feet' && toUnit === 'feet')) {
        conNum = Number.parseFloat(num).toFixed(2);
    }else if (fromUnit === 'meters' && toUnit === 'feet') {
        conNum = Number.parseFloat(num * 3.28084).toFixed(2);
    } else if (fromUnit === 'feet' && toUnit === 'meters') {
        conNum = Number.parseFloat(num / 3.28084).toFixed(2);
    } else {
        return 'error';
    }
    return conNum;
}

export function ConvertTemp(value, fromUnit, toUnit) {
    const num = parseFloat(value);
    let conNum = 0;

    if (Number.isNaN(num)) {
        return 'invalid';
    }

    if ((fromUnit === 'celsius' && toUnit === 'celsius') || (fromUnit === 'fahrenheit' && toUnit === 'fahrenheit') || (fromUnit === 'kelvin' && toUnit === 'kelvin')) {
        conNum = num;
    } else if (fromUnit === 'celsius' && toUnit === 'fahrenheit') {
        conNum = Number.parseFloat((num * (9 / 5)) + 32).toFixed(2);
    } else if (fromUnit === 'celsius' && toUnit === 'kelvin') {
        conNum = Number.parseFloat(num + 273.15).toFixed(2);
    } else if (fromUnit === 'fahrenheit' && toUnit === 'celsius') {
        conNum = Number.parseFloat((num - 32) * (5 / 9)).toFixed(2);
    } else if (fromUnit === 'fahrenheit' && toUnit === 'kelvin') {
        conNum = Number.parseFloat((num - 32) * (5 / 9) + 273.15).toFixed(2);
    } else if (fromUnit === 'kelvin' && toUnit === 'celsius') {
        conNum = Number.parseFloat(num - 273.15).toFixed(2);
    } else if (fromUnit === 'kelvin' && toUnit === 'fahrenheit') {
        conNum = Number.parseFloat((num - 273.15) * (9 / 5) + 32).toFixed(2);
    } else {
        return 'error'
    }
    return conNum;
}

export function ConvertWeight(value, fromUnit, toUnit) {
    const num = parseFloat(value);
    let conNum = 0;

    if (Number.isNaN(num)) {
        return 'invalid';
    }

    if((fromUnit === 'kilograms' && toUnit === 'kilograms') || (fromUnit === 'pounds' && toUnit === 'pounds')) {
        conNum = Number.parseFloat(num).toFixed(2);
    } else if (fromUnit === 'kilograms' && toUnit === 'pounds') {
        conNum = Number.parseFloat(num * 2.2).toFixed(2);
    } else if (fromUnit === 'pounds' && toUnit === 'kilograms') {
        conNum = Number.parseFloat(num / 2.2).toFixed(2);
    } else {
        return 'error';
    }
    return conNum;
}