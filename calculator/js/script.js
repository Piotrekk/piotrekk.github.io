$(document).ready(function(){
	var numberB = "";
	var numberA = "";
	var operator = "";
	var display = $('#display');
	display.val("0");
	
	var testNumLength = function(numberB) {
		if (numberB.length > 9) {
	    	display.val(numberB.substr(numberB.length-9,9));
	    } 
	};
	
	$(".number").not(".clear").click(function(){
		numberB += $(this).val();
		display.val(numberB);
		testNumLength(numberB);
	});
	
	$(".sign").click(function(){
		operator = $(this).val();
		numberA = numberB;
		numberB = "";
		display.val("0");
	});
	
	$(".clear").click(function(){
		numberB = "";
		numberA = "";
		display.val("0");
	});
	
	$("#equals").click(function(){
		var result;
		if (operator === "-"){
            result = numberA - numberB;
        }
        else if (operator === "+"){
            result = parseInt(numberA) + parseInt(numberB);
        }
        else if (operator === "*"){
            result = numberA * numberB;
        }
        else if (operator === "/"){
            result = numberA / numberB;
        }
		display.val(result);
		numberB = "";
		numberA = "";
	});
});
