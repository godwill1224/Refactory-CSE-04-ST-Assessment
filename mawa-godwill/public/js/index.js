document.addEventListener("DOMContentLoaded", () => {
  // Getting the form
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    let isValid = true;

    // Getting form fields
    let fullName = document.getElementById("fullName");
    let gender = document.getElementById("gender");
    let dob = document.getElementById("dob");
    let nationality = document.getElementById("nationality");
    let phone = document.getElementById("phone");
    let email = document.getElementById("email");
    let emergencyPhone = document.getElementById("emergencyPhone");
    let passportNumber = document.getElementById("passportNumber");
    // let visa = document.getElementById("visa");
    let departureCity = document.getElementById("departureCity");
    let destinationCity = document.getElementById("destinationCity");

    // Getting error message elements
    let fullNameError = document.getElementById("fullNameError");
    let genderError = document.getElementById("genderError");
    let dobError = document.getElementById("dobError");
    let nationalityError = document.getElementById("nationalityError");
    let phoneError = document.getElementById("phoneError");
    let emailError = document.getElementById("emailError");
    let emergencyPhoneError = document.getElementById("emergencyPhoneError");
    let passportNumberError = document.getElementById("passportNumberError");
    // let visaError = document.getElementById("visaError");
    let departureCityError = document.getElementById("departureCityError");
    let destinationCityError = document.getElementById("destinationCityError");

    // Getting submit message
    let submitMessage = document.getElementById("success-msg");

    if (fullName.value.trim() === "") {
      fullNameError.style.display = "inline";
      isValid = false;
    }

    if (gender.value.trim() === "") {
      genderError.style.display = "inline";
      isValid = false;
    }

    if (dob.value.trim() === "") {
      dobError.style.display = "inline";
      isValid = false;
    }

    if (nationality.value.trim() === "") {
      nationalityError.style.display = "inline";
      isValid = false;
    }

    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone.value.trim()) || phone.value.trim() === "") {
      phoneError.style.display = "inline";
      isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim()) || email.value.trim() === "") {
      emailError.style.display = "inline";
      isValid = false;
    }

    if (emergencyPhone.value.trim() === "") {
      emergencyPhoneError.style.display = "inline";
      isValid = false;
    }

    if (passportNumber.value.trim() === "") {
      passportNumberError.style.display = "inline";
      isValid = false;
    }

    // if (visa.value.trim() === "") {
    //   visaError.style.display = "inline";
    //   isValid = false;
    // }

    if (departureCity.value.trim() === "") {
      departureCityError.style.display = "inline";
      isValid = false;
    }

    if (destinationCity.value.trim() === "") {
      destinationCityError.style.display = "inline";
      isValid = false;
    }

    if (!isValid) {
      event.preventDefault();
    } else {
      submitMessage.style.display = "inline";

      // Reset form
      form.reset();

      // Reset error messages
      submitMessage.style.display = "none";
      fullNameError.style.display = "none";
      genderError.style.display = "none";
      dobError.style.display = "none";
      nationalityError.style.display = "none";
      phoneError.style.display = "none";
      emailError.style.display = "none";
      emergencyPhoneError.style.display = "none";
      passportNumberError.style.display = "none";
      // visaError.style.display = "none";
      departureCityError.style.display = "none";
      destinationCityError.style.display = "none";
    }
    
  });
});
