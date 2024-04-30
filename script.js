let products_Container = document.getElementById("parentConatiner");

let top_Header = () => {
	const header = document.createElement("div");
	header.classList.add("top-header");
	header.innerHTML = `<span class="header-text">Shipping outside of the U.S. or Canada? Learn About International Shipping</span>
        <img id="flag" src="https://th.bing.com/th/id/R.3bd25defd5d81640e90cb133f85443ae?rik=ley0zlb7PlScHA&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fpi5%2fXky%2fpi5XkypeT.png&ehk=maw0y5jpzOJttw61C7YXk8LniBnMSQXqpXrmsYgUq%2fs%3d&risl=&pid=ImgRaw&r=0" alt="India" />
        India`;
	products_Container.appendChild(header);
};

top_Header();
