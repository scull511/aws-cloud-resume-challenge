// VISITOR COUNTER
const counterValue = document.querySelector("#counter-value");

async function updateCounter() {
  let res = await fetch(
    "https://rergvakopvnrdob2bi4cxo6ftu0ncujn.lambda-url.eu-west-2.on.aws/"
  );
  let value = await res.json();
  counterValue.innerHTML = value;
}

updateCounter();
