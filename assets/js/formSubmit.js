const scriptURL =
  "https://script.google.com/macros/s/AKfycbzP_kPHuyPj8tx2o4cR9QDbBSM6qDo8Y5Ab4wXT1ya7Hv7ELS-b/exec";
const form = document.forms["newsletterForm"];

form.addEventListener("submit", e => {
  e.preventDefault();
  const email = new FormData(form).get("email");
  if (email.trim() === "") {
    return;
  }
  document.getElementById("emailSubmit").disabled = "disabled";
  fetch(`${scriptURL}?email=${encodeURIComponent(email)}`, {
    mode: "no-cors",
    redirect: "follow",
    method: "GET"
  })
    .then(response => {
      console.log("Success!", response);
      document.getElementById("emailInput").value = "";
      document.getElementById("emailSubmitText").classList.add("hidden");
      document.getElementById("emailSubmitImg").classList.add("success");
    })
    .catch(error => console.error("Error!", error.message))
    .finally(() => {
      document.getElementById("emailSubmit").disabled = "";
    });
});
