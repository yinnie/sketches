const threshold = 1;

function setup() {
	createCanvas(1200, 800);
	background(1);
}

function draw() {

	let diffX = abs(mouseX - pmouseX);
	let diffY = abs(mouseY - pmouseY);

	if (diffX >= threshold || diffY >= threshold) {
		blendMode(EXCLUSION);
		let radius = (diffX + diffY) / 2;
		if (radius > 15) {
			radius = 15;
		}
		ellipse(mouseX, mouseY, 2 * radius, 2 * radius);
	}

}