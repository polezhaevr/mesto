const configValidation = { 
formSelector: '.popup__edit-form',
inputSelector: '.popup__input-text',
submitButtonSelector: '.popup__btn-save-edit',
inactiveButtonClass: 'popup__btn-save-edit_disabled',
inputErrorClass: 'popup__input-text_type_error',
errorClass: 'popup__input-error_active'
};

function enableValidation({formSelector , ...rest}) {
    formList = Array.from(document.querySelectorAll(formSelector));

    
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });

        setEventListeners(formElement , rest);
    });
};

const showInputError = (formElement, inputElement, errorMessage , {inputErrorClass , errorClass} ) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClass);
};

const hideInputError = (formElement, inputElement, {inputErrorClass , errorClass} ) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClass);
    errorElement.textContent = "";
};

const isValid = (formElement, inputElement , {...rest}) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage , rest);
    } else {
        hideInputError(formElement, inputElement , rest);
    }
};

const setEventListeners = (formElement , {inputSelector , submitButtonSelector , ...rest}) => {
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(submitButtonSelector);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            isValid(formElement, inputElement , rest);
            toggleButtonState(inputList, buttonElement , rest);
        });
    });
};

function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
      });
}

function toggleButtonState (inputList , buttonElement , {inactiveButtonClass}) {
    if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(inactiveButtonClass);
    buttonElement.setAttribute('disabled', 'disabled');
  } else {
    buttonElement.classList.remove(inactiveButtonClass);
    buttonElement.removeAttribute('disabled', 'disabled');
  } 
  };

  enableValidation(configValidation);