// Dark mode
let elBtns = document.querySelector(".mainDark");
let elBtns2 = document.querySelector(".mobileDarkBtn");
let theme = false;

elBtns.addEventListener("click", (evt) => {
  theme = !theme;
  const newBg = theme ? "dark" : "light";
  window.localStorage.setItem("theme", newBg);
  newTheme();
});

let newTheme = () => {
  if (window.localStorage.getItem("theme") == "dark") {
    document.body.classList.add("dark");
    elBtns.classList.add("btn");
  } else {
    document.body.classList.remove("dark");
    elBtns.classList.remove("btn");
  }
};

newTheme();

elBtns2.addEventListener("click", (evt) => {
    theme = !theme;
    const newBg2 = theme ? "dark" : "light";
    window.localStorage.setItem("theme", newBg2);
    newTheme2();
  });
  
  let newTheme2 = () => {
    if (window.localStorage.getItem("theme") == "dark") {
      document.body.classList.add("dark");
      elBtns2.classList.add("btn");
    } else {
      document.body.classList.remove("dark");
      elBtns2.classList.remove("btn");
    }
  };
  
  newTheme();

// mobile btn
const openBtn = document.querySelector(".menu_btn");
const openIcon = document.querySelector(".open");
const closeIcon = document.querySelector(".close");

openBtn.addEventListener("click", (evt) => {
  if(openIcon.style.display != "none"){
    openIcon.style.display = "none";
    closeIcon.style.display = "inline-block";
  }else{
    openIcon.style.display = "inline-block";
    closeIcon.style.display = "none";
  }
});


const drBtn1 = document.querySelector(".drBtn1")
const drItem1 = document.querySelector(".drItem1")
const drBtn2 = document.querySelector(".drBtn2")
const drItem2 = document.querySelector(".drItem2")
const drBtn3 = document.querySelector(".drBtn3")
const drItem3 = document.querySelector(".drItem3")
const img1 = document.querySelector(".img1")
const img2 = document.querySelector(".img2")
const img3 = document.querySelector(".img3")

drBtn1.addEventListener("click", (evt)=>{
  evt.preventDefault()
  if (drItem1.style.display == "none"){ 
    drItem1.style.display = "block";
    img1.classList.add("activeDrop")
  }else{
    drItem1.style.display = "none";
    img1.classList.remove("activeDrop")
  }
})

drBtn2.addEventListener("click", (evt)=>{
  evt.preventDefault()
  if (drItem2.style.display == "none"){ 
    drItem2.style.display = "block";
    img2.classList.add("activeDrop")
  }else{
    drItem2.style.display = "none";
    img2.classList.remove("activeDrop")
  }
})

drBtn3.addEventListener("click", (evt)=>{
  evt.preventDefault()
  if (drItem3.style.display == "none"){ 
    drItem3.style.display = "block";
    img3.classList.add("activeDrop")
  }else{
    drItem3.style.display = "none";
    img3.classList.remove("activeDrop")
  }
})