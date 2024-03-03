let btns = document.querySelectorAll("button");
let head = document.querySelector("#head");
let body = document.querySelector("#body");


btns.forEach((btn)=>{
  btn.addEventListener("click",()=>{
    let value = btn.innerText;
    console.log(value);

  });

});