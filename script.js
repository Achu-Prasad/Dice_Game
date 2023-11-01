const name1 = prompt("Enter Your Name");
const n1Uppercase = name1.charAt(0).toUpperCase() + name1.slice(1);
console.log(n1Uppercase);

const name2 = prompt("Enter Opponent Name");
const n2Uppercase = name2.charAt(0).toUpperCase() + name2.slice(1);
console.log(n2Uppercase);

const mainName1 = document.querySelectorAll("p")[0];
mainName1.innerHTML= n1Uppercase;

const mainName2 = document.querySelectorAll("p")[1];
mainName2.innerHTML = n2Uppercase;

function shuffle() {
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    let randomImage1 = "images/dice" + randomNumber1 + ".png";
    let image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", randomImage1);

    let randomNumber2 = Math.floor(Math.random() * 6) + 1;
    let randomImage2 = "images/dice" + randomNumber2 + ".png";
    let image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src", randomImage2);

    if(randomNumber1>randomNumber2){
        let heading = document.querySelector("h1");
        heading.innerHTML = n1Uppercase + " is the Winner !! 😉";
    }
    else if(randomNumber2>randomNumber1) {
        let heading = document.querySelector("h1");
        heading.innerHTML = n2Uppercase + " is the Winner !! 👏";
    }
    else{
        let heading = document.querySelector("h1");
        heading.innerHTML = "its a Tie Game 🤔";
    }
}

const clickButton = document.querySelector(".btn");
clickButton.addEventListener("click",function(){shuffle()});



