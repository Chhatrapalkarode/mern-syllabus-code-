function game(){
const  max =prompt("enter the no ");
const random=Math.floor(Math.random()*max)+1;
let guess=prompt("guess the number ");
while(true){
    if(guess=="quit"){
        // console.log("user quit ");
        alert("user quit ");
    }
    if(guess== random){
        // console.log("user are win ");
        alert("user are win ");
        break;
    }
    else{
        // console.log("your guess was wrong :please try again ")
        alert("your guess was wrong :please try again ");
    }
}
}
