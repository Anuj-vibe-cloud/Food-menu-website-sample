// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {
    // Select all navigation links within the main navigation bar
    const navLinks = document.querySelectorAll('nav ul li a');

    // Iterate over each navigation link
    navLinks.forEach(link => {
        // Add a click event listener to each link
        link.addEventListener('click', function(event) {
            // Prevent the default anchor tag behavior (jumping to the section)
            event.preventDefault();

            // Get the target section's ID from the link's href attribute (e.g., "#starters")
            const targetId = this.getAttribute('href');

            // If the href is just "#" or empty, scroll to the top of the page
            if (!targetId || targetId === '#') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                return; // Exit the function
            }

            try {
                // Find the target element on the page using the ID from the href
                const targetElement = document.querySelector(targetId);

                // If the target element exists, scroll to it smoothly
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth' // Enables smooth scrolling animation
                    });
                } else {
                    // Log a warning if the target element is not found (for debugging)
                    console.warn('Smooth scroll target not found:', targetId);
                }
            } catch (e) {
                // Log an error if querySelector fails (e.g., invalid ID format)
                // or if scrollIntoView fails for some reason.
                console.error('Error scrolling to target:', targetId, e);
                // As a fallback, scroll to the top of the page smoothly
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        });
    });
});
