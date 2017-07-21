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
// let delButtons = document.getElementsByClassName("card-delete");

document.getElementById("create-btn").addEventListener("click", function(event){
	let userText = getText();

	if (userText === "") {

		alert("You must enter some text");

	}  else  {

		storeCards.push(userText);
		console.log( "storeCards", storeCards );
		let textArea = document.getElementById("user-text");
		let postnumber = (storeCards.length)
		let cardStructure = `<div class="card" id="card--${postnumber}">
							<h2 id="post-healine--${postnumber}">Post ${postnumber}</h2>
 						 	<p id="post-text--${postnumber}">${userText}</p>
						 	<button id="del_btn--${postnumber}" class="card-delete">DELETE</button>
						 	</div>`

		outputDiv.innerHTML += cardStructure;
		// console.log( delButtons );
		clearText(textArea)	
	};

});





document.getElementById("output-div").addEventListener("click", function(event){
	console.log("target", event.target);
	console.log("current-target", event.currentTarget);
	let target = event.target;
	let deleteID = event.target.id;
	console.log( "deleteID", deleteID );

	let parentDiv = target.parentNode;
	console.log( "parentDiv", parentDiv );
	console.log( "parentDiv.parentNode", parentDiv.parentNode );
	parentDiv.parentNode.removeChild(parentDiv);

});

// outputDiv













//CREATE AND STORE CARD OBJECT IN AN ARRAY

//SPIT TO DOM

///////////////////////////

//UPON PRESSING CARD DELETE BUTTON, IDENTIFY AND REMOVE TARGET CARD FROM DOM

