function konversiMenit(menit) {
    // you can only write your code here!
    var min = (menit - (menit%60)) / 60
    var det = menit%60;
    if(det<10){
      return min + ":0" + det
    } else {
      return min + ":" + det
    }
   
  }
  
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00
