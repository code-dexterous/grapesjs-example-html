function validatForm(e) {
  'use strict';
  e.preventDefault();
  const forms = document.getElementById('create-page');
  if (!forms.checkValidity()) {
    event.preventDefault();
    event.stopPropagation();
    forms.classList.add('was-validated');
    return false;
  }

  return submitForm();
}

function submitForm() {
  const nameField = document.getElementById('name');
  const nameFieldValue = nameField.value;
  axios
    .post('/pages/', { name: nameFieldValue })
    .then((response) => {
      alert(`Page ${nameFieldValue} created successfully`);
      window.location.href = '/';
    })
    .catch((err) => {
      alert('Failed: Page not created');
    });
  clearForm();
  return true;
}

function clearForm() {
  /**
   * Get name field and reset it's value
   */
  const nameField = document.getElementById('name');
  nameField.value = '';
  /**
   * Remove was-validated class from Form
   */
  const forms = document.getElementById('create-page');
  forms.classList.remove('was-validated');
}
