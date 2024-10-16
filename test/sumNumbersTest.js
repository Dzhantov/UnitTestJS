import {expect} from 'chai';
import {sum} from '../demo.js';

describe('Sum function tests',function(){
    it('should return the sum of an array of numbers', function(){
        
        let testData = [1, 2, 3];
        let result;

        result = sum(testData);

        expect(result).to.equal(6);
    });
    it('should return the sum of an array as string', function(){
        
        let testData = ['1', '2', '3'];
        let result;

        result = sum(testData);

        expect(result).to.equal(6);
    });
    it('should return 0 when empty array is given', function(){
        
        let testData = [];
        let result;

        result = sum(testData);

        expect(result).to.equal(0);
    });
    it('should return correct sum when array is from negative numbers', function(){
        
        let testData = [-1, -2, -3];
        let result;

        result = sum(testData);

        expect(result).to.equal(-6);
    });
    it('should return correct sum when array is from mixed input', function(){
        
        let testData = [1, '2', 3];
        let result;

        result = sum(testData);

        expect(result).to.equal(6);
    });
    it('should return NaN when array is from single letters', function(){
        
        let testData = ['a', 'b', 'c'];
        let result;

        result = sum(testData);

        expect(result).to.be.NaN;
    });
});


