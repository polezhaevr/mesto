//enableValidation({
//formSelector: '.popup__edit-form',
//inputSelector: '.popup__input-text',
//submitButtonSelector: '.popup__btn-save-edit',
//inactiveButtonClass: 'popup__btn-save-edit_disabled',
//inputErrorClass: 'popup__input-text_type_error',
//errorClass: 'popup__error_text_visible'
//});


const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add('popup__input-text_type_error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('popup__input-error_active');
};

const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove('popup__input-text_type_error');
    errorElement.classList.remove('popup__input-error_active');
    errorElement.textContent = "";
};

// Функция, которая проверяет валидность поля
const isValid = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
        hideInputError(formElement, inputElement);
    }
};

const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll('.popup__input-text'));
    const buttonElement = formElement.querySelector('.popup__btn-save-edit');
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            isValid(formElement, inputElement);
            toggleButtonState(inputList, buttonElement);
        });
    });
};

function enableValidation() {
    formList = Array.from(document.querySelectorAll('.popup__edit-form'));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });

        setEventListeners(formElement);
    });
};

enableValidation()

function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
      });
}

function toggleButtonState (inputList , buttonElement) {
    if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('popup__btn-save-edit_disabled');
    buttonElement.setAttribute('disabled', 'disabled');
  } else {
    buttonElement.classList.remove('popup__btn-save-edit_disabled');
    buttonElement.removeAttribute('disabled', 'disabled');
  } 
  };


// const enableValidation = () => {
//     form.addEventListener('submit', (evt) => {
//         evt.preventDefault();
//     });

//     setEventsListener(form);
// };


// const setEventsListener = (formValidate) => {
//     const formInputs = Array.from(formValidate.querySelectorAll('.popup__input-text'));
//     formInputs.forEach(input => {
//         input.addEventListener('input' , () => {
//             checkInputValidity(input);
//         });
//     });
// };


// enableValidation();