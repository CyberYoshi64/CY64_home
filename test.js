var isover = 0;
var canvas=document.getElementById("canvas");
var c2d=canvas.getContext("2d");
var pxarr=new Uint16Array(64);
var text0="";
var otxt0="";
var text1="";
var otxt1="";
var text2="";
var otxt2="";
var temptxt="";
var outputtxt="";
var width=120;
var height=100;
canvas.setAttribute("width",width);
canvas.setAttribute("height",height);
canvas.setAttribute("style",'border:5px solid #d3d3d3;');

function dothat() {
    otxt0=text0;
    otxt1=text1;
    otxt2=text2;
    if (document.getElementById("textbox0")!=undefined) {text0=document.getElementById("textbox0").value;}
    if (document.getElementById("textbox1")!=undefined) {text1=document.getElementById("textbox1").value;}
    if (document.getElementById("textbox2")!=undefined) {text2=document.getElementById("textbox2").value;}
    if(otxt0 != text0){tbox2arr0();};
    if(otxt1 != text1 || otxt2 != text2){tbox2arr1();};
    c2d.fillStyle="#000";
    c2d.fillRect(0,0,width,height);
    render_fontbox();
}
function render_fontbox() {
    GFILL(5,5,82,82,128,128,128);
    GBOX(5,5,82,82,200,200,200);
    GBOX(99,4,17,17,255,255,255);
    outputtxt='FONTDEF ASC(""),"';
    for (let i = 0; i < pxarr.length; i++) {
        temptxt=pxarr[i].toString(16);
        while(temptxt.length != 4){
            temptxt="0"+temptxt;
        }
        outputtxt += temptxt;
        GFILL(7+(i % 8)*10,7+Math.floor(i/8)*10,8,8,((pxarr[i]>>11)%32)*8*(pxarr[i]%2),((pxarr[i]>>6)%32)*8*(pxarr[i]%2),((pxarr[i]>>1)%32)*8*(pxarr[i]%2));
        GFILL(100+(i%8)*2,5+Math.floor(i/8)*2,2,2,((pxarr[i]>>11)%32)*8*(pxarr[i]%2),((pxarr[i]>>6)%32)*8*(pxarr[i]%2),((pxarr[i]>>1)%32)*8*(pxarr[i]%2));
    }
    outputtxt += '"'
    document.getElementById("conout").innerText=outputtxt;
}
function tbox2arr0() {
    for (let i = 0; i < pxarr.length; i++) {
        pxarr[i]=parseInt(text0.slice(i*4,i*4+4),16);
        
    }
}
function tbox2arr1() {
    for (let i = 0; i < pxarr.length; i++) {
        pxarr[i]=parseInt(text2.substr(parseInt(text1[i])*5,4),16);
        
    }
}
function GBOX(x,y,w,h,r,g,b){
    c2d.strokeStyle="rgb("+r+","+g+","+b+")";
    c2d.strokeRect(x,y,w,h);
}

function GFILL(x,y,w,h,r,g,b){
    c2d.fillStyle="rgb("+r+","+g+","+b+")";
    c2d.fillRect(x,y,w,h);
}
