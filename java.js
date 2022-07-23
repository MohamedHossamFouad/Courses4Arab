/*let buyCard = document.getElementById("buy");

buyCard.addEventListener("click",
  () => {
      buyCard.classList.add("aaa");
      
      const myTitle  = document.createElement("h1");
      myHeader.append(myTitle)
      myTitle.classList.add("bc")
      myTitle.innerText = "Hello World";
      myTitle.id = "aaa";
      myTitle.setAttribute("id", "aaa");
  
  
  }
)
const changeMode = document.querySelector(".mode");
const mainSection = document.querySelector("Body");


changeMode.addEventListener("click",
  () => {
      mainSection.style.backgroundColor = "gray";
      mainSection.style.color = "white";
  
  }
)

*/

const sec = document.getElementsByClassName("secs") [0];

const buyBtn = document.getElementsByClassName("btn") [0];
const buyBtn2 = document.getElementsByClassName("btn") [1];
const cont = document.getElementsByClassName("container") [0];
const btnPop = document.getElementById("popo");
const kyaan = document.getElementById("kayan");





const cardBtn = document.querySelectorAll(".cardbtn") ;
const yesBtn = document.querySelectorAll(".yesbtn");

cardBtn.forEach(item => {
  item.addEventListener("click",(eo) => {
      kayan.style.display = "none";
      sec.style.display = "block";
      cont.style.display = "block";
      eo.preventDefault();
  }
)

});

yesBtn.forEach(item => {
  item.addEventListener("click",
    (eo) => {
      cont.style.display = "none";
      kayan.style.display = "block";
      eo.preventDefault();
      setTimeout (() => {
          sec.style.display = "none";
      }, 2000);
  } 
)
});

/*
buyBtn.addEventListener("click",(eo) => {
      kayan.style.display = "none";
      sec.style.display = "block";
      cont.style.display = "block";
      eo.preventDefault();
  }
)
*/

/*
buyBtn2.addEventListener("click",
(eo) => {
  cont.style.display = "none";
  kayan.style.display = "block";
  eo.preventDefault();

  setTimeout (() => {
      sec.style.display = "none";
  }, 2000);
}
)
*/




//to change theme of website

const body= document.querySelector("body");
const modeChange= document.querySelector(".mode");

modeChange.addEventListener("click",
(eo) => {
  body.classList.toggle("dark");
}
)



const myName= "Mohamed "
const myAge= "23"

const myArr =[ "Mohamed Hossam" , 23];
//console.table(myArr)
//console.log(`Welcome : ${myArr[0]} \n Your Age is : ${myArr[1]}`)

//console.log( "Welcome : "+ myName + "\nYour Age is :  "+ myAge);


//console.log(` Welcome : ${myName} \n Your Age is : ${myAge}`);






/*const h1= document.getElementsByTagName("h1");
const arrH1 = Array.from(h1);
console.log(h1)
console.log(arrH1)


arrH1.forEach((item) => {
  arrH1[0].style.color="red"
  arrH1[1].style.color="blue"
  arrH1[2].style.color="green"
  item.style.fontSize="45px"
});

*/





















/*

console.log(btnPop)


btnPop.addEventListener("click",
  (eo) => {
      cuteAlert({
          type: "error",
          title: "Success Title",
          message: "Success Message",
          buttonText: "Buy"
      })
  }
)
*/


//console.log(buyCard);



const myHeader = document.querySelector(".myHeader");

//console.log(myHeader);
// myHeader.remove();





/*function printHello() {
  for (let x = 0; x < 10; x++) {
      console.log("Hello "+x);
      
  }
}
printHello();
*/






/*
const tite = () => {
  myHeader.append(myTitle)
  myTitle.classList.add("bc")
  myTitle.innerText = "Hello World";
  myTitle.id = "aaa";
  myTitle.setAttribute("id", "bbb");
}
tite()


*/


