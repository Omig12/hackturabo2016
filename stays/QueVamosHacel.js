/* Javascript back-end for Quevamosahacer? */

//  Stores amount of friends
var numUser = undefined;
// Stores possible choices list
var options = new Array;
// Stores budget
var budget = undefined;
// Stores max distance
var distance = undefined;
// Stores winner for IRV do-while
var winner = undefined;

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
    options[i] = new Array(2);
	options[i][0] = get_input();
    options[i][1] = 0;
}

/*borrar*/
function msg(){

	print("Filling you with malanga!");
}
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

do {
    for (var i in userArray) {
        for (var j in userArray[i]) {
            if (userArray[i][0] == options[j][0]) { // go over options and increment per first choice
                 options[j][1] += 1; // where incrementation is actually done
                 if (options[j][1] >= numUser / 2) { // check whether there is a choice with majority of votes
                     winner = options[j][0]; // store winner
                 }
            }
        }
    }
} while (winner == undefined)

print(winner)

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
