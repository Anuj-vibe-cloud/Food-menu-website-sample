document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetSection = document.querySelector(this.getAttribute('href'));
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
                // Manually set active class on click, scroll handler will also catch it
                // but this makes it feel more responsive.
                // navLinks.forEach(link => link.classList.remove('active'));
                // this.classList.add('active');
            }
        });
    });

    // Active link highlighting on scroll
    const sections = document.querySelectorAll('main section[id]');
    const nav = document.querySelector('nav');
    let navHeight = nav ? nav.offsetHeight : 70; // Fallback if nav isn't found immediately

    function changeActiveLink() {
        if (!nav) return; // Guard if nav is not found
        navHeight = nav.offsetHeight; // Recalculate in case of dynamic changes (though less likely here)

        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - navHeight - 50; // Add a 50px buffer
            if (window.scrollY >= sectionTop) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });

        // Handle cases where no section is automatically made active by the above loop.
        // This can happen if:
        // 1. Scrolled to the very top of the page (above the first section's trigger point).
        // 2. Scrolled past the last section's trigger point (if there's empty space at the bottom).
        // 3. The page is too short for any section to reach the trigger point.
        // In such cases, we might want to explicitly set the first nav link as active,
        // or clear all active states, depending on desired UX.

        const activeLinks = document.querySelectorAll('nav a.active');

        // If no link is active and we are at the top of the page, activate the first link.
        if (activeLinks.length === 0 && navLinks.length > 0 && sections.length > 0) {
            if (window.scrollY < (sections[0].offsetTop - navHeight - 50)) {
                 // navLinks.forEach(link => link.classList.remove('active')); // Ensure all are cleared first (optional, main loop should do this)
                 if(navLinks[0].getAttribute('href') === `#${sections[0].getAttribute('id')}`) {
                    navLinks[0].classList.add('active');
                 }
            }
        }
    }

    // Initial call to set active link based on initial scroll position (e.g. page refresh on a section)
    changeActiveLink();
    window.addEventListener('scroll', changeActiveLink);

    // Recalculate navHeight if window is resized, as it might change due to responsive CSS
    window.addEventListener('resize', () => {
        if (nav) navHeight = nav.offsetHeight;
    });
});
