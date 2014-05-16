module.exports.calc = {};
module.exports.calc.add = function(x, y) {
	return x + y;
};
module.exports.calc.subtract = function(x, y) {
	if (x < y) {
		return y - x;
	}
	else if (y < x) {
		return x - y;
	}
	else {
		return 0;
	}
};
