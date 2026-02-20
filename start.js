/*let head=document.getElementById("heading")
console.dir(head);*/
// let divs=document.querySelectorAll(".box")
// console.log(divs.innerText);
// let idx=1;
// for(div of divs){
//    div.innerText=`new unique value ${idx}`;
//    idx++;
// }

// let head=document.querySelector("div");
// console.log(head);
//  let get= head.getAttribute("id");
//  console.log(get);
// let headr=document.querySelector("#btn1");
//    btn1.onclick = () =>{
//     console.log("button was clicked once");

//    }
let headr=document.querySelector(".hover");
let body=document.querySelector("body");
headr.addEventListener("mouseover",() =>{
      headr.classList.add("mssg");

});
headr.addEventListener("mouseout",()=>{
    headr.classList.remove("mssg");
});
