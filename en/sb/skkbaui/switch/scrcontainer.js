//
// Screenshot container handler
//
// 2020 CyberYoshi64
//

var scrcontainer=document.getElementById("scrcontainer");

function prepareshow0() {
  var img="../assets/skkbaui/scr0006.png"
  var imgtag=document.createElement("div")
  imgtag.style="background-image: url("+img+"); background-position: center;"
  scrcontainer.appendChild(imgtag)
  scrcontainer.setAttribute("onclick","hideshow()")
  scrcontainer.style="opacity: 1;"
}

function hideshow() {
  scrcontainer.innerHTML = ""
  scrcontainer.setAttribute("onclick","hideshow()")
  scrcontainer.style="opacity: 0; width: 0; height: 0; dispaly: none;"
}
