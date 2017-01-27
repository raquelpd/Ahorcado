
var Palabras = ["BLANCANIEVES", "FROZEN", "DIVERGENTE", "AUTOMATA" , "SHREK"];

var Palabra = Palabras[Math.floor(Math.random()*Palabras.length)];
console.log(Palabra);

letras = Palabra.split("");

console.log(letras);

var espacios = Palabra.length;
var Resultado = [];

var Found = "False";

document.getElementById("type").innerHTML = "Pelicula: ";

for(i=0; i<(espacios); i++)
{ 
	Resultado[i] = "  _  ";
	document.getElementById("word").innerHTML = Resultado.join("");
}

function Encontrado(){
	if (Found == "False") {
		ChangeImage();
	}else{
		Found = "False";
	}
}


function LetraA() {
	var valueA = document.getElementById("LetraA").value;
	for(i=0; i<(espacios); i++)
	{
		if (valueA == letras[i])
		{
			Resultado[i] = valueA;
			Found = "True";
		}
	}
	Encontrado();
	document.getElementById("word").innerHTML = Resultado.join("");
}

function LetraQ() {
	var valueQ = document.getElementById("LetraQ").value;
	for(i=0; i<(espacios); i++)
	{
		if (valueQ == letras[i])
		{
			Resultado[i] = valueQ;
			Found = "True";
		}
	}
	Encontrado();
	document.getElementById("word").innerHTML = Resultado.join("");
}

function LetraW() {
	var valueW = document.getElementById("LetraW").value;
	for(i=0; i<(espacios); i++)
	{
		if (valueW == letras[i])
		{
			Resultado[i] = valueW;
			Found = "True";
		}

	}
	Encontrado();
	document.getElementById("word").innerHTML = Resultado.join("");
}

function LetraE() {
	var valueE = document.getElementById("LetraE").value;
	for(i=0; i<(espacios); i++)
	{
		if (valueE == letras[i])
		{
			Resultado[i] = valueE;
			Found = "True";
		}

	}
	Encontrado();
	document.getElementById("word").innerHTML = Resultado.join("");
}

function LetraR() {
	var valueR = document.getElementById("LetraR").value;
	for(i=0; i<(espacios); i++)
	{
		if (valueR == letras[i])
		{
			Resultado[i] = valueR;
			Found = "True";
		}

	}
	Encontrado();
	document.getElementById("word").innerHTML = Resultado.join("");
}

function LetraT() {
	var valueT = document.getElementById("LetraT").value;
	for(i=0; i<(espacios); i++)
	{
		if (valueT == letras[i])
		{
			Resultado[i] = valueT;
			Found = "True";
		}

	}
	Encontrado();
	document.getElementById("word").innerHTML = Resultado.join("");
}

function LetraY() {
	var valueY = document.getElementById("LetraY").value;
	for(i=0; i<(espacios); i++)
	{
		if (valueY == letras[i])
		{
			Resultado[i] = valueY;
			Found = "True";

		}

	}
	Encontrado();
	document.getElementById("word").innerHTML = Resultado.join("");
}

function LetraU() {
	var valueU = document.getElementById("LetraU").value;
	for(i=0; i<(espacios); i++)
	{
		if (valueU == letras[i])
		{
			Resultado[i] = valueU;
			Found = "True";
		}

	}
	Encontrado();
	document.getElementById("word").innerHTML = Resultado.join("");
}

function LetraI() {
	var valueI = document.getElementById("LetraI").value;
	for(i=0; i<(espacios); i++)
	{
		if (valueI == letras[i])
		{
			Resultado[i] = valueI;
			Found = "True";
		}

	}
	Encontrado();
	document.getElementById("word").innerHTML = Resultado.join("");
}

function LetraO() {
	var valueO = document.getElementById("LetraO").value;
	for(i=0; i<(espacios); i++)
	{
		if (valueO == letras[i])
		{
			Resultado[i] = valueO;
			Found = "True";
		}

	}
	Encontrado();
	document.getElementById("word").innerHTML = Resultado.join("");
}

function LetraP() {
	var valueP = document.getElementById("LetraP").value;
	for(i=0; i<(espacios); i++)
	{
		if (valueP == letras[i])
		{
			Resultado[i] = valueP;
			Found = "True";
		}

	}
	Encontrado();
	document.getElementById("word").innerHTML = Resultado.join("");
}

function LetraD() {
	var valueD = document.getElementById("LetraD").value;
	for(i=0; i<(espacios); i++)
	{
		if (valueD == letras[i])
		{
			Resultado[i] = valueD;
			Found = "True";
		}

	}
	Encontrado();
	document.getElementById("word").innerHTML = Resultado.join("");
}

function LetraF() {
	var valueF = document.getElementById("LetraF").value;
	for(i=0; i<(espacios); i++)
	{
		if (valueF == letras[i])
		{
			Resultado[i] = valueF;
			Found = "True";
		}

	}
	Encontrado();
	document.getElementById("word").innerHTML = Resultado.join("");
}

