import {expect} from 'chai';
import {isSymmetric} from '../checkForSymmetry.js';

describe('Tests for checkForSymmetryFunction', function(){
    it('should return true for symmetric',function(){
        const result = isSymmetric([1,2,3,2,1]);

        expect(result).to.be.true;
    });
    it('should return false for non-symmetric',function(){
        const result = isSymmetric([1,2,3,5,1]);

        expect(result).to.be.false;
    });
    it('should return true for empty input',function(){
        const result = isSymmetric([]);

        expect(result).to.be.true;
    });
    it('should return false when input is not an array',function(){
        const result = isSymmetric('1, 2, 3, 4');

        expect(result).to.be.false;
    });
    it('should return false when input is mixed array',function(){
        const result = isSymmetric([1, '1']);

        expect(result).to.be.false;
    });
    it('should return true when input is single element array',function(){
        const result = isSymmetric([1]);

        expect(result).to.be.true;
    });
})