var dropdwn0btn=document.getElementById("dropdwn0")
var dropdwn0knob=document.getElementById("dropdwn0-knob")
var dropdwn0sw=document.getElementById("dropdwn0-col")
var dropdwn0swflag=0

var dropdwn1btn=document.getElementById("dropdwn1")
var dropdwn1knob=document.getElementById("dropdwn1-knob")
var dropdwn1sw=document.getElementById("dropdwn1-col")
var dropdwn1swflag=0

var dropdwn2btn=document.getElementById("dropdwn2")
var dropdwn2knob=document.getElementById("dropdwn2-knob")
var dropdwn2sw=document.getElementById("dropdwn2-col")
var dropdwn2swflag=0

var dropdwn3btn=document.getElementById("dropdwn3")
var dropdwn3knob=document.getElementById("dropdwn3-knob")
var dropdwn3sw=document.getElementById("dropdwn3-col")
var dropdwn3swflag=0

var dropdwn4btn=document.getElementById("dropdwn4")
var dropdwn4knob=document.getElementById("dropdwn4-knob")
var dropdwn4sw=document.getElementById("dropdwn4-col")
var dropdwn4swflag=0

var dropdwn5btn=document.getElementById("dropdwn5")
var dropdwn5knob=document.getElementById("dropdwn5-knob")
var dropdwn5sw=document.getElementById("dropdwn5-col")
var dropdwn5swflag=0

function DebugDescForPageContainer(s) {
    if (s==null){
        return "Ist irgendwo im Nirvana"
    }

    if (s.outerHTML.substr(0,5)!="<div "){
        return "Ist kein DIV-Element"
    }

    return "Keine Ahnung?"
}

if (dropdwn0btn && dropdwn0knob && dropdwn0sw){
dropdwn0btn.onclick = function(){
    dropdwn0swflag = (dropdwn0swflag + 1) & 1
    dropdwn0knob.style = "transform:rotate("+(dropdwn0swflag * 90)+"deg);"
    dropdwn0sw.style="height: "+iff(dropdwn0swflag,"0px", "auto"/* dropdwn0btn.value */)+"; margin: "+dropdwn0swflag * 8+"px 0px; opacity: "+dropdwn0swflag+"; padding: "+dropdwn0swflag * 16+"px;"
}
}
if (dropdwn1btn && dropdwn1knob && dropdwn1sw){
dropdwn1btn.onclick = function(){
    dropdwn1swflag = (dropdwn1swflag + 1) & 1
    dropdwn1knob.style = "transform:rotate("+(dropdwn1swflag * 90)+"deg);"
    dropdwn1sw.style="height: "+iff(dropdwn1swflag,"0px", "auto"/* dropdwn1btn.value */)+"; margin: "+dropdwn1swflag * 8+"px 0px; opacity: "+dropdwn1swflag+"; padding: "+dropdwn1swflag * 16+"px;"
}
} else if (dropdwn1btn) {dropdwn1btn.onclick = function(){console.warn("Dropdown #2 can't be used.\n\nKnob or collapsable <div> is missing.")}}
if (dropdwn2btn && dropdwn2knob && dropdwn2sw){
dropdwn2btn.onclick = function(){
    dropdwn2swflag = (dropdwn2swflag + 1) & 1
    dropdwn2knob.style = "transform:rotate("+(dropdwn2swflag * 90)+"deg);"
    dropdwn2sw.style="height: "+iff(dropdwn2swflag,"0px", "auto"/* dropdwn2btn.value */)+"; margin: "+dropdwn2swflag * 8+"px 0px; opacity: "+dropdwn2swflag+"; padding: "+dropdwn2swflag * 16+"px;"
}
} else if (dropdwn2btn) {dropdwn2btn.onclick = function(){console.warn("Dropdown #3 can't be used.\n\nKnob or collapsable <div> is missing.")}}
if (dropdwn3btn && dropdwn3knob && dropdwn3sw){
dropdwn3btn.onclick = function(){
    dropdwn3swflag = (dropdwn3swflag + 1) & 1
    dropdwn3knob.style = "transform:rotate("+(dropdwn3swflag * 90)+"deg);"
    dropdwn3sw.style="height: "+iff(dropdwn3swflag,"0px", "auto"/* dropdwn3btn.value */)+"; margin: "+dropdwn3swflag * 8+"px 0px; opacity: "+dropdwn3swflag+"; padding: "+dropdwn3swflag * 16+"px;"
}
} else if (dropdwn3btn) {dropdwn3btn.onclick = function(){console.warn("Dropdown #4 can't be used.\n\nKnob or collapsable <div> is missing.")}}
if (dropdwn4btn && dropdwn4knob && dropdwn4sw){
dropdwn4btn.onclick = function(){
    dropdwn4swflag = (dropdwn4swflag + 1) & 1
    dropdwn4knob.style = "transform:rotate("+(dropdwn4swflag * 90)+"deg);"
    dropdwn4sw.style="height: "+iff(dropdwn4swflag,"0px", "auto"/* dropdwn4btn.value */)+"; margin: "+dropdwn4swflag * 8+"px 0px; opacity: "+dropdwn4swflag+"; padding: "+dropdwn4swflag * 16+"px;"
}
} else if (dropdwn4btn) {dropdwn4btn.onclick = function(){console.warn("Dropdown #5 can't be used.\n\nKnob or collapsable <div> is missing.")}}
if (dropdwn5btn && dropdwn5knob && dropdwn5sw){
dropdwn5btn.onclick = function(){
    dropdwn5swflag = (dropdwn5swflag + 1) & 1
    dropdwn5knob.style = "transform:rotate("+(dropdwn5swflag * 90)+"deg);"
    dropdwn5sw.style="height: "+iff(dropdwn5swflag,"0px", "auto"/* dropdwn5btn.value */)+"; margin: "+dropdwn5swflag * 8+"px 0px; opacity: "+dropdwn5swflag+"; padding: "+dropdwn5swflag * 16+"px;"
}
} else if (dropdwn5btn) {dropdwn5btn.onclick = function(){console.warn("Dropdown #6 can't be used.\n\nKnob or collapsable <div> is missing.")}}
function iff(con, notmet, met){
    if (con){
        return met
    } else {
        return notmet
    }
}