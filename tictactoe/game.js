let btn_values=["a","b","c","d","e","f","g","h","i"];
let cases=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let count=0;
winx=0;
wino=0;
pc="";
cc="";

//returns true if two out three params are same and matches a given character.
function ifTwoSame(a,b,c,d)
{
 return (((a==b||a==c)&&a==d)&& b!=c) || (((b==a||  b==c)&&b==d)&& a!=c) || (((c==a||c==b)&&c==d)&&a!=b);
}

//returns an integer indicating empty button of checked pattern.
function checkEmpty(a)
{
        num=9;
        strs=["a","b","c","d","e","f","g","h","i"];
        for(i=0;i<strs.length;i++)
        {
            if(a==strs[i])
            {
                num=i;
                break;
            }
        }
        return num;
}

//returns an integer to play by computer.
function computer(vbtns,ch)
{
  nim=9;
	for(j=0;j<8;j++)
	{
	   cas=cases[j];
     if(ifTwoSame(vbtns[cas[0]],vbtns[cas[1]],vbtns[cas[2]],ch))
     {
            if (checkEmpty(vbtns[cas[0]]) != 9)
               nim=checkEmpty(vbtns[cas[0]]);
            else if (checkEmpty(vbtns[cas[1]]) != 9)
               nim=checkEmpty(vbtns[cas[1]]);
            else if (checkEmpty(vbtns[cas[2]]) != 9)
               nim=checkEmpty(vbtns[cas[2]]);
        break;
      }
  }
  return nim;
}

//returns a boolean value if paramter is one and not equals to "X" and "O".
function fun(param,...btn)
{
  return (arguments.length==1)?(param.value!=pc && param.value!=cc) : (param!=pc && param!=cc);
}

//returns a random number between 0 to 8
function randNo()
{
  return Math.floor((Math.random()*9));
}

//returns an integer representing an unplayed button.
function play()
{
  num=9;
  do
  {
      num=randNo();
  }
  while(!fun(btn_values[num],2));
  return num
}

function forwin(vals) 
{
  winner="";
  for(i=0;i<8;i++)
  {
    cas=cases[i];
      if(vals[cas[0]]==vals[cas[1]] && vals[cas[1]]==vals[cas[2]])
      {
        winner=vals[cas[0]];
        break;
      }

  }
  return winner;
}

function reset()
{
  btn_values=["a","b","c","d","e","f","g","h","i"];
  count=0;
  for(i=0;i<9;i++)
  {
    cont=document.getElementById("cont");
    cont.getElementsByTagName("button")[i].innerHTML="";
    cont.getElementsByTagName("button")[i].style.background="grey";
    cont.getElementsByTagName("button")[i].value=i;
  }
}

function win()
{
  if(forwin(btn_values)==pc)
  {
    document.getElementById("player").innerHTML="Player : "+ ++winx;
    reset();
  }
  else if(forwin(btn_values)==cc)
  {
    document.getElementById("computer").innerHTML="Computer : "+ ++wino;
    reset();
  }
  
}


header="Tic-Tac-Toe";
colors=["red","orange","yellow","green","blue","indigo","violet","cyan","pink","purple","magenta","teal"];
itr=0;

function textcount(){
    setInterval(
      function()
      {
        document.getElementById("hd").innerHTML=header.substr(0,++itr);
        document.getElementById("hd").style.color=colors[itr];
        itr=(itr==11) ? 0 : itr;
      },1000);
}

//is called when player clicks a button.
function on_event(param)
{
  if(fun(param))
  {
    cont=document.getElementById("cont");
    param.style.background = "teal";
    btn_values[param.value] = pc;
    param.value = pc;
    param.innerHTML = pc;
    count++;
    setTimeout( function(){
      win();
      if(count==5) reset();
      np=computer(btn_values,pc);
      nc=computer(btn_values,cc);
      num= nc==9 && np==9 ? play() : (nc==9) ? np : nc ; 
      cont.getElementsByTagName("button")[num].innerHTML=cc;
      cont.getElementsByTagName("button")[num].value=cc;
      btn_values[num]=cc;
      win();
    },(1500));
  } 
}

function on_select(param)
{
  pc=param.value;
  cc=(pc=="X") ? "O" : "X";
  document.getElementById("ale").style.display="none";
  document.getElementById("cont").style.display="block";
}