// style.js
// 2020 サイバーヨッシー６４

var scrolled=false;

function scup() {
  if (topy.style.bottom == "48px"){scrolled=true; scrollTo(0,0);}
  scrolled=false;
}
var topy=document.getElementById("totop")

function scr() {
  if (window.scrollY < 960) {
    scrup0();
  }else{
    scrup1();
  }
}

function scrup0() {
  topy.style.bottom = "-32px";
  topy.style.opacity = "0";
}

function scrup1() {
  topy.style.bottom = "48px";
  topy.style.opacity = "1";
}
