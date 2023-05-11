 var images = []

function preload(){
 
  for(let i=1;i<34;i++){
    var image = loadImage("./Images/img"+i+".jpg")

    append(images, image);
console.log(images.length);

  }
}

function setup() {
  var canvas = createCanvas(1200, 1000);
  canvas.parent("p5container");
}



function draw() {
  background(100);
  
  
  image(images[0], 0, 0)

  
   
  
  }
  
  