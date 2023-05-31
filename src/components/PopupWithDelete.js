import { Popup } from "./Popup";

export class PopupWithDelete extends Popup {
    constructor(popupSelector, { handleSubmit }) {
        super(popupSelector);
        this._setEvent = this._setEvent.bind(this);
        this._handleSubmit = handleSubmit;
    }

    handleSubmitConfirm(submitConfirm) {
        this._handleSubmit = submitConfirm;
    }

    _setEvent(evt) {
        evt.preventDefault();
        this._handleSubmit();
    }

    open() {
        super.open();
        this._popup.addEventListener('submit', this._setEvent);
    }

    close() {
        super.close();
        this._popup.removeEventListener('submit', this._setEvent);
    }
}