import {
    Popup
} from "./Popup";

export class PopupWithForm extends Popup {
    constructor(popupSelector, {
        handlerFormSubmit
    }) {
        super(popupSelector);
        this._handlerFormSubmit = handlerFormSubmit;
        this._formElement = this._popupSelector.querySelector('.popup__edit-form');
        this._popupInputTextList = Array.from(this._formElement.querySelectorAll('.popup__input-text'));
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

    close() {
        super.close();
        this._formElement.reset();
    }

}