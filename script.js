let btns = document.querySelectorAll("button");
let head = document.querySelector("#head");
let body = document.querySelector("#body");
let first = [""];
let second = [""];
let third = [""];
 
arr =[first,second,third];

// sum function

let sum = (a,b)=>{  
  return a+b;  
};
let sub = (a,b)=>{
  return a-b;
};
let multi = (a,b)=>{
  return a*b;
};
let div = (a,b)=>{
  return a/b;
};



// AC function will clear all data and restart the calculator
let AC =()=>{
  head.innerText = "0";
  first[0] = "";
  second[0] = "";
  third[0] = "";
};
let ans = ()=>{  
  if(second[0] === "+"){
    a = parseInt(first[0]);
    b = parseInt(third[0]);
    console.log(a+b); 
    head.innerText = a+b;   
  }else if(second[0] === "-"){
    a = parseInt(first[0]);
    b = parseInt(third[0]);
    console.log(a-b);
    head.innerText = a-b; 
  }else if(second[0] === "*"){
    a = parseInt(first[0]);
    b = parseInt(third[0]);
    console.log(a*b);
    head.innerText = a*b; 
  }else if(second[0] === "/"){
    a = parseInt(first[0]);
    b = parseInt(third[0]);
    console.log(a/b);
    head.innerText = a/b; 
  }else if(second[0]=== "^"){
    a = parseInt(first[0]);
    b = parseInt(third[0]);
    console.log(a**b);
    head.innerText = a**b;
  }
};

btns.forEach((btn)=>{ 
  btn.addEventListener("click",()=>{
    // let value = btn.innerText;
    console.log(arr);
    if( btn.innerText === "+" ||btn.innerText === "-"||btn.innerText === "*"||btn.innerText === "/"||btn.innerText === "^"){
      let j= 0;
      second[j] = second[j] + btn.innerText;      
    console.log(second);
    head.innerText = `${second}`;      
  }else if(btn.innerText === "="){
  ans();
  }else if(btn.innerText === "AC"){
    AC();
    }else if(second[0] !== ""){
      let k = 0;
      third[k] = third[k] + btn.innerText;
      console.log(third);
      head.innerText = `${third}`;      
    }else if(btn.innerText === "1" || btn.innerText === "2"|| btn.innerText === "3"|| btn.innerText === "4"|| btn.innerText === "5"|| btn.innerText === "6"|| btn.innerText === "7"|| btn.innerText === "8"|| btn.innerText === "9"|| btn.innerText === "0"|| btn.innerText === "."|| btn.innerText === "("|| btn.innerText === ")"){
      let i = 0;
      first[i] = first[i] + btn.innerText;
      console.log(first);
      head.innerText = `${first}`;       
    }      
    // console.log(value);
    //  head.innerText = `${value}`;
  });
});
