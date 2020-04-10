var scrolled=false;

function scup() {
  if (topy.style.bottom == "48px"){scrolled=true; topty.innerHTML='<table width=100% height=80px><tr><td style="font-size: 12px;"><center>Returning...</center></td></tr></table>'; scrollTo(0,0);}
  scrolled=false;
}
var topy=document.getElementById("totop")
var topty=document.getElementById("toptool")

function scr() {
  console.log("scrolled. y="+scrollY);
  if (window.scrollY < 300) {
    scrup0();
    hdtoptoolt();
  }else{
    scrup1();
  }
  topty.style.bottom="112px"
}

function scrup0() {
  topy.style.bottom = "32px";
  topy.style.opacity = "0";
}

function scrup1() {
  topy.style.bottom = "48px";
  topy.style.opacity = "1";
}

function shtoptoolt() {
  if (topy.style.bottom == "48px"){
    topty.style.right="16px"
    topty.style.opacity="1";
    topty.style.zIndex="1"
    topty.innerHTML='<table width=100% height=80px><tr><td style="font-size: 12px;"><center>Click this button to the top of the page.</center></td></tr></table>'
  }
}

function hdtoptoolt() {
  topty.style.right="-320px"
  topty.style.opacity="0";
  topty.style.zIndex="30"
}
