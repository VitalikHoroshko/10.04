function joinAndRemoveZ(arr) {
  return arr.join('').replace(/z/g, '');
}
// Test case 1
let input1 = ["hello", "world"];
let expected1 = "helloworld";
let result1 = joinAndRemoveZ(input1);
console.assert(result1 === expected1, `Expected: ${expected1}, but got: ${result1}`);

// Test case 2
let input2 = ["foo", "bar", "baz"];
let expected2 = "foobarb";
let result2 = joinAndRemoveZ(input2);
console.assert(result2 === expected2, `Expected: ${expected2}, but got: ${result2}`);

// Test case 3
let input3 = ["zoo", "zebra", "zipper"];
let expected3 = "oebraipper";
let result3 = joinAndRemoveZ(input3);
console.assert(result3 === expected3, `Expected: ${expected3}, but got: ${result3}`);
function checkLoginAndPassword(login, password) {
  const validUsers = {
    "user1": "password1",
    "user2": "password2",
    "user3": "password3"
  };
  const secretPhrases = {
    "user1": "You have unlocked secret level 1",
    "user2": "Congratulations, you are the winner!",
    "user3": "This is your lucky day!"
  };
  
  if (validUsers[login] && validUsers[login] === password) {
    return secretPhrases[login];
  } else {
    return "Invalid login or password";
  }
}
// Test case 1
let input1 = ["user1", "password1"];{
let expected1 = "You have unlocked secret level 1";
let result1 = checkLoginAndPassword(...input1);
console.assert(result1 === expected1, `Expected: ${expected1}, but got: ${result1}`);

// Test case 2
let input2 = ["user2", "password2"];
let expected2 = "Congratulations, you are the winner!";
let result2 = checkLoginAndPassword(...input2);
console.assert(result2 === expected2, `Expected: ${expected2}, but got: ${result2}`);

// Test case 3
let input3 = ["user3", "wrongpassword"];
let expected3 = "Invalid login or password";
let result3 = checkLoginAndPassword(...input3);
console.assert(result3 === expected3, `Expected: ${expected3}, but got: ${result3}`);
}