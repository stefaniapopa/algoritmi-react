import { add } from './calculator'
import { decress } from './calculator'
import { multiply } from './calculator'
import { divide } from './calculator'
import { modulo } from './calculator'


describe('Function tests', () => {
    it("should add and pass", () => {
        expect(add([1,2,3])).toEqual(6); 
        expect(add([1,2,5,null, 'ab', NaN])).toEqual(8); 
        expect(add(['ab', null, '123'])).toEqual('ab123'); 
        expect(add([null])).toEqual(null); 
        expect(add([' '])).toEqual(' '); 
        expect(add([0])).toEqual(0);
        expect(add([-1,1])).toEqual(0); 
        expect(add([NaN])).toEqual(NaN);  
    });
    it('should decress', () => {
        expect(decress([1,2,3])).toEqual(-4); 
        expect(decress([1,2,5,null, 'ab', NaN])).toEqual(-6);
        expect(decress(['ab', null, '123'])).toEqual(NaN);
        expect(decress([null])).toEqual(null); 
        expect(decress([' '])).toEqual(' '); 
        expect(decress([0])).toEqual(0);
        expect(decress([-1,1])).toEqual(-2); 
        expect(decress([NaN])).toEqual(NaN); 
    })
    it('should multiply', () => {
        expect(multiply([1,2,3])).toEqual(6);
        expect(multiply([1,2,5,null, 'ab', NaN])).toEqual(10); 
        expect(multiply(['ab', null, '123'])).toEqual(NaN);
        expect(multiply([null])).toEqual(null);
        expect(multiply([' '])).toEqual(' ');
        expect(multiply([0])).toEqual(0);
        expect(multiply([-1,1])).toEqual(-1);
        expect(multiply([NaN])).toEqual(NaN); 
    })
    it('should divide', () => {
        expect(divide([1,2,3])).toEqual(0.16666666666666666); 
        expect(divide([1,2,5,null, 'ab', NaN])).toEqual(0.1);
        expect(divide(['ab', null, '123'])).toEqual(NaN);
        expect(divide([null])).toEqual(null);
        expect(divide([' '])).toEqual(' ');
        expect(divide([0])).toEqual(0);
        expect(divide([-1,1])).toEqual(-1); 
        expect(divide([NaN])).toEqual(NaN); 
    })
    it('should modulo', () => {
        expect(modulo([1,2,3])).toEqual(1);
        expect(modulo([1,2,5,null, 'ab', NaN])).toEqual(1); 
        expect(modulo(['ab', null, '123'])).toEqual(NaN); 
        expect(modulo([null])).toEqual(null);
        expect(modulo([' '])).toEqual(' ');
        expect(modulo([0])).toEqual(0);
        expect(modulo([-1,1])).toEqual(-0); 
        expect(modulo([NaN])).toEqual(NaN); 
    })
    
})



