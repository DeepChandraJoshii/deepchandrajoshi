document.addEventListener('DOMContentLoaded', function () {
    // Initialize Typed.js
    var options = {
      strings: ["Web Designer.", "Freelancer.", "Web Developer."],
      typeSpeed: 200, // typing speed in milliseconds
      backSpeed: 50, // backspacing speed in milliseconds
      loop: true // loop the animation indefinitely
    };

    var typed = new Typed("#typed-output", options);
  });

  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  hamburger.addEventListener("click", mobileMenu);

  // Add event listeners to each nav-item to close the menu when clicked
  const navItems = document.querySelectorAll(".nav-item");
  navItems.forEach((item) => {
    item.addEventListener("click", closeMenu);
  });

  function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  }

  // Function to close the menu
  function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }


  document.addEventListener("DOMContentLoaded", function () {
    var scrollButton = document.getElementById("backToTopBtn");
    var scrollTimeout;

    // Add a scroll event listener to show/hide the "back to top" button
    window.addEventListener("scroll", function () {
        scrollButton.style.display = "block";

        // Clear the previous timeout
        clearTimeout(scrollTimeout);

        // Set a timeout to hide the button after 1 second of no scrolling
        scrollTimeout = setTimeout(function () {
            scrollButton.style.display = "none";
        }, 700);
    });
});

// Function to scroll to the top when the button is clicked
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}



