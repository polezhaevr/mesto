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
    UserInfo
} from "../components/UserInfo.js";

import {
    initialCards,
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
    popupOpenFormAddCard
} from '../utils/constants.js';


//Экземпляр валидации формы редактирования профиля 
const formValidatorProfile = new FormValidator(configValidation, formValidProf);
formValidatorProfile.enableValidation();
//Экземпляр валидации формы добавления карточки
const formValidatorAddCard = new FormValidator(configValidation, formValidCard);
formValidatorAddCard.enableValidation();

//Экземпляр данных пользователя
const newUser = new UserInfo({
    profileName: '.profile__name-title',
    profileDescription: '.profile__text'
});

//Создание экземпляра формы редактрования профиля
const popupEditProfile = new PopupWithForm(popupProfile, {
    handlerFormSubmit: (data) => {
        newUser.setUserInfo(data);
        popupEditProfile.close();
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

//Открытие фотографии карточки в полный размер
const openPopupFullScreenImage = new PopupWithImage(popupOpen);
openPopupFullScreenImage.setEventListeners();

//Отрисовка и даобавление карточек из массива initialCards 
const cardsList = new Section({
    items: initialCards,
    renderer: (items) => {
        const card = newCard(items);
        cardsList.addItem(card);
    }
}, photoPostList);

//Экземпляр новой карточки
const newCard = (data) => {
    const card = new Card('.photo-post-template', data, {
        handleCardClick: () => {
            openPopupFullScreenImage.open(data.name, data.link);
        }
    });

    return card.generateCard();
};

cardsList.renderer();

//Создание экземпляра формы добавления карточки
const addNewCard = new PopupWithForm(popupOpenFormAddCard, {
    handlerFormSubmit: (data) => {
        const card = newCard(data);
        cardsList.addItem(card);
        addNewCard.close();
    }
});

addNewCard.setEventListeners();

//Открытие формы добавления картинки
profileBtnPicAdd.addEventListener('click', function () {
    addNewCard.open();
    formValidatorProfile.resetValidation();
    formValidatorProfile.toggleButtonState();
});