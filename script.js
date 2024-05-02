let productsContainer = document.getElementById("parentContainer");

let topHeader = () => {
	const header = document.createElement("div");
	header.classList.add("top-header");
	header.innerHTML = `
        <span class="header-text">Shipping outside of the U.S. or Canada? Learn About International Shipping</span>
        <img id="flag" src="https://th.bing.com/th/id/R.3bd25defd5d81640e90cb133f85443ae?rik=ley0zlb7PlScHA&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fpi5%2fXky%2fpi5XkypeT.png&ehk=maw0y5jpzOJttw61C7YXk8LniBnMSQXqpXrmsYgUq%2fs%3d&risl=&pid=ImgRaw&r=0" alt="India" />
        India`;
	productsContainer.appendChild(header);
};

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
		const listItem = document.createElement("li");
		listItem.classList.add("list-container");
		listItem.innerHTML = `<a href="#"> ${text}</a>`;

		listItem.addEventListener("mouseenter", function () {
			if (text === "New" || text === "Women" || text === "Men") {
				showDropdown();
			}
		});
		listItem.addEventListener("mouseleave", function () {
			if (text === "New" || text === "Women" || text === "Men") {
				hideDropdown();
			}
		});

		list.append(listItem);
	});

	optionsBar.appendChild(list);
	productsContainer.append(optionsBar);
};

let dropdown = () => {
	const dropdownBar = document.createElement("div");
	dropdownBar.classList.add("dropDown_container");
	dropdownBar.style.display = "none"; // Initially hide the dropdown

	const mainCategories = [
		{
			name: "New: Get Inspired",
			subcategories: [
				"Get Inspired",
				"Women's Under $100",
				"Men's Under $100",
				"New In Vacation for Women",
				"New In Vacation for Men",
				"Sneaker Release Calendar",
			],
		},
		{
			name: "Women",
			subcategories: [
				"Clothing",
				"Shoes",
				"Handbags & Wallets",
				"Jewelry",
				"Accessories",
				"New In Dresses",
				"New In Sandals",
				"New In Sneakers",
				"New In Swim",
			],
		},
		{
			name: "Men",
			subcategories: [
				"Men",
				"Clothing",
				"Shoes",
				"Accessories",
				" New In Shirts",
				"New In Sneakers",
			],
		},
	];

	mainCategories.forEach((category) => {
		const categoryDropdownItem = document.createElement("div");
		categoryDropdownItem.textContent = category.name;
		categoryDropdownItem.classList.add("dropdown-item");

		const subcategoryDropdownContent = document.createElement("div");
		subcategoryDropdownContent.classList.add("dropdown-content");

		category.subcategories.forEach((subcategory) => {
			const subcategoryDropdownItem = document.createElement("div");
			subcategoryDropdownItem.textContent = subcategory;
			subcategoryDropdownItem.classList.add(
				"dropdown-item",
				"subcategory-item"
			);
			subcategoryDropdownContent.appendChild(subcategoryDropdownItem);
		});

		categoryDropdownItem.appendChild(subcategoryDropdownContent);
		dropdownBar.appendChild(categoryDropdownItem);
	});

	productsContainer.appendChild(dropdownBar);
};

function showDropdown() {
	const dropdown = document.querySelector(".dropDown_container");
	dropdown.style.display = "block";
}

function hideDropdown() {
	const dropdown = document.querySelector(".dropDown_container");
	dropdown.style.display = "none";
}

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

function createCarousel() {
	const carouselContainer = document.createElement("div");
	carouselContainer.classList.add("banner-carousel");

	const images = [
		"https://n.nordstrommedia.com/it/554b0eb3-a151-411a-a1fd-59b2b35dc5b5.jpeg?h=700&w=1608",
		"https://n.nordstrommedia.com/it/84782813-6b9b-4eb8-b136-a1f5c09ebdd5.jpeg?h=700&w=1608",
		"https://n.nordstrommedia.com/it/7bd8785e-81ba-4c9e-a51f-c117138138ad.jpeg?h=700&w=1608",
	];

	const texts = [
		"Find the best gifts for every mom you love",
		"Spring'S Most Wanted",
		"It's Best-Dressed Season",
	];

	const innerContainer = document.createElement("div");
	innerContainer.classList.add("banner-carousel-inner");

	images.forEach((imagePath, index) => {
		const slide = document.createElement("div");
		slide.classList.add("banner-carousel-slide");

		const imageContainer = document.createElement("div");
		imageContainer.classList.add("carousel-image-container");

		const image = document.createElement("img");
		image.src = imagePath;
		image.alt = `Banner Image ${index + 1}`;
		image.classList.add("carousel-image");

		imageContainer.appendChild(image);

		const textContainer = document.createElement("div");
		textContainer.classList.add("banner-carousel-text");
		textContainer.innerHTML = texts[index];

		slide.appendChild(imageContainer);
		slide.appendChild(textContainer);
		innerContainer.appendChild(slide);
	});

	carouselContainer.appendChild(innerContainer);

	const prevButton = document.createElement("button");
	prevButton.classList.add("banner-carousel-prev");
	prevButton.innerHTML = "&laquo;";

	const nextButton = document.createElement("button");
	nextButton.classList.add("banner-carousel-next");
	nextButton.innerHTML = "&raquo;";

	carouselContainer.appendChild(prevButton);
	carouselContainer.appendChild(nextButton);

	let currentSlide = 0;
	const slideInterval = setInterval(() => {
		currentSlide = (currentSlide + 1) % images.length;
		innerContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
	}, 5000);

	prevButton.addEventListener("click", () => {
		currentSlide--;
		if (currentSlide < 0) currentSlide = images.length - 1;
		innerContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
	});

	nextButton.addEventListener("click", () => {
		currentSlide++;
		if (currentSlide >= images.length) currentSlide = 0;
		innerContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
	});

	return carouselContainer;
}

