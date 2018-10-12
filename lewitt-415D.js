function setup() {
  createCanvas(400, 400);

	fill('red');
  noStroke();
  rect(50, 150, 200, 200);
    
  fill('green');
  noStroke();
  quad(50, 150, 150, 50, 350, 50, 250, 150);
  
  fill('blue');
  noStroke();
  quad(250, 150, 350, 50, 350, 250, 250, 350)
    
}
