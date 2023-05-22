import {
    Popup
} from "./Popup";

export class PopupWithImage extends Popup {
    constructor(popupFullImageSelector) {
        super(popupFullImageSelector);
        this._popupOpenedImg = this._popup.querySelector('.popup__opened-img');
        this._popupOpenedImgText = this._popup.querySelector('.popup__opened-img-text');
    }

    open(name, link) {
        this._popupOpenedImg.src = link;
        this._popupOpenedImg.alt = 'Фотография ' + name;
        this._popupOpenedImgText.textContent = name;
        super.open();
    }
}