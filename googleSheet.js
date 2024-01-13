function getUTMSource() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("utm_source") || "";
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("utm_source").value = getUTMSource();
});

let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = new FormData(form);
  fetch(
    "https://script.google.com/macros/s/AKfycbyFXs5X8PmrPGswPB7PdG7u39mfqSBgYMway2f94-SfDuFTb94TbyO1ogTUbNtebWx6/exec",
    {
      method: "POST",
      body: data 
    }
  )
    .then((res) => res.text())
    .then((data) => {
      console.log(data);
    });
});


