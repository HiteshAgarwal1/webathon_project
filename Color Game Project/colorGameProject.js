var boxsize=6;
var colors=randomColors(boxsize);
var colorPicked=pickColor();
var colorValue=document.getElementById("clrValDisplay");
colorValue.textContent=colorPicked;

var result=document.getElementById("resultDisplay");
var canPlay=true;
var boxes=document.getElementsByClassName("colorBox");
var playAgain=document.getElementById("plyAgainBtn");
var easy=document.getElementById("easyBtn");
var hard=document.getElementById("hardBtn");

for(var i=0;i<boxes.length;i++)
	{
		//assigning color from array
		boxes[i].style.backgroundColor=colors[i];
		
		//coorect and incorrect logic
			boxes[i].addEventListener("click",function(){
			"use strict";
//				console.log(colorPicked,this.style.backgroundColor);
			if(colorPicked!==this.style.backgroundColor && canPlay)
					{	
						this.style.backgroundColor="#1F1F1F";
						result.textContent="Try Again!";
					}
			else
			{
				result.textContent="Correct!";
				
				for(var i=0;i<boxes.length;i++)
				{ 
					boxes[i].style.backgroundColor=colorPicked;
					document.querySelector("div").style.backgroundColor=colorPicked;
					playAgain.textContent="Play Again?";
					
				}
				
				canPlay=false;
				
			}	
				});
	
	}
//play agian button
playAgain.addEventListener("click",function(){
	"use strict";
	canPlay=true;
	colors=randomColors(boxsize);
		colorPicked=pickColor();
		colorValue.textContent=colorPicked;
	document.querySelector("div").style.backgroundColor="#2EC4E6";
	for(var i=0;i<boxes.length;i++)
	{
		//updating color value to select on click play again
		
		
		
		boxes[i].style.backgroundColor=colors[i];
		playAgain.textContent="New Colors";
		result.textContent=" ";
		
		
		
	}
	
});
	
//random color picker function
function pickColor(){
	"use strict";
	var randomValue=Math.floor(Math.random() * colors.length);
	return colors[randomValue];
}

function randomColors(num){
	"use strict";
	var clrArr=[];
	for(var i=0;i<num;i++)
		{
			clrArr.push(generateRandomColor());
		}
	return clrArr;
}

function generateRandomColor(){
	"use strict";
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	//returning rgb(r, g, b);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

//actions on clicking easy button
easy.addEventListener("click",function(){
	"use strict";
	boxsize=3;
	//changing the result status of game if user change the game mode in between play of game
	result.textContent="";
	//changing the head div color to default
	document.querySelector("div").style.backgroundColor="#2EC4E6";
	//hiding 3 boxes
	for(var i=3;i<boxes.length;i++){
			boxes[i].classList.add("hideBox");
			}
		
			easy.classList.add("selected");
			hard.classList.remove("selected");
	
			//updating colors
			colors=randomColors(boxsize);
			colorPicked=pickColor();
			colorValue.textContent=colorPicked;
	
	for(var j=0;j<boxes.length;j++)
		{
			//assigning color from array
			boxes[j].style.backgroundColor=colors[j];
	
		}
	
});

//actions on clicking hard button
hard.addEventListener("click",function(){
	"use strict";
	boxsize=6;	
	
	//changing the result status of game if user change the game mode in between play of game
	result.textContent="";
	//changing the head div color to default
	document.querySelector("div").style.backgroundColor="#2EC4E6";
	
	//showing again 6 boxes
	for(var i=3;i<boxes.length;i++){
		boxes[i].classList.remove("hideBox");
	}
	
	hard.classList.add("selected");
	easy.classList.remove("selected");	
	
	colors=randomColors(boxsize);
			colorPicked=pickColor();
			colorValue.textContent=colorPicked;
	
	for(var j=0;j<boxes.length;j++)
		{
			//assigning color from array
			boxes[j].style.backgroundColor=colors[j];
	
		}
	
});