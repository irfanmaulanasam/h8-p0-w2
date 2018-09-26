//LOOPING WITH WHILE
//1.
var nomor=2
var word= ' - I Love Coding'
while(nomor<=20){
  console.log(nomor + word)
  nomor=nomor+2
}

//2.
var num=20
var kalimat=' - I will become fullstack developer'
while(num>=2){
  console.log(num+kalimat)
  num=num-2
}
//
for(nomor=1; nomor<=20; nomor++){
  var sentence=' - I Love Coding';
  console.log(nomor+sentence)
}
for(nomor=20; nomor>=1; nomor--){
  var sentence=' - I will become fullstack developer'
  console.log(nomor+sentence)
}

//3.
for(nomor=1; nomor<=100; nomor++){
  if(nomor%2==0){
    console.log(nomor + ' genap')
  }else if(nomor%2!=0){
    console.log(nomor + ' ganjil')
  }
}

for(nomor=1; nomor<=100; nomor=nomor+2){
  if(nomor%3==0){
    console.log(nomor + ' kelipatan ' + '3')
  }else if (nomor%3!=0){
    console.log('')
  }
}
