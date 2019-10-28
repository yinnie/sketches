let shader;
let shaderBackground;

function preload() {
	// load the shader
	shader = loadShader('gradient.vert', 'gradient.frag');
}

function setup() {
	// shaders require WEBGL mode to work
	createCanvas(windowWidth, windowHeight);

	shaderBackground = createGraphics(windowWidth, windowHeight, WEBGL);
	shaderBackground.noStroke();

	imageMode(CENTER);
	background(1);
}

function draw() {

	var mouseXMapped = map(mouseX, 0, width, 0, 1);
	console.log(mouseXMapped);

	shader.setUniform("u_mouse", mouseXMapped);
	shader.setUniform("u_resolution", [width, height]);

	shaderBackground.shader(shader);
	// passing the haderBg graphic geometry to render on
	shaderBackground.rect(0, 0, width, height);

	//because the shader is a graphic now we need to render it to the screen
	image(shaderBackground, width / 2, height / 2, width, height);
	//texture(shaderBackground);

}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
};