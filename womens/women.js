// Men page Js ============================Mens---------------------

function myFunction() {
	var x = document.querySelector(".checkmark1").value;
	console.log(x);
	if (x == "low") {
		womensData.sort(function (a, b) {
			return b.price - a.price;
		});
	}
	console.log(womensData);
	showDataAll(womensData);
}

function myFunction1() {
	var x = document.querySelector(".checkmark2").value;
	console.log(x);
	if (x == "high") {
		womensData.sort(function (a, b) {
			return a.price - b.price;
		});
	}

	console.log(womensData);
	showDataAll(womensData);
}

// _------------------------FILTER----------------------
function bmyFunction1() {
	var x = document.querySelector(".b1").value;
	console.log(x);
	var bx = womensData.filter(function (elem) {
		return elem.brand == x;
	});
	console.log(womensData);
	showDataAll(bx);
}

function bmyFunction2() {
	var x = document.querySelector(".b2").value;
	console.log(x);
	var bx = womensData.filter(function (elem) {
		return elem.brand == x;
	});
	console.log(womensData);
	showDataAll(bx);
}

function bmyFunction3() {
	var x = document.querySelector(".b3").value;
	console.log(x);
	var bx = womensData.filter(function (elem) {
		return elem.brand == x;
	});
	console.log(womensData);
	showDataAll(bx);
}

function bmyFunction4() {
	var x = document.querySelector(".b4").value;
	console.log(x);
	var bx = womensData.filter(function (elem) {
		return elem.brand == x;
	});
	console.log(womensData);
	showDataAll(bx);
}

function bmyFunction5() {
	var x = document.querySelector(".b5").value;
	console.log(x);
	var bx = womensData.filter(function (elem) {
		return elem.brand == x;
	});
	console.log(womensData);
	showDataAll(bx);
}

function bmyFunction6() {
	var x = document.querySelector(".b6").value;
	console.log(x);
	var bx = womensData.filter(function (elem) {
		return elem.brand == x;
	});
	console.log(womensData);
	showDataAll(bx);
}
// ===========COLOR FILTER===================================== //

function cmyFunction1() {
	var x = document.querySelector(".c1").value;
	console.log(x);
	var bx = womensData.filter(function (elem) {
		return elem.color == x;
	});
	console.log(womensData);
	showDataAll(bx);
}

function cmyFunction2() {
	var x = document.querySelector(".c2").value;
	console.log(x);
	var bx = womensData.filter(function (elem) {
		return elem.color == x;
	});
	console.log(womensData);
	showDataAll(bx);
}

function cmyFunction3() {
	var x = document.querySelector(".c3").value;
	console.log(x);
	var bx = womensData.filter(function (elem) {
		return elem.color == x;
	});
	console.log(womensData);
	showDataAll(bx);
}

function cmyFunction4() {
	var x = document.querySelector(".c4").value;
	console.log(x);
	var bx = womensData.filter(function (elem) {
		return elem.color == x;
	});
	console.log(womensData);
	showDataAll(bx);
}

function cmyFunction5() {
	var x = document.querySelector(".c5").value;
	console.log(x);
	var bx = womensData.filter(function (elem) {
		return elem.color == x;
	});
	console.log(womensData);
	showDataAll(bx);
}

function cmyFunction6() {
	var x = document.querySelector(".c6").value;
	console.log(x);
	var bx = womensData.filter(function (elem) {
		return elem.color == x;
	});
	console.log(womensData);
	showDataAll(bx);
}

function cmyFunction7() {
	var x = document.querySelector(".c7").value;
	console.log(x);
	var bx = womensData.filter(function (elem) {
		return elem.color == x;
	});
	console.log(womensData);
	showDataAll(bx);
}

function cmyFunction8() {
	var x = document.querySelector(".c8").value;
	console.log(x);
	var bx = womensData.filter(function (elem) {
		return elem.color == x;
	});
	console.log(womensData);
	showDataAll(bx);
}

// ---------------------------------------------------------------------------------------------------------
// SideBar Filter
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function () {
		this.classList.toggle("active");
		var panel = this.nextElementSibling;
		if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
		} else {
			panel.style.maxHeight = panel.scrollHeight + "px";
		}
	});
}

