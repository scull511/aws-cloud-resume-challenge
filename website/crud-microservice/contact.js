document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Validate form inputs
    var id = document.getElementById("id").value.trim();
    var name = document.getElementById("name").value.trim();

    if (!id || !name) {
      alert("Please fill in all fields with valid inputs.");
      return;
    }

    // Construct the form data
    var formData = {
      id: id,
      name: name,
    };

    // Perform form submission
    submitForm(formData);
  });

function submitForm(formData) {
  // Make an API request to the backend (API Gateway) for form submission
  //   fetch("https://oojb7uz8p9.execute-api.us-east-1.amazonaws.com/dev/submit", {
  fetch("https://oojb7uz8p9.execute-api.us-east-1.amazonaws.com/dev/submit", {
    // URL that represents the backend API endpoint to which the form data is going to be sent
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then(function (response) {
      if (response.ok) {
        // Redirect to the thank you page
        // window.location.href = "thank-you.html";
        alert("Message delivvered, thank you.");
      } else {
        throw new Error("Form submission failed.");
      }
    })
    .catch(function (error) {
      console.error(error);
      alert("Form submission failed. Please try again later.");
    });
}
