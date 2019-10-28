precision mediump float;

// this is the same variable we declared in the vertex shader
// we need to declare it here too!
varying vec2 vTexCoord;

uniform float u_mouse;
uniform vec2 u_resolution;


void main() {

  vec2 st = gl_FragCoord.xy/u_resolution;
  
  // copy the vTexCoord
  // vTexCoord is a value that goes from 0.0 - 1.0 depending on the pixels location
  // we can use it to access every pixel on the screen
  vec2 coord = vTexCoord;
  
  // lets make a gradient by mixing two colors
  // we are going to use the built in mix() function to blend between two vec3's
  // mix takes 3 arguments
  // mix(color1, color2, gradient mask)
  
  vec3 color1 = vec3(0.9, 0.1, 0.8); // magenta
  vec3 color2 = vec3(0.1, 0.8, 0.9); // cyan

  // the mix function...
  vec3 gradient = mix(color1, color2, u_mouse);

  gl_FragColor = vec4(gradient, 1.0 );

}