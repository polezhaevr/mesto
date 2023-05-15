export class Card {
    constructor(templateSelector, data , handleCardClick) {
        this._templateSelector = templateSelector;
        this._name = data.name;
        this._link = data.link;

        this._handleCardClick = handleCardClick;
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
        this._btnLike.classList.toggle('photo-post__btn-like_focus');
    }

    _setEventListeners() {
        this._btnLike = this._element.querySelector('.photo-post__btn-like');

        this._element.querySelector('.photo-post__btn-trash').addEventListener('click', () => {
            this._deleteCard();
        });

        this._btnLike.addEventListener('click', () => {
            this._addLikeCard();
        });

        this._element.querySelector('.photo-post__image').addEventListener('click', () => {
            this._handleCardClick(this._name, this._link);
        });
    }
}
