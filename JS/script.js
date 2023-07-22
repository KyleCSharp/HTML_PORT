
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
document.addEventListener("visibilitychange", function() {
  if (document.visibilityState === "hidden") {
    // Change the title to the custom message
    document.title = "Wait, don't leave!";
  } else {
    // When the user returns to the page, restore the original title
    document.title = "Kyle Rigler";
  }
});