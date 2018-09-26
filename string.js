//String
//1.
var word = 'Javascript';
var second = 'is';
var third = 'awesome';
var fourth = 'and';
var fifth = 'I';
var sixth = 'Love';
var seventh = 'it!';

console.log(word + ' ' + second + ' ' + third + ' ' + fourth + ' ' + fifth + ' ' + sixth + ' ' + seventh)

//2.
var word = 'wow Javascript is so cool';
var firstWord = word[0] + word[1] + word[2];
var secondWord = word[4] + word[5] + word[6] + word[7] + word[8] + word[9] + word[10] + word[11] + word[12] + word[13];
var thirdWord = word[15] + word[16];
var fourthWord = word[18] + word[19];
var fifthWord = word[21] + word[22] + word[23] + word[24];

console.log('First Word: ' + firstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);

//3.
var word2 = 'wow Javascript is so cool';
var firstWord2 = word2.substring(0, 3);
var secondWord2 = word2.substring(4, 14);
var thirdWord2 = word2.substring(15, 17);
var fourthWord2 = word2.substring(18, 20);
var fifthWord2 = word2.substring(21, 25);

console.log('First Word: ' + firstWord2);
console.log('Second Word: ' + secondWord2);
console.log('Third Word: ' + thirdWord2);
console.log('Fourth Word: ' + fourthWord2);
console.log('Fifth Word: ' + fifthWord2);

//3.
var word3 = 'wow Javascript is so cool';
var firstWord3 = word3.substring(0, 3);
var secondWord3 = word3.substring(4, 14);
var thirdWord3 = word3.substring(15, 17);
var fourthWord3 = word3.substring(18, 20);
var fifthWord3 = word3.substring(21, 25);

var firstWord3Length = firstWord3.length;
var secondWord3Length = secondWord3.length;
var thirdWord3Length = thirdWord3.length;
var fourthWord3Length = fourthWord3.length;
var fifthWord3Length = fifthWord3.length;

console.log('First Word: ' + firstWord3 + ', with length: ' + firstWord3Length);
console.log('Second Word: ' + secondWord3 + ', with length: ' + secondWord3Length);
console.log('Third Word: ' + thirdWord3 + ', with length: ' + thirdWord3Length);
console.log('Fourth Word: ' + fourthWord3 + ', with length: ' + fourthWord3Length);
console.log('Fifth Word: ' + fourthWord3 + ', with length: ' + fifthWord3Length);
