const form = document.querySelector('.feedback-form');
const formData = { email: '', message: '' };
const storageFormKey = 'feedback-form-state';

const storageItem = window.localStorage.getItem(storageFormKey);
if (storageItem !== null) {
  form.elements.email.value = JSON.parse(storageItem).email ?? '';
  form.elements.message.value = JSON.parse(storageItem).message ?? '';
}

function handleInput(event) {
  let response = localStorage.getItem(storageFormKey);
  let formData;
  if (response) {
    formData = JSON.parse(response);
  } else {
    formData = {};
  }
  if (event.target.name === 'email') {
    formData.email = event.target.value;
  } else if (event.target.name === 'message') {
    formData.message = event.target.value;
  }
  localStorage.setItem(storageFormKey, JSON.stringify(formData));
}

form.addEventListener('input', handleInput);

function handleForm(event) {
  event.preventDefault();
  if (
    event.currentTarget.elements.email.value === '' ||
    event.currentTarget.elements.message.value === ''
  ) {
    alert('Fill please all fields');
    return;
  }

  formData.email = event.currentTarget.elements.email.value;
  formData.message = event.currentTarget.elements.message.value;
  console.log(formData);
  window.localStorage.clear();
  event.currentTarget.reset();
  formData.email = '';
  formData.message = '';
}

form.addEventListener('submit', handleForm);
