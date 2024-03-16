// GET YEAR FOR FOOTER
let date = new Date();
let year = date.getFullYear();

const copyrightAndYearText = document.getElementById("copyright-and-year");
copyrightAndYearText.innerHTML = `&#169; Simon Cull ${year}`;

// VISITOR COUNTER
const counterValue = document.querySelector("#counter-value");

async function updateCounter() {
  // let res = await fetch(
  //   "https://rergvakopvnrdob2bi4cxo6ftu0ncujn.lambda-url.eu-west-2.on.aws/"
  // );
  // let value = await res.json();
  let value = 12345;
  counterValue.innerHTML = ` ${value.toLocaleString()}`;
}

updateCounter();