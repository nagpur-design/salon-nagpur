// Get the WhatsApp button
const whatsappButton = document.querySelector('.whatsapp-button');

// Add event listener to the WhatsApp button
whatsappButton.addEventListener('click', () => {
  // Open WhatsApp in the default browser
  window.open('https://wa.me/91xxxxxxxxx?text=Hello%2C%20I%20found%20you%20online', '_blank');
});

// Get the contact form
const contactForm = document.querySelector('.contact-form');

// Add event listener to the contact form
contactForm.addEventListener('submit', (e) => {
  // Prevent default form submission
  e.preventDefault();

  // Get the form data
  const formData = new FormData(contactForm);

  // Create a new promise to handle the form submission
  return new Promise((resolve, reject) => {
    // Create a new fetch request
    fetch(contactForm.action, {
      method: contactForm.method,
      body: formData,
    })
    .then((response) => {
      // Check if the response was successful
      if (response.ok) {
        // Resolve the promise with a success message
        resolve('Message sent successfully!');
      } else {
        // Reject the promise with an error message
        reject('Error sending message. Please try again.');
      }
    })
    .catch((error) => {
      // Reject the promise with an error message
      reject('Error sending message. Please try again.');
    });
  })
  .then((message) => {
    // Show the success message
    document.querySelector('#success-message').style.display = 'block';
    // Hide the error message
    document.querySelector('#error-message').style.display = 'none';

    // Clear the form fields
    contactForm.reset();
  })
  .catch((error) => {
    // Show the error message
    document.querySelector('#error-message').style.display = 'block';
    // Hide the success message
    document.querySelector('#success-message').style.display = 'none';
  });
});

// Add event listener to the contact form fields
contactForm.addEventListener('input', () => {
  // Get the form fields
  const nameField = document.querySelector('#name');
  const phoneField = document.querySelector('#phone');
  const messageField = document.querySelector('#message');

  // Check if all fields are filled in
  if (nameField.value && phoneField.value && messageField.value) {
    // Enable the submit button
    document.querySelector('button[type="submit"]').disabled = false;
  } else {
    // Disable the submit button
    document.querySelector('button[type="submit"]').disabled = true;
  }
});