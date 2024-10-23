document.addEventListener('DOMContentLoaded', function() {
    // Welcome message with user name
    let username = prompt("Nama Kamu Siapa?");
    if (username) {
        document.getElementById('username').textContent = username;
    }

    document.addEventListener('DOMContentLoaded', function() {
        const burgerMenu = document.querySelector('.burger-menu');
        const navMenu = document.querySelector('.nav-menu');
    
        // Toggle the navigation menu when the burger icon is clicked
        burgerMenu.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    });
       

    // Banner slide show
    const slides = document.querySelectorAll('.banner .slide');
    let currentSlide = 0;

    function showSlide() {
        slides.forEach((slide, index) => {
            slide.style.transform = `translateX(-${currentSlide * 100}%)`;
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide();
    }

    setInterval(nextSlide, 3000); // Slide every 3 seconds

    // Form submission and validation
    const form = document.getElementById('message-form');
    const outputDate = document.getElementById('output-date');
    const outputName = document.getElementById('output-name');
    const outputBirthdate = document.getElementById('output-birthdate');
    const outputGender = document.getElementById('output-gender');
    const outputMessage = document.getElementById('output-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const birthdate = document.getElementById('birthdate').value;
        const gender = document.getElementById('gender').value;
        const message = document.getElementById('message').value;

        // Get the current date and time
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleString('id-ID', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });

        // Output form data and date
        outputDate.textContent = formattedDate;
        outputName.textContent = `Nama: ${name}`;
        outputBirthdate.textContent = `Tanggal Lahir: ${birthdate}`;
        outputGender.textContent = `Jenis Kelamin: ${gender}`;
        outputMessage.textContent = `Pesan: ${message}`;
    });
});
