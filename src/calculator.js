export function add(input) {
    const sum = input.reduce((acumulator, item) => {
        return  (!(isNaN(item) || item === null )) ? acumulator+=item : acumulator
    })
    console.log(input);
    return sum;
}

export function decress(input) {
    const down = input.reduce((acumulator, item) => {
        return  (!(isNaN(item) || item === null )) ? acumulator-=item : acumulator
    })
    console.log(input);
    return down;
}

export function multiply(input) {
    const multiplayInput = input.reduce((acumulator, item) => {
        return  (!(isNaN(item) || item === null )) ? acumulator*=item : acumulator
    })
    console.log(input);
    return multiplayInput;
}

export function divide(input) {
    const divideInput = input.reduce((acumulator, item) => {
        return  (!(isNaN(item) || item === null )) ? acumulator/=item : acumulator
    })
    console.log(input);
    return divideInput;
}

export function modulo(input) {
    const moduloInput = input.reduce((acumulator, item) => {
        return  (!(isNaN(item) || item === null )) ? acumulator%=item : acumulator
    })
    console.log(input);
    return moduloInput;
}