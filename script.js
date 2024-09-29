document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('nav a[data-page]');
    const pages = document.querySelectorAll('.page');
    const dropdownToggle = document.querySelector('.toggle-dropdown');
    const dropdownMenu = document.querySelector('.dropdown');

    // About section navigation
    const aboutLinks = document.querySelectorAll('.about-nav a');
    const aboutContents = document.querySelectorAll('.about-content');

    // Function to switch pages
    function showPage(pageId) {
        pages.forEach(page => {
            page.classList.toggle('active', page.id === pageId);
        });

        links.forEach(link => {
            link.classList.toggle('active-link', link.getAttribute('data-page') === pageId);
        });
    }

    // Function to switch between About and Team sections
    function showAboutSection(sectionId) {
        aboutContents.forEach(content => {
            content.classList.toggle('active', content.id === sectionId);
        });

        aboutLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('data-section') === sectionId);
        });
    }

    // Add event listeners to navigation links
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.getAttribute('data-page');

            if (pageId) {
                showPage(pageId);
            }
        });
    });

    // Add event listeners for about section items
    aboutLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('data-section');
            showAboutSection(sectionId);
        });
    });

    // Add event listeners for dropdown items
    dropdownMenu.querySelectorAll('a[data-page]').forEach(dropdownLink => {
        dropdownLink.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.getAttribute('data-page');
            if (pageId) {
                showPage(pageId);
                dropdownMenu.classList.remove('active'); // Close dropdown after selecting
            }
        });
    });

    // Toggle dropdown menu on Topics click
    dropdownToggle.addEventListener('click', function(e) {
        e.preventDefault();
        dropdownMenu.classList.toggle('active');
    });

    // Close the dropdown when clicking outside of it
    document.addEventListener('click', function(event) {
        if (!dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.remove('active');
        }
    });
});
