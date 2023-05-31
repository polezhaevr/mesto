export class Api {
    constructor(options) {
        this._url = options.url;
        this._headers = options.headers;
    }


    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    //Загрузка карточек с сервера
    getInitialCards() {
        return fetch(`${this._url}/cards`, {
                headers: this._headers
            })
            .then((res) => this._checkResponse(res));
    }

    //Информация о пользователе
    getUserInfo() {
        return fetch(`${this._url}/users/me`, {
                headers: this._headers
            })
            .then((res) => this._checkResponse(res));
    }

    //Редактирование профиля
    editUserInfo(data) {
        return fetch(`${this._url}/users/me`, {
                method: 'PATCH',
                headers: this._headers,
                body: JSON.stringify({
                    name: data.name,
                    about: data.about
                })
            })
            .then((res) => this._checkResponse(res));
    }

    //Добавление новой карточки
    addCard(data) {
        return fetch(`${this._url}/cards`, {
                method: 'POST',
                headers: this._headers,
                body: JSON.stringify({
                    name: data.name,
                    link: data.link
                })
            })
            .then((res) => this._checkResponse(res));
    }

    //Удаление карточки
    deleteCard(cardID) {
        return fetch(`${this._url}/cards/${cardID}`, {
                method: 'DELETE',
                headers: this._headers
            })
            .then((res) => this._checkResponse(res));
    }

    //Постановка лайка
    setLike(cardID) {
        return fetch(`${this._url}/cards/${cardID}/likes`, {
                method: 'PUT',
                headers: this._headers
            })
            .then((res) => this._checkResponse(res));
    }

    //Снятие лайка
    deleteLike(cardID) {
        return fetch(`${this._url}/cards/${cardID}/likes`, {
                method: 'DELETE',
                headers: this._headers
            })
            .then((res) => this._checkResponse(res));
    }

    //Изменение аватара пользователя
    updateAvatar(data) {
        return fetch(`${this._url}/users/me/avatar`, {
                method: 'PATCH',
                headers: this._headers,
                body: JSON.stringify({
                    avatar: data.avatar,
                })
            })
            .then((res) => this._checkResponse(res));
    }

}