// //Create an arrow function that has parameter default
let purchasingBook2 = (data_0f_book ={title:"Unpublished", price: 50000, is_ebook:false}, discount= 0, tax= 5) => {
    let data = {};
    data.detail_of_book = data_0f_book;
    data.discount = `${discount}%`;
    data.tax = `${tax}%`;
  
    // declare and assign variables with let const to count about discount and tax
    const amountOfDiscount = discount/100*data.detail_of_book.price;
    let priceAfterDiscount = data.detail_of_book.price - amountOfDiscount;
    const amountOfTax = tax/100*data.detail_of_book.price;
    let priceAfterTax = priceAfterDiscount+ amountOfTax;
  
    // Update key into object;
    data.amount_of_discount = amountOfDiscount;
    data.price_after_discount = priceAfterDiscount;
    data.amount_Of_tax = amountOfTax;
    data.price_after_tax = priceAfterTax;
    return data
     
    }
    
  console.log("----------------------")
  console.log(purchasingBook2());
  console.log("----------------------")
  console.log(purchasingBook2(undefined, 20, 6));
