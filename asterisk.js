//Asterisk 1 Collums
for(var f=0; f<5; f++){
    console. log('*')
}
//Asterisk kotak
for(var row = 0; row < 5;row++){
  var bintang = '';
  for(var col = 0; col < 5; col++) {
    bintang += '*';
  } console.log(bintang)
}
//asterisk segitiga
for(var row = 0; row < 5;row++){
  var bintang = '';
  for(var col = 0; col <= row; col++) {
    bintang += '*';
  } console.log(bintang)
} 
