function SendMail() {
    var params = {
        from_name: document.getElementById("name").value,
        email_id: document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message: document.getElementById("message").value
    }
    emailjs.send("service_wmyobxa", "template_alid4y9", params).then(function (res) {
        alert("Email sent");
    })
}

// Reset form
const formToReset = document.getElementById('contact-form');
formToReset.addEventListener('submit', (e) => {
    e.preventDefault();
    formToReset.reset();
});