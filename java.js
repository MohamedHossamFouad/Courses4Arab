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

const addCard =document.getElementById("addcard")
const prodaucts =document.querySelector(".prodaucts")

const newProucat = `<div class="card mycard " style="width: 18rem;">
<img src="images/screencapture-127-0-0-1-5500-1-HTML-CSS-Fundamentals-2022-07-01-19_12_50.png" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">Card title 1 </h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a  id="popo" href="#" class="btn btn-primary mybtn cardbtn">Buy</a>
</div>
</div>`


// when i click on Add Card button
prodaucts.addEventListener("click",
(eo) => {
  if(eo.target.className=="btn btn-primary mybtn cardbtn") {
    kayan.style.display = "none";
    sec.style.display = "block";
    cont.style.display = "block";
    eo.preventDefault();
  }
  }
)

addCard.addEventListener("click",
(eo) => {
    prodaucts.style.border =  "red solid 2px";
    prodaucts.innerHTML += newProucat;
  }
)

//to change theme of website

const body= document.querySelector("body");
const modeChange= document.querySelector(".mode");

modeChange.addEventListener("click",
(eo) => {
  body.classList.toggle("dark");
}
)


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



