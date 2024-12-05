document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const items = Array.from(document.querySelectorAll('.carousel-item'));
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    let index = 0;
    let itemWidth = items[0].clientWidth;

    
    const updateCarousel = () => {
        carousel.style.transform = `translateX(${-index * itemWidth}px)`;
    };

    const handleResize = () => {
        itemWidth = items[0].clientWidth;
        updateCarousel(); 
    };

    const handleNext = () => {
        index = (index + 1) % items.length;
        updateCarousel();
    };

    const handlePrev = () => {
        index = (index - 1 + items.length) % items.length;
        updateCarousel();
    };

    nextButton.addEventListener('click', handleNext);
    prevButton.addEventListener('click', handlePrev);
    window.addEventListener('resize', handleResize);

    updateCarousel();
});
