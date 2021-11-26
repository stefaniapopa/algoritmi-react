import { add } from './calculator'
import { decress } from './calculator'
import { multiply } from './calculator'
import { divide } from './calculator'
import { modulo } from './calculator'


describe('Function tests', () => {
    it("should add pass", () => {
        expect(add([1,2,3])).toEqual(6); 
        expect(decress([1,2,3])).toEqual(-4); 
        expect(multiply([1,2,3])).toEqual(6);
        expect(divide([1,2,3])).toEqual(0.16666666666666666); 
        expect(modulo([1,2,3])).toEqual(1); 
    });
    it("should only add up the numbers and pass the rest", () => {
        expect(add([1,2,5,null, 'ab', NaN])).toEqual(8); 
        expect(decress([1,2,5,null, 'ab', NaN])).toEqual(-6);
        expect(multiply([1,2,5,null, 'ab', NaN])).toEqual(10); 
        expect(divide([1,2,5,null, 'ab', NaN])).toEqual(0.1); 
        expect(modulo([1,2,5,null, 'ab', NaN])).toEqual(1); 
    });
    it("should fail and show 'ab123' and pass the rest", () => {
        expect(add(['ab', null, '123'])).toEqual('ab123'); 
        expect(decress(['ab', null, '123'])).toEqual(NaN);
        expect(multiply(['ab', null, '123'])).toEqual(NaN);
        expect(divide(['ab', null, '123'])).toEqual(NaN);
        expect(modulo(['ab', null, '123'])).toEqual(NaN);
    });
    it("should show null and pass the rest", () => {
        expect(add([null])).toEqual(null); 
        expect(decress([null])).toEqual(null); 
        expect(multiply([null])).toEqual(null);
        expect(divide([null])).toEqual(null);
        expect(modulo([null])).toEqual(null);
    });
    it("should fail and show ' ' and pass the rest", () => {
        expect(add([' '])).toEqual(' '); 
        expect(decress([' '])).toEqual(' '); 
        expect(multiply([' '])).toEqual(' ');
        expect(divide([' '])).toEqual(' ');
        expect(modulo([' '])).toEqual(' ');
    });
    it("should pass and show '0' and pass the rest", () => {
        expect(add([0])).toEqual(0); 
        expect(decress([0])).toEqual(0);
        expect(multiply([0])).toEqual(0);
        expect(divide([0])).toEqual(0);
        expect(modulo([0])).toEqual(0);
    });
    it("should pass and show '0' :) and pass the rest", () => {
        expect(add([-1,1])).toEqual(0); 
        expect(decress([-1,1])).toEqual(-2); 
        expect(multiply([-1,1])).toEqual(-1); 
        expect(divide([-1,1])).toEqual(-1); 
        expect(modulo([-1,1])).toEqual(-0); 
    });
    it("should show NaN :D and pass the rest", () => {
        expect(add([NaN])).toEqual(NaN); 
        expect(decress([NaN])).toEqual(NaN); 
        expect(multiply([NaN])).toEqual(NaN);
        expect(divide([NaN])).toEqual(NaN); 
        expect(modulo([NaN])).toEqual(NaN); 
    });
})



