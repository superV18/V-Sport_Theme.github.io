var i = 0;

var img = [];
var times= 5000;
var i_slide = 0;
var img2 = [];
var times2 = 5000;

img2[0] = 'assets/img/basket1.jpg';
img2[1] = 'assets/img/basket2.jpg';

function changeImgBasket() {
  document.slideBasket.src = img2[i_slide];

  if( i_slide < img2.length - 1 ){
    i_slide++;
  }else {
    i_slide = 0;
  }

  setTimeout("changeImgBasket()", times2);

}

var i_badminton = 0;
var badminton_img = [];
var times3 = 5000;

badminton_img[0] = 'assets/img/badminton1.jpeg';
badminton_img[1] = 'assets/img/badminton2.jpg';

function changeImgBadminton(){
  document.slideBadminton.src = badminton_img[i_badminton];

  if( i_badminton < badminton_img.length - 1 ){
    i_badminton++;
  }else {
    i_badminton = 0;
  }

  setTimeout("changeImgBadminton()", times3);
}

var i_silat = 0;
var silat_img = [];
var times4 = 5000;

silat_img[0] = 'assets/img/silat1.jpg';
silat_img[1] = 'assets/img/silat2.jpg';

function changeImgSilat() {
  document.slideSilat.src = silat_img[i_silat];

  if( i_silat < silat_img.length - 1 ) {
    i_silat++;
  }else {
    i_silat = 0;
  }

  setTimeout("changeImgSilat()", times4);
}

var i_takraw = 0;
var takraw_img = [];
var times5 = 5000;

takraw_img[0] = 'assets/img/takraw1.jpg';
takraw_img[1] = 'assets/img/takraw2.jpg';

function changeImgTakraw() {
  document.slideTakraw.src = takraw_img[i_takraw];

  if( i_takraw < takraw_img.length - 1 ){
    i_takraw++;
  }else {
    i_takraw = 0;
  }
  setTimeout("changeImgTakraw()", times5);
}

var i_football = 0;
var football = [];
var football_times = 5000;

football[0] = 'assets/img/bola1.jpg';
football[1] = 'assets/img/bola2.jpg';

function changeImgFootball(){
  document.slideFootball.src = football[i_football];

  if( i_football < football.length - 1 ){
    i_football++;
  }else {
    i_football = 0;
  }
  setTimeout("changeImgFootball()", football_times);
}

window.onload = function(){
  // changeMainSlide();
  changeImgBasket();
  changeImgBadminton();
  changeImgSilat();
  changeImgTakraw();
  changeImgFootball();
};

