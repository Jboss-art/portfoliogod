let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 4000); // Change image les 4 secondes
    displayText(slideIndex);
}

function displayText(index) {
    const textElements = document.getElementsByClassName("text");
    const colors = ["#0000FF", "#FFFFFF", "#FF0000"];
    const textContent = "Actualités Paris 2024";
    
    for (let i = 0; i < textElements.length; i++) {
        textElements[i].innerHTML = "";
    }

    let currentTextElement = textElements[index - 1];
    let charIndex = 0;

    function typeEffect() {
        if (charIndex < textContent.length) {
            currentTextElement.innerHTML += `<span style="color:${colors[charIndex % 3]}">${textContent.charAt(charIndex)}</span>`;
            charIndex++;
            setTimeout(typeEffect, 150); // Adjust typing speed here
        }
    }

    typeEffect();
}
