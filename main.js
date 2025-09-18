const btn = document.querySelector("#subBtn");
const email = document.getElementById("email");
const pop = document.querySelector(".alert");
const popIcon = document.querySelector("#popIcon");

function checkEmail() {
  const emailinput = email.value;
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (isValidEmail.test(emailinput)) {
    console.log("this is a valid email");
    email.classList.remove("incorrect");
    email.classList.add("correct");
    pop.textContent = "Thank you for your response";
    pop.classList.add("vert");
    popIcon.classList.remove("addPop");
  } else {
    email.classList.add("incorrect");
    email.classList.remove("correct");
    pop.classList.remove("vert");

    popIcon.classList.add("addPop");
    pop.textContent = "Please Provide a valid email";
  }
}

btn.addEventListener("click", checkEmail);
