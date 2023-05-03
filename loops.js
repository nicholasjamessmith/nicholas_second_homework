//Create a loop that logs the numbers from 0-99 (ascending)
//Pseudocode: Create a loop that prints the numbers from 0-99 in ascending order. Assign a variable as number i. Let i be greater than or equal to zero, and less than 99. Write a loop that tells the program to return each number within the conditions.
for (let i = 0; i <= 99; i++) {
  console.log(i);
}
//Create a loop that logs the numbers from 99-0 (descending)
//Pseudocode: Create a loop that prints the numbers from 0-99 in descending order. Assign i to equal 99. Let i be greater than or equal to zero. Write a loop that tells the program to return each number within the conditions.
for (let i = 99; i >= 0; i--) {
  console.log(i);
}
//Create a loop that logs the EVEN numbers from 0-98 (ascending)
//Pseudocode: Write a loop that prints the even numbers from 0-98 in ascending order. Start at zero and add two each time; set max at 98. i = 0; i <= 98. evensum += i
let evenSum = 0;
for (let i = 0; i <= 98; i++) {
  if (i % 2 == 0) {
    console.log(i)
  }
}
//Create a loop that logs the EVEN numbers from 98-0 (descending)
//Error message in line 22 about third semicolon
//let evenDif = 98;
//for (let i = 98; i >= 0; i <= 98; i--) {
//  if (i % 2 == 0) {
//    console.log(i)
//  }
//}
//Create a loop that logs the ODD numbers from 0-99 (ascending)
let oddSum = 0;
for (let i = 0; i <= 99; i++) {
  if (i % 2 == 1) {
    console.log(i)
  }
}
//Create a loop that logs the ODD numbers from 99-0 (descending)
//Create a loop that logs the numbers from 49-72 (ascending)
for (let i = 49; i <= 72; i++) {
  console.log(i);
}
//Create a loop that logs the numbers from 81-26 (descending)
for (let i = 81; i >= 26; i--) {
  console.log(i)
}
//Create a loop that logs the numbers from 3-90 that are multiples of 3 (ascending)