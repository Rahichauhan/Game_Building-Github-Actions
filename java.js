// let arr =[2,4,6,8];

// arr.forEach((val)=>{
//   console.log(val);
// });



let userscore =0;
let compscore =0;

const choices =document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");
const users =document.querySelector("#userScore");
const comps =document.querySelector("#compScore");

const genComChoice=() =>{
 const options =["rock","paper","scissors"];
 const randomIdx =Math.floor(Math.random()*3);
 return options[randomIdx];

}

const drawGame= () =>{
    console.log("Game was draw!");
    msg.innerText = "Game was draw.Play again!!";
    msg.style.backgroundColor =" rgb(15, 15, 44)";
    
}

const showinner =(userWin,userChoice,comChoice) =>{
  if(userWin){
    userscore++;
    users.innerText =userscore;
    console.log("You win!!");
    msg.innerText = `You win!!Your ${userChoice} beats ${comChoice}`;
    msg.style.backgroundColor ="green";
  }
  else{
    console.log("You lose!!");
    compscore++;
    comps.innerText =compscore;
    msg.innerText = `You Lose!!${comChoice} beats your ${userChoice}`;
    msg.style.backgroundColor ="Red";
  }
}


const playGame =(userChoice)=>{
    console.log("User choice:",userChoice);
//Generate computer choice
const comChoice =genComChoice();
  console.log("Comp choice:",comChoice);

if(userChoice === comChoice){
    //Drawgame
  drawGame();
 }
 else {
   let userWin =true;
   if(userChoice==="rock"){
    userWin =comChoice==="paper"?false:true;
   }
   else if(userChoice==="paper"){
     userWin =comChoice==="scissors"?false:true;
   }
   else{
    userWin=comChoice==="rock"?false:true;
   }
   showinner(userWin,userChoice,comChoice);
  }
}


choices.forEach((choice)=>{
choice.addEventListener("click",()=>{
    const userChoice =choice.getAttribute("id");
    playGame(userChoice);
  });
});       
 



