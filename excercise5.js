// Nomor 1 Let's Form a Sentence
var first = 'JavaScript ';
var second = 'is ';
var third = 'awesome ';
var fourth = 'and ';
var fifth = 'I ';
var sixth = 'love ';
var seventh = 'it! ';

console.log(first + second + third + fourth + fifth + sixth + seventh)

console.log("\n")
// Nomor 2 Index Accessing - 1 by 1
var word = 'wow JavaScript is so cool';
var exampleFirstWord = word[0] + word[1] + word[2];
var secondWord = word[4] + word[5] + word[6] + word[7] + word[8] + word[9] + word[10] + word[11] + word[12] + word[13] + word[14];
var thirdWord = word[15] + word[16];
var fourthWord = word[18] + word[19];
var fifthWord = word[21] + word[22] + word[23] + word[24];

console.log('First Word: ' + exampleFirstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);

console.log("\n")
// Nomor 3 menggunakan substring
var word3 = 'wow JavaScript is so cool';
var firstword3 = word3.substring(0, 3);
var secondWord3 = word3.substring(4, 14)
var thirdWord3  = word3.substring(15, 17)
var fourthWord3 = word3.substring(18, 20)
var fifthWord3  = word3.substring(21, 25)

console.log('First Word: ' + firstword3);
console.log('Second Word: ' + secondWord3);
console.log('Third Word: ' + thirdWord3);
console.log('Fourth Word: ' + fourthWord3);
console.log('Fifth Word: ' + fifthWord3);

console.log("\n")
// Nomor 4 menampilkan length
var word4 = 'wow JavaScript is so cool';
var FirstWord4 = word4.substring(0, 3);
var secondWord4 = word4.substring(4, 14)
var thirdWord4  = word4.substring(15, 17)
var fourthWord4 = word4.substring(18, 20)
var fifthWord4  = word4.substring(21, 25)

var firstWordLength = FirstWord4.length;
var secondwordlength = secondWord4.length;
var thirdWord4length = thirdWord4.length;
var fourthWord4length = fourthWord4.length;
var fifthWord4length = fifthWord4.length;


console.log('First Word: ' + FirstWord4 + ', with length: ' + firstWordLength);
console.log('Second Word: ' + secondWord4 + ', with length: ' + secondwordlength)
console.log('Third Word: ' + thirdWord4 + ', with length: ' + thirdWord4length)
console.log('Fourth Word: ' + fourthWord4 + ', with length: ' + fourthWord4length)
console.log('Fifth Word: ' + fifthWord4 + ', with length: ' + fifthWord4length)