function createImageDivs() {
	const container = document.createElement("div");
	container.classList.add("image-container");

	const imageUrls = [
		"https://n.nordstrommedia.com/id/2a1d428f-02bb-4cc0-be28-f402d1d739ee.jpeg?h=382&w=402",
		"https://n.nordstrommedia.com/it/47e03092-8dc3-4d94-8c6b-92a492beaeed.jpeg?h=382&w=402",
		"https://n.nordstrommedia.com/it/6c0ec267-59a7-41b9-8736-e1a46721a9d6.jpeg?h=382&w=402",
		"https://n.nordstrommedia.com/it/86607aa8-c1c6-4318-8a11-ae1d7f11f3cc.jpeg?h=382&w=402",
	];

	const texts = ["Offer", "Slip Skirts", "Vacation Shoes", "Day Dresses"];

	imageUrls.forEach((imageUrl, index) => {
		const div = document.createElement("div");
		div.classList.add("image-div");

		const image = document.createElement("img");
		image.src = imageUrl;
		image.alt = "Image";

		const text = document.createElement("span");
		text.textContent = texts[index];
		text.classList.add("image-text");

		div.appendChild(image);
		div.appendChild(text);
		container.appendChild(div);
	});
	const line = document.createElement("hr");
	container.appendChild(line);
	return container;
}
function createInspiredSection() {
	const inspiredDiv = document.createElement("div");
	inspiredDiv.classList.add("inspired-container");

	const innerDiv = document.createElement("div");
	innerDiv.classList.add("centered-text");
	innerDiv.innerHTML = `
        <h2>GET INSPIRED</h2>
        <p>Discover the latest stories from The Thread, plus more we're loving in fashion, beauty and lifestyle.</p>
        <p><a href="#">Explore The Thread</a></p>
    `;

	inspiredDiv.appendChild(innerDiv);

	const imageUrls = [
		"https://n.nordstrommedia.com/it/da9da607-a1db-44b5-9f1e-6bb0f30cc8fe.jpeg?h=516&w=536",
		"https://n.nordstrommedia.com/it/5f160dee-e36c-41ae-bf65-4806fa1fcf7b.jpeg?h=516&w=536",
		"https://n.nordstrommedia.com/it/b630bebe-986e-420d-91fc-d4071ef982d7.jpeg?h=516&w=536",
	];

	const descriptions = [
		"Now Featuring: Larroudé",
		"The Monthly Edit with Rickie: Special-Event Dressing",
		"Where to Wear: 4 Versatile Outfits Featuring Light Layers",
	];

	for (let i = 0; i < 3; i++) {
		const div = document.createElement("div");
		div.classList.add("image-description");

		const image = document.createElement("img");
		image.src = imageUrls[i];
		image.alt = "Image " + (i + 1);

		const description = document.createElement("p");
		description.textContent = descriptions[i];

		const readStory = document.createElement("a");
		readStory.href = "#";
		readStory.textContent = "Read Story";

		div.appendChild(image);
		div.appendChild(description);
		div.appendChild(readStory);

		inspiredDiv.appendChild(div);
	}

	const line = document.createElement("hr");
	inspiredDiv.appendChild(line);

	return inspiredDiv;
}

