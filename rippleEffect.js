const buttons = document.querySelectorAll(
	".send-email__form__buttons__btn , .card-header-a__button-cv__btn"
);

for (let i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener("click", (e) => {
		// e.preventDefault(); // is i use this the buttons will be disable practically
		let overlay = document.createElement("span");
		overlay.classList.add("overlay-animation-button");
		let x = e.offsetX;
		let y = e.offsetY;
		// console.log(e.offsetX) positions mouse relative spans and button
		// console.log(e.offsetY)
		overlay.style.left = x + "px";
		overlay.style.top = y + "px";
		e.target.appendChild(overlay);

		setTimeout(() => {
			overlay.remove();
		}, 300);
		// console.log(overlay.style.left);
	});
}