// sidebar filter end

// var womensData = [
// 	{
// 		img_url:
// 			"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000008951217-White-White-1000008951217_01-2100.jpg",
// 		name: "Men Solid Regular Fit Band Collar T-shirt",
// 		brand: "dFAME",
// 		type: "TShirt",
// 		price: 500,
// 		stprice: 900,
// 		item: 16901,
// 		fabric: "Cotton",
// 		color: "white",
// 		discount: 40,
// 	},
// 	{
// 		img_url:
// 			"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010656401-Green-1000010656401_01-2100.jpg",
// 		name: "Men Printed Crew Neck T-shirt",
// 		brand: "STATUS",
// 		type: "Tshirt",
// 		price: 499,
// 		stprice: 900,
// 		item: 16901,
// 		fabric: "Cotton",
// 		color: "Brown",
// 		discount: 40,
// 	},
// 	{
// 		img_url:
// 			"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010616357-Blue-1000010616357_01-2100.jpg",
// 		name: "Men Printed Crew Neck T-shirt",
// 		brand: "PEPE_JEANS",
// 		type: "Tshirt",
// 		price: 839,
// 		stprice: 900,
// 		item: 16901,
// 		fabric: "Cotton",
// 		color: "Blue",
// 		discount: 30,
// 	},

// 	{
// 		img_url:
// 			"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009010365-Var8-Blue-Navy-1000009010365-Var8_01-2100.jpg",
// 		name: "Solid Slim Fit Polo T-shirt",
// 		brand: "INDIAN",
// 		type: "Tshirt",
// 		price: 1049,
// 		stprice: 1300,
// 		item: 16901,
// 		fabric: "Cotton",
// 		color: "Blue",
// 		discount: 20,
// 	},
// 	{
// 		img_url:
// 			"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009971151-Blue-Navy-1000009971151_01-2100.jpg",
// 		name: "Printed Crew Neck T-Shirt",
// 		brand: "CELIO",
// 		type: "Tshirt",
// 		price: 699,
// 		stprice: 1199,
// 		item: 16901,
// 		fabric: "Cotton",
// 		color: "Blue",
// 		discount: 30,
// 	},
// 	{
// 		img_url:
// 			"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000005319490-Caffire-Neu-Red-Red-1000005319490_01-2100.jpg",
// 		name: "Solid Crew Neck Tee",
// 		brand: "KAPPA",
// 		type: "Tshirt",
// 		price: 250,
// 		stprice: 300,
// 		item: 16901,
// 		fabric: "Cotton",
// 		color: "Red",
// 		discount: 10,
// 	},
// 	{
// 		img_url:
// 			"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010753280-Red-Red-1000010753280_01-2100.jpg",
// 		name: "Men Striped Crew Neck T-shirt",
// 		brand: "JACK",
// 		type: "Tshirt",
// 		price: 899,
// 		stprice: 1099,
// 		item: 16901,
// 		fabric: "Cotton",
// 		color: "Red",
// 		discount: 20,
// 	},
// 	{
// 		img_url:
// 			"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009929004-White-White-1000009929004_01-2100.jpg",
// 		name: "Men Printed Polo T-shirt",
// 		brand: "CODE",
// 		type: "Tshirt",
// 		price: 650,
// 		stprice: 850,
// 		item: 16901,
// 		fabric: "Cotton",
// 		color: "Pink",
// 		discount: 15,
// 	},
// 	{
// 		img_url:
// 			"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000005319490-Caffire-Neu-Blue-Blue-1000005319490_01-2100.jpg",
// 		name: "Solid Crew Neck Tee",
// 		brand: "KAPPA",
// 		type: "Tshirt",
// 		price: 250,
// 		stprice: 350,
// 		item: 16901,
// 		fabric: "Cotton",
// 		color: "Blue",
// 		discount: 10,
// 	},
// 	{
// 		img_url:
// 			"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010038069-Grey-DarkGrey-1000010038069_01-2100.jpg",
// 		name: "Men Printed Regular Fit Crew Neck Sports T-shirt",
// 		brand: "PROLINE",
// 		type: "Tshirt",
// 		price: 799,
// 		stprice: 850,
// 		item: 16901,
// 		fabric: "Cotton",
// 		color: "Grey",
// 		discount: 5,
// 	},
// 	{
// 		img_url:
// 			"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010816184-Blue-Darkblue-1000010816184_01-2100.jpg",
// 		name: "Men Printed Regular Fit Polo T-shirt",
// 		brand: "COLORPLUS",
// 		type: "Tshirt",
// 		price: 1799,
// 		stprice: 2400,
// 		item: 16901,
// 		fabric: "Cotton",
// 		color: "Blue",
// 		discount: 25,
// 	},
// 	{
// 		img_url:
// 			"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010660437-Green-1000010660437_01-2100.jpg",
// 		name: "Men Solid V-Neck T-shirt",
// 		brand: "UNITED",
// 		type: "Tshirt",
// 		price: 769,
// 		stprice: 900,
// 		item: 16901,
// 		fabric: "Cotton",
// 		color: "Green",
// 		discount: 10,
// 	},
// 	{
// 		img_url:
// 			"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009232313-Var7-White-White-1000009232313-Var7_01-2100.jpg",
// 		name: "Men Solid Regular Fit Formal Shirt with Short Sleeves",
// 		brand: "CODE",
// 		type: "Shirt",
// 		price: 1299,
// 		stprice: 1500,
// 		item: 16901,
// 		fabric: "Cotton",
// 		color: "White",
// 		discount: 10,
// 	},
// 	{
// 		img_url:
// 			"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010833586-Blue-Blue-1000010833586_01-2100.jpg",
// 		name: "Men Checked Slim Fit Formal Shirt",
// 		brand: "AMERICAN",
// 		type: "Shirt",
// 		price: 1300,
// 		stprice: 1600,
// 		item: 16901,
// 		fabric: "Cotton",
// 		color: "Blue",
// 		discount: 10,
// 	},
// 	{
// 		img_url:
// 			"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010219393-Pink-Pink-1000010219393_01-2100.jpg",
// 		name: "Men Solid Slim Fit Formal Shirt",
// 		brand: "CODE",
// 		type: "Shirt",
// 		price: 580,
// 		stprice: 800,
// 		item: 16901,
// 		fabric: "Silk",
// 		color: "Pink",
// 		discount: 20,
// 	},
// 	{
// 		img_url:
// 			"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009811796-Var78-Blue-1000009811796-Var78_01-2100.jpg",
// 		name: "Men Solid Slim Fit Formal Shirt with Mask",
// 		brand: "CODE",
// 		type: "Shirt",
// 		price: 580,
// 		stprice: 900,
// 		item: 16901,
// 		fabric: "Silk",
// 		color: "Blue",
// 		discount: 43,
// 	},
// 	{
// 		img_url:
// 			"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010113393-Red-Red-1000010113393_01-2100.jpg",
// 		name: "Men Checked Full Sleeves Slim Fit Formal Shirt",
// 		brand: "CODE",
// 		type: "Shirt",
// 		price: 850,
// 		stprice: 1100,
// 		item: 16901,
// 		fabric: "Cotton",
// 		color: "White",
// 		discount: 23,
// 	},
// 	{
// 		img_url:
// 			"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010815576-Red-1000010815576_01-2100.jpg",
// 		name: "Men Checked Regular Fit Casual Shirt",
// 		brand: "DENIMIZE",
// 		type: "Shirt",
// 		price: 909,
// 		stprice: 1200,
// 		item: 16901,
// 		fabric: "Cotton",
// 		color: "Red",
// 		discount: 20,
// 	},
// 	{
// 		img_url:
// 			"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009980897-Var7-Orange-1000009980897-Var7_01-2100.jpg",
// 		name: "Men Solid Slim Fit Formal Shirt",
// 		brand: "CODE",
// 		type: "Shirt",
// 		price: 950,
// 		stprice: 1250,
// 		item: 16901,
// 		fabric: "Silk",
// 		color: "Orange",
// 		discount: 23,
// 	},
// 	{
// 		img_url:
// 			"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010815598-Blue-1000010815598_01-2100.jpg",
// 		name: "Men Textured Regular Fit Casual Shirt",
// 		brand: "DENIMIZE",
// 		type: "Shirt",
// 		price: 909,
// 		stprice: 1300,
// 		item: 16901,
// 		fabric: "Cotton",
// 		color: "Blue",
// 		discount: 30,
// 	},
// 	{
// 		img_url:
// 			"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009831068-Blue-MidBlue-1000009831068_01-2100.jpg",
// 		name: "Men Stonewashed Skinny Fit Jeans",
// 		brand: "DENIMIZE",
// 		type: "Trouser",
// 		price: 1050,
// 		stprice: 1100,
// 		item: 16901,
// 		fabric: "Jeans",
// 		color: "Blue",
// 		discount: 10,
// 	},
// 	{
// 		img_url:
// 			"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009811994-Blue-DarkBlue-1000009811994_01-2100.jpg",
// 		name: "Men Stonewashed Skinny Fit Jeans",
// 		brand: "DENIMIZE",
// 		type: "Trouser",
// 		price: 1011,
// 		stprice: 1400,
// 		item: 16901,
// 		fabric: "Jeans",
// 		color: "Blue",
// 		discount: 29,
// 	},
// 	{
// 		img_url:
// 			"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009812085-Blue-LightBlue-1000009812085_01-2100.jpg",
// 		name: "Men Stonewashed Skinny Fit Jeans",
// 		brand: "CODE",
// 		type: "Trouser",
// 		price: 1150,
// 		stprice: 1500,
// 		item: 16901,
// 		fabric: "Jeans",
// 		color: "Blue",
// 		discount: 30,
// 	},
// 	{
// 		img_url:
// 			"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009830925-Grey-Grey-1000009830925_01-2100.jpg",
// 		name: "Men Stonewashed Skinny Fit Jeans",
// 		brand: "CODE",
// 		type: "Trouser",
// 		price: 1050,
// 		stprice: 1400,
// 		item: 16901,
// 		fabric: "Jeans",
// 		color: "Blue",
// 		discount: 30,
// 	},
// 	{
// 		img_url:
// 			"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009812059-Grey-LightGrey-1000009812059_01-2100.jpg",
// 		name: "Men Stonewashed Skinny Fit Jeans",
// 		brand: "FORCA",
// 		type: "Trouser",
// 		price: 1025,
// 		stprice: 1200,
// 		item: 16901,
// 		fabric: "Jeans",
// 		color: "Grey",
// 		discount: 10,
// 	},
// 	{
// 		img_url:
// 			"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010434998-Grey-1000010434998_01-2100.jpg",
// 		name: "Men Stonewashed Skinny Fit Jeans",
// 		brand: "CODE",
// 		type: "Trouser",
// 		price: 1022,
// 		stprice: 1400,
// 		item: 16901,
// 		fabric: "Jeans",
// 		color: "Grey",
// 		discount: 30,
// 	},
// 	{
// 		img_url:
// 			"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010451290-Black-1000010451290_01-2100.jpg",
// 		name: "Men Washed Skinny Fit Jeans",
// 		brand: "DENIMIZE",
// 		type: "Trouser",
// 		price: 1329,
// 		stprice: 1600,
// 		item: 16901,
// 		fabric: "Jeans",
// 		color: "Black",
// 		discount: 15,
// 	},
// 	{
// 		img_url:
// 			"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000008443054-Black-BLACK-1000008443054_01-2100.jpg",
// 		name: "Men Stonewashed Skinny Fit Jeans",
// 		brand: "CODE",
// 		type: "Trouser",
// 		price: 1456,
// 		stprice: 1900,
// 		item: 16901,
// 		fabric: "Jeans",
// 		color: "Black",
// 		discount: 30,
// 	},
// 	{
// 		img_url:
// 			"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010033044-Grey-Grey-1000010033044_01-2100.jpg",
// 		name: "Men Checked Super Slim Fit Formal Trousers",
// 		brand: "VAN",
// 		type: "Trouser",
// 		price: 1499,
// 		stprice: 1900,
// 		item: 16901,
// 		fabric: "Polyster",
// 		color: "Grey",
// 		discount: 30,
// 	},
// 	{
// 		img_url:
// 			"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010887613-Green-Darkgreen-1000010887613_01-2100.jpg",
// 		name: "Men Solid Slim Tapered Formal Trousers",
// 		brand: "ARROW",
// 		type: "Trouser",
// 		price: 1299,
// 		stprice: 1600,
// 		item: 16901,
// 		fabric: "Polyster",
// 		color: "Black",
// 		discount: 20,
// 	},
// 	{
// 		img_url:
// 			"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009677552-Grey-Grey-1000009677552_01-2100.jpg",
// 		name: "Men Printed Colourblock Sweater",
// 		brand: "SMILEYWORLD",
// 		type: "Winter_wear",
// 		price: 2001,
// 		stprice: 2500,
// 		item: 16901,
// 		fabric: "Woolen",
// 		color: "Multicolor",
// 		discount: 20,
// 	},
// 	{
// 		img_url:
// 			"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010901148-Blue-1000010901148_01-2100.jpg",
// 		name: "Men Printed Crew Neck Sweater",
// 		brand: "PROLINE",
// 		type: "Winter_wear",
// 		price: 1359,
// 		stprice: 1600,
// 		item: 16901,
// 		fabric: "Woolen",
// 		color: "Multicolor",
// 		discount: 10,
// 	},
// 	{
// 		img_url:
// 			"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010882064-Green-Green-1000010882064_01-2100.jpg",
// 		name: "Men Printed Crew Neck Sweatshirt",
// 		brand: "PARX",
// 		type: "Winter_wear",
// 		price: 1116,
// 		stprice: 1400,
// 		item: 16901,
// 		fabric: "Woolen",
// 		color: "Green",
// 		discount: 20,
// 	},
// 	{
// 		img_url:
// 			"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010548712-Blue-1000010548712_01-2100.jpg",
// 		name: "Men Solid Crew Neck Sweater",
// 		brand: "FAME",
// 		type: "Winter_wear",
// 		price: 1339,
// 		stprice: 1500,
// 		item: 16901,
// 		fabric: "Woolen",
// 		color: "Blue",
// 		discount: 10,
// 	},
// ];
var womensData = [
	{
		img_url:
			"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000008957702-White-OffWhite-1000008957702_01-2100.jpg",
		name: "GLOBAL DESI Printed Sleeveless Kurti with Sharara Pants",
		brand: "GLOBAL",
		type: "Kurta_Set",
		item: 16701,
		price: 4299,
		stprice: 5299,
		fabric: "Cotton",
		color: "Beige",
		discount: 20,
	},
	{
		img_url:
			"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009762514-Blue-Navy-1000009762514_01-2100.jpg",
		name: "MELANGE Women Embellished Kurta with Pants and Dupatta",
		brand: "MELANGE",
		type: "Kurta_Set",
		item: 16701,
		price: 2029,
		stprice: 2999,
		fabric: "Cotton",
		color: "Blue",
		discount: 10,
	},
	{
		img_url:
			"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009745298-Beige-Beige-1000009745298_01-2100.jpg",
		name: "MELANGE Women Printed Kurta with Pants",
		brand: "MELANGE",
		type: "Kurta_Set",
		item: 16701,
		price: 1329,
		stprice: 1499,
		fabric: "Cotton",
		color: "Beige",
		discount: 13,
	},
	{
		img_url:
			"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010015977-Pink-Fuschia-1000010015977_01-2100.jpg",
		name: "MELANGE Women Printed Kurta with Shrug and Straight Pants",
		brand: "MELANGE",
		type: "Kurta_Set",
		item: 16701,
		price: 2155,
		stprice: 2699,
		fabric: "Cotton",
		color: "Red",
		discount: 49,
	},
	{
		img_url:
			"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010015886-Blue-Navy-1000010015886_01-2100.jpg",
		name: "MELANGE Women Printed Kurta with Palazzos",
		brand: "MELANGE",
		type: "Kurta_Set",
		item: 16701,
		price: 1679,
		stprice: 2499,
		fabric: "Cotton",
		color: "Blue",
		discount: 15,
	},
	{
		img_url:
			"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010015938-Blue-Navy-1000010015938_01-2100.jpg",
		name: "MELANGE Women Printed Kurta with Solid Pants",
		brand: "MELANGE",
		type: "Kurta_Set",
		item: 16701,
		price: 1359,
		stprice: 2199,
		fabric: "Cotton",
		color: "Blue",
		discount: 20,
	},
	{
		img_url:
			"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010035597-Black-Black-1000010035597_01-2100.jpg",
		name: "Women Printed Straight Kurta with Palazzos, Dupatta and Face Mask",
		brand: "BIBA",
		type: "Kurta_Set",
		item: 16701,
		price: 1999,
		stprice: 2799,
		fabric: "Cotton",
		color: "Black",
		discount: 10,
	},
	{
		img_url:
			"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010035582-Blue-Blue-1000010035582_01-2100.jpg",
		name: "Women Printed Kurta, Palazzos, Dupatta and Face Mask",
		brand: "BIBA",
		type: "Kurta_Set",
		item: 16702,
		price: 2309,
		stprice: 3009,
		fabric: "Cotton",
		color: "Blue",
		discount: 12,
	},
	{
		img_url:
			"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010362568-Red-Red-1000010362568_01-2100.jpg",
		name: "Women Printed Kurta, Churidar and Dupatta",
		brand: "BIBA",
		type: "Kurta_Set",
		item: 16703,
		price: 2399,
		stprice: 3009,
		fabric: "Cotton",
		color: "Pink",
		discount: 10,
	},
	{
		img_url:
			"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010032921-Green-Lightgreen-1000010032921_01-2100.jpg",
		name: "Women Printed Crop Top with Tiered Maxi Skirt",
		brand: "GLOBAL",
		type: "Kurta_Set",
		item: 16704,
		price: 3499,
		stprice: 4509,
		fabric: "Cotton",
		color: "Green",
		discount: 25,
	},
	{
		img_url:
			"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009476409-Green-Mint-1000009476409_01-2100.jpg",
		name: "Women Printed Layered Straight Kurta with Palazzos",
		brand: "GLOBAL",
		type: "Kurta_Set",
		item: 16705,
		price: 5999,
		stprice: 9009,
		fabric: "Cotton",
		color: "Green",
		discount: 49,
	},
	{
		img_url:
			"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010055601-Black-Black-1000010055601_01-2100.jpg",
		name: "Women Printed Top with Palazzos",
		brand: "GLOBAL",
		type: "Kurta_Set",
		item: 16706,
		price: 1559,
		stprice: 5549,
		fabric: "Cotton",
		color: "Yellow",
		discount: 2,
	},
	{
		img_url:
			"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010083273-Blue-LightBlue-1000010083273_01-2100.jpg",
		name: "Women Solid Sleeveless Top",
		brand: "ALLEN_SOLLY",
		type: "Tops",
		item: 16707,
		price: 899,
		stprice: 989,
		fabric: "Cotton",
		color: "Pink",
		discount: 5,
	},
	{
		img_url:
			"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009865688-Blue-Navy-1000009865688_01-2100.jpg",
		name: "Women Textured Top with Button Placket",
		brand: "ALLEN_SOLLY",
		type: "Tops",
		item: 16709,
		price: 1139,
		stprice: 1209,
		fabric: "Cotton",
		color: "Blue",
		discount: 10,
	},
	{
		img_url:
			"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009865667-Yellow-Yellow-1000009865667_01-2100.jpg",
		name: "Women Embroidered Short Sleeves Top",
		brand: "ALLEN_SOLLY",
		type: "Tops",
		item: 16709,
		price: 2199,
		stprice: 3199,
		fabric: "Cotton",
		color: "Yellow",
		discount: 25,
	},
	{
		img_url:
			"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009840161-Green-Green-1000009840161_01-2100.jpg",
		name: "Women Lace Three-quarter Sleeves Top",
		brand: "CODE",
		type: "Tops",
		item: 16710,
		price: 974,
		stprice: 1850,
		fabric: "Cotton",
		color: "Green",
		discount: 45,
	},
	{
		img_url:
			"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000008918248-White-White-1000008918248_01-2100.jpg",
		name: "Women Printed Sleeveless Top",
		brand: "CODE",
		type: "Tops",
		item: 16711,
		price: 649,
		stprice: 2009,
		fabric: "Cotton",
		color: "White",
		discount: 20,
	},
	{
		img_url:
			"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009048040-Red-Wine-1000009048040_01-2100.jpg",
		name: "Women Solid Cinched Waist Top",
		brand: "CODE",
		type: "Tops",
		item: 16712,
		price: 649,
		stprice: 909,
		fabric: "Cotton",
		color: "Red",
		discount: 40,
	},
	{
		img_url:
			"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009712924-Yellow-Yellow-1000009712924_01-2100.jpg",
		name: "Women Sleeveless Top",
		brand: "CODE",
		type: "Tops",
		item: 16713,
		price: 449,
		stprice: 500,
		fabric: "Cotton",
		color: "Yellow",
		discount: 2,
	},
	{
		img_url:
			"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000008957663-Beige-Beige-1000008957663_01-2100.jpg",
		name: "Printed Elasticated Palazzos",
		brand: "GLOBAL",
		type: "Pants",
		item: 16714,
		price: 1679,
		stprice: 1670,
		fabric: "Cotton",
		color: "Beige",
		discount: 2,
	},
	{
		img_url:
			"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009058377-White-Offwhite-1000009058377_01-2100.jpg",
		name: "Women Checked Elasticated Sharara Pants",
		brand: "GLOBAL",
		type: "Pants",
		item: 16715,
		price: 1619,
		stprice: 2009,
		fabric: "Cotton",
		color: "White",
		discount: 20,
	},
	{
		img_url:
			"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010166543-Blue-Indigo-1000010166543_01-2100.jpg",
		name: "Women Solid High Slit Palazzos",
		brand: "GLOBAL",
		type: "Pants",
		item: 16716,
		price: 1079,
		stprice: 1309,
		fabric: "Cotton",
		color: "Blue",
		discount: 23,
	},
	{
		img_url:
			"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000008911995-Black-Black-1000008911995_01-2100.jpg",
		name: "Solid Elasticated Straight Pants",
		brand: "GLOBAL",
		type: "Pants",
		item: 16717,
		price: 2149,
		stprice: 2199,
		fabric: "Cotton",
		color: "Black",
		discount: 5,
	},
	{
		img_url:
			"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009745246-Yellow-Lime-1000009745246_01-2100.jpg",
		name: "Women Solid Cropped Pants",
		brand: "MELANGE",
		type: "Pants",
		item: 16718,
		price: 799,
		stprice: 1409,
		fabric: "Cotton",
		color: "Yellow",
		discount: 49,
	},
	{
		img_url:
			"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009745259-var5-Red-Maroon-1000009745259-var5_01-2100.jpg",
		name: "Women Striped Cropped Straight Pants",
		brand: "MELANGE",
		type: "Pants",
		item: 16718,
		price: 799,
		stprice: 809,
		fabric: "Cotton",
		color: "Red",
		discount: 2,
	},
	{
		img_url:
			"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010065658-Beige-Beige-1000010065658_01-2100.jpg",
		name: "Women Printed Straight Trousers",
		brand: "MELANGE",
		type: "Pants",
		item: 16719,
		price: 799,
		stprice: 1009,
		fabric: "Cotton",
		color: "Beige",
		discount: 19,
	},
	{
		img_url:
			"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010065671-Blue-Navy-1000010065671_01-2100.jpg",
		name: "Women Solid Elasticated Straight Pants",
		brand: "MELANGE",
		type: "Pants",
		item: 16720,
		price: 799,
		stprice: 1009,
		fabric: "Cotton",
		color: "Blue",
		discount: 21,
	},
	{
		img_url:
			"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000008776423-Green-Green-1000008776423_01-2100.jpg",
		name: "Women Solid Palazzo Pants with Inverted Pleats",
		brand: "AURELIA",
		type: "Pants",
		item: 16721,
		price: 1259,
		stprice: 1260,
		fabric: "Cotton",
		color: "Green",
		discount: 2,
	},
	{
		img_url:
			"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009401844-Blue-Blue-1000009401844_01-2100.jpg",
		name: "Women Solid Elasticated Straight Pants",
		brand: "AURELIA",
		type: "Pants",
		item: 16701,
		price: 629,
		stprice: 639,
		fabric: "Cotton",
		color: "Blue",
		discount: 2,
	},
	{
		img_url:
			"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000008776332-Pink-Peach-1000008776332_01-2100.jpg",
		name: "Women Printed Elasticated Palazzos",
		brand: "AURELIA",
		type: "Pants",
		item: 16701,
		price: 699,
		stprice: 709,
		fabric: "Cotton",
		color: "Orange",
		discount: 2,
	},
	{
		img_url:
			"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000008776332-Pink-Peach-1000008776332_01-2100.jpg",
		name: "Women Printed Elasticated Palazzos",
		brand: "AURELIA",
		type: "Pants",
		item: 16701,
		price: 699,
		stprice: 709,
		fabric: "Cotton",
		color: "Red",
		discount: 2,
	},
	{
		img_url:
			"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010878544-Pink-Pink-1000010878544_01-2100.jpg",
		name: "Women Printed Crew Neck Sweatshirt",
		brand: "ALLEN_SOLLY",
		type: "Sweat_Shirts",
		price: 1379,
		item: 16701,
		stprice: 1409,
		fabric: "Cotton",
		color: "Pink",
		discount: 2,
	},
	{
		img_url:
			"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010725223-Blue-Navy-1000010725223_01-2100.jpg",
		name: "Women Printed Sweatshirt",
		brand: "ALLEN_SOLLY",
		type: "Sweat_Shirts",
		price: 1279,
		item: 16701,
		stprice: 2009,
		fabric: "Cotton",
		color: "Blue",
		discount: 20,
	},
	{
		img_url:
			"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010433514-Red-Wine-1000010433514_01-2100.jpg",
		name: "Women Solid Knitted Top",
		brand: "CODE",
		type: "Sweat_Shirts",
		item: 16701,
		price: 1129,
		stprice: 2009,
		fabric: "Cotton",
		color: "Red",
		discount: 20,
	},
	{
		img_url:
			"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009900630-Blue-Blue-1000009900630_01-2100.jpg",
		name: "Women Textured Crew Neck Sweatshirt",
		brand: "CODE",
		type: "Sweat_Shirts",
		item: 16701,
		price: 949,
		stprice: 1309,
		fabric: "Cotton",
		color: "Blue",
		discount: 20,
	},
];
localStorage.setItem("dataAll", JSON.stringify(womensData));
var forAll = JSON.parse(localStorage.getItem("dataAll")) || [];

