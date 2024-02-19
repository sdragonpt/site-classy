document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.indicator');
    let currentIndex = 0;
    let interval;

    function updateCarousel() {
        const newTransformValue = -currentIndex * 100 + '%';
        carousel.style.transform = 'translateX(' + newTransformValue + ')';
        updateIndicators();
    }

    function updateIndicators() {
        indicators.forEach((indicator, index) => {
            if (index === currentIndex) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }

    function nextSlide() {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateCarousel();
    }

    function startAutoPlay() {
        interval = setInterval(nextSlide, 6000); // Muda de slide a cada 5 segundos
    }

    function stopAutoPlay() {
        clearInterval(interval);
    }

    function resetAutoPlay() {
        stopAutoPlay();
        startAutoPlay();
    }

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
            resetAutoPlay();
        });
    });

    startAutoPlay();

    carousel.addEventListener('mouseenter', stopAutoPlay);
    carousel.addEventListener('mouseleave', startAutoPlay);
    carousel.addEventListener('click', resetAutoPlay);
});

