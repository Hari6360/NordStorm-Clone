let productsContainer = document.getElementById("parentConatiner");

let topHeader = () => {
	const header = document.createElement("div");
	header.classList.add("top-header");
	header.innerHTML = `
        <span class="header-text">Shipping outside of the U.S. or Canada? Learn About International Shipping</span>
        <img id="flag" src="https://th.bing.com/th/id/R.3bd25defd5d81640e90cb133f85443ae?rik=ley0zlb7PlScHA&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fpi5%2fXky%2fpi5XkypeT.png&ehk=maw0y5jpzOJttw61C7YXk8LniBnMSQXqpXrmsYgUq%2fs%3d&risl=&pid=ImgRaw&r=0" alt="India" />
        India`;
	productsContainer.appendChild(header);
};

topHeader();

function createNavbar() {
	const navbar = document.createElement("nav");
	navbar.classList.add("navbar");

	const logo = document.createElement("div");
	logo.classList.add("logo");
	logo.textContent = "NORDSTORM";

	const searchBar = document.createElement("div");
	searchBar.classList.add("search-bar");
	searchBar.innerHTML = `<input type="text" placeholder="Search...">`;

	const menuList = document.createElement("ul");
	menuList.classList.add("nav-list");

	const items = [
		{ name: "SignIn", icon: "fa-user" },
		{ name: "Stores", icon: "fa-solid fa-store" },
		{ name: "Purchases", icon: "fa-shopping-cart" },
	];

	items.forEach((item) => {
		const listItem = document.createElement("li");
		listItem.innerHTML = `<a href="#"><i class="fas ${item.icon}"></i> ${item.name}</a> <i class="fas fa-caret-down"></i>`;
		menuList.appendChild(listItem);
	});

	const cartItem = document.createElement("li");
	cartItem.innerHTML = `<a href="#"><i class="fas fa-shopping-cart"></i> Cart</a>`;
	menuList.appendChild(cartItem);

	navbar.appendChild(logo);
	navbar.appendChild(searchBar);
	navbar.appendChild(menuList);

	productsContainer.appendChild(navbar);

	const line = document.createElement("hr");
	productsContainer.appendChild(line);
}

createNavbar();

let options = () => {
	const optionsBar = document.createElement("div");
	optionsBar.classList.add("options-bar");

	const list = document.createElement("ul");
	list.classList.add("list-container");

	const items = [
		"New",
		"Sale",
		"Women",
		"Men",
		"Kids",
		"Designer",
		"Shoes",
		"Accessories",
		"Home",
		"Beauty",
		"Gifts",
		"Explore",
	];

	items.forEach((text) => {
		const listItems = document.createElement("li");
		listItems.classList.add("list-container");
		listItems.innerHTML = `<a href="#"> ${text}</a>`;

		list.append(listItems);
	});

	optionsBar.appendChild(list);
	productsContainer.append(optionsBar);
};
options();

let top_banner = () => {
	const banner = document.createElement("div");
	banner.classList.add("top-banner");
	const image = document.createElement("img");
	image.src = "https://tpc.googlesyndication.com/simgad/12686039279685891800?";
	const text = document.createElement("span");
	text.classList.add("image-text");
	text.innerHTML = `Mother's Day gift from DIOR <br />
    celebrate her unique beuty with Rouge Dior lipstick
    `;

	banner.appendChild(image);
	banner.appendChild(text);

	productsContainer.appendChild(banner);
};
top_banner();
