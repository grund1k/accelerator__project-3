import {sendData} from '../utils/api';

const userNameInput = document.querySelector('#user-name');
const userTelephoneInput = document.querySelector('#user-telephone');
const form = document.querySelector('#form');

const TELEPHONE_REGEX = /(^8|7|\+7)((\d{10})|(\s\(\d{3}\)\s\d{3}\s\d{2}\s\d{2}))/;
const TIMEOUT_FOR_VALIDATION = 5000;

const validateNameInput = (element) => {
  if (element.value === '') {
    element.setCustomValidity('Пожалуйста, введите имя');
  } else {
    element.setCustomValidity('');
  }

  element.reportValidity();
};

const validateTelephoneInput = (element) => {
  if (element.value === '') {
    element.setCustomValidity('Пожалуйста, введите номер телефона');
  } else if (!TELEPHONE_REGEX.test(element.value)) {
    element.setCustomValidity('Пожалуйста, проверьте корректность набранного номера');
  } else {
    element.setCustomValidity('');
  }

  element.reportValidity();
};

const addValidationListeners = () => {
  if (userNameInput) {
    userNameInput.addEventListener('input', () => {
      validateNameInput(userNameInput);
    });
  }

  if (userTelephoneInput) {
    userTelephoneInput.addEventListener('input', () => {
      validateTelephoneInput(userTelephoneInput);
    });
  }
};

const showLoadAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 10000;
  alertContainer.style.position = 'fixed';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.color = 'red';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'white';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, TIMEOUT_FOR_VALIDATION);
};

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  sendData(
      () => showLoadAlert('Форма успешно отправлена'),
      () => showLoadAlert('Проверьте форму'),
      new FormData(evt.target)
  );
});

export {addValidationListeners};
