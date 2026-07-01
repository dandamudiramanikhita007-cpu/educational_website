// Tirumala Institutions - Contact Form Validation

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contactForm");

    if (form) {

        form.addEventListener("submit", function (event) {

            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const course = document.getElementById("course").value;

            // Name Validation
            if (name === "") {
                alert("Please enter your full name.");
                return;
            }

            // Email Validation
            const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

            if (!email.match(emailPattern)) {
                alert("Please enter a valid email address.");
                return;
            }

            // Phone Validation
            const phonePattern = /^[0-9]{10}$/;

            if (!phone.match(phonePattern)) {
                alert("Please enter a valid 10-digit phone number.");
                return;
            }

            // Course Validation
            if (course === "") {
                alert("Please select a course.");
                return;
            }

            alert("Registration Submitted Successfully!\n\nThank you for contacting Tirumala Institutions.");

            form.reset();

        });

    }

});