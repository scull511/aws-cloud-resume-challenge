document
  .getElementById("crud-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Validate form inputs
    var name = document.getElementById("name").value.trim();
    var age = document.getElementById("age").value.trim();

    if (!name || !age) {
      alert("Please fill in all fields with valid inputs.");
      return;
    }

    // Construct the form data SubmissionId
    var formData = {
      name: name,
      age: age,
    };

    // Perform form submission
    console.log(formData);
    submitForm(formData);
  });

function submitForm(formData) {
  // Make an API request to the backend (API Gateway) for form submission
  //   fetch("https://oojb7uz8p9.execute-api.us-east-1.amazonaws.com/dev/submit", {
  // fetch("https://oojb7uz8p9.execute-api.us-east-1.amazonaws.com/dev/submit", {
  fetch(
    "https://1qzl8j04kb.execute-api.us-east-1.amazonaws.com/Prod/DynamoDBManager",
    {
      // URL that represents the backend API endpoint to which the form data is going to be sent
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
