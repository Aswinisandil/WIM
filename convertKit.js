let data = new FormData(form);
const fullName = data.get("name");
const email = data.get("email").trim();
const phone = data.get("phone");
const utm_source = data.get("utm_source");


const apiKey = "4RVHEx4WhpQhzH91b-sdIA";
const formId = "3717879"; 

fetch(`https://api.convertkit.com/v3/forms/${formId}/subscribe?api_key=${apiKey}`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({fullName, email, phone, utm_source }), 
})
  .then((res) => res.json())
  .then((response) => {
    console.log(response);
    console.log(response.message);
  })
  .catch((error) => {
    console.error("Error:", error);
  });