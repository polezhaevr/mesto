import {
    Popup
} from "./Popup";

export class PopupWithForm extends Popup {
    constructor(popupSelector, {
        handlerFormSubmit
    }) {
        super(popupSelector);
        this._handlerFormSubmit = handlerFormSubmit;
        this._formElement = this._popup.querySelector('.popup__edit-form');
        this._popupInputTextList = Array.from(this._formElement.querySelectorAll('.popup__input-text'));
        this._buttonSubmit = this._formElement.querySelector('.popup__btn-progress-status');
        this._buttonSubmitText = this._buttonSubmit.textContent;
    }

    _getInputValues() {
        this._formValues = {};
        this._popupInputTextList.forEach((item) => {
            this._formValues[item.name] = item.value;
        });
        return this._formValues;
    }

    setEventListeners() {
        super.setEventListeners();
        this._formElement.addEventListener('submit', () => {
            this._handlerFormSubmit(this._getInputValues());
        });
    }

    saveStatus(save) {
        if (save) {
            this._buttonSubmit.textContent = 'Сохранение...';
        } else {
            this._buttonSubmit.textContent = this._buttonSubmitText;
        }
    }

    close() {
        super.close();
        this._formElement.reset();
    }

}