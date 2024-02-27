const button = document.getElementById("submit");
const emailInput = document.getElementById("emailInput");
const errorMessage = document.createElement("p");
const errorPlace = document.querySelector("footer");

//  ბათონზე დავაყენეთ ადევენთ ლისენერი რადგან ღილაკზე დაწკაპუნების შემდეგ გაიგზავნოს
// ინფუთში შეყვანილი ტექსტი, პირველ არგუმენტად გადავეცით კლიკი და მეორე არგუმენტად გადავეცით
// ეორუ ფუნქცია, ამ ფონქციაში ვწერთ რა უნდა მოხდეს დაწკაპუნების შემდეგ.

button.addEventListener("click", () => {
  console.log(emailInput.value);
  //`trim()` არის სტრიქონის მეთოდი, რომელიც შლის ცარიელ სივრცეს სტრიქონის ორივე ბოლოდან.
  const email = emailInput.value.trim();
  if (validateEmail(email)) {
    errorMessage.textContent = "";
  } else {
    errorMessage.innerHTML = "Oops! Please check your email";
    errorMessage.style.color = "red";
    errorPlace.appendChild(errorMessage);
  }
});

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
