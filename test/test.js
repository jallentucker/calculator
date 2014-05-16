var chai = require('chai');
var expect = chai.expect;
var _ = require('../index');

describe('add()', function() {
	it('adds two numbers', function() {
		expect(_.calc.add(3, 23)).to.eql(26);
	});
});
describe('subtract()', function() {
	it('subtracts second argument from first', function() {
		expect(_.calc.subtract(23, 2)).to.eql(21);
	});
});
