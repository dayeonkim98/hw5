function setup() {
  createCanvas(400, 400);

colorMode(HSB)

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
