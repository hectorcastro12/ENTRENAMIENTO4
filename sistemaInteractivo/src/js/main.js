function validateForm() {
    const nameInput = document.getElementById("name");
    const ageInput = document.getElementById("age");

    const name = nameInput.value.trim();
    const age = parseInt(ageInput.value.trim());

    const nameRegex = /^[A-Za-zÀ-ÿñÑ\s]+$/;

    let valid = true;

    // Reset styles
    nameInput.classList.remove("error");
    ageInput.classList.remove("error");

    // Validacion de nombre
    if (!nameRegex.test(name)) {
      nameInput.classList.add("error");
      Swal.fire({
        icon: 'error',
        title: 'Invalid Name',
        text: 'Name can only contain letters and spaces.',
      });
      valid = false;
    }

    // Validacion de edad
    else if (isNaN(age) || age <= 0) {
      ageInput.classList.add("error");
      Swal.fire({
        icon: 'error',
        title: 'Invalid Age',
        text: 'Please enter a valid positive number for age.',
      });
      valid = false;
    }

    // Mensaje Final
    if (valid) {
      if (age < 18) {
        Swal.fire({
          icon: 'info',
          title: `Hi ${name}!`,
          text: 'You are under age. ¡ keep learning and enjoying the code !',
        });
      } else {
        Swal.fire({
          icon: 'success',
          title: `Hi ${name}!`,
          text: 'You are of legal age. ¡ Prepare for great opportunities in the programming world !',
        });
      }
    }
}