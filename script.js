console.log("Welcome to Tic Tac toe World")
let audioTurn = new Audio("ting.mp3")
let theWon = new Audio("winTone.mp3");
let theGameover = new Audio("theGameover.mp3")

// initial variable

let turn = "X"

let gameover = false;

// function to change the turn
const  changeTurn = () =>{
    return turn=="X" ? "0": "X"
}



// for win
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName("boxtext");
    let wins = [
        [0,1,2,5,5,0],
        [3,4,5,5,15,0],
        [6,7,8,5,25,0],
        [0,3,6,-5,15,90],
        [1,4,7,5,15,90],
        [2,5,8,15,15,90],
        [0,4,8,5,15,45],
        [2,4,6,5,15,135],
   ]
   wins.forEach(e =>{
    if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText ) && (boxtext[e[0]].innerText !== "")){
        document.querySelector(".info").innerText = boxtext[e[0]].innerText  +  " Won"
        gameover = true;
        document.querySelector(".imagebox").getElementsByTagName('img')[0].style.width = '200px'
        document.querySelector('.line').style.transform = `translate(${e[3]}vw , ${e[4]}vw) rotate(${e[5]}deg)`
        document.querySelector('.line').style.width = "20vw"
        theWon.play();
    }
   })
}

// game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener('click' , () =>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            // theGameover.play(); 
            if (!gameover){
            document.getElementsByClassName("info")[0].innerText = "turn for " +  turn;
            // 
            }
        }
    })
})

// for reset

reset.addEventListener('click',()=>{
    let boxtext = document.querySelectorAll(".boxtext");
    Array.from(boxtext).forEach(element =>{
              element.innerText = " "
    })
    turn ="X"
    gameover = false
    document.getElementsByClassName("info")[0].innerText = "turn for " +  turn;
    document.querySelector(".imagebox").getElementsByTagName('img')[0].style.width = '0px'
    document.querySelector('.line').style.width = "0vw"
    // theGameover.play(); 


})




 





 