function LetraG() {
	var valueG = document.getElementById("LetraG").value;
	for(i=0; i<(espacios); i++)
	{
		if (valueG == letras[i])
		{
			Resultado[i] = valueG;
			Found = "True";
		}

	}
	Encontrado();
	document.getElementById("word").innerHTML = Resultado.join("");
}

function LetraH() {
	var valueH = document.getElementById("LetraH").value;
	for(i=0; i<(espacios); i++)
	{
		if (valueH == letras[i])
		{
			Resultado[i] = valueH;
			Found = "True";
		}

	}
	Encontrado();
	document.getElementById("word").innerHTML = Resultado.join("");
}

function LetraJ() {
	var valueJ = document.getElementById("LetraJ").value;
	for(i=0; i<(espacios); i++)
	{
		if (valueJ == letras[i])
		{
			Resultado[i] = valueJ;
			Found = "True";
		}

	}
	Encontrado();
	document.getElementById("word").innerHTML = Resultado.join("");
}

function LetraK() {
	var valueK = document.getElementById("LetraK").value;
	for(i=0; i<(espacios); i++)
	{
		if (valueK == letras[i])
		{
			Resultado[i] = valueK;
			Found = "True";
		}

	}
	Encontrado();
	document.getElementById("word").innerHTML = Resultado.join("");
}

function LetraL() {
	var valueL = document.getElementById("LetraL").value;
	for(i=0; i<(espacios); i++)
	{
		if (valueL == letras[i])
		{
			Resultado[i] = valueL;
			Found = "True";
		}

	}
	Encontrado();
	document.getElementById("word").innerHTML = Resultado.join("");
}

function LetraZ() {
	var valueZ = document.getElementById("LetraZ").value;
	for(i=0; i<(espacios); i++)
	{
		if (valueZ == letras[i])
		{
			Resultado[i] = valueZ;
			Found = "True";
		}

	}
	Encontrado();
	document.getElementById("word").innerHTML = Resultado.join("");
}

function LetraX() {
	var valueX = document.getElementById("LetraX").value;
	for(i=0; i<(espacios); i++)
	{
		if (valueX == letras[i])
		{
			Resultado[i] = valueX;
			Found = "True";
		}

	}
	Encontrado();
	document.getElementById("word").innerHTML = Resultado.join("");
}

function LetraC() {
	var valueC = document.getElementById("LetraC").value;
	for(i=0; i<(espacios); i++)
	{
		if (valueC == letras[i])
		{
			Resultado[i] = valueC;
			Found = "True";
		}

	}
	Encontrado();
	document.getElementById("word").innerHTML = Resultado.join("");
}

function LetraV() {
	var valueV = document.getElementById("LetraV").value;
	for(i=0; i<(espacios); i++)
	{
		if (valueV == letras[i])
		{
			Resultado[i] = valueV;
			Found = "True";
		}

	}
	Encontrado();
	document.getElementById("word").innerHTML = Resultado.join("");
}

function LetraB() {
	var valueB = document.getElementById("LetraB").value;
	for(i=0; i<(espacios); i++)
	{
		if (valueB == letras[i])
		{

			Resultado[i] = valueB;
			Found = "True";
		}
	}
	Encontrado();
	document.getElementById("word").innerHTML = Resultado.join("");
}

function LetraN() {
	var valueN = document.getElementById("LetraN").value;
	for(i=0; i<(espacios); i++)
	{
		if (valueN == letras[i])
		{
			Resultado[i] = valueN;
			Found = "True";
		}

	}
	Encontrado();
	document.getElementById("word").innerHTML = Resultado.join("");
}

function LetraM() {
	var valueM = document.getElementById("LetraM").value;
	for(i=0; i<(espacios); i++)
	{
		if (valueM == letras[i])
		{
			Resultado[i] = valueM;
			Found = "True";
		}

	}
	Encontrado();
	document.getElementById("word").innerHTML = Resultado.join("");
}

function LetraR() {
	var valueR = document.getElementById("LetraR").value;
	{
	for(i=0; i<(espacios); i++)
	{
		if (valueR == letras[i])
		{
			Resultado[i] = valueR;
			Found = "True";
		}
	}
	Encontrado();
	document.getElementById("word").innerHTML = Resultado.join("");
	}
}

function LetraS() {
	var valueS = document.getElementById("LetraS").value;
	{;
	for(i=0; i<(espacios); i++)
	{
		if (valueS == letras[i])
		{
			Resultado[i] = valueS;
			Found = "True";
		}
	}
	Encontrado();
	document.getElementById("word").innerHTML = Resultado.join("");
	}
}


function ChangeImage(){
	var image = document.getElementById('myImage');
		    if (image.src.match("pepe5")) 
		    {
		        image.src = "pepe6";
		    } else if (image.src.match("pepe6")){
		        image.src = "pepe4";
		    } else if (image.src.match("pepe4")){
		        image.src = "pepe3";
		    } else if (image.src.match("pepe3")){
		        image.src = "pepe2";
			} else if (image.src.match("pepe2")){
        		image.src = "pepe1";
			} else if (image.src.match("pepe1")){
		        image.src = "pepe0";
			} else {

			}
		}
