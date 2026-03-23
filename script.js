document.addEventListener('DOMContentLoaded', function() {
    const map = L.map('map').setView([21.1458, 79.0882], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
        subdomains: ['a', 'b', 'c']
    }).addTo(map);

    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(contactForm);
        fetch('https://formspree.io/f/xbdzenyd', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            alert('Message sent successfully!');
            contactForm.reset();
        })
        .catch(error => {
            alert('Error sending message!');
            console.error(error);
        });
    });
});