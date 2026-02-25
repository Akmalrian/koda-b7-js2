const belanja = 1200000

console.log("Belanja =Rp."+belanja)

if(belanja){
if (belanja > 0 && belanja < 500000){
    console.log("Tidak ada diskon")
    diskon = 0
}
else if(belanja>= 500000 && belanja <= 1000000){
    console.log("Diskon 5%")
    diskon = belanja *0.05
}
else {
    console.log("Diskon 10%")
    diskon = belanja *0.1
}
totalBelanja = belanja-diskon
console.log("Total Belanja =Rp."+totalBelanja)
}

