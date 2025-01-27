document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let formValid = true;

    // Validación del nombre
    const nameField = document.getElementById("name");
    const nameError = document.querySelector(".span-nombre");
    if (nameField.value.trim() === "") {
      nameError.style.display = "inline";
      formValid = false;
    } else {
      nameError.style.display = "none";
    }

    // Validación del email
    const emailField = document.getElementById("email");
    const emailError = document.querySelector(".span-email");
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    if (!emailPattern.test(emailField.value.trim())) {
      emailError.style.display = "inline";
      formValid = false;
    } else {
      emailError.style.display = "none";
    }

    // Validación del teléfono
    const phoneField = document.getElementById("phone");
    const phoneError = document.querySelector(".span-telefono");
    const phonePattern = /^\d{10}$/; // Exactamente 10 dígitos
    if (!phonePattern.test(phoneField.value.trim())) {
      phoneError.style.display = "inline";
      formValid = false;
    } else {
      phoneError.style.display = "none";
    }

    // Validación del mensaje
    const messageField = document.querySelector("textarea");
    const messageError = document.querySelector(".span-mensaje");
    if (messageField.value.trim() === "") {
      messageError.style.display = "inline";
      formValid = false;
    } else {
      messageError.style.display = "none";
    }

    // Mostrar los errores en la página si hay alguno
    if (!formValid) {
      const errorDiv = document.getElementById("form-result");
      const errorList = errorDiv.querySelector("ul");

      errors.forEach(function (error) {
        const li = document.createElement("li");
        li.textContent = error;
        errorList.appendChild(li);
      });
    } else {
      // Si es válido, mostrar los datos enviados usando createElement
      const formResult = document.getElementById("form-result");
      formResult.style.display = "block";
      formResult.innerHTML = "<h2>Datos enviados:</h2><ul></ul>";

      const resultList = formResult.querySelector("ul");

      const nameLi = document.createElement("li");
      nameLi.textContent = `Nombre: ${nameField.value}`;
      resultList.appendChild(nameLi);

      const emailLi = document.createElement("li");
      emailLi.textContent = `Email: ${emailField.value}`;
      resultList.appendChild(emailLi);

      const phoneLi = document.createElement("li");
      phoneLi.textContent = `Teléfono: ${phoneField.value}`;
      resultList.appendChild(phoneLi);

      const messageLi = document.createElement("li");
      messageLi.textContent = `Mensaje: ${messageField.value}`;
      resultList.appendChild(messageLi);

      // Limpiar los campos después de enviar el formulario
      document.getElementById("contact-form").reset();
    }
  });
