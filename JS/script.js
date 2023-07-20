/* document.addEventListener("click", (event) => {
    const contactButton = document.getElementById("contactButton");
    const popupOverlay = document.getElementById("popupOverlay");
    const closeButton = document.getElementById("closeButton");

    if (event.target === contactButton) {
      popupOverlay.classList.add("show-popup");
    }

    if (event.target === closeButton) {
      popupOverlay.classList.remove("show-popup");
    }
  }); */
  document.addEventListener("click", (event) => {
    const contactButton = document.querySelector(".contact-button"); 
    const popupOverlay = document.getElementById("popupOverlay");
    const closeButton = document.getElementById("closeButton");
  
    if (event.target === contactButton) {
      popupOverlay.classList.add("show-popup"); 
    }
  
    if (event.target === closeButton) {
      popupOverlay.classList.remove("show-popup"); 
    }
  });