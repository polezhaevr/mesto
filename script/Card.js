import { popupOpenImg, popupOpenedImg, popupOpenedImgText } from './index.js';
import { openPopup } from './index.js';

export class Card {
    constructor(templateSelector, data) {
        this._templateSelector = templateSelector;
        this._name = data.name;
        this._link = data.link;
    }

    _getTemplate() {
        const cardElement = document
            .querySelector(this._templateSelector)
            .content
            .querySelector('.photo-post__item')
            .cloneNode(true);

        return cardElement;
    }

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();

        this._element.querySelector('.photo-post__image').src = this._link;
        this._element.querySelector('.photo-post__image').alt = 'Фотография ' + this._name;
        this._element.querySelector('.photo-post__text').textContent = this._name;

        return this._element;
    }

    _deleteCard() {
        this._element.remove();
    }

    _addLikeCard() {
        this._element.querySelector('.photo-post__btn-like').classList.toggle('photo-post__btn-like_focus');
    }

    _openImageFullscreen() {
        openPopup(popupOpenImg);
        popupOpenedImg.src = this._link;
        popupOpenedImg.alt = 'Фотография ' + this._name;
        popupOpenedImgText.textContent = this._name;
    }

    _setEventListeners() {
        this._element.querySelector('.photo-post__btn-trash').addEventListener('click', () => {
            this._deleteCard();
        });

        this._element.querySelector('.photo-post__btn-like').addEventListener('click', () => {
            this._addLikeCard();
        });

        this._element.querySelector('.photo-post__image').addEventListener('click', () => {
            this._openImageFullscreen();
        });

    }
}
