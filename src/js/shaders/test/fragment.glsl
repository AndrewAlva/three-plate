uniform float uAlpha;

varying vec2 vUv;

void main() {
	float ring = 1. - step(0.05, abs(distance( vUv, vec2(.5) ) - .45));
    float linearGradient = vUv.y;
    float maskedRing = linearGradient * ring ;

    vec4 color = vec4(maskedRing);

    gl_FragColor = color;
}