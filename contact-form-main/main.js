const form = document.querySelector("#contact-form");
const successMessage = document.querySelector(".success-message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const validateForm = () => {
    let isValid = true;
    const fname = document.getElementById("first-name").value.trim();
    const lname = document.getElementById("last-name").value.trim();
    const email = document.getElementById("email").value.trim();
    const QueryType = document.querySelector(
      "input[name='query-type']:checked"
    );
    const message = document.getElementById("message").value.trim();
    const consent = document.getElementById("consent").checked;
    const formAlert = document.querySelectorAll(".form-alert");

    console.log(consent);
    let EmailRegex = /^W[a-x]/;
    if (fname === "") {
      isValid = false;
      document.querySelector("#first-name + .form-alert").style.display =
        "block";
      document.querySelector("#first-name").style.border =
        "1px solid var(--Red)";
    } else {
      document.querySelector("#first-name + .form-alert").style.display =
        "none";
      document.querySelector("#first-name").style.border =
        "1px solid var(--medium-gray)";
    }
    if (lname === "") {
      formAlert[1].style.display = "block";
      isValid = false;
      document.querySelector("#last-name").style.border =
        "1px solid var(--Red)";
    } else {
      formAlert[1].style.display = "none";
      document.querySelector("#last-name").style.border =
        "1px solid var(--medium-gray)";
    }
    if (email === "") {
      isValid = false;
      formAlert[2].style.display = "block";
      isValid = false;
      document.querySelector("#email").style.border = "1px solid var(--Red)";
    }
    // else if (!EmailRegex.test(email)) {
    //   isValid = false;
    //   formAlert[2].style.display = "block";
    //   document.querySelector("#email").style.border = "1px solid var(--Red)";
    // }
    else {
      formAlert[2].style.display = "none";
      document.querySelector("#email").style.border =
        "1px solid var(--medium-gray)";
    }
    if (!QueryType) {
      isValid = false;
      formAlert[3].style.display = "block";
    } else {
      formAlert[3].style.display = "none";
    }
    if (message === "") {
      formAlert[4].style.display = "block";
      isValid = false;
      document.querySelector("#message").style.border = "1px solid var(--Red)";
    } else {
      formAlert[4].style.display = "none";
      document.querySelector("#message").style.border =
        "1px solid var(--medium-gray)";
    }
    if (!consent) {
      formAlert[5].style.display = "block";
      isValid = false;
    } else {
      formAlert[5].style.display = "none";
    }
    return isValid;
  };

  if (validateForm()) {
    successMessage.classList.add("active");
    form.reset();
  }
});
