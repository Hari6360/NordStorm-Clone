document.querySelector("form").addEventListener("submit", signin);

function signin(event) {
	event.preventDefault();
	window.location.href = "../index.html";
}
