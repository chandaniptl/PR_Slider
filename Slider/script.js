    const slider = document.getElementById('slider');
    const totalSlides = document.querySelectorAll('.slide').length;
    let currentIndex = 0;

    function updateSlider() {
      slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateSlider();
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateSlider();
    }

