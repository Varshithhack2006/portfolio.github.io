document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Here you can add functionality to send the form data to a server or email
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    
    // Reset the form
    this.reset();
    
    // Display a success message
    const successMessage = document.createElement('div');
    successMessage.textContent = 'Message sent successfully!';
    successMessage.style.color = 'green';
    successMessage.style.marginTop = '10px';
    document.getElementById('contact').appendChild(successMessage);
    
    // Remove the success message after 3 seconds
    setTimeout(() => {
        successMessage.remove();
    }, 3000);
});


