function xo(str) {
    // you can only write your code here!
   
    
   /*var jml = str.length
   var x = ""
   var o = ""
   var i
   for (i=0; i<=jml; i++){
    if (str[i]==="x"){
        x += "x"
    }
    else if (str[i]==="o"){
        o += "o"
    } else {

    }
   }
   if (x.length==o.length){
       return true
   } else {
       return false
   }*/
   var jml = str.length
   var x = ""
   var o = ""
   var i = 0
   for (i=0; i<=jml; i++){
       switch (str[i]){
           case  "x" :
           x += "x"
           break
           case "o" :
           o += "o"
           break
           default :
       }
   }
   if (x.length==o.length){
    return true
} else {
    return false
}
  }

  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true