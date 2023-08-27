
let dataBook={title: "Abc", price: 10000, isEbook: true};

function purchasingBook(dataNew,discount, tax, stock, purchasedBook){
    // Create object, assign the object with parameter
    let dataPurchasing = {};
    dataPurchasing.detail_of_book = dataNew;
    dataPurchasing.discount = discount;
    dataPurchasing.tax = tax;
    dataPurchasing.stock = stock;
    dataPurchasing.purchasedBook = purchasedBook;

// declare and assign variables with let const to count about discount, tax, & total price
  const amountOfDiscount = discount/100*dataPurchasing.detail_of_book.price;
  let priceAfterDiscount = dataPurchasing.detail_of_book.price - amountOfDiscount;
  const amountOfTax = tax/100*dataPurchasing.detail_of_book.price;
  let priceAfterTax = priceAfterDiscount + amountOfTax;

 // Update key into object;
 dataPurchasing.amount_of_discount = amountOfDiscount;
 dataPurchasing.price_after_discount = priceAfterDiscount;
 dataPurchasing.amount_Of_tax = amountOfTax;
 dataPurchasing.price_after_tax = priceAfterTax;
 dataPurchasing.total_price = purchasedBook*priceAfterTax;
 
 // Looping for 
 for(let i=0; i<stock; i++){
   if(dataPurchasing.stock-purchasedBook<0){
     dataPurchasing.note= "Book after purchasing can not be purchased again";
   } else dataPurchasing.note = "Book after purchasing can be purchased again";
   break;
 }

 return dataPurchasing;
}

console.log(purchasingBook(dataBook, 10, 5, 10, 11));

