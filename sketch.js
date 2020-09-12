var good, cities, data1;
var database;

var gameState = 0;
var form;

function setup() {
  database=firebase.database();
  createCanvas(800,400);
}

function draw() {
  background(255,255,255);  
  data1=form.input.val();
  if(gameState===0){
    form=new Form();
    form.display();
    if(data1){
      if(cities>0 && cities<50){
        good=createElement("Good and Minimal impact");
        good.position(425,230);
      }

    } 
  }
 


}