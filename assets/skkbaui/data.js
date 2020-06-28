var imgcontainer = document.getElementById("imgcnt")
var imgcontlabel = document.getElementById("imgcnttxt")

var scrlist=new Array(7)
var scrlists=new Array(7)
var debug=false

scrlist[0]="scr0000.png"; scrlists[0]="n3ds_logo.png"
scrlist[1]="scr0001.png"; scrlists[1]="n3ds_logo.png"
scrlist[2]="scr0002.png"; scrlists[2]="n3ds_logo.png"
scrlist[3]="scr0003.png"; scrlists[3]="n3ds_logo.png"
scrlist[4]="scr0004.png"; scrlists[4]="n3ds_logo.png"
scrlist[5]="scr0005.png"; scrlists[5]="n3ds_logo.png"
scrlist[6]="scr0006.png"; scrlists[6]="switch_logo.png"
var iterator = 0

function doOnce(){
  // expected to run once
  var dummydiv
  var dummyimg
  var dummyc
  for (var i = 0; i < scrlist.length; i++) {
    dummydiv = document.createElement("div")
    dummyimg = document.createElement("div")
    dummydiv.innerHTML = '<img class=imgcntimg src="../assets/skkbaui/'+scrlist[i]+'">'
    dummyimg.innerHTML = '<img class=imgcntic src="../assets/'+scrlists[i]+'">'
    dummydiv.style="width: 400px; height: 240px;"
    if (scrlists[i] == "n3ds_logo.png") {
      dummyc="#08f"
    } else {
      dummyc="red"
    }
    dummyimg.style="position: relative;bottom: 41px;left: 362px;width: 32px;height: 32px;border-radius: 8px;box-shadow: 0px 0px 5px 2px "+dummyc+";background-color: "+dummyc+";"
    dummyimg.classList.add("imgcntic")
    imgcontainer.appendChild(dummydiv)
    dummydiv.appendChild(dummyimg)
  }
}
doOnce()
var interval = window.setInterval(function () {
  iterator = (iterator + 1) % scrlist.length
  imgcontainer.scrollTo(0,240 * iterator)
}, 5000);

if (debug == true) {
  var interval2 = window.setInterval(function () {
    imgcontlabel.innerHTML = "Debug info:<br><p>Scroll register: "+imgcontainer.scrollTop+"<br>Iterator: "+iterator+"<p>Currently showing:<br>"+scrlist[iterator]+"; "+scrlists[iterator]+"</p></p>"
  }, 34);
}