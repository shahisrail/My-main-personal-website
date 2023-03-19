// tooger style-------------------

let styleSwitcherToggler = document.querySelector(".style_switcher_toggler");
styleSwitcherToggler.addEventListener("click", () => {
    document.querySelector(".style_switcher").classList.toggle("open");
    
});

// hidden

window.addEventListener("scroll", () =>{
    if (document.querySelector(".style_switcher").classList.contains("open")) {
        document.querySelector(".style_switcher").classList.remove("open");
    }
})
let alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(color){
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title")){
            style.removeAttribute("disabled")
        }else{
            style.setAttribute("disabled","true");

        }
    })
}

let dayNight = document.querySelector(".day_night");
dayNight.addEventListener('click', () =>{
    dayNight.querySelector("i").classList.toggle('fa-sun');
    dayNight.querySelector("i").classList.toggle('fa-moon');
    document.body.classList.toggle("dark");
})
window.addEventListener('load', () =>{
    if(document.body.classList.contains('dark')){
        dayNight.querySelector("i").classList.add('fa-sun');
    }else{
        dayNight.querySelector("i").classList.add('fa-moon');
        
    }
})


let mobilenight = document.querySelector(".day_night2");
mobilenight.addEventListener("click", () =>{
    document.body.classList.toggle("dark");
    mobilenight.querySelector("i").classList.toggle('fa-moon');
})

// ================================

