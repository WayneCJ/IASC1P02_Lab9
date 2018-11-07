//Sets the initial colours of the three elements on page load
document.getElementById("blue").style.color="blue";
document.getElementById("green").style.color="green";
document.getElementById("red").style.color="red";

//A function to change colours of elements when called
function mix(){
	//the colors are wrong, should be blue, red and green
	var first = "blue";
	var second = "green";
	var third = "red";
	
	document.getElementById("blue").style.color=first;
	document.getElementById("green").style.color=second;
	//missed a "(", ById and it should be "color", not "colour"
	document.getElementById("red").style.color=third;
	
}