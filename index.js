var btn = document.querySelectorAll('.button');
var currentPlayer = 'X';
var winner = '';
var gameRunning = true;
var player = document.querySelector(".currentPlayer");
var replay = document.querySelector(".replay");
var span = document.createElement("span");
var heading = document.querySelector("h1");

var head = heading.innerHTML;
head = head.replace("Tac", `<span class="color">Tac</span>`);
heading.innerHTML = head;

span.innerHTML = currentPlayer;
span.style.color = "orange";

player.innerHTML = "Next player is ";
player.appendChild(span);

btn.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '' && gameRunning){
            e.target.innerHTML = currentPlayer;
            if(currentPlayer == 'X'){
                button.style.color = '#ffc72a';
                span.style.color = '#12e177';
            }
            else{
                button.style.color = '#12e177';
                span.style.color = '#ffc72a';
            }
            swapPlayer();
            span.innerHTML = currentPlayer;
            player.innerHTML = "Next player is ";
            player.appendChild(span);
            if(isWinner()){
                if(winner == 'X'){
                    span.style.color = '#ffc72a';
                }
                else{
                    span.style.color = '#12e177';
                }
                span.innerHTML = winner;
                player.innerHTML = `Winner is `;
                player.appendChild(span);
                replay.style.backgroundColor = '#ffc72a';
                replay.style.transition = '1s';
                gameRunning = false;
            }
            if(isTie()){
                player.innerHTML = `Tie`;
                replay.style.backgroundColor = '#ffc72a';
                replay.style.transition = '1s';
                gameRunning = false;
            }
        }
    })
})

replay.addEventListener('click',(e)=>{
    if(isWinner() || isTie()){
        e.target.style = '#4c43d4';
        player.innerHTML = "Next player is X";
        currentPlayer = 'X';
        if(!gameRunning){
            btn.forEach((button)=>{
                button.innerHTML = '';
            })
        }
        gameRunning = true;
   }
})

function swapPlayer(){
    if (currentPlayer == 'X'){
        currentPlayer = 'O'
    }
    else{
        currentPlayer = 'X'
    }
    return currentPlayer;
}

function isWinner(){
    if(checkRow()){
        gameRunning = false;
        return true;
    }
    else if(checkColumn()){
        gameRunning = false;
        return true;
    }
    else if(checkDiagonal()){
        gameRunning = false;
        return true;
    }
}

function checkRow(){
    if(btn[0].innerHTML == btn[1].innerHTML && btn[1].innerHTML == btn[2].innerHTML 
        && btn[0].innerHTML != ''){
        winner = btn[0].innerHTML;
        return true;
    }
    else if(btn[3].innerHTML == btn[4].innerHTML && btn[4].innerHTML == btn[5].innerHTML 
        && btn[3].innerHTML != ''){
        winner = btn[3].innerHTML;
        return true;
    }
    else if(btn[6].innerHTML == btn[7].innerHTML && btn[7].innerHTML == btn[8].innerHTML 
        && btn[6].innerHTML != ''){
        winner = btn[6].innerHTML;
        return true;
    }
}

function checkColumn(){
    if(btn[0].innerHTML == btn[3].innerHTML && btn[3].innerHTML == btn[6].innerHTML 
        && btn[0].innerHTML != ''){
        winner = btn[0].innerHTML;
        return true;
    }
    else if(btn[1].innerHTML == btn[4].innerHTML && btn[4].innerHTML == btn[7].innerHTML 
        && btn[1].innerHTML != ''){
        winner = btn[1].innerHTML;
        return true;
    }
    else if(btn[2].innerHTML == btn[5].innerHTML && btn[5].innerHTML == btn[8].innerHTML 
        && btn[2].innerHTML != ''){
        winner = btn[2].innerHTML;
        return true;
    }
}

function checkDiagonal(){
    if(btn[0].innerHTML == btn[4].innerHTML && btn[4].innerHTML == btn[8].innerHTML 
        && btn[0].innerHTML != ''){
        winner = btn[0].innerHTML;
        return true;
    }
    if(btn[2].innerHTML == btn[4].innerHTML && btn[4].innerHTML == btn[6].innerHTML 
        && btn[2].innerHTML != ''){
        winner = btn[2].innerHTML;
        return true;
    }
}

function isTie(){
    var count = 0;
    btn.forEach((button)=>{
        if(button.innerHTML != ''){
            count += 1
        }
    })
    if(count == 9){
        if(!isWinner()){
            return true;
        }
        else{
            return false;
        }
    }
}

// 1. Basic CSS styling karni h(add color circles on sides)