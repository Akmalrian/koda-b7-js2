const pembayaran = 27000
const uang = 50000
let totalKembali = 0
let totalKembali2 = 0

const uang1 = 50000
let uang2 = 10000
let uang3 = 5000
let uang4 = 2000
let uang5 = 1000

console.log("Uang =Rp."+uang )
console.log("Pembayaran =Rp."+pembayaran )

let kembalian = uang-pembayaran

//else if (kembalian >= uang2){
    while(kembalian >= uang2 ){
        totalKembali = 10000
        totalKembali2 = totalKembali2 + 10000
        console.log("Uang Kembalian =Rp."+totalKembali)
        uang2 = uang2 + 10000
    }
    finalKembali = kembalian - totalKembali2
//    if (totalKembali2 < 10000){
        while(finalKembali >= uang3){
        totalKembali = 5000
        totalKembali2 = totalKembali2 + 5000
        console.log("Uang Kembalian =Rp."+totalKembali)
        uang3 = uang3 + 5000
        }
        finalKembali2 = kembalian - totalKembali2
//    if (totalKembali2 < 10000){
        while(finalKembali2 >= uang4){
        totalKembali = 2000
        totalKembali2 = totalKembali2 + 2000
        console.log("Uang Kembalian =Rp."+totalKembali)
        uang4 = uang4 + 2000
        }
        finalKembali3 = kembalian - totalKembali2
        while(finalKembali3 >= uang5){
        totalKembali = 1000
        totalKembali2 = totalKembali2 + 1000
        console.log("Uang Kembalian =Rp."+totalKembali)
        uang5 = uang5 + 1000
        }
        

//}

