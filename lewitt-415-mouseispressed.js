function setup() {
  createCanvas(400, 400);
  background(0);

colorMode(HSB)

	fill(20);
  noStroke();
  rect(50, 150, 200, 200);
    
  fill(50);
  noStroke();
  quad(50, 150, 150, 50, 350, 50, 250, 150);
  
  fill(70);
  noStroke();
  quad(250, 150, 350, 50, 350, 250, 250, 350);
  
  if (mouseIsPressed); {
  fill(random(1, 360), 100, 100);
  noStroke();
  rect(50, 150, 200, 200);
    
  fill(random(1, 360), 100, 100);
  noStroke();
  quad(50, 150, 150, 50, 350, 50, 250, 150);
  
  fill(random(1, 360), 100, 100);
  noStroke();
  quad(250, 150, 350, 50, 350, 250, 250, 350);
    
  }   
}
