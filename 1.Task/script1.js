// Write a function max_of_two(a, b) that takes in two integers, a and b, 
// and returns the maximum of the two numbers without using any arrays or built-in functions like max().
function max_of_two(a, b) {
  let max = a>b ? a : b;
  return max; 
}

console.log(max_of_two(10, 5));
console.log(max_of_two(45, 66));
console.log(max_of_two(5, 10));
console.log(max_of_two(66, 45));
console.log(max_of_two(0.0123, 0.10));




// function max_of_three(numb1, numb2, numb3){
//   if(numb1>numb2 && numb1>numb3){
//     return numb1
//   }else if(numb2>numb3){
//     return numb2
//   }else return numb3
// };

// console.log(max_of_three(10,2,90));

