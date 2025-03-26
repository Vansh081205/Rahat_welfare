
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}


let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-item');

function nextSlide() {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add('active');
}

function prevSlide() {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    slides[currentIndex].classList.add('active');
}

setInterval(nextSlide, 3000);


function filterSpecies() {
    let input = document.getElementById('search').value.toLowerCase();
    let cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        let title = card.querySelector('h3').textContent.toLowerCase();
        card.style.display = title.includes(input) ? 'block' : 'none';
    });
}


function openModal(type) {
    document.getElementById(`${type}-modal`).style.display = 'block';
}

function closeModal(type) {
    document.getElementById(`${type}-modal`).style.display = 'none';
}


function donationSuccess() {
    alert('Thank you for your donation! Your support means a lot.');
    closeModal('donate');
}

function volunteerSuccess() {
    alert('Thank you for signing up as a volunteer! We will contact you soon.');
    closeModal('volunteer');
}


function showAlert(card) {
    alert(card.getAttribute('data-info'));
}


document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for reaching out! We will get back to you soon.");
    this.reset();
});



document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields.");
        return;
    }

    alert("Thank you for reaching out, " + name + "! We will get back to you soon.");
    this.reset();
});
