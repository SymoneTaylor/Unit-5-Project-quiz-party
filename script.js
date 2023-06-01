let input1=document.querySelector(".input1")
let input2=document.querySelector(".input2")
let optionCake=document.querySelector(".option-cake")
let optionCupcakes=document.querySelector(".option-cupcakes")
let optionVanilla=document.querySelector(".option-vanilla")
let optionVanillaTwo=document.querySelector(".option-vanilla-two")
let optionChocolate=document.querySelector(".option-chocolate")
let optionChocolateTwo=document.querySelector(".option-chocolate-two")
let buttons=document.querySelector(".buttons")


let pageOne=document.querySelector(".page-one")
let pageTwo=document.querySelector(".page-two")
let pageThree=document.querySelector(".page-three")
let pageFinal=document.querySelector(".page-final")
let answer1;
let answer2;

optionCake.onclick=function(){
  answer1="cake"
  pageOne.style.display="none";
  pageTwo.style.display="block";
  pageThree.style.display="none";
  pageFinal.style.display="none";
  buttons.style.display="none";
  console.log(answer1)
};
optionCupcakes.onclick=function(){
  answer1="cupcakes"
  pageOne.style.display="none";
  pageTwo.style.display="none";
  pageThree.style.display="block";
  pageFinal.style.display="none";
  buttons.style.display="block";
  console.log(answer1)
};
optionVanilla.onclick=function(){
  answer1="vanilla"
  pageOne.style.display="none";
  pageTwo.style.display="none";
  pageThree.style.display="block";
  pageFinal.style.display="none";
  buttons.style.display="none";
  console.log(answer2)
};
optionChocolate.onclick=function(){
  answer1="chocolate"
  pageOne.style.display="none";
  pageTwo.style.display="none";
  pageThree.style.display="none";
  pageFinal.style.display="block";
  buttons.style.display="none";
  console.log(answer2)
};

if ((answer1 ==="cake") && answer2 ==="vanilla"){
document.querySelector(".pageFinal").style.display="none";
document.querySelector(".result").innerHTML="Cake ??? Eh, wouldv'e been perfect if you choose cupcakes" ;
document.querySelector("img").src="https://img.universitystudent.org/1/4/3275/assignment-complete-memes.jp";
  }
  
else if ((answer1 ==="cake") && answer2 ==="chocolate"){
document.querySelector(".pageFinal").style.display="none";
document.querySelector(".result").innerHTML="Chocolate ???? and cake ???? really. Lets get those taste buds checked out." ;
document.querySelector("img").src="https://media.pinatafarm.com/protected/B183D0EF-49B8-47BF-A523-E72FD0CFFAAC/a0d707d1-c13b-4dac-9af0-34d04fe2d244-1669003470095-pfarm-with-png-watermarked.webp";
  }

 else if ((answer1 ==="cupcakes") && input2 ==="vanilla"){
document.querySelector(".pageFInal").style.display="none";
document.querySelector(".result").innerHTML="YESS!! FINALLY SOMEONE WIH GOOD TASTE!";
document.querySelector("img").src="https://i.imgflip.com/1qlmai.jpg";
  }
  
 else if ((answer1 ==="cupcakes") && input2 ==="chocolate"){
document.querySelector(".pageFinal").style.display="none";
document.querySelector(".result").innerHTML="Chocolate ??? Eh, wouldv'e been perfect if you choose Vanilla";
document.querySelector("img").src="https://i.kym-cdn.com/photos/images/newsfeed/001/709/919/ce7.png";

};










  