function createShopSection() {
	const shopContainer = document.createElement("div");
	shopContainer.classList.add("shop-container");

	const introText = document.createElement("div");
	introText.textContent =
		"Shop what you love—faster and easier.\nSign In or Create an Account";
	introText.classList.add("intro-text");
	shopContainer.appendChild(introText);

	const products = [
		{
			imageUrl: "https://example.com/image1.jpg",
			description: "Product 1 Description",
			price: "$10",
			offer: "20% OFF",
			strikePrice: "$12",
			rating: 4,
		},
		{
			imageUrl: "https://example.com/image2.jpg",
			description: "Product 2 Description",
			price: "$15",
			offer: "30% OFF",
			strikePrice: "$20",
			rating: 5,
		},

		{
			image:
				"https://n.nordstrommedia.com/id/sr3/73dfe531-8ce2-4601-ac2b-cfe942849b29.jpeg?q=45&dpr=2&h=365.31&w=230",
			name: "New Markdown",
			name2: "reyn chaik",
			price: "Aud 78.57 - 104.76",
			strikeOff: "Aud 130.95",
			offer: "up to 40% off",
			extra: "Color/Sizes",
		},
		{
			image:
				"https://n.nordstrommedia.com/id/sr3/04455eef-30d9-4b0b-9c5e-7e13d1adce32.jpeg?q=45&dpr=2&h=365.31&w=230",
			name: "Blank Nyc",
			name2: "Zayn chaik",
			price: "Aud 84.57 - 94.76",
			strikeOff: "Aud 188.95",
			offer: "up to 55% off",
			extra: "Color/Sizes",
		},
		{
			image:
				"https://n.nordstrommedia.com/id/sr3/d35d36c5-cdb0-4dff-9c1b-4d2ed3fa400b.jpeg?q=45&dpr=2&h=365.31&w=230",
			name: "Vineyard Vines",
			name2: "Dhillion",
			price: "Aud 92.57 - 94.76",
			strikeOff: "Aud 138.95",
			offer: "up to 35% off",
			extra: "Color/Sizes",
		},
		{
			image:
				"https://n.nordstrommedia.com/id/sr3/d35d36c5-cdb0-4dff-9c1b-4d2ed3fa400b.jpeg?q=45&dpr=2&h=365.31&w=230",
			name: "Vineyard Vines",
			name2: "Hewlett",
			price: "Aud 92.57 - 94.76",
			strikeOff: "Aud 138.95",
			offer: "up to 35% off",
			extra: "Color/Sizes",
		},
		{
			image:
				"https://n.nordstrommedia.com/id/sr3/64d3f284-36ba-4f7d-b313-7c0877d6f099.jpeg?q=45&dpr=2&h=365.31&w=230",
			name: "Rodd & Gunn",
			name2: "Packard",
			price: "Aud 351",
			strikeOff: "Aud 123.95",
			offer: "up to 40% off",
			extra: "Color/Sizes",
		},
		{
			image:
				"https://n.nordstrommedia.com/id/sr3/41b4f83e-7cab-4dad-9aad-a447ff7f0ba3.jpeg?q=45&dpr=2&h=365.31&w=230",
			name: "New Markdown",
			name2: "Nordstorm",
			price: "Aud 93",
			strikeOff: "Aud 116.5",
			offer: "up to 25% off",
			extra: "Color/Sizes",
		},
		{
			image:
				"https://n.nordstrommedia.com/id/sr3/59480a7f-86cf-47db-81b3-4aad6259e0e1.jpeg?q=45&dpr=2&h=365.31&w=230",
			name: "Devil-Dog",
			name2: "Nordstorm",
			price: "Aud 69.74",
			strikeOff: "Aud 145.95",
			offer: "up to 65% off",
			extra: "Color/Sizes",
		},
		{
			image:
				"https://n.nordstrommedia.com/id/sr3/b94830c8-f654-48a2-8a91-8de3979a6b18.jpeg?q=45&dpr=2&h=365.31&w=230",
			name: "Dog-Markdown",
			name2: "Nordstorm",
			price: "Aud 111.74",
			strikeOff: "Aud 145.95",
			offer: "up to 20% off",
			extra: "Color/Sizes",
		},
		{
			image:
				"https://n.nordstrommedia.com/id/sr3/b648b095-e0f7-484d-87ed-42f2ba8dd935.jpeg?q=45&dpr=2&h=365.31&w=230",
			name: "Nord Storm Special",
			name2: "Nordstorm",
			price: "Aud 111.74",
			strikeOff: "Aud 145.95",
			offer: "up to 20% off",
			extra: "Color/Sizes",
		},
	];

	products.forEach((product) => {
		const productDiv = document.createElement("div");
		productDiv.classList.add("product");

		const image = document.createElement("img");
		image.src = product.imageUrl;
		image.alt = "Product Image";
		productDiv.appendChild(image);

		const description = document.createElement("div");
		description.textContent = product.description;
		description.classList.add("description");
		productDiv.appendChild(description);

		const price = document.createElement("div");
		price.textContent = product.price;
		price.classList.add("price");
		productDiv.appendChild(price);

		const offer = document.createElement("div");
		offer.textContent = product.offer;
		offer.classList.add("offer");
		productDiv.appendChild(offer);

		const strikePrice = document.createElement("div");
		strikePrice.textContent = product.strikePrice;
		strikePrice.classList.add("strike-price");
		productDiv.appendChild(strikePrice);

		const rating = document.createElement("div");
		for (let i = 0; i < product.rating; i++) {
			const star = document.createElement("i");
			star.classList.add("fa", "fa-star");
			rating.appendChild(star);
		}
		rating.classList.add("rating");
		productDiv.appendChild(rating);

		shopContainer.appendChild(productDiv);
	});

	return shopContainer;
}

topHeader();
createNavbar();
options();
dropdown();
top_banner();
productsContainer.appendChild(createCarousel());
productsContainer.appendChild(createImageDivs());
productsContainer.appendChild(createInspiredSection());
productsContainer.appendChild(createShopSection());
