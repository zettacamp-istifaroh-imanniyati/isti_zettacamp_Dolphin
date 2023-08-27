// Declare variable price of book
let priceMyFavBook1 = 80000;
let priceMyFavBook2 = 90000;

//Compare 2 variables and show the higest value
const higestPriceBook = priceMyFavBook1>priceMyFavBook2 ? priceMyFavBook1 : priceMyFavBook2;
console.log(higestPriceBook);

// Find the average price using arithmetic operator
let averagePrice = (priceMyFavBook1 + priceMyFavBook2)/2;
console.log(averagePrice);

//Create new variable to use ternary operator to determine the value of variable,
// if the average price more than 500000 set value with string “Expensive” if less or equal set “Cheap”

let cheapOrExpensive = averagePrice>500000 ? "Expensive" : "Cheap";
console.log(cheapOrExpensive);