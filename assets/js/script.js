var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

//E
ctx.beginPath();
ctx.lineWidth= 5
ctx.moveTo(100,100);
ctx.lineTo(100,300);
ctx.moveTo(100,100);
ctx.lineTo(180,100);
ctx.moveTo(100,200);
ctx.lineTo(180,200);
ctx.moveTo(100,300);
ctx.lineTo(180,300);
ctx.stroke();     
ctx.closePath();

//2
ctx.beginPath();
ctx.lineWidth= 10
ctx.strokeStyle = "#F73800";
ctx.moveTo(180,100);
ctx.quadraticCurveTo(500,-100,155,350);
ctx.stroke();
ctx.closePath();
//---
ctx.beginPath();
ctx.lineWidth= 10
ctx.strokeStyle = "#F73800";
ctx.moveTo(157,347);
ctx.quadraticCurveTo(295,317,290,327);
ctx.stroke();
ctx.closePath();

//N
ctx.beginPath();
ctx.lineWidth= 5
ctx.strokeStyle = "black";
ctx.moveTo(330,300);
ctx.lineTo(330,100);
ctx.lineTo(480,300);
ctx.lineTo(480,100);
ctx.stroke();
ctx.closePath();

//los1
ctx.beginPath();
ctx.lineWidth= 1
ctx.moveTo(530,100);
ctx.lineTo(520,110);
ctx.lineTo(520,120);
ctx.lineTo(530,130);
ctx.lineTo(540,120);
ctx.lineTo(540,110);
ctx.lineTo(530,100);
ctx.fillStyle = "#EAEAEA";
ctx.fill();
ctx.closePath();

//los2
ctx.beginPath();
ctx.lineWidth= 1
ctx.moveTo(518,125);
ctx.lineTo(508,135);
ctx.lineTo(508,145);
ctx.lineTo(518,155);
ctx.lineTo(528,145);
ctx.lineTo(528,135);
ctx.lineTo(518,125);
ctx.fillStyle = "#DAD9DA";
ctx.fill();
ctx.closePath();

//los3
ctx.beginPath();
ctx.lineWidth= 1
ctx.moveTo(545,125);
ctx.lineTo(535,135);
ctx.lineTo(535,145);
ctx.lineTo(545,155);
ctx.lineTo(555,145);
ctx.lineTo(555,135);
ctx.lineTo(545,125);
ctx.fillStyle = "#5A5657";
ctx.fill();
ctx.closePath();

//los4
ctx.beginPath();
ctx.lineWidth= 1
ctx.moveTo(530,150);
ctx.lineTo(520,160);
ctx.lineTo(520,170);
ctx.lineTo(530,180);
ctx.lineTo(540,170);
ctx.lineTo(540,160);
ctx.lineTo(530,150);
ctx.fillStyle = "#F73800";
ctx.fill();
ctx.closePath();

//los5
ctx.beginPath();
ctx.lineWidth= 1
ctx.moveTo(518,175);
ctx.lineTo(508,185);
ctx.lineTo(508,195);
ctx.lineTo(518,205);
ctx.lineTo(528,195);
ctx.lineTo(528,185);
ctx.lineTo(518,175);
ctx.fillStyle = "#868686";
ctx.fill();
ctx.closePath();

//los6
ctx.beginPath();
ctx.lineWidth= 1
ctx.moveTo(545,175);
ctx.lineTo(535,185);
ctx.lineTo(535,195);
ctx.lineTo(545,205);
ctx.lineTo(555,195);
ctx.lineTo(555,185);
ctx.lineTo(545,175);
ctx.fillStyle = "#EBEBEB";
ctx.fill();
ctx.closePath();

//  Phrase
var text = 'Ecole des métiers du Numérique'; // Nom de la variable
ctx.font = "15pt Geogia "; // Taille et style de police
var textPxLength = ctx.measureText(text);
ctx.fillStyle = "grey"; // Remplissage
ctx.fillText(text,330,325); // Placement "N" Tracé 300,150 x,y
var text = 'du Noyonnais'; // Nom de la variable
ctx.fillText(text,330,345); // Placement "N" Tracé 300,150 x,y