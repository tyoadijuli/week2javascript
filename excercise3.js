var nama = ''
var peran = ''

if ( nama !== ''  && peran === 'Ksatria') {
    console.log(`Selamat datang di Dunia Proxytia, ${nama}`)
    console.log (`Halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`)
} else if (nama !== ''  && peran === ''){
    console.log( `Halo ${nama} , Pilih peranmu untuk memulai game!`)
} else if (nama !== '' && peran === 'Tabib') {
    console.log(`Selamat datang di Dunia Proxytia, ${nama}`)
    console.log (`Halo Tabib ${nama}, kamu akan membantu temanmu yang terluka.`)
}  else if (nama !== '' && peran === 'Penyihir') {
    console.log(`Selamat datang di Dunia Proxytia, ${nama}`)
    console.log (`Halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`)
}   else if (nama !== '' && peran === '') {
    console.log(`Selamat datang di Dunia Proxytia, ${nama}`)
    console.log ('selamat Tabib')
}   
else if (nama !== '' && peran !== 'Ksatria' && peran !== 'Tabib' && peran !== 'Penyihir') {
    console.log(`Selamat datang di Dunia Proxytia, ${nama}`)
    console.log ('Masukkan peran yang diinginkan dengan benar!')
}   else if (nama === '' && peran === '') {
    console.log(`Masukkan nama pemain`)
    console.log ('Pilih peran yang diinginkan')
} else {
    console.log('gajadi main deh')
}



