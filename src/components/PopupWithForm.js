import { Popup } from "./Popup";

export class PopupWithForm extends Popup {
    constructor(popupSelector, { handlerFormSubmit }) {
        super(popupSelector);
        this._handlerFormSubmit = handlerFormSubmit;
        this._formElement = Array.from(this._popupSelector.querySelector('.popup__edit-form'));
        this._popupInputTextList = this._popupSelector.querySelector('.popup__input-text');
    }

    _getInputValues() {
        this._formValues = {};
        this._popupInputTextList.forEach(input => {
            this._formValues[input.name] = input.value;
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