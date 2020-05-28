let color0="red,orange,yellow,green,blue,indigo,purple,blue,cyan,teal";
let color1="orange,yellow,green,blue,indigo,purple,blue,cyan,teal,red";
let color2="yellow,green,blue,indigo,purple,blue,cyan,teal,red,orange";
let color3="green,blue,indigo,purple,blue,cyan,teal,red,orange,yellow";
let color4="blue,indigo,purple,blue,cyan,teal,red,orange,yellow,green";
let color5="indigo,purple,blue,cyan,teal,red,orange,yellow,green,blue";
let color6="purple,blue,cyan,teal,red,orange,yellow,green,blue,indigo";
let color7="blue,cyan,teal,red,orange,yellow,green,blue,indigo,purple";
let color8="cyan,teal,red,orange,yellow,green,blue,indigo,purple,blue";
let color9="teal,red,orange,yellow,green,blue,indigo,purple,blue,cyan";

let colors=[color0,color1,color2,color3,color4,color5,color6,color7,color8,color9];

let count=0;

function change()
{
	let image="linear-gradient(to right,"+colors[count]+")";
	document.getElementById("bud").style.backgroundImage=image;
	if(count==9)count=0;
	count++;
}

function cha()
{
	setInterval(
		function()
		{
			change();
		},500);
}