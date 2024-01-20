let nav = document.querySelector(".navbar");

window.onscroll = function() {
    if(document.documentElement.scrollTop > 20) {
        nav.classList.add("header_scrolled");
    } else{
        nav.classList.remove("header_scrolled");
    }
}

let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelectorAll(".navbar-collapse.collapse");

navBar.forEach(function(a){
    a.addEventListener("click",function(){
        navCollapse[0].classList.remove("show");
    });
});