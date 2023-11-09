const accountId = 40;

let email = "pravin@google.com";

var accountPassword = "12345";

accountCity = "Nashik";

// accountId = 20;  // Assignment to constant variable is not allowed.

console.log(accountId);

email = "pravin@amazon.com";

accountPassword = "21212121";

accountCity = "Bangaluru";

console.table([accountId, email, accountPassword, accountCity]);

/*
    Prefer not to use var
    Because of the block and the functional scope issues.
*/

let accountState;
console.log(accountState);

/*
    Note :  if you declare a variable but do not initialize it with a value, the variable is automatically assigned the value undefined
*/
