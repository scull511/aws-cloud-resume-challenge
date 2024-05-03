document
  .getElementById("crud-form")
  .addEventListener("submit", function (event) {
    // event.preventDefault(); // Prevent form submission

    // Validate form inputs
    var id = document.getElementById("id").value.trim();
    var color = document.getElementById("color").value.trim();

    if (!id || !color) {
      alert("Please fill in all fields with valid inputs.");
      return;
    }

    // Construct the form data
    var formData = {
      id: id,
      color: color,
    };

    // Perform form submission
    console.log(formData);
    submitForm(formData);
  });

function submitForm(formData) {
  // Make an API request to the backend (API Gateway) for form submission
  //   fetch("https://oojb7uz8p9.execute-api.us-east-1.amazonaws.com/dev/submit", {
  // fetch("https://oojb7uz8p9.execute-api.us-east-1.amazonaws.com/dev/submit", {
  fetch("https://1qzl8j04kb.execute-api.us-east-1.amazonaws.com/Prod", {
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
        alert("Message delivered, thank you.");
      } else {
        throw new Error("Form submission failed.");
      }
    })
    .catch(function (error) {
      console.error(error);
      alert("Form submission failed. Please try again later.");
    });
}
