// page-transitions.js
document.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('fade-in');

    const links = document.querySelectorAll('a');
    links.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            document.body.classList.remove('fade-in');
            setTimeout(function() {
                window.location.href = href;
            }, 500); // This should match the CSS transition time
        });
    });
});
