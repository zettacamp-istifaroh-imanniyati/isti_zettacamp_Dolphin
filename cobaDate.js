function bookPurchasing(creditDuration){
    const dueDates = []; // mendeklarasikan array kosong untuk menampung nilai dalam dueDates
    const currentDate = new Date(); // membuat objek yang berisi tanggal dan waktu sekarang
    currentDate.setMonth(currentDate.getMonth() + 1); // set nilai dari currenDate ke satubulan kedepan pada tanggal sekarang
    
    for (let i = 1; i <= creditDuration; i++){ //melakukan looping creditDuration sebanyak nilai dari creditDuration
    const dueDateString = currentDate.toLocaleDateString();//mengubah objek currentDate yang berisi tanggal dan waktu menjadi bentuk string yang hanya berisi tanggal dalam format lokal yang sesuai dengan preferensi pengguna.
    // const dueDateString = currentDate.toISOString();//mengubah tanggal sekarang menjadi string dengan format ISO
    dueDates.push("Due Date for Month " + i + ": " + dueDateString);// menambahkan pesan ke dalam array
    currentDate.setMonth(currentDate.getMonth() + 1);//set nilai dari currenDate ke satubulan kedepan pada tanggal sekarang
    }
    console.log("Credit Duration : " + creditDuration + " Month");// menampilkan pesan
    // for each : mengiterasi melalui setiap elemennya.
    dueDates.forEach(function (dates) { // setelah looping selesai akan menjalankan fungsi callback pada setiap elemen dalam array, kemudian mencetak array yang ada ke dalam konsol
    console.log(dates);
    });
    
    // for(const dates of dueDates){
    // console.log(dates);
    // }
    
    return dueDates; //menggembalikan nilai dari dueDates
    }
    // parameter bookDetail, discountPercentage, taxPercentage, amountStock, amountPurchase, creditDuration
    const arrayString = bookPurchasing("Sumanto the bounty hunter", 10, 1, 3, 2, 3); // ==========
    console.log(arrayString);
    
    bookPurchasing(3)