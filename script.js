hexChars = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

var colorGeneratorBtn = document.getElementById("generator-btn");
var colorTxt = document.getElementById("color");

colorGeneratorBtn.addEventListener('click', function(){
	var colorHex = '#';
	
	for (let i = 0; i < 6; i++){
		colorHex += hexChars[randomNum()];
	}
	colorTxt.textContent = colorHex;
	document.body.style.backgroundColor = colorHex;
});

function randomNum(){
	var num = Math.floor(Math.random() * hexChars.length);
	return num;
}

git push origin colorGenerator

