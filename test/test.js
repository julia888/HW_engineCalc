let calc = require('../src/js/calc');
let assert = require('assert');
let chai = require('chai');

describe('Calc', function () {
    it('should return 5', function () {
        assert.equal(calc('+', 3, 6), 9);
    });
    it('should return -3', function () {
        assert.equal(calc('-', 3, 6), -3);
    });
    it('should return 18', function () {
        assert.equal(calc('*', 3, 6), 18);
    });
    it('should return 0.5', function () {
        assert.equal(calc('/', 3, 6), 0.5);
    });
    it('should return 729', function () {
        assert.equal(calc('^', 3, 6), 729);
    });
    it('should return 1.2009369551760027', function () {
        assert.equal(calc('Sqrt', 3, 6), 1.2009369551760027);
    });
    it('should return 3', function () {
        assert.equal(calc('Mod', 3, 6), 3);
    });
});