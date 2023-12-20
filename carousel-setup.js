$(document).ready(function() {
    $('.image-carousel').slick({
        slidesToShow: 3,   // Show 3 slides at a time
        slidesToScroll: 1, // Scroll 1 slide at a time
        autoplay: false,    // Enable autoplay if desired
        dots: true,        // Enable dots for navigation
        arrows: true,      // Enable navigation arrows
        // Responsive settings for different screen sizes
        responsive: [
            {
                breakpoint: 1024, // At 1024px and below
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600, // At 600px and below
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});
