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
	// Saving the theme & current icon chosen by the user
	localStorage.setItem("selected-theme", getCurrentTheme());
	localStorage.setItem("selected-icon", getCurrentIcon());
});
console.log("Theme Setting is Working.");
