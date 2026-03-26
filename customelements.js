let navbarstuffs = document.createElement("navbarstuffs");
fetch('/navbarstuffs.html').then(function (response) {
	if (response.ok) {
		return response.text();
	}
	throw response;
}).then(function (text) {
    navbarstuffs.innerHTML = text;
});
class CustomHeader extends HTMLElement {
    constructor(){
        super();

        const clone = navbarstuffs.content.cloneNode(true);
        this.appendChild(clone);
    }
}
console.log(navbarstuffs);
window.customElements.define("navbar-stuffs", CustomHeader);