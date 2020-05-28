var gamemap=new Uint8Array(200*75*2+8)
var mode=0,pxr=30,pxg=30,pxb=30,pxc=0x7BDE
var lhold0,rhold0,lhold,rhold,lclick,rclick
function preload() {
  gamemap[0]="M".charCodeAt()
  gamemap[1]="A".charCodeAt()
  gamemap[2]="P".charCodeAt()
  gamemap[3]=":".charCodeAt()
  gamemap[4]=200
  gamemap[5]=75
  gamemap[6]=64
  gamemap[7]=64
  //fnt=loadFont("./assets/std.ttf")
  fnt=loadFont("./assets/c.ttf")
}

function setup() {
  window.canvas = createCanvas(200*8,75*8+24)
  pixelDensity(1)
  textFont(fnt)
  window.canvas.canvas.style="background-color: #08f; border: 5px solid black;"
}
function draw(){
  getMouse()
  var r,g,b,c
  if (mode == 1){
    clear()
    for (var i = 8; i < gamemap.length; i += 2) {
      if( mouseX>((i/2-4)%200)*8 && mouseY>Math.floor((i/2-4)/200)*8 && mouseX<((i/2-4)%200)*8+7 && mouseY<Math.floor((i/2-4)/200)*8+7 && mouseIsPressed){
        gamemap[i]=pxc>>8
        gamemap[i+1]=pxc%256
      }
      if (gamemap[i]+gamemap[i+1] != 0) {
        c=(gamemap[i]<<8)+gamemap[i+1]
        r=((c>>10)%32)*8
        g=((c>>5)%32)*8
        b=(c%32)*8
        fill(r,g,b); noStroke()
        rect(((i/2-4)%200)*8,Math.floor((i/2-4)/200)*8,8,8)
      }
    }
  } else {
    fill(0,64,128)
    rect(0,0,200*8,75*8)
    textAlign(CENTER,TOP)
    fill(255); text("Current color: 0x"+pxc.toString(16),192,56)
    fill(pxr*8,pxg*8,pxb*8)
    rect(80,80,222,56)
    fill(255,0,0)
    rect(80,512-pxr*12,64,pxr*12+8)
    text(pxr.toString(),112,524)
    if (mouseX>76&&mouseY>100&&mouseX<140&&mouseY<524&&mouseIsPressed){
      pxr=Math.min(30,Math.max(1,Math.floor(-(mouseY-512)/12)))
    }
    fill(0,255,0)
    rect(160,512-pxg*12,64,pxg*12+8)
    text(pxg.toString(),192,524)
    if (mouseX>156&&mouseY>100&&mouseX<220&&mouseY<524&&mouseIsPressed){
      pxg=Math.min(30,Math.max(1,Math.floor(-(mouseY-512)/12)))
    }
    fill(0,160,255)
    rect(240,512-pxb*12,64,pxb*12+8)
    text(pxb.toString(),272,524)
    if (mouseX>236&&mouseY>100&&mouseX<300&&mouseY<524&&mouseIsPressed){
      pxb=Math.min(30,Math.max(1,Math.floor(-(mouseY-512)/12)))
    }
  }
  pxc=(pxr<<10)+(pxg<<5)+pxb
  fill(0)
  rect(0,75*8,200*8,24)
  fill(255); textSize(16); textAlign(LEFT,TOP)
  text("Clear map",8,75*8+2)
  if (mouseX>96 && mouseY>75*8 && mouseX<231 && mouseY<75*8+23 && lclick){
    mode=(mode+1) % 2
  }
  fill(!mode*255); rect(96,75*8,128,24)
  fill(mode*255); text("Change color",105,75*8+2)
  fill(255); text("lol :) "+mouseX+","+mouseY,228,75*8+2)
}

function getMouse(){
  lhold0=lhold
  rhold0=rhold
  lhold=(mouseIsPressed&&mouseButton=="left")
  rhold=(mouseIsPressed&&mouseButton=="right")
  lclick=(!lhold0&&lhold)
  rclick=(!rhold0&&rhold)
}
