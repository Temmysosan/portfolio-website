function sendMail() {
  let parms = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  emailjs
    .send("service_1fhmsoe", "template_kvyby4j", parms)
    .then(alert("Email Sent!!"));
}
