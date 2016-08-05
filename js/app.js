$(document).ready(function(){

	var userNumber = prompt("Enter a number!");
	


function fizzbuzz(integer) {
	if (isNaN(userNumber)) {
			$("h1").html("Please enter a number");
		}
	else {parseInt(userNumber);
	}

	for (i=1; i<=integer; i++) {

	if (i%3==0 && i%5==0) {
		console.log("fizzbuzz");
		$("body").append("<p class='fizzbuzz'> fizzbuzz </p>");
	}
	else if (i%3==0) {
		console.log("fizz");
		$("body").append("<p class='fizz'> fizz </p>");
	}
	else if (i%5==0) {
		console.log("buzz");
		$("body").append("<p class='buzz'> buzz </p>");
	}
	else {
		console.log(i);
		$("body").append("<p>"+i+" </p>");
	}
};
};



fizzbuzz(userNumber);

});