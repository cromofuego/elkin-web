const canvas = document.getElementById("canvas-text-particles");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth - 10; // usar todo width y heigth del browser
// canvas.width = window.innerWidth - 100; // usar todo width y heigth del browser
canvas.height = 580;

let particleArray = [];
let abjustX = 0;
let abjustY = 0;

//hanlde mouse
const mouse = {
	x: null,
	y: null,
	radius: 30,
};

const txt = "Hello!\nI am\nElkin";
const lines = txt.split("\n");

canvas.addEventListener("mousemove", function (event) {
	mouse.x = event.offsetX; // with offsetX i get the position mouse relative to the canvas or could be windows
	mouse.y = event.offsetY;
	// console.log(event.y)
});

// first load page

if (window.innerWidth < 331) {
	abjustX = 1.5;
	ctx.fillStyle = "white";
	ctx.font = "14px Consolas";
	ctx.fillText(lines[0], 0, 26);
	ctx.fillText(lines[1], 8, 44);
	ctx.fillText(lines[2], 3.5, 64);
} else if (window.innerWidth < 500) {
	abjustX = 5.5;
	ctx.fillStyle = "white";
	ctx.font = "14px Consolas";
	ctx.fillText(lines[0], 0, 26);
	ctx.fillText(lines[1], 8, 44);
	ctx.fillText(lines[2], 3.5, 64);
} else {
	abjustX = 10.5;
	ctx.fillStyle = "white";
	ctx.font = "22px Consolas";
	ctx.fillText(lines[0], 0, 26);
	ctx.fillText(lines[1], 8, 44);
	ctx.fillText(lines[2], 3.5, 64);
}

window.addEventListener("resize", function () {
	canvas.width = window.innerWidth - 10;
});

class TextParticles {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.size = 3;
		this.baseX = this.x;
		this.baseY = this.y;
		this.density = Math.random() * 40 + 5;
	}
	draw() {
		ctx.fillStyle = "#8b92a9";
		ctx.beginPath();
		// x,y,radius, StartAngle, EndAngule(we are doing a convertion from radians)
		ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
		ctx.closePath();
		ctx.fill();
	}
	update() {
		// Gettign distance
		let dx = mouse.x - this.x;
		let dy = mouse.y - this.y;
		// Connectiong triangle shape
		let distance = Math.sqrt(dx * dx + dy * dy);
		let forceDirectionX = dx / distance;
		let forceDirectionY = dy / distance;
		let maxDistance = mouse.radius;
		// Controlling the force and speed Particles
		let force = (maxDistance - distance) / maxDistance;
		let directionX = forceDirectionX * force * this.density;
		let directionY = forceDirectionY * force * this.density;
		if (distance < mouse.radius) {
			this.x -= directionX;
			this.y -= directionY;
		} else {
			if (this.x !== this.baseX) {
				// Returning original position
				let dx = this.x - this.baseX;
				// Controlling the speed and aceleration
				this.x -= dx / 20;
			}
			if (this.y !== this.baseY) {
				let dy = this.y - this.baseY;
				this.y -= dy / 20;
			}
		}
	}
}

const textCoordinates = ctx.getImageData(0, 0, 100, 100);

function init() {
	particleArray = [];
	// Aqui basicamente leemos el tamano que asignamos
	// y la ubicacion de cad apixel en ese espacio
	for (let y = 0, y2 = textCoordinates.height; y < y2; y++) {
		for (let x = 0, x2 = textCoordinates.width; x < x2; x++) {
			if (
				textCoordinates.data[y * 4 * textCoordinates.width + x * 4 + 3] > 158
			) {
				// al ver en data[1] > 128 es el primer numero
				// para generar el color osea una opacity de 50%
				let positionX = x + abjustX;
				let positionY = y + abjustY;
				// With abjust Y and X we handle the position
				particleArray.push(new TextParticles(positionX * 7, positionY * 7));
				// With the multiple position we handle the size
			}
		}
	}
}
init();

function animate() {
	// Cleaning the canvas
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	for (let i = 0; i < particleArray.length; i++) {
		particleArray[i].draw();
		particleArray[i].update();
	}
	requestAnimationFrame(animate);
}
animate();
