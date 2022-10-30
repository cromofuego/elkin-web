const canvasBacground = document.getElementById("canvasBackground");
const ctx = canvasBacground.getContext("2d");
canvasBacground.width = window.innerWidth;

const body = document.body;
const html = document.documentElement;
const height = Math.max(
	body.scrollHeight,
	body.offsetHeight,
	html.clientHeight,
	html.scrollHeight,
	html.offsetHeight
);

canvasBacground.height = document.body.scrollHeight;

let particlesArray;
let mouseBackground = {
	x: null,
	y: null,
	radius: (canvasBacground.height / 80) * (canvasBacground.width / 80),
};

class ParticlesBackground {
	constructor(x, y, directionX, directionY, size, color) {
		this.x = x;
		this.y = y;
		this.directionX = directionX;
		this.directionY = directionY;
		this.size = size;
		this.color = color;
	}
	draw() {
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
		ctx.fillStyle = "#7b1fa2";
		ctx.fill();
	}
	update() {
		if (this.x > canvasBacground.width || this.x < 0) {
			this.directionX = -this.directionX;
		}
		if (this.y > canvasBacground.height || this.y < 0) {
			this.directionY = -this.directionY;
		}
		this.x += this.directionX;
		this.y += this.directionY;
		//draw particle
		this.draw();
	}
}

function initBackground() {
	particlesArray = [];
	let numberOfParticles = 40;
	for (let i = 0; i < numberOfParticles; i++) {
		let size = Math.random() * 5 + 1;
		let x = Math.random() * (innerWidth - size * 2 - size * 2) + size * 2;
		let y =
			Math.random() * (document.body.scrollHeight - size * 2 - size * 2) +
			size * 10;
		let directionX = Math.random() * 2 - 1.5;
		let directionY = Math.random() * 2 - 1.5;
		let color = "#7b1fa2";

		particlesArray.push(
			new ParticlesBackground(x, y, directionX, directionY, size, color)
		);
	}
}

// check if particles are close enougth to draw line between them
function connectBackground() {
	let opacityValue = 1;
	for (let a = 0; a < particlesArray.length; a++) {
		for (let b = a; b < particlesArray.length; b++) {
			let distance =
				(particlesArray[a].x - particlesArray[b].x) *
					(particlesArray[a].x - particlesArray[b].x) +
				(particlesArray[a].y - particlesArray[b].y) *
					(particlesArray[a].y - particlesArray[b].y);
			if (
				distance <
				(canvasBacground.width / 7) * (canvasBacground.height / 7)
			) {
				opacityValue = 1 - distance / 200000;
				//color lines
				ctx.strokeStyle = "rgba(139,146,169," + opacityValue + ")";
				ctx.beginPath();
				ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
				ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
				ctx.stroke();
			}
		}
	}
}

// animation loop
function animateBackground() {
	requestAnimationFrame(animateBackground);
	ctx.clearRect(0, 0, innerWidth, document.body.scrollHeight);
	for (let i = 0; i < particlesArray.length; i++) {
		particlesArray[i].update();
	}
	connectBackground();
}

window.addEventListener("resize", function () {
	canvasBacground.width = innerWidth;
	canvasBacground.height = document.body.scrollHeight;
	mouseBackground.radius =
		(canvasBacground.height / 80) * (canvasBacground.height / 80);
});

initBackground();
animateBackground();
