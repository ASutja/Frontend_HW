const form = document.querySelector('form[name="example"]');
const nameInput = document.getElementById('exampleTextEl');
const messageInput = document.getElementById('exampleFormControlMessage');
const phoneInput = document.getElementById('exampleInputPhone');
const emailInput = document.getElementById('exampleInputEmail1');

form.addEventListener("submit", function(event){
    event.preventDefault();

    const nameValue = nameInput.value.trim();
    const messageValue = messageInput.value.trim();
    const phoneValue = phoneInput.value.trim();
    const emailValue = emailInput.value.trim();

    const nameRegex = /^[a-zA-Z\s]+$/;
    const phoneRegex = /^\+380\d{9}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let isValid = true;
    let errorMessage = "";

    if (!nameValue.match(nameRegex)) {
        isValid = false;
        errorMessage += "Please enter a valid name.\n";
      }

      if (messageValue.length < 5) {
        isValid = false;
        errorMessage += "Please enter a message with at least 5 symbols.\n";
      }

      if (!phoneValue.match(phoneRegex)) {
        isValid = false;
        errorMessage += "Please enter a valid phone number starting with +380.\n";
      }

      if (!emailValue.match(emailRegex)) {
        isValid = false;
        errorMessage += "Please enter a valid email address.\n";
      }

      const errorDiv = document.getElementById('error-messages');
      errorDiv.textContent = errorMessage;

        if (isValid) {
        console.log("Name:", nameValue);
        console.log("Message:", messageValue);
        console.log("Phone number:", phoneValue);
        console.log("Email:", emailValue);
        
      }
    });


