const cont = document.querySelector(".container")
const ball = document.querySelector(".ball")
const khechba = document.querySelector(".khechba")
let score = document.querySelector(".score")


let x=0  ;
function move(event){
    switch (event.key){
        case "ArrowRight" : 
            x+=10 ;
            khechba.style.left = x + 'px'; 
            break ;
        case "ArrowLeft" :
            x-=10 ;
            khechba.style.left = x + 'px' ;
            break;
        default:
            break ;
    }
} 
window.addEventListener("keydown",move);
let scr=0 ;
console.log(khechba.offsetLeft, ball.offsetLeft)

function moveball(){
    ball.style.top = ball.offsetTop + 10 +"px" ;
    if(ball.style.top == 500+"px" ) {
        // ball.style.top = 10+"px" ;
        // ball.style.left = Math.random()*500+"px" ;
        alert("stop");
        ball.style.top = 0+"px" ;
    }
    else if(ball.style.top == 400+"px" && ball.style.left < x+100 && ball.style.left > x-150 ){
        console.log(khechba.offsetLeft, ball.offsetLeft)
        scr += 1 ;
        score.textContent = scr ;
        ball.style.top = 0+"px" ;
        ball.style.left = Math.random()*500+"px" ;
        
    }
    
}

const ballMove = setInterval(moveball,100);

