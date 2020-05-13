var squares=document.querySelectorAll('td');
var i=1;

function marker(){
  if(this.textContent==="" && winCheck()!==true){
    if(i%2==1){
      this.textContent="X"
    }
    else{
      this.textContent="O";
    }
    i+=1;
  }
}
function winCheck(){
  if(squares[0].textContent===squares[1].textContent && squares[0].textContent===squares[2].textContent && squares[0].textContent!==""){
    document.querySelector('h2').textContent = "Player with marker "+squares[0].textContent + " won"
    return true
  }
  else if(squares[3].textContent===squares[4].textContent && squares[4].textContent===squares[5].textContent && squares[4].textContent!==""){
    document.querySelector('h2').textContent = "Player with marker "+squares[4].textContent + " won"
    return true

  }
  else if(squares[6].textContent===squares[7].textContent && squares[7].textContent===squares[8].textContent && squares[7].textContent!==""){
document.querySelector('h2').textContent = "Player with marker "+squares[6].textContent + " won"
    return true

  }
  else if(squares[0].textContent===squares[3].textContent && squares[0].textContent===squares[6].textContent && squares[0].textContent!==""){
document.querySelector('h2').textContent = "Player with marker "+squares[0].textContent + " won"
    return true

  }
  else if(squares[1].textContent===squares[4].textContent && squares[1].textContent===squares[7].textContent && squares[1].textContent!==""){
    document.querySelector('h2').textContent = "Player with marker "+squares[1].textContent + " won"
    return true
  }
  else if(squares[2].textContent===squares[5].textContent && squares[2].textContent===squares[8].textContent && squares[2].textContent!==""){
document.querySelector('h2').textContent = "Player with marker "+squares[2].textContent + " won"
    return true
  }
  else if(squares[0].textContent===squares[4].textContent && squares[4].textContent===squares[8].textContent && squares[4].textContent!==""){
    document.querySelector('h2').textContent = "Player with marker "+squares[0].textContent + " won"
    return true
  }
  else if(squares[2].textContent===squares[4].textContent && squares[4].textContent===squares[6].textContent && squares[4].textContent!==""){
    document.querySelector('h2').textContent = "Player with marker "+squares[4].textContent + " won"
    return true
  }
  else{
    return false
  }

}

for(var i=0;i<squares.length;i++){
  squares[i].addEventListener("click",marker)
}
