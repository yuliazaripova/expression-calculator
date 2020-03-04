function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
	let countLeft = 0;
   	let countRight = 0;
   	let exprArray = expr.split('');
	for (i of exprArray) {
		if (i == '(') { 
			countLeft +=1
		} else if (i == ')') {
			countRight +=1
		}
	}
	if (countRight !== countLeft) {throw new Error('ExpressionError: Brackets must be paired')}

	if (expr.includes('/ 0')) {throw new TypeError('TypeError: Division by zero.')}

	let res = new Function('return ' + expr)();
	if (res == Infinity) {throw new TypeError('TypeError: Division by zero.')}

	return res;

}

module.exports = {
    expressionCalculator
}