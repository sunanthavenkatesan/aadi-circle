var Y = 0;

function setup() { 
  createCanvas(windowWidth, windowHeight);
  
  
  ellipseMode(CENTER);
} 

function draw(){ 
  background(220);
	

  
    // Use fill() function to fill color 

    noFill()
    // Draw a circle  
    
    ellipse(width/2, height/2, 150); 
	Y+=0.02
  translate (width/2,height/2);
  rotate(Y);
	ellipse(200,100, 50);
  
}