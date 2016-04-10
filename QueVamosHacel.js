var numUser = 0;
var options = new Array;

function get_input(item) {
	var item = readline();
	return item;	
}

print("Enter amount of users: ");	
numUser = get_input();
print("Enter your option: ");
for (var i = 0; i < numUser; i++) {
	options[i] = get_input();
}

function msg(){


	print("Filling you with malanga!");}
msg();

var userArray = new Array(numUser);
for (var i = 0; i < numUser; i++) {
	userArray[i] = new Array(numUser);
	for (var k = 0; k < numUser; k++) {
		userArray[i][k] = "Malanga";
	}
}

function stubs() {
	print("Enter array index: ");
	print(id[get_input()]);
	print( "Total num users: " + numUser);	}

print("\nuser preference: ");
for (var i = 0; i < numUser; i++) {
	print(userArray[i]);
}