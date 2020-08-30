const share = document.querySelector(".share");
const shareMobile = document.querySelector(".shareMobile");
const activeMobile = document.querySelector(".activeMobile");
const last = document.querySelector(".last");

var shareMobi = false;

function shareOptions() {
  if (window.innerWidth <= 600) 
  {
    if (!shareMobi) {
      activeMobile.style.display = "flex";
      last.style.display = "none";
      shareMobi = true;
    } 
    else {
      activeMobile.style.display = "none";
      last.style.display = "flex";
      shareMobi = false;
    }
  }
}
share.addEventListener("click", shareOptions);
shareMobile.addEventListener("click", shareOptions);

//for coming back on the desktop view after resizing
window.addEventListener("resize",()=>{
    if (window.innerWidth > 600){
        activeMobile.style.display = "none";
        last.style.display = "flex";
        shareMobi = false;
    }
})