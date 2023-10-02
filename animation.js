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

  // Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Get a reference to your image element
    const resumeImage = document.getElementById("resume-image");
  
    // Add a click event listener to trigger the download
    resumeImage.addEventListener("click", function () {
      // Replace "path_to_your_resume.pdf" with the actual path to your resume PDF file
      const resumeFilePath = "Awurama Nyarko official resume .pdf";
  
      // Create an anchor element to trigger the download
      const downloadLink = document.createElement("a");
      downloadLink.href = resumeFilePath;
      downloadLink.download = "Awurama_Nyarko_resume.pdf"; // Change the filename if needed
  
      // Simulate a click on the anchor element to start the download
      downloadLink.click();
    });
  });
  
// Select all progress bars on the page
const progressBars = document.querySelectorAll('.progress');

// Initialize Intersection Observer
const options = {
    threshold: 0.5, // When 50% of the element is in view
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const progressBar = entry.target;
            const width = progressBar.getAttribute('data-percent');
            progressBar.style.width = width;
            observer.unobserve(progressBar); // Stop observing this element after it's in view
        }
    });
}, options);

// Observe each progress bar
progressBars.forEach((bar) => {
    observer.observe(bar);
});
