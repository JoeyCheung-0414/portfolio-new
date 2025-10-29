console.log("Testing")

//For Navbar
document.addEventListener('DOMContentLoaded', () => {
            const menuToggle = document.querySelector('.menu-toggle');
            const navLinks = document.querySelector('.nav-links');

            menuToggle.addEventListener('click', () => {
                navLinks.classList.toggle('active');
            });
        });
        
// Finds Fav-Popup Box
document.querySelectorAll(".fav-box").forEach(box => {
  let popup = box.querySelector(".fav-popup");

  //Shows Popup
  box.querySelector(".fav-img").onclick = () => popup.style.visibility = "visible";
  box.querySelector("h2").onclick = () => popup.style.visibility = "visible";

  //Hides Popup
  box.querySelector(".fav-close").onclick = () => popup.style.visibility = "hidden";
});


//For Project Pop up

// Finds Popup Box
document.querySelectorAll(".pj-box").forEach(box => {
  let popup = box.querySelector(".pj-popup");

  //Shows Popup
  box.querySelector(".pj-img").onclick = () => popup.style.visibility = "visible";
  box.querySelector("h2").onclick = () => popup.style.visibility = "visible";

  //Hides Popup
  box.querySelector(".pj-close").onclick = () => popup.style.visibility = "hidden";
});


