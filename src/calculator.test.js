import { add } from './calculator'
import { decress } from './calculator'
import { multiply } from './calculator'
import { divide } from './calculator'
import { modulo } from './calculator'


describe('Function tests', () => {
    it("should add and be 6", () => {
        expect(add([1,2,3])).toEqual(6);  
    });
    it('should return 8', () => {
        expect(add([1,2,5,null, 'ab', NaN])).toEqual(8); 
    })
    it('should return "ab123"', () => {
        expect(add(['ab', null, '123'])).toEqual('ab123'); 
    })
    it('should return null', () => {
        expect(add([null])).toEqual(null); 
    })
    it('should return an empty string', () => {
        expect(add([' '])).toEqual(' ');  
    })
    it('should return 0', () => {
        expect(add([-1,1])).toEqual(0); 
    })
    it('should return NaN', () => {
        expect(add([NaN])).toEqual(NaN); 
    })
  
    it('should decress and be -4', () => {
        expect(decress([1,2,3])).toEqual(-4); 
    })
    it('should decress and be equal to "-6"',() => {
        expect(decress([1,2,5,null, 'ab', NaN])).toEqual(-6);
    })
    it('should be NaN because its not a number',() => {
        expect(decress(['ab', null, '123'])).toEqual(NaN);
    })
    it('should decress and be null',() => {
        expect(decress([null])).toEqual(null); 
    })
    it('should decress an empty array',() => {
        expect(decress([' '])).toEqual(' '); 
    })
    it('should decress and return the value 0',() => {
        expect(decress([0])).toEqual(0);
    })
    it('should decress and return "-2"',() => {
        expect(decress([-1,1])).toEqual(-2); 
    })
    it('should decress and return NaN',() => {
        expect(decress([NaN])).toEqual(NaN);
    })
  
    it('should multiply and be 6', () => {
        expect(multiply([1,2,3])).toEqual(6);
    })
    it('should multiply only the numbers and return 10', () => {
        expect(multiply([1,2,5,null, 'ab', NaN])).toEqual(10);
    })
    it('should multiply and return NaN', () => {
        expect(multiply(['ab', null, '123'])).toEqual(NaN);
    })
    it('should multiply and because its null shoul return null', () => {
        expect(multiply([null])).toEqual(null);
    })
    it('should multiply and return an empty array', () => {
        expect(multiply([' '])).toEqual(' ');
    })
    it('should multiply and return only the value 0', () => {
        expect(multiply([0])).toEqual(0);
    })
    it('should multiply and return rthe value -1', () => {
        expect(multiply([-1,1])).toEqual(-1);
    })
    it('should multiply and return NaN because this its the value that its asign', () => {
        expect(multiply([NaN])).toEqual(NaN); 
    })

    it('should divide and return the value 0.1(6)', () => {
        expect(divide([1,2,3])).toEqual(0.16666666666666666); 
    })
    it('should divide and return 0.1', () => {
        expect(divide([1,2,5,null, 'ab', NaN])).toEqual(0.1);
    })
    it('should divide and return NaN because there are no number to divide', () => {
        expect(divide(['ab', null, '123'])).toEqual(NaN);
    })
    it('should divide and return null', () => {
        expect(divide([null])).toEqual(null);
    })
    it('should divide and return an empty array', () => {
        expect(divide([' '])).toEqual(' ');
    })
    it('should divide and return its value', () => {
        expect(divide([0])).toEqual(0);
    })
    it('should divide and return -1', () => {
        expect(divide([-1,1])).toEqual(-1);
    })
    it('should divide and return NaN', () => {
        expect(divide([NaN])).toEqual(NaN); 
    })

    it('should modulo and return the value 1', () => {
        expect(modulo([1,2,3])).toEqual(1);
    })
    it('should modulo and the result it should be 1', () => {
        expect(modulo([1,2,5,null, 'ab', NaN])).toEqual(1); 
    })
    it('should modulo and return NaN because there are no numbers', () => {
        expect(modulo(['ab', null, '123'])).toEqual(NaN); 
    })
    it('should modulo and return its value null', () => {
        expect(modulo([null])).toEqual(null);
    })
    it('should modulo and return an empty string', () => {
        expect(modulo([' '])).toEqual(' ');
    })
    it('should modulo and return its value 0', () => {
        expect(modulo([0])).toEqual(0);
    })
    it('should modulo and be equal to -0', () => {
        expect(modulo([-1,1])).toEqual(-0); 
    })
    it('should modulo and be NaN', () => {
        expect(modulo([NaN])).toEqual(NaN); 
    })
    
})



