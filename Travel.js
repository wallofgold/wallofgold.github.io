var string = "wanderlust";
var checker = false;

while (checker == false){
	var guess = prompt("Please enter the password.");
	if (guess == string){
		alert("To travel is to live. Welcome to Faith's Travelogue!");
		checker = true;
		} 	else {
			alert ("You entered" + " " + guess + " " + "which is incorrect." + " Please try again.");
		}
}