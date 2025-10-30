// <!-- JavaScript code to ensure the Bootstrap mobile navbar collapses when navigating to in-page links -->
document.querySelectorAll('.navbar-collapse .nav-link').forEach((link) => {
    link.addEventListener('click', function (e) {
        let href = e.target.getAttribute('href');
        if (href && href.startsWith('#')) {
            let section = document.querySelector(href);
            if (section) {
                e.preventDefault(); // Prevent default anchor click behavior
                let navbarHeight = document.querySelector('.navbar-toggler').offsetHeight;
                window.scroll({});
                document.querySelector('.navbar-collapse').classList.remove('show'); // Collapse navbar
            }
        } else {
            document.querySelector('.navbar-collapse').classList.remove('show'); // Collapse navbar for external links
        }
    });
});
