// GET YEAR FOR FOOTER
let date = new Date();
let year = date.getFullYear();

const copyrightAndYearText = document.getElementById("copyright-and-year");
copyrightAndYearText.innerHTML = `&#169; Simon Cull ${year}`;

// VISITOR COUNTER
const counterValue = document.querySelector("#counter-value");

async function updateCounter() {
  let res = await fetch(
    "https://rergvakopvnrdob2bi4cxo6ftu0ncujn.lambda-url.eu-west-2.on.aws/"
  );
  let value = await res.json();

  counterValue.innerHTML = ` ${value.toLocaleString()}`;
}

updateCounter();

// CONTACT FORM
let formConfirmationMsg = document.getElementById("form-confirmation-msg");

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Validate form inputs
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var subject = document.getElementById("subject").value.trim();
    var message = document.getElementById("message").value.trim();

    // Email validation using a regular expression
    var emailRegex = /^\S+@\S+\.\S+$/;
    if (!name || !email || !subject || !message || !emailRegex.test(email)) {
      alert("Please fill in all fields with valid inputs.");
      return;
    }

    // Construct the form data
    var formData = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    };

    // Perform form submission
    submitForm(formData);
    // console.log(formData);
  });

function submitForm(formData) {
  // Make an API request to the backend (API Gateway) for form submission
  // fetch("", {
  // URL that represents the backend API endpoint to which the form data is going to be sent
  // Make an API request to the backend (Lambda) for form submission
  fetch(
    "https://ax7fgzkp2jdposjirdpjrtszky0flahn.lambda-url.eu-west-2.on.aws/",
    {
      // URL that represents the backend Lambda URL to which the form data is going to be sent
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }
  )
    .then(function (response) {
      if (response.ok) {
        // Redirect to the thank you page
        // window.location.href = "thank-you.html";
        // alert("Message delivered, thank you.");
        formConfirmationMsg.innerText = "Message delivered, thank you.";
        setTimeout(function () {
          formConfirmationMsg.innerText = "";
        }, 3000);
      } else {
        throw new Error("Form submission failed.");
      }
    })
    .catch(function (error) {
      console.error(error);
      // alert("Form submission failed. Please try again later.");
      formConfirmationMsg.innerText =
        "Form submission failed. Please try again later.";
      setTimeout(function () {
        formConfirmationMsg.innerText = "";
      }, 3000);
    });

  document.getElementById("contact-form").reset();
}
