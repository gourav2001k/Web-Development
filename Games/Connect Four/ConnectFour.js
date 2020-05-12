var p1=prompt("Player One, Enter your name : ")
var p2=prompt("Player Two, Enter your name : ")
var i=1
alert(p1+" takes Blue Ball and "+p2+" takes Red Ball")
function whoseTurn(i){
  if(i%2==1){
    $('p').text(p1+" it's your turn, please pick a column to drop your Blue Ball.")
  }else{
    $('p').text(p2+" it's your turn, please pick a column to drop your Red Ball.")
  }
}


function winCheck(){
  //Horizotal check
  for(var j=97;j<103;j++){
    var ch=String.fromCharCode(j)
    for(var i =1;i<8;i++){
       var col=$("#"+ch+i).css("background-color");
       if(col!="rgb(128, 128, 128)"){
         try{
           if($("#"+ch+(i+1)).css("background-color")==col && $("#"+ch+(i+2)).css("background-color")==col && $("#"+ch+(i+3)).css("background-color")==col){
             return true;
           }
         }catch{}
       }
    }
  }
  //Vertical check
  for(var i =1;i<8;i++){
    for(var j=97;j<103;j++){
       var col=$("#"+String.fromCharCode(j)+i).css("background-color");
       if(col!="rgb(128, 128, 128)"){
         try{
           if($("#"+String.fromCharCode(j+1)+i).css("background-color")==col && $("#"+String.fromCharCode(j+2)+i).css("background-color")==col && $("#"+String.fromCharCode(j+3)+i).css("background-color")==col){
             return true;
           }
         }catch{}
       }
    }
  }

  //diagonal checks in for direction
  for(var i =1;i<8;i++){
    for(var j=97;j<103;j++){
       var col=$("#"+String.fromCharCode(j)+i).css("background-color");
       if(col!="rgb(128, 128, 128)"){
         try{
           if($("#"+String.fromCharCode(j+1)+(i+1)).css("background-color")==col && $("#"+String.fromCharCode(j+2)+(i+2)).css("background-color")==col && $("#"+String.fromCharCode(j+3)+(i+3)).css("background-color")==col){
             return true;
           }
         }catch{}
       }
    }
  }

  for(var i =1;i<8;i++){
    for(var j=97;j<103;j++){
       var col=$("#"+String.fromCharCode(j)+i).css("background-color");
       if(col!="rgb(128, 128, 128)"){
         try{
           if($("#"+String.fromCharCode(j-1)+(i+1)).css("background-color")==col && $("#"+String.fromCharCode(j-2)+(i+2)).css("background-color")==col && $("#"+String.fromCharCode(j-3)+(i+3)).css("background-color")==col){
             return true;
           }
         }catch{}
       }
    }
  }
  for(var i =1;i<8;i++){
    for(var j=97;j<103;j++){
       var col=$("#"+String.fromCharCode(j)+i).css("background-color");
       if(col!="rgb(128, 128, 128)"){
         try{
           if($("#"+String.fromCharCode(j-1)+(i-1)).css("background-color")==col && $("#"+String.fromCharCode(j-2)+(i-2)).css("background-color")==col && $("#"+String.fromCharCode(j-3)+(i-3)).css("background-color")==col){
             return true;
           }
         }catch{}
       }
    }
  }

  for(var i =1;i<8;i++){
    for(var j=97;j<103;j++){
       var col=$("#"+String.fromCharCode(j)+i).css("background-color");
       if(col!="rgb(128, 128, 128)"){
         try{
           if($("#"+String.fromCharCode(j+1)+(i-1)).css("background-color")==col && $("#"+String.fromCharCode(j+2)+(i-2)).css("background-color")==col && $("#"+String.fromCharCode(j+3)+(i-3)).css("background-color")==col){
             return true;
           }
         }catch{}
       }
    }
  }
  return false;
}

function drop(){
  if(winCheck()==false){
    var d =$(this).attr('id')[1]
    var h=97
    while(h<103){
      var chr = String.fromCharCode(h)
      if ($("#"+chr+d).css("background-color")=="rgb(128, 128, 128)"){
        if(i%2==1){
          $("#"+chr+d).css("background-color","blue");
        }
        else{
          $("#"+chr+d).css("background-color","red");
        }
        break;
      }else{
        h+=1;
      }
    }
    if(winCheck()==true){
      if(i%2==0){
        $('p').text(p2+" won. Reload to play again.")
      }else{
        $('p').text(p1+" won. Reload to play again.")
      }
    }else{
      i+=1;
      whoseTurn(i)}

  }else{
    if(winCheck()==true){
      if(i%2==0){
        $('p').text(p2+" won. Reload to play again.")
      }else{
        $('p').text(p1+" won. Reload to play again.")
      }
    }
  }
}
whoseTurn(i);
$('button').click(drop)
