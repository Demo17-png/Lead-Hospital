// Waits for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const primaryNavigation = document.getElementById('primary-navigation');

    if (!menuToggle || !primaryNavigation) return;

    // Toggle menu visibility
    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevents immediate closing from the document listener
        const isVisible = primaryNavigation.getAttribute('data-visible') === 'true';

        primaryNavigation.setAttribute('data-visible', !isVisible);
        menuToggle.setAttribute('aria-expanded', !isVisible);
    });

    // UX Improvement: Close menu when clicking outside or on a link
    document.addEventListener('click', (event) => {
        const isVisible = primaryNavigation.getAttribute('data-visible') === 'true';
        if (isVisible && !primaryNavigation.contains(event.target)) {
            primaryNavigation.setAttribute('data-visible', 'false');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });

    // Close menu when a link is clicked (for smooth scrolling behavior)
    primaryNavigation.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            primaryNavigation.setAttribute('data-visible', 'false');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });
});