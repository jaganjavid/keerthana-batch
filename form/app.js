

document.addEventListener('DOMContentLoaded', function() {
    
    const form = document.getElementById('myForm');
    const occupationSelect = document.getElementById('occupation');
    const otherOccupation = document.getElementById('otherOccupation');
    const otherOccupationText = document.getElementById('otherOccupationText');
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');

    // Show/hide the "Specify Occupation" input based on the selected occupation
    occupationSelect.addEventListener('change', function() {
        if (occupationSelect.value === 'other') {
            otherOccupation.style.display = 'block';
        } else {
            otherOccupation.style.display = 'none';
        }
    });

    // Real-time email validation
    emailInput.addEventListener('input', function() {
        if (!isValidEmail(emailInput.value)) {
            emailError.textContent = 'Invalid email format';
        } else {
            emailError.textContent = '';
        }
    });

    // Form submission handling (you can add AJAX or server-side handling here)
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Perform additional form submission handling here
        // You can use fetch or other methods to send data to the server

        // Example: Display a success message
        if (!isValidEmail(emailInput.value)) {
            alert("Please clear all the error")
        } else {
            alert("Form submit succesfully");
        }
    });

    // Function to validate email format
    function isValidEmail(email) {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return regex.test(email);
    }
});
