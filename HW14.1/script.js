    const carousel = document.getElementById('carouselExampleIndicators');
    const carouselInner = carousel.querySelector('.carousel-inner');
    const prevButton = carousel.querySelector('.carousel-control-prev');
    const nextButton = carousel.querySelector('.carousel-control-next');

        function checkSlide() {
        const activeSlide = carouselInner.querySelector('.carousel-item.active');

            if (!activeSlide) return; 

            if (activeSlide === carouselInner.firstElementChild) {
                prevButton.style.display = 'none';
            } 
            else {
                prevButton.style.display = ''; 
            }

            if (activeSlide === carouselInner.lastElementChild) {
                nextButton.style.display = 'none';
            } 
            else {
                nextButton.style.display = ''; 
            }
        }

        carousel.addEventListener('slid.bs.carousel', checkSlide);

        checkSlide();

