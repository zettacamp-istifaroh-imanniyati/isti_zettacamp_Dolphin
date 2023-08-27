
// Declare a regular function with 3 parameter (later will be object, number, number)
function dataOfBook(detailOfBook, discount, tax){
  let data = {};
  data.detail_of_book = detailOfBook;
  data.discount = `${discount}%`;
  data.tax = `${tax}%`;

  // declare and assign variables with let const to count about discount and tax
  const amountOfDiscount = discount/100*data.detail_of_book.price;
  let priceAfterDiscount = data.detail_of_book.price - amountOfDiscount;
  const amountOfTax = tax/100*data.detail_of_book.price;
  let priceAfterTax = priceAfterDiscount + amountOfTax;

  // Update key into object;
  data.amount_of_discount = amountOfDiscount;
  data.price_after_discount = priceAfterDiscount;
  data.amount_Of_tax = amountOfTax;
  data.price_after_tax = priceAfterTax
  return data
};
  
//Calling function
console.log(dataOfBook({title: "Filosofi Teras", price: 100000, is_ebook: true}, 10, 5));

