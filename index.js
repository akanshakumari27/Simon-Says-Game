let gameSeq=[];
let userSeq=[];
let btns=["red","green","blue","yellow"]

let started=false;
let level=0;

let h3=document.querySelector("h3")
let body = document.querySelector("body")

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started")
        started=true;
        levelUp();
    }
})

function levelUp(){
    userSeq = []  //as get the call for levelUp, means user completed it's all previous sequence(user.length = game.length) So, emptying it again
    level++;
    h3.innerText=`Level ${level}`

    let randIdx = Math.floor(Math.random()*4)  //we get number excluding number written (0,1,2,3)
    let randColors = btns[randIdx]
    let randBtns = document.querySelector(`.${randColors}`)
    gameSeq.push(randColors)
    console.log(gameSeq)
    flashGame(randBtns)
}
function flashGame(btn){
    btn.classList.add("flashGame")  //this btn is in it's own functional scope
    setTimeout(function(){
        btn.classList.remove("flashGame")
    },250)
}  

// *** Now this is till when game started and get 1st flash ***

// *** Now when User press it's Key ***

let allBtns = document.querySelectorAll(".two")
for(btn of allBtns){   //this btn is in it's own functional scope
    btn.addEventListener("click",btnPress)
}
function btnPress(){
    console.log(this)
    let btn=this
    flashUser(btn)

    userColor = btn.getAttribute("id")
    console.log(userColor)
    userSeq.push(userColor)

    checkAns(userSeq.length-1) //delivering the last index number of user's button
}
function flashUser(btn){
    btn.classList.add("flashUser")  //this btn is in it's own functional scope
    setTimeout(function(){
        btn.classList.remove("flashUser")
    },250)
}
function checkAns(idx){   
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000)
        }
    }else{
        h3.innerHTML = `Game Over! Your Score is <b>${level}</b> <br>Press any key to Start again!` //innerHtml coz html tags won't apply in innerText
        reset()
        flashBackground()
        //OR
        // document.querySelector("body").style.backgroundColor="red"
        // setTimeout(function(){
        //     document.querySelector("body").style.backgroundColor = "rgb(113, 205, 208)"
        // },250)
    }
}
function reset(){
    started = false
    level = 0
    gameSeq = []
    userSeq = []
}
function flashBackground(){
    body.classList.add("flashBody")
    setTimeout( function(){
        body.classList.remove("flashBody")
    },250)
}