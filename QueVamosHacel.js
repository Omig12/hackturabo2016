/* Javascript back-end for Quevamosahacer? */

//  Stores amount of friends
var numUser = 0;
// Stores posible choices list
var options = new Array;

// General input helper
function get_input(item) {
	var item = readline();
	return item;	
}

// Get number of users
print("Enter amount of users: ");	
numUser = get_input();

print("Enter your option: ");
for (var i = 0; i < numUser; i++) {
	console.log(i + ") ");	
	options[i] = get_input();
}

/*borrar*/
function msg(){

	print("Filling you with malanga!");}
msg();
/*borrar*/

// fill array of each users preference
var userArray = new Array(numUser);
for (var i = 0; i < numUser; i++) {
	userArray[i] = new Array(numUser);
	for (var k = 0; k < numUser; k++) {
		userArray[i][k] = "Malanga";
	}
}

/* stubs */
print("\nuser preference: ");
for (var i = 0; i < numUser; i++) {
	print(userArray[i]);
}

