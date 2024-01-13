
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("myForm");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let data = new FormData(form);
      const fullName = data.get("name");
      const email = data.get("email").trim();
      const phone = data.get("phone");
      let errorMsg = "";
  
      if (email === "") {
        errorMsg += "Enter your email ID.<br>";
      }
      if (fullName === "") {
        errorMsg += "Enter your name.<br>";
      }
      if (phone === "") {
        errorMsg += "Enter your phone number.<br>";
      }
  
      const msgElement = document.querySelector("#msg");
      if (errorMsg !== "") {
        msgElement.innerHTML = errorMsg;
      } else {
        msgElement.innerHTML = "";
  
        window.open("./Resources/WIM SYLLABUS.pdf", "_blank");
      }
    });
  });