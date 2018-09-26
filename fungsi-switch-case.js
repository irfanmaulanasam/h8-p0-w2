//Switch Case
var hari=3;
//1-31
var bulan=7;
//1-12
var tahun=2009;
//1900-2200

switch(true){
  case hari<1:
  hari=' Invalid Date ';
  break;
  case hari>31:
  hari=' Invalid Date';
  break;
  default:
  hari=hari;
  break;
}
switch(bulan){
  case 1:
  bulan = ' Januari ';
  break;
  case 2:
  bulan = ' Februari ';
  break;
  case 3:
  bulan = ' Maret ';
  break;
  case 4:
  bulan = ' April ';
  break;
  case 5:
  bulan = ' Mei ';
  break;
  case 6:
  bulan = ' Juni ';
  break;
  case 7:
  bulan = ' Juli ';
  break;
  case 8:
  bulan = ' Agustus ';
  break;
  case 9:
  bulan = ' September ';
  break;
  case 10:
  bulan = ' Oktober ';
  break;
  case 11:
  bulan = ' November ';
  break;
  case 12:
  bulan = ' Desember ';
  break;
  default:
  bulan = ' Invalid Month ';
  break;
}

switch(true){
  case tahun<1900:
  tahun = ' Invalid Year ';
  break;
  case tahun>2200:
  tahun = ' Invalid Year ';
  break;
  default:
  tahun=tahun;
  break;
}
console.log(hari+bulan+tahun)