function showDataAll(womensData) {
	document.querySelector("#prodivMa").innerHTML = "";

	womensData.map(function (data) {
		var div = document.createElement("div");
		div.setAttribute("class", "menProDiv");

		var image1 = document.createElement("img");
		image1.setAttribute("src", data.img_url);
		image1.setAttribute("id", "imgMainDiv");

		var divbutton = document.createElement("div");
		divbutton.setAttribute("id", "divbutton");

		var x = document.createElement("div");
		// x.setAttribute("type", "radio");
		x.setAttribute("class", "divb1");
		x.style.backgroundColor = "green";

		var y = document.createElement("div");
		// y.setAttribute("type", "radio");
		y.setAttribute("class", "divb2");
		// y.style.backgroundColor = "red";

		var z = document.createElement("div");
		// z.setAttribute("type", "radio");
		z.setAttribute("class", "divb3");
		z.style.backgroundColor = "red";

		divbutton.append(x, y, z);
		//end button

		var type = document.createElement("p");
		type.textContent = data.brand;
		type.setAttribute("id", "typeColth");

		var name1 = document.createElement("p");
		name1.textContent = data.name;
		name1.setAttribute("id", "name");

		var div2 = document.createElement("div");
		div2.setAttribute("id", "mrpdivbar");

		var price1 = document.createElement("p");
		price1.setAttribute("id", "mrpdivbar1");

		price1.textContent = `Now:INR ${data.price}`;

		var price2 = document.createElement("p");
		price2.setAttribute("id", "mrpdivbar2");
		price2.textContent = `Was:INR  ${data.stprice} 30% off`;

		// div2.append(price1,price2);

		div.append(image1, divbutton, type, name1, div2, price1, price2);

		div.onclick = function () {
			let x = [data];
			localStorage.setItem("allTerm", JSON.stringify(x));
			window.location.href = "/productDetails.html";
		};

		document.querySelector("#prodivMa").append(div);
	});
}
showDataAll(womensData);
