document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');
  
  
  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission

    // Reset error messages
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    // Validate name
    if (form.name.value.trim() === "") {
      nameError.textContent = "Name is required.";
      nameError.style.display = "block";
      return;
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(form.email.value)) {
      emailError.textContent = "Please enter a valid email address.";
      emailError.style.display = "block";
      return;
    }

    // Validate message
    if (form.message.value.trim() === "") {
      messageError.textContent = "Message is required.";
      messageError.style.display = "block";
      return;
    }

    // Show the loading spinner
    document.getElementById('loadingSpinner').style.display = "block";

    fetch("https://formspree.io/f/xldgzved", {
      method: "POST",
      body: new FormData(form),
      headers: {
        "Accept": "application/json"
      }
    })
    .then(response => {
      // Hide the loading spinner
      document.getElementById('loadingSpinner').style.display = "none";

      if (response.ok) {
        document.getElementById('successMessage').textContent = "Message sent successfully!";
        document.getElementById('successMessage').style.display = "block"; // Show the message
        form.reset(); // Clear the form
      } else {
        alert("Oops! Something went wrong.");
      }
    })
    .catch(error => {
      console.error("Error submitting form:", error);
      alert("Oops! Something went wrong.");
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});
function showPopup(src) {
    document.getElementById('popup-img').src = src;
    document.getElementById('popup').style.display = 'flex';
  }

  function hidePopup() {
    document.getElementById('popup').style.display = 'none';
  }