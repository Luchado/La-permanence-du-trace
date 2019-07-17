 "use strict";


 let carte = [];
 let c = [];
 let dw = 70;
 let dh = 300;
 let dx;
 let dy;
 let deltax = 100; //pas
 let deltay = 400;
 let pf;
 


let n=0; //numero fichier sortie

 let dxsx = [];
 let dysy = [];
 let dwsw = [];
 let dhsh = [];
 
 var song;




 //var carte1;




 function preload() {
   "use strict";
   for (let i = 0; i < 9; i++) {
     carte[i] = loadImage(`carte${i}.png`);

   }

 
   // carte1 = loadImage('carte1.png');
   
  song=loadSound("Carbonated.mp3"); 
   pf=loadImage("Portfolio.png");
 }

 function setup() {
   createCanvas(1000,1500);
   pixelDensity(1);
   
song.play();
   


   for (let j = 0; j < 9; j++) //je récupère les pixels de chaque carte
   {
     image(carte[j],0,0,width,1.41*width);
     c[j] = get();
   }
   background(255);

 }





function draw() {



   /*for (var y = 0; y < height; y++) {
       for (var x = 0; x < width; x++) {
         var index = (x + y * width) * 4;
      image(carte[0], 0, 0);
      let c = get(x,y,1,1);
      image(c,100,0);
     //noLoop();
       }
   }*/



   //image(carte[0],0,0) ;
   /*

     loadPixels();
      //carte1.loadPixels();




      for (var y = 0; y < height; y++) {
       for (var x = 0; x < width; x++) {
         var index = (x + y * width) * 4;
         pixels[index] = get.carte[0].pixels[index];
         pixels[index + 1] = get.carte[0].pixels[index+1];
         pixels[index + 2] = get.carte[0].pixels[index+2];
         pixels[index + 3] = get.carte[0].pixels[index+3];
         
    //let c = get(x,y,1,1);

       }
     }*/

   //updatePixels();
   //carte1.updatePixels();


//image(texteamnésie,0,0,width,height);

   for (let m = 0; m < 9; m++) {
     dxsx[m] = random(0, width);
     dysy[m] = random(0, height);
     dwsw[m] = random(1, 500);
     dhsh[m] = random(1, 500);

     image(c[m], dxsx[m], dysy[m], dwsw[m], dhsh[m], dxsx[m], dysy[m], dwsw[m], dhsh[m]);
     image(pf,0,0); // j'affice l'en tete portfolio en continu
//image(textearchiteuf,0,0,width,height);
//image(textedate,0,0,width,height);

/*if (mouseIsPressed) {
   
     save(`gif${n}.jpg`);
n=n+1;
   }
     
   else {
    ;
  }

   }/*

   /*
   dxsx= random(0,width);
   dysy= random(0,height);
   dwsw= random (1,150);
   dhsh= random(1,1000);

   image(c[3],dxsx,dysy,dwsw,dhsh,dxsx,dysy,dwsw,dhsh);


   dxsx= random(0,width);
   dysy= random(0,height);
   dwsw= random (1,150);
   dhsh= random(1,1000);

   image(c[4],dxsx,dysy,dwsw,dhsh,dxsx,dysy,dwsw,dhsh);

   dxsx= random(0,width);
   dysy= random(0,height);
   dwsw= random (1,150);
   dhsh= random(1,1000);

   image(c[5],dxsx,dysy,dwsw,dhsh,dxsx,dysy,dwsw,dhsh);

   dxsx= random(0,width);
   dysy= random(0,height);
   dwsw= random (1,150);
   dhsh= random(1,1000);

   image(c[6],dxsx,dysy,dwsw,dhsh,dxsx,dysy,dwsw,dhsh);


   /*
   for(dx=0;dx<width;dx=2*deltax+dx)
   {
     for(dy=deltay;dy<height;dy=3*deltay+dy){
       image(c[6],dx,dy,dw,dh,dx,dy,dw,dh); //image(img, dx, dy, dWidth, dHeight, sx, sy, [sWidth], [sHeight])
     
     }
     
     for(dy=deltax;dy<height;dy=2*deltay+dy){
       image(c[5],dx,dy,dw,dh,dx,dy,dw,dh); //image(img, dx, dy, dWidth, dHeight, sx, sy, [sWidth], [sHeight])
     
     }
   }
   */



   //image(c[4],dx,dy,dw,dh,dx,dy,dw,dh); //image(img, dx, dy, dWidth, dHeight, sx, sy, [sWidth], [sHeight])

   //console.log(c);

   //image (carte[1],0,0);


   //image(c,100+i,100+i,1,1,100+i,100+i,1,1);
   
/*textSize(200);   
textAlign(LEFT);
let s = 'ARCHITEUF';
fill(255);
text(s, 10,200, 300, 1000); // Text wraps within text box

textSize(150);   
textAlign(LEFT);
let d = 'Amnésie';
fill(255);
text(d, 10,400, 300, 1000); // Text wraps within text box*/

 }
}
