/**
 *
 * Write a Node.js function isPrime(n) that takes an integer n as an argument and returns true if n is a prime number and false otherwise.
 *
 */

function isPrime(n){
  let divisorNumber= 0; //Prime is number yang habis dibagi 1 dan bilangan itu sendiri(So using modulus = 0). As sign bahwa itu prime
  for(let i=1; i<=n; i++){ 
    if(n%i===0){
      divisorNumber++
    }
  }
  return divisorNumber===2 
  
};


function isPrime2(n){
  let divisorNumber= 0;
  for(let i=1; i<=n; i++){ 
    if(n%i===0){
      divisorNumber++
    }
  }
  if(divisorNumber===2){
    return true;
  }else return false
};

console.log(isPrime(10));
console.log(isPrime(43));
console.log(isPrime(0));
console.log(isPrime(-96));

// console.log("------------------");
// console.log(isPrime2(10));
// console.log(isPrime2(43));
// console.log(isPrime2(21));
// console.log(isPrime2(137));



