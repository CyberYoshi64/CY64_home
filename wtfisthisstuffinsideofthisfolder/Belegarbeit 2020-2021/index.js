window.onload = function(){
    var container=document.getElementById("pageContainer")
    if (((navigator.userAgent.indexOf("Chrome") === -1) && (navigator.userAgent.indexOf("Firefox") === -1)) && (document.getElementsByClassName("scrtypenotsupported").length === 1)) {
		document.getElementsByClassName("scrtypenotsupported")[0].classList.add("swnotsupported")
	}
	if (container == null || container.outerHTML.substr(0,5)!="<div ") {
        console.log("Alarm, Alarm! Seitencontainer \"html / body / div#pageContainer\" ist verschwunden!");
        alert("Seitencontainer wurde nicht gefunden.\n\nStelle sicher, dass du am Quellcode nichts geändert hast!\n\nWenn doch, dann schäm dich, mein Schrott umzuschreiben. >:(")
        alert("Normalerweise sollte der Seiteninhalt von unten hineinsliden, wie eine PowerPoint-Präsentation, aber leider hat ein Dulli (vielleicht ich) irgendwas falsch gemacht.\n\nJetzt noch, etwas Debug-Info für den Nerd hinter der Kamera:\n\nElement in Frage: \"div#pageContent\"\nWas ist damit los? " + DebugDescForPageContainer(container) + "\n\nJa, jetzt hast du sicher gedacht, es kommt mehr, nicht wahr?\nNix da! :)")
    } else {
        container.style = "opacity: 1; top: 0px;"
    }
}

function DebugDescForPageContainer(s) {
    if (s==null){
        return "Ist irgendwo im Nirvana"
    }

    if (s.outerHTML.substr(0,5)!="<div "){
        return "Ist kein DIV-Element"
    }

    return "Keine Ahnung?"
}

function pagefcker() {
    pagecontent=document.getElementById("pagecontent")
    var l=524288
    if (pagecontent!=null){
        for(var i=0; i < 255; i++){pagecontent.innerHTML += String.fromCharCode(Math.random(0)*l)}
    }
    pagecontent=document.getElementById("sidebar")
    if (pagecontent!=null){
        for(var i=0; i < 255; i++){pagecontent.innerHTML += String.fromCharCode(Math.random(0)*l)}
    }
    pagecontent=document.getElementById("header")
    if (pagecontent!=null){
        for(var i=0; i < 255; i++){pagecontent.innerHTML += String.fromCharCode(Math.random(0)*l)}
    }
    pagecontent=document.getElementById("header-nav")
    if (pagecontent!=null){
        for(var i=0; i < 255; i++){pagecontent.innerHTML += String.fromCharCode(Math.random(0)*l)}
    }
}
