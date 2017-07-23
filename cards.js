console.log( "cards.js");

function getText(){
	let text = document.getElementById("user-text").value;
	return text;
};

function clearText(element) {
  element.value = '';
}

let storeCards = [];
let outputDiv = document.getElementById("output-div");

document.getElementById("create-btn").addEventListener("click", function(event){
	let userText = getText();

	if (userText === "") {

		alert("You must enter some text");

	}  else  {

		storeCards.push(userText);
		let textArea = document.getElementById("user-text");
		let postnumber = (storeCards.length)
		let cardStructure = `<div class="card" id="card--${postnumber}">
							<h2 id="post-healine--${postnumber}">Post ${postnumber}</h2>
 						 	<p id="post-text--${postnumber}">${userText}</p>
						 	<button id="del_btn--${postnumber}" class="card-delete">DELETE</button>
						 	</div>`

		outputDiv.innerHTML += cardStructure;
		clearText(textArea)	
	};

});


document.getElementById("output-div").addEventListener("click", function(event){
	
	let target = event.target;
	// console.log("target", event.target);
	let targetClass = event.target.className;
	// console.log( "targetClass", targetClass );
	let deleteID = event.target.id;
	// console.log( "deleteID", deleteID );
	let parentDiv = target.parentNode;
	// console.log( "parentDiv", parentDiv );
	// console.log( "parentDiv.parentNode", parentDiv.parentNode );

	if (targetClass === "card-delete") {
		
		parentDiv.parentNode.removeChild(parentDiv);

	}
});









