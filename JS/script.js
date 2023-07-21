
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
  function submitForm() {
    // Show the spinner
    document.getElementById('spinner').style.display = 'block';
    
    
    // Disable the submit button to prevent multiple clicks during form submission
    document.getElementById('submitBtn').disabled = true;
    
    // Submit the form programmatically
    document.getElementById('myForm').submit();
}