//JavaScript to validate the form 
function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    // Validate for empty fields
    if (name === "" || email === "" || message === "") {
        alert("All fields are required.");
        return false; 
    }
    // Validate email format using a regular expression
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return false; 
    }
    // Allow form submission if all checks pass
    return true; 
}

// JavaScript to add and remove the sticky class
window.onscroll = function() {
    var nav = document.querySelector('nav');
    var scrollPosition = window.scrollY;

    // Check if the screen width is greater than 768 pixels (adjust as needed)
    if (window.innerWidth > 768) {
        if (scrollPosition > 0) {
            nav.classList.add('sticky');
        } else {
            nav.classList.remove('sticky');
        }
    } else {
        // If the screen width is smaller than or equal to 768 pixels, remove sticky class
        nav.classList.remove('sticky');
    }
};
