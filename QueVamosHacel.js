/* Javascript back-end for Quevamosahacer? */

//  Stores amount of friends
var numUser = undefined;
// Stores possible choices list
var options = new Array;
// Stores budget
var budget = undefined;
// Stores max distance
var distance = undefined;

// General input helper
function get_input() {
	var item = readline();
	return item;
}

// Get number of users
print("Enter amount of users: ");
numUser = get_input();

// Gets the options for user
print("Enter your option: ");
for (var i = 0; i < numUser; i++) {
	print(i + ") ");
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

//Jose part
// Get user budget
print("\nEnter your budget (in USD): ");
budget = get_input();

// Get user distance
print("\nEnter your max distance: ");
distance = get_input();

//Israel part
// Search google for top_hit
function googleSearch() {};
