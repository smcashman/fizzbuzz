$(document).ready(function(){

	for (i=1; i<=100; i++) {

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
});