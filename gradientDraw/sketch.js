let color1, color2;
let preStrokeWeight;

function setup() {
	createCanvas(1200, 800);
	background(1);
	colorMode(RGB);
	color1 = color(0.9 * 255, 0.1 * 255, 0.8 * 255); // magenta
	color2 = color(0.1 * 255, 0.8 * 255, 0.9 * 255); // cyan
	background(0);
	frameRate(60);
}

function draw() {
	// background(0, 1);
	let normalizedX = map(mouseX, 0, width, 0, 1);

	var newStrokeWeight = 1.0 * (mouseY - pmouseY);
	var weight = lerp(preStrokeWeight, newStrokeWeight, 0.3);

	preStrokeWeight = newStrokeWeight;

	let c = lerpColor(color1, color2, normalizedX);
	fill(c);
	stroke(c);
	strokeWeight(weight);

	ellipse(mouseX, mouseY, weight * 0.5, weight * 0.5);
	line(mouseX, mouseY, pmouseX, pmouseY);

}