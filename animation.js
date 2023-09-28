document.addEventListener("DOMContentLoaded", function() {
    // Get a reference to the quote container
    const quoteContainer = document.getElementById("quote-container");
    const aboutSection = document.querySelector(".about");
  
    // Function to check if an element is in the viewport
    function isElementInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    // Function to handle the animation
    function handleQuoteAnimation() {
      if (isElementInViewport(aboutSection)) {
        quoteContainer.style.transform = "translateX(0)";
      }
    }
  
    // Add an event listener to handle the animation on scroll
    window.addEventListener("scroll", handleQuoteAnimation);
  
    // Initial check in case the quote is already in the viewport
    handleQuoteAnimation();
  });
