let users=0;
let comps=0;
let choices=document.querySelectorAll(".image");
let mssg=document.querySelector("#msg");
let computerchoose=document.querySelector("#computer-choice");
let yourscorepara=document.querySelector("#your-score")
let compscorepara=document.querySelector("#comp-score")
let compscore=document.querySelector("#comp-choice");
let compchoices=()=>{
    let   choice=["rock","paper","scissor"];
      let random=Math.floor(Math.random()*3);
      return choice[random];
}
let playgame = (urchoice)=>{
      console.log("your choice:",urchoice);   
      compchoice=compchoices();
      console.log("compchoice is ",compchoice);
      if(compchoice===urchoice){
            console.log("it's a Draw")
            mssg.innerText="Its A Draw Play Again."
            mssg.style.backgroundColor="blue"
      }
      else if( (urchoice==="rock" && compchoice==="paper") || 
      (urchoice==="paper" && compchoice==="scissor") ||
      (urchoice==="scissor" && compchoice==="rock")){
            console.log("computer wins")
             comps++;
             compscorepara.innerText= comps;
            compscore.innerText=`computer ${compchoice} beats your's ${urchoice}`
             mssg.innerText=mssg.innerText="you lost!"
             mssg.style.backgroundColor="red";
      }
      else{
            console.log("user wins")
             users++;
             yourscorepara.innerText=users;
            // computerchoose.innerText="computer choose"+compchoice;
             compscore.innerText=`your ${urchoice} beats computer's ${compchoice}`
             mssg.innerText=`you Win`
             mssg.style.backgroundColor="green";
      }

};
             
  
choices.forEach((image)=>{
      image.addEventListener("click",()=>{
     let urchoice=image.getAttribute("id");
     playgame(urchoice);
      });
})

