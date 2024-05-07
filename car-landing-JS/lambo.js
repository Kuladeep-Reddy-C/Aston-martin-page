document.addEventListener('DOMContentLoaded', function () {
    // Make sure elements are defined inside the DOMContentLoaded event
    const textElement = document.getElementById('glowingText');
    const text = textElement.innerText;
    let newText = '';

    for (let i = 0; i < text.length; i++) {
        newText += `<span>${text[i]}</span>`;
    }
    textElement.innerHTML = newText;

    const mainElement = document.querySelector('.h-main');  // Define mainElement correctly
    const images = [
        "lambo-home-page/lambo-1.jpg",
        "lambo-home-page/lambo-2.jpg",
        "lambo-home-page/lambo-3.jpg",
        "lambo-home-page/lambo-4.jpg",
        "lambo-home-page/lambo-5.jpg",
        "lambo-home-page/lambo.webp",
        "car-landing-page-css/lambo-orange.jpg"
    ];
    let currentIndex = 0;

    function changeImage() {
        mainElement.style.backgroundImage = `url('${images[currentIndex]}')`;
        currentIndex = (currentIndex + 1) % images.length; // Simplified increment and wrap-around
    }

    setInterval(changeImage, 3000); // Change image every 3 seconds
});
