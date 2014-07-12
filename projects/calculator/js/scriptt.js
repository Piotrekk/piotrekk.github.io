$(document).ready(function() {
	var Calc = {};

	Calc.Calculate = function() {
		var operation = [];

		var doing = false;

		var checkExpression =  {

			// check expression while typing characters
			checkWhileTyping: function(expression) {
				for (i = 0; i < expression.length; i++) {

					// remove first element if It's NaN or '0'
					if (isNaN(expression[0]) || expression[0] == '0') {
						var zeroIndex = expression.indexOf(expression[0]);
						if (zeroIndex != -1) {
							expression.splice(zeroIndex, 1);
						}
					}

					// don't repeat operands inside the expression 
					if (isNaN(expression[i]) && isNaN(expression[i - 1])) {
							expression.splice(-1)[0];
					}

					// join numbers
					if (!isNaN(expression[i]) && !isNaN(expression[i + 1])) {
						expression[i] += expression[i + 1];
						expression.splice(-1)[0];
					}
				}

				return expression;
			},

			// check expression when It's ready to calculate
			CheckInEnd: function(expression) {
				var lastCheckedItem = expression.slice(-1)[0];
				
				// remove last element if It's NaN
				if (isNaN(lastCheckedItem)) {
					expression.splice(-1)[0];
				}

				return expression;
			}
		};

		$('.clear').click(function() {
			operation = [];
			doing = false;
			$('#display-two').val('');
			$('#display').val('');
		});

		$('.number, .sign').click(function() {
 			if (!isNaN($(this).val()) && doing == true) {
 				$('#display').val('');
 				doing = false;
				operation = [];
				x = $(this).val();
				operation.push(x)
				$('#display-two').val(operation.join(' '))
				checkExpression.checkWhileTyping(operation)
			} else {
				doing = false;
				x = $(this).val();
				operation.push(x)
				$('#display-two').val(operation.join(' '))
				checkExpression.checkWhileTyping(operation)
			}
		});

		$('#equals').click(function() {
			checkExpression.CheckInEnd(operation)
			$('#display-two').val(operation.join(' '))
			var convertedExpression = Calc.convertToRPN(operation)
			var result = Calc.calculateRPN(convertedExpression)
			operation = [];
			operation[0] = String(result)
			$('#display').val(result)
			doing = true;
		});
	};

	Calc.Calculate()

	// convert basic infix notation expression to Reverse Polish Notation (postfix)
	Calc.convertToRPN = function(expression) {
		var operators = {
			'+': 1,
			'-': 1,
			'*': 2,
			'/': 2
		}

		var stack = [];
		var postfix = [];

		for (i = 0; i < expression.length; i++) {
			var x = expression[i];
			var xPrior;

			if (x == '+') {
				xPrior = 1;
			} else if (x == '-') {
				xPrior = 1;
			} else if (x == '*') {
				xPrior = 2;
			} else if (x == '/') {
				xPrior = 2;
			}

			if (!isNaN(x)) {
				postfix.push(x);
				
			} else if (isNaN(x) && stack.length == 0) {
				stack.push(x);
			} else if (isNaN(x) && stack.length != 0) {
				var lastItem = stack.slice(-1)[0];
				var lastItemPrior;

				if (lastItem == '+') {
					lastItemPrior = 1;
				} else if (lastItem == '-') {
					lastItemPrior = 1;
				} else if (lastItem == '*') {
					lastItemPrior = 2;
				} else if (lastItem == '/') {
					lastItemPrior = 2;
				}

				if (lastItemPrior <= xPrior){
					stack.push(x);
				} else {
					var index = stack.indexOf(lastItem);
					if (index != -1) {
						stack.splice(index, 1);
					}

					postfix.push(lastItem);
					stack.push(x);
				}
				
			}
		}

		stack.reverse();

		for (k = 0; k < stack.length; k++) {
			postfix.push(stack[k]);
		};

		return postfix;
	};

	// calculate RPN (postfix) expression 
	Calc.calculateRPN = function(expression) {
		var stack = [];

		for (i = 0; i < expression.length; i++) {
			var x = expression[i];

			if (!isNaN(x)) {
				stack.push(parseInt(x));

			} else if (isNaN(x)) {
				var a = stack[stack.length -1];
				var b = stack[stack.length -2];
				var ab;
				var aIndex = stack.indexOf(a);
				var bIndex = stack.indexOf(b);

				if (x == '+') {
					ab = b + a;

					if (aIndex != -1) {
						stack.splice(aIndex, 1);
					}
					if (bIndex != -1){
						stack.splice(bIndex, 1);
					}

					stack.push(ab);
				} else if (x == '-') {
					ab = b - a;

					if (aIndex != -1) {
						stack.splice(aIndex, 1);
					}
					if (bIndex != -1) {
						stack.splice(bIndex, 1);
					}

					stack.push(ab);
				} else if (x == '*') {
					ab = b * a;

					if (aIndex != -1) {
						stack.splice(aIndex, 1);
					}
					if (bIndex != -1) {
						stack.splice(bIndex, 1);
					}

					stack.push(ab)
				} else if (x == '/') {
					ab = b / a;

					if (aIndex != -1) {
						stack.splice(aIndex, 1);
					}
					if (bIndex != -1) {
						stack.splice(bIndex, 1);
					}

					stack.push(ab);
				}
			}
		}

		return stack[0];
	};
	
	function giveIndex(x, y){
		$(x).css({'z-index': y})
	};

	var isOpen = false;

	$('#mask').click(function(){
		if (!isOpen) {
			isOpen = true;

			$('.hinge').css({'opacity': '1'})

			$('#front').css({'-webkit-transform': 'rotateY(180deg)',
           				 '-moz-transform': 'rotateY(180deg)', 
                         '-ms-transform': 'rotateY(180deg)',
                         'transform': 'rotateY(180deg)'  
			});

			$('#back').css({'-webkit-transform': 'rotateY(0deg)',
           				 	 '-moz-transform': 'rotateY(0deg)', 
                             '-ms-transform': 'rotateY(0deg)',
                             'transform': 'rotateY(0deg)',
                             'margin-left': '195px'   
			});

			setTimeout(function(){
				giveIndex('#mask', '-9');
			}, 500);

		} else {
			isOpen = false;

			$('.hinge').css({'opacity': '0'});

			$('#front').css({'-webkit-transform': 'rotateY(0)',
           				 '-moz-transform': 'rotateY(0)', 
                         '-ms-transform': 'rotateY(0)',
                         'transform': 'rotateY(0)' 
			});

			$('#back').css({'-webkit-transform': 'rotateY(-180deg)',
           				 	 '-moz-transform': 'rotateY(-180deg)', 
                             '-ms-transform': 'rotateY(-180deg)',
                             'transform': 'rotateY(-180deg)',
                             'margin-left': '190px'   
			});

			setTimeout(function(){
				giveIndex('#mask', '9');
			}, 100);
		}
	});
});