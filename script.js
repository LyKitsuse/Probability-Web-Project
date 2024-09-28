document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('nav a[data-page]');
    const pages = document.querySelectorAll('.page');
    const dropdownToggle = document.querySelector('.toggle-dropdown');
    const dropdownMenu = document.querySelector('.dropdown');

    // Function to switch pages
    function showPage(pageId) {
        pages.forEach(page => {
            page.classList.toggle('active', page.id === pageId);
        });

        links.forEach(link => {
            link.classList.toggle('active-link', link.getAttribute('data-page') === pageId);
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
});
