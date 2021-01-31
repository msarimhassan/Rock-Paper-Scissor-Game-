var number=0;
function Select(receive){

    if(receive==1)
    {
        number=1;
         var imageFirst='1.png';
    document.querySelectorAll('img')[0].setAttribute('src',imageFirst);
    }
    else if(receive==2)
    {
        number=2;
       var imageFirst='2.png';
    document.querySelectorAll('img')[0].setAttribute('src',imageFirst);
    }
    else if(receive==3)
    {
        number=3;
        
         var imageFirst='3.png';
    document.querySelectorAll('img')[0].setAttribute('src',imageFirst);
    }

}
function computer(){
    var  randomNo2= Math.floor(Math.random()*3)+1;
    var imageSecond=randomNo2+'.png';
    document.querySelectorAll('img')[1].setAttribute('src',imageSecond);
    if(number==randomNo2)
    {
        document.getElementById('message').innerHTML="MATCH DRAW 😒"
    }
    else if(number==1 && randomNo2==2)
    {
        document.getElementById('message').innerHTML="Computer Wins🤖";
    }
    else if(number==2 && randomNo2==1)
    { 
        document.getElementById('message').innerHTML="Player1👦 Wins ";
    }
    else if(number==1 && randomNo2==3)
    { 
        document.getElementById('message').innerHTML="Player1👦 Wins ";
    }
    else if(number==3 && randomNo2==1)
    {
        document.getElementById('message').innerHTML="Computer Wins🤖";
    }
    else if(number==3 && randomNo2==2)
    {
        document.getElementById('message').innerHTML="Player1👦 Wins";
    }
    else if(number==2 && randomNo2==3)
    {
        document.getElementById('message').innerHTML="Computer Wins🤖";
    }
}
