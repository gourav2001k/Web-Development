var p1=prompt("Player One, Enter your name : ")
var p2=prompt("Player Two, Enter your name : ")
var i=1
alert(p1+" takes Blue Ball and "+p2+" takes Red Ball")
var s1=0
var s2=0
  $('#res').text(p1+" : "+p2 )
  $('#resv').text(s1+" : "+s2)
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
  var d =$(this).attr('id')
  if(d=='again'){
    for(var h=97;h<103;h++){
      for (var j=1;j<8;j++){
        $("#"+String.fromCharCode(h)+j).css("background-color","rgb(128, 128, 128)");
      }
    }
    whoseTurn(i);
  }else{
  if(winCheck()==false){
      d=d[1]
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
          s2+=1
        }else{
          s1+=1
        }
        $('#resv').text(s1+" : "+s2)
        if(i%2==0){
          $('p').text(p2+" won. Click on new game for next round")
        }else{
          $('p').text(p1+" won. Click on  new game for next round")
        }
        i+=1
      }else{
        i+=1;
        whoseTurn(i)}

  }else{
    if(winCheck()==true){
      if(i%2==1){
        $('p').text(p2+" won. Click on new game for next round")
      }else{
        $('p').text(p1+" won. Click on  new game for next round")
      }
    }
  }
}
}
whoseTurn(i);
$('button').click(drop)
