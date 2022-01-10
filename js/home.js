// adding js for mobile nav
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// getting the date
var field = document.querySelector('#today');
var date = new Date();

// Set the date
field.value = date.getFullYear().toString() + '-' + (date.getMonth() + 1).toString().padStart(2, 0) + 
    '-' + date.getDate().toString().padStart(2, 0);

// function knocksPerAnswer(){
//     var knocks = getElementById("numKnocks").value;
//     var answers = getElementById("numAnswers").value;
//     var knockAns = knocks/answers;
//     // document.getElementById("knocksAnswers").innerHTML = knocks/answers;

//     var divKnockAnswers = document.getElementById('knocksAnswers');
//     divKnockAnswers.innerHTML = divKnockAnswers.innerHTML + knockAns.value;
// }

function add_number() {
               
    var first_number = parseInt(document.getElementById("numKnocks").value);
    var second_number = parseInt(document.getElementById("numAnswers").value);
    var result = first_number/second_number;

    document.getElementById("txtresult").value = result;
}