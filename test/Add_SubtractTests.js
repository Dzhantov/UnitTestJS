import { expect } from 'chai';
import { createCalculator } from '../Add_Subtract.js';

describe('Add and Subtract tests', function() {
    let calculator;

    beforeEach(function() {
        // Create a new calculator before each test to ensure tests are independent
        calculator = createCalculator();
    });

    it('should return correct sum after adding numbers', function() {
        calculator.add(5);
        expect(calculator.get()).to.equal(5);
        
        calculator.add(3);
        expect(calculator.get()).to.equal(8);
    });

    it('should return correct sum after subtracting numbers', function() {
        calculator.add(10);
        calculator.subtract(4);
        expect(calculator.get()).to.equal(6);
    });

    it('should parse string numbers', function() {
        calculator.add('5');
        expect(calculator.get()).to.equal(5);

        calculator.subtract('2');
        expect(calculator.get()).to.equal(3);
    });

    it('should have initial value of 0', function() {
        expect(calculator.get()).to.equal(0);
    });

    it('should not allow direct modification of internal sum', function() {
        // Ensures no direct access to the `value`
        expect(calculator.value).to.be.undefined;
    });
});