/* Author: 

*/
document.querySelector('.hamburger-menu').addEventListener('click',()=>{
    var navbar = document.querySelector('nav');
    if (navbar.style.display === "none"){
        navbar.style.display = "flex";
        document.querySelector('.hamburger-menu').classList.add("change")
        
    } else {
        navbar.style.display = "none";
        document.querySelector('.hamburger-menu').classList.remove("change")
    }
  })

















