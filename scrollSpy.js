const headers = document.querySelectorAll(".header-section"); // AQUI DEBO CAMBIAR ESTO PARA MEJORES PARALABRAS
const links = document.querySelectorAll("#links-a a");
const navbar = document.getElementById("nabvar-a");
const arrowUp = document.getElementsByClassName("arrow-up");
const btnShowNavbar = document.getElementsByClassName("btn-nabvar-a");
const iconIbtnShowNavbar = document.getElementsByClassName("i-btn-navbar-a");
const observer = new IntersectionObserver(
	(entries, observador) => {
		// console.log(entries, observador)
		// entries es un array
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				// console.log(entry);
				// console.log(entry.target);
				// console.log(entry.target.id);
				const id = "#" + entry.target.id;
				history.pushState({}, "", id);
				// console.log(links)
				links.forEach((link) => {
					link.classList.remove(
						"navbar-a__ul__li-a__link-icon__link-icon--active"
					);
					const href = link.attributes.href.nodeValue;
					if (href === id) {
						// console.log(href)
						link.classList.add(
							"navbar-a__ul__li-a__link-icon__link-icon--active"
						);
					}
				});
			}
		});
	},
	{
		threshold: 1,
		rootMargin: "0px 0px -70% 0px", // establecer los margenes del view port
	}
);

headers.forEach((header) => {
	observer.observe(header); // le digo que viguile este encabezado en partocular
});

btnShowNavbar[0].addEventListener("click", function () {
	// console.log(iconIbtnShowNavbar[0].style.color);
	if (iconIbtnShowNavbar[0].style.color === "rgba(255, 255, 255, 0.8)") {
		navbar.style = "transform: translate(-100px);";
		// console.log('blacnk')
		iconIbtnShowNavbar[0].style = "color: #8b92a9";
	} else {
		navbar.style = "transform: translate(0px)";
		// console.log('other')
		iconIbtnShowNavbar[0].style = "color: hsla(0, 0%, 100%, .8)";
	}
});

// Showing the navbar in width scree > 900

arrowUp[0].addEventListener('click', function(){
	// console.log('holi')
	window.scrollTo({
		top: 0,
	});
})
if (window.innerWidth > 900) {
	window.addEventListener("scroll", function () {
		const Viewport = window.visualViewport.pageTop;

		if (Viewport > 3000) {
			// console.log("holi");
			arrowUp[0].style = "transform: translate(0px)";
		} else {
			arrowUp[0].style = "transform: translate(100px);";
		}
		// console.log(window.visualViewport.pageTop > 3854)
		if (Viewport > 655 && Viewport < 3450) {
			navbar.style = "transform: translate(0px)";
			//show narbar
		} else if (Viewport < 4000 && Viewport > 3450) {
			navbar.style = "transform: translate(-100px);";
			// console.log('holi')
			//hidden narbar
		} else {
			//hidden narbar
			navbar.style = "transform: translate(-100px);";
		}
	});
}

if (window.innerWidth < 900) {
	window.addEventListener("scroll", function () {
		if (window.visualViewport.pageTop > 5600) {
			arrowUp[0].style = "transform: translate(0px)";
		} else {
			arrowUp[0].style = "transform: translate(100px);";
		}
	});
}

const checkLanguage = document.getElementsByClassName('switch-language__check-box-language');
const checkLanguageEnglish = document.querySelectorAll('.target-english');
const checkLanguageSpanish = document.querySelectorAll('.tager-spanish');

const arrayEnglish = [...checkLanguageEnglish];
const arraySpanish = [...checkLanguageSpanish];

// console.log(checkLanguageEnglish)

// arrayEnglish.forEach(node => {
// 	console.log(node.style.display.nodeValue)
// })
// console.log(arrayEnglish[0].style.display.display)
// console.log(arraySpanish[0].style.display.display)
// let id = checkLanguage[0].checked;
// console.log(id)
// const display = window.getComputedStyle(checkLanguageEnglish).display;
// console.log(display)
checkLanguage[0].addEventListener("click", function () {
	// console.log(checkLanguage[0])
	// console.log(arrayEnglish)
	let id = checkLanguage[0].checked;
	// console.log(id)
	arrayEnglish.forEach(node => {
		// console.log(node.style.display)
		if (id === true) {
			// console.log('holi englis1')
			node.style = 'display: none !important;';
		} else {
			// console.log('holi englis2')
			node.style = 'display: inherit !important ;';
		}
		
	})

	arraySpanish.forEach(node => {
		if (id === false) {
			// console.log('holispanis222')
			node.style = 'display: none !important;';
		} else {
			// console.log('holispanis')
			node.style = 'display: inherit !important ;';
		}
	})

});
