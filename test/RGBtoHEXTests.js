import {expect} from 'chai';
import {rgbToHexColor} from '../RGBtoHEX.js';

describe('rgbToHex function tests', function(){
    it('shold return correct hex for valid rgb', function(){
        const result = rgbToHexColor(255, 142, 144);

        expect(result).to.equal('#FF8E90');
    });
    it('shold return correct hex for valid rgb with endpoint values', function(){
        const result = rgbToHexColor(0, 0, 0);

        expect(result).to.equal('#000000');
    });
    it('shold return correct hex for valid rgb with high-end values', function(){
        const result = rgbToHexColor(255, 255, 255);

        expect(result).to.equal('#FFFFFF');
    });
    it('shold return undefined hex for negative', function(){
        const result = rgbToHexColor(-1, 255, 255);

        expect(result).to.be.undefined;
    });
    it('shold return undefined hex for higher then 255', function(){
        const result = rgbToHexColor(256, 255, 255);

        expect(result).to.be.undefined;
    });
    it('shold return undefined hex for number with decimal red', function(){
        const result = rgbToHexColor(250.1, 255, 255);

        expect(result).to.be.undefined;
    });
    it('shold return undefined hex for number with decimal blue', function(){
        const result = rgbToHexColor(250, 255, 200.2);

        expect(result).to.be.undefined;
    });
    it('shold return undefined hex for number with decimal green', function(){
        const result = rgbToHexColor(250, 25.1, 255);

        expect(result).to.be.undefined;
    });
    it('shold return undefined for string', function(){
        const result = rgbToHexColor('a', '255', 'c');

        expect(result).to.be.undefined;
    });
    it('shold return undefined for empty', function(){
        const result = rgbToHexColor();

        expect(result).to.be.undefined;
    });
});