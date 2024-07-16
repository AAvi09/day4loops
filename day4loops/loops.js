// let numberElement = document.querySelector(".numbers");
// numberElement.innerHTML = " ";
// for (i = 0; i < 10; i++) {
//   let newNumber = document.createElement("div");
//   newNumber.textContent = i + 1;
//   numberElement.appendChild(newNumber);
//   console.log(newNumber);
// }
// let fiveTableElement = document.querySelector(".five-table");
// fiveTableElement.innerHTML = " ";
// for (i = 1; i < 10; i++) {
//   let newFive = document.createElement("div");
//   newFive.textContent = 5 * i;
//   fiveTableElement.appendChild(newFive);
// }
// // Initialize sum variable to 0 and counter variable to 1
// let sum = 0;
// let i = 1;

// // Loop while i is less than or equal to 10
// while (i <= 10) {
//   // Add current number to sum
//   sum += i;

//   // Increment the counter
//   i++;
// }

// // Print the result
// console.log("The sum of numbers from 1 to 10 is:", sum);

// let num = 11;
// let i = 10;
// while (i >= 1) {
//   num -= 1;
//   console.log(num);
//   i--;
// }
// let j = 1;
// do {
//   console.log(j);
//   j++;
// } while (j <= 5);
// function factorial(num) {
//   let i = num;
//   let result = 1;
//   do {
//     result = result * i;
//     i--;
//   } while (i > 0);

//   return result;
// }
// console.log(`factorial is ${factorial(10)}`);
let rows = 5;
for (i = 1; i <= rows; i++) {
  let starPattern = "";
  for (u = 1; u <= i; u++) {
    starPattern += "*";
  }
  console.log(starPattern);
}
