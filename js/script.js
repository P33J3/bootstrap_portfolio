// Dark Theme Functionality

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// Check if Previously Selected Theme is Active (checking from local storage)

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// Obtaining the active theme by validating the dark theme class

const getCurrentTheme = () =>
	document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
	document.body.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

// Validation of previously selected theme
if (selectedTheme) {
	document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
		darkTheme
	);
	themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
		iconTheme
	);
}

//  Using the button to manually Activate/Deactivate the theme
themeButton.addEventListener("click", () => {
	// Add or remove the dark/light icon & theme
	document.body.classList.toggle(darkTheme);
	themeButton.classList.toggle(iconTheme);
	// Saving the theme & current icon chosen by the user to local storage.
	localStorage.setItem("selected-theme", getCurrentTheme());
	localStorage.setItem("selected-icon", getCurrentIcon());
});

//  Show/Hide the Menu

const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

//  Show Menu
// Validate if the constant exists

if (navToggle) {
	navToggle.addEventListener("click", () => {
		navMenu.classList.add("show-menu");
	});
}

//  Hide Menu
if (navClose) {
	navClose.addEventListener("click", () => {
		navMenu.classList.remove("show-menu");
	});
}



//  Remove Menu Profile
const navLink = document.querySelectorAll("nav__link");

function linkAction() {
	const navMenu = document.getElementById("nav-menu");
	// when you click on nav__links, we remove the show menu
	navMenu.classList.remove("show-menu");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));


// Typewriter Effect

new Typewriter("#typewriter", {
	strings: [
		"<span class=\'Typewriter__wrapper\'>Hey I'm <span class=\'typewriter\'><br/>Peter-Jon</span></span>",
		"<span class=Typewriter__wrapper>I'm a <span class=\'typewriter\'><br/>Web Developer</span></span>",
		"<span class=Typewriter__wrapper> And I'm a <span class=\'typewriter\'><br/>Quick Learner</span></span>"
	],
	autoStart: true,
	loop: true,
	cursor: "|"
});


