export class Card {
    constructor(templateSelector, {
        handleCardClick,
        data,
        userId,
        handleDeleteClick,
        handleLikeCard
    }) {
        this._templateSelector = templateSelector;
        this._name = data.name;
        this._link = data.link;
        this._likes = data.likes;
        this._id = data._id;
        this._userIdOwner = data.owner._id;
        this._userId = userId;
        this._handleCardClick = handleCardClick;
        this._handleDeleteClick = handleDeleteClick;
        this._handleLikeCard = handleLikeCard;
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

        this._element.querySelector('.photo-post__image').src = this._link;
        this._element.querySelector('.photo-post__image').alt = 'Фотография ' + this._name;
        this._element.querySelector('.photo-post__text').textContent = this._name;

        this._countLikes = this._element.querySelector('.photo-post__count-likes');
        this._btnTrash = this._element.querySelector('.photo-post__btn-trash');
        this._btnLike = this._element.querySelector('.photo-post__btn-like');

        this._setEventListeners();
        this._hideDeleteButton();
        this.setLike(this._likes);
        this._checkLike();

        return this._element;
    }

    deleteCard = () => {
        this._element.remove();
        this._element = null;
    }

    _hideDeleteButton() {
        if (this._userId !== this._userIdOwner) {
            this._btnTrash.remove();
        }else {
            this._element.prepend(this._btnTrash);
        }
    }

    addLikeCard = () => {
        this._btnLike.classList.add('photo-post__btn-like_focus');
    }

    deleteLikeCard = () => {
        this._btnLike.classList.remove('photo-post__btn-like_focus');
    }

    liked() {
        return this._likes.find(user => user._id === this._userId);
    }

    _checkLike() {
        this.liked() ? this.addLikeCard() : this.deleteLikeCard();
    }

    setLike(data) {
        this._likes = data;
        this._countLikes.textContent = this._likes.length;
    }

    _setEventListeners() {
        this._btnLike = this._element.querySelector('.photo-post__btn-like');

        this._element.querySelector('.photo-post__btn-trash').addEventListener('click', () => {
            this._handleDeleteClick();
        });

        this._btnLike.addEventListener('click', () => {
            this._handleLikeCard();
        });

        this._element.querySelector('.photo-post__image').addEventListener('click', () => {
            this._handleCardClick(this._name, this._link);
        });
    }
}