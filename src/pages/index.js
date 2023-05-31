import './index.css';

import {
    Card
} from '../components/Card.js';
import {
    FormValidator
} from '../components/FormValidator.js';

import Section from '../components/Section.js';
import {
    PopupWithForm
} from "../components/PopupWithForm.js";
import {
    PopupWithImage
} from "../components/PopupWithImage.js";
import {
    PopupWithDelete
} from "../components/PopupWithDelete.js";
import {
    UserInfo
} from "../components/UserInfo.js";
import {
    Api
} from "../components/Api.js";

import {
    configValidation,
    editButton,
    popupProfile,
    photoPostList,
    profileBtnPicAdd,
    nameInput,
    jobInput,
    formValidProf,
    formValidCard,
    popupOpen,
    popupOpenFormAddCard,
    formValidAvatar,
    profileImgAvatar,
    popupUpdateAvatar,
    popupDelete
} from '../utils/constants.js';
import {
    apiToken
} from "../utils/constants";

//Экземпляр валидации формы редактирования профиля 
const formValidatorProfile = new FormValidator(configValidation, formValidProf);
formValidatorProfile.enableValidation();
//Экземпляр валидации формы добавления карточки
const formValidatorAddCard = new FormValidator(configValidation, formValidCard);
formValidatorAddCard.enableValidation();
//Экземпляр валидации формы изменения аватара
const formValidatorEditAvatar = new FormValidator(configValidation, formValidAvatar);
formValidatorEditAvatar.enableValidation();
const api = new Api(apiToken);

let userId;

Promise.all([api.getUserInfo(), api.getInitialCards()])
    .then(([userData, data]) => {
        userId = userData._id;
            
        newUser.setUserInfo(userData);
        newUser.setUserAvatar(userData);
       
        cardsList.allRenderer(data , userId);        
    })
    .catch((err) => {
        console.log(err);
    })

//Отрисовка и даобавление карточек из api
const cardsList = new Section({
    items: [],
    renderer: (items , user) => {
        const card = newCard(items , user);
        cardsList.addItem(card);
    }
}, photoPostList);

//Экземпляр данных пользователя
const newUser = new UserInfo({
    profileName: '.profile__name-title',
    profileDescription: '.profile__text',
    profileAvatar: '.profile__img-avatar'
});

//Создание экземпляра формы редактрования профиля
const popupEditProfile = new PopupWithForm(popupProfile, {
    handlerFormSubmit: (data) => {
        popupEditProfile.saveStatus(true);
        api.editUserInfo(data)
            .then((res) => {
                newUser.setUserInfo(res);
                popupEditProfile.close();
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                popupEditProfile.saveStatus(false);
            })
        console.log(data);
    }
});

popupEditProfile.setEventListeners();

//Заполнение инпутов формы редактирования
function editProfile() {
    const userData = newUser.getUserInfo();
    nameInput.value = userData.userName;
    jobInput.value = userData.userInfo;

}

//Открытие формы редактирования
editButton.addEventListener('click', function () {
    popupEditProfile.open();
    editProfile();
    formValidatorProfile.resetValidation();
    formValidatorProfile.toggleButtonState();
});

//Экземпляр формы редактирования аватара
const popupOpenNewAvatar = new PopupWithForm(popupUpdateAvatar, {
    handlerFormSubmit: (data) => {
        popupOpenNewAvatar.saveStatus(true);
        api.updateAvatar(data)
            .then((res) => {
                newUser.setUserAvatar(res);
                popupOpenNewAvatar.close();
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                popupOpenNewAvatar.saveStatus(false);
            })
        console.log(data);
    }
});

popupOpenNewAvatar.setEventListeners();

//Открытие формы редактирования аватара
profileImgAvatar.addEventListener('click', () => {
    popupOpenNewAvatar.open();
    formValidatorEditAvatar.toggleButtonState();
    formValidatorEditAvatar.resetValidation();

});

//Открытие фотографии карточки в полный размер
const openPopupFullScreenImage = new PopupWithImage(popupOpen);
openPopupFullScreenImage.setEventListeners();

//Экземпляр формы потверждения удалнеия карточки
const popupOpenDeleteCard = new PopupWithDelete(popupDelete, {
    handleSubmit: (data) => {
        api.deleteCard(data)
            .then(() => {
                popupOpenDeleteCard.close();
            })
            .catch((err) => {
                console.log(err);
            })
    }
});

popupOpenDeleteCard.setEventListeners();

//Экземпляр новой карточки
const newCard = (data , user) => {
    const card = new Card('.photo-post-template', {
        data: data,
        userId: user,
        handleCardClick: () => {
            openPopupFullScreenImage.open(data.name, data.link);
        },

        handleDeleteClick: () => {
            popupOpenDeleteCard.open();
            popupOpenDeleteCard.handleSubmitConfirm(() => {
                api.deleteCard(card._id)
                    .then(() => {
                        card.deleteCard();
                        popupOpenDeleteCard.close();
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            });
        },

        handleLikeCard: () => {
            if (card.liked()) {
                api.deleteLike(card._id)
                    .then((data) => {
                        card.deleteLikeCard();
                        card.setLike(data.likes);
                    })
                    .catch((err) => {
                        console.log(err);
                    })

            } else {
                api.setLike(card._id)
                    .then((data) => {
                        card.addLikeCard();
                        card.setLike(data.likes);
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            }
        }

    });

    return card.generateCard();
};

//Создание экземпляра формы добавления карточки
const addNewCard = new PopupWithForm(popupOpenFormAddCard, {
    handlerFormSubmit: (data) => {
        addNewCard.saveStatus(true);
        api.addCard(data)
            .then((data) => {
                const card = newCard(data);
                cardsList.addItem(card);
                addNewCard.close();
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                addNewCard.saveStatus(false);
            })
    }
});

addNewCard.setEventListeners();

//Открытие формы добавления картинки
profileBtnPicAdd.addEventListener('click', function () {
    addNewCard.open();
    formValidatorProfile.resetValidation();
    formValidatorProfile.toggleButtonState();
});

