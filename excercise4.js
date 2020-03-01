
var tanggal = '40'
var bulan = '16'
var tahun = '2020'
var nama_bulan = ""
switch (bulan) {
    case "1" :
       nama_bulan = 'Januari'
    break
    case "2" :
        nama_bulan = 'februari'
    break
    case "3" :
     nama_bulan = 'Maret'
    break
    case "4" :
     nama_bulan = 'April'
    break
    case "5" :
    nama_bulan = 'Mei'
    break
    case "6" :
    nama_bulan = 'Juni'
    break
    case "7" :
    nama_bulan = 'Juli'
    break
    case "8" :
       nama_bulan = 'Agustus'
    break
    case "9" :
    
    nama_bulan = 'September'
    break
    case "10" :
       nama_bulan = 'Oktober'
    break
    case "11" :
        nama_bulan = 'November'
    break
    case "12" :
        nama_bulan = 'Desember'
    break
    default : 
        console.log("bulannya gak keliatan")
}
if(bulan<12){
    console.log(`${tanggal} ${nama_bulan} ${tahun}`)

} else{
    
}


