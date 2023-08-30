const detailBook = {
    titleBook: 'Filosofi Teras',
    priceBook: 100000
};
    
function purchasingBook(detailBook, discount, tax, stock, purchasedBook, credit) {
    // counting amount of credit every month
    let creditEveryMonth = detailBook.priceBook*purchasedBook/credit;

    // Make array to show due date
    let currentDate = new Date();
    let arr = [];
    // currentDate.setDate(currentDate.getDate() + 30);
    for(let i= 0; i< credit; i++){
      currentDate.setDate(currentDate.getDate() + 30);
      
      arr.push({
        due_Date_Month_of: i+1,
        due: currentDate.toISOString().split('T')[0]
      }
      );
    }
     
    arr.map((x) => console.log(x));

    // counting discount
    const amountDiscount = discount/100 * detailBook.priceBook;
    const priceAfterDiscount = detailBook.priceBook - amountDiscount;
    // count tax
    const amountTax = tax/100 * detailBook.priceBook;
    const priceAfterTax = priceAfterDiscount + amountTax;

    //Counting left stock
    let leftStock = stock;
    if (purchasedBook > stock) {
    leftStock = stock;
    } else {
    leftStock = stock - purchasedBook;
    }
    
    //Counting Total Price
    let totalPrice = 0;
    let messageReturn = (stock >= 1)? `Stock available = ${leftStock}` : 'Stock not available';
    for (let i=1; i <= purchasedBook; i++) {
    stock = stock- 1;
    totalPrice = totalPrice + priceAfterTax;
    // break statement when stock <=0 and show the messagge
    if (stock ==0) {
    messageReturn = 'Stock not available';
    break;}
    }
    
    return{
    nameBook: detailBook.titleBook,
    priceBook: detailBook.priceBook,
    discount: `${discount}%`,
    amountDiscount: amountDiscount,
    priceAfterDiscount: priceAfterDiscount,
    tax: `${tax}%`,
    amountTax: amountTax,
    priceAfterTax: priceAfterTax,
    leftStock : leftStock,
    totalPrice: totalPrice,
    statusBook: messageReturn,
    creditTime: `${credit} month`,
    amountCreditEveryMonth: creditEveryMonth,
    }
};

let discount = 10; let tax = 5; let stock = 10; let purchasedBook = 1; let credit = 6;

console.log(purchasingBook(detailBook, discount, tax, stock, purchasedBook, credit));