import './index.css';


import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';

import Section from '../components/Section.js';
import {PopupWithForm} from "../components/PopupWithForm.js";
import {PopupWithImage} from "../components/PopupWithImage.js";
import {UserInfo} from "../components/UserInfo.js";
import {Popup} from "../components/Popup.js";


import {
    initialCards, configValidation, editButton,
    popupProfile, popupAdd, closePopupBtn, opupBtnCloseAdd, formElement, photoPostList, profileBtnPicAdd,
    popupEditFormAdd, popupBtnCloseOpenImg, popupOpenImg, nameInput,
    jobInput, popupInputTextInsertNameInput, popupInputTextInsertLinkInput,
    nameTitle, profileText, popupOpenedImg, popupOpenedImgText, popup,
    popupBtnSaveEdit, formValidProf, formValidCard

} from '../utils/constants.js';


//Экземпляр валидации формы редактирования профиля 
const formValidatorProfile = new FormValidator(configValidation, formValidProf);
formValidatorProfile.enableValidation();
//Экземпляр валидации добавления карточки
const formValidatorAddCard = new FormValidator(configValidation, formValidCard);
formValidatorAddCard.enableValidation();


//Открытие формы редактирования
editButton.addEventListener('click', function () {
    const openPopup = new Popup(popupProfile);
    openPopup.open();
    openPopup.setEventListeners();
    formValidatorProfile.resetValidation();
    formValidatorProfile.toggleButtonState();
});


// Закрытие форм
closePopupBtn.addEventListener('click' , function() {
    const closePopup = new Popup(popupProfile);
    closePopup.close();
});





/*
export function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closePressEsc);
};

editButton.addEventListener('click', popup => {
    openPopup(popupProfile)
    formValidatorProfile.resetValidation();
    formValidatorProfile.toggleButtonState();
    nameInput.value = nameTitle.textContent;
    jobInput.value = profileText.textContent;
});

profileBtnPicAdd.addEventListener('click', popup => {
    openPopup(popupAdd);
    formValidatorAddCard.resetValidation();
    formValidatorAddCard.toggleButtonState();
    popupInputTextInsertLinkInput.value = "";
    popupInputTextInsertNameInput.value = "";
});

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePressEsc);
};

closePopupBtn.addEventListener('click', popup => {
    closePopup(popupProfile);
    formValidatorProfile.resetValidation();

});
popupBtnCloseAdd.addEventListener('click', popup => closePopup(popupAdd));
popupBtnCloseOpenImg.addEventListener('click', popup => closePopup(popupOpenImg));

function handlerFormSubmit(evt) {
    evt.preventDefault();

    const editName = nameInput.value;
    const editJob = jobInput.value;

    nameTitle.textContent = editName;
    profileText.textContent = editJob;

    closePopup(popupProfile);
};

formElement.addEventListener('submit', handlerFormSubmit);

function closePressEsc(evt) {
    if (evt.key === 'Escape') {
        const popupOpened = document.querySelector('.popup_opened');
        closePopup(popupOpened);
    }
};

popupProfile.addEventListener("click", (evt) => {
    if (evt.currentTarget === evt.target) {
        closePopup(popupProfile);
    }
});

popupAdd.addEventListener("click", (evt) => {
    if (evt.currentTarget === evt.target) {
        closePopup(popupAdd);
    }
});
popupOpenImg.addEventListener("click", (evt) => {
    if (evt.currentTarget === evt.target) {
        closePopup(popupOpenImg);
    }
});
*/


//Орисовка и даобавление карточек из массива initialCards
const cardsList = new Section({
    items: initialCards,
    renderer: (item) => {
        const card = new Card('.photo-post-template', item);
        const cardElement = card.generateCard();

        cardsList.addItem(cardElement);
    }
}, photoPostList);

cardsList.renderer();

//Добавление карточки при нажатии на форму
function createPostItemFormSubmit(evt) {
    evt.preventDefault();

    const item = [{
        name: popupInputTextInsertNameInput.value,
        link: popupInputTextInsertLinkInput.value
}];

    const addCard = new Section ({
        items: item, 
        renderer: (item) => {
            const card = new Card('.photo-post-template', item);
            const cardElement = card.generateCard();
    
            cardsList.addItem(cardElement);
        }
    }, photoPostList);
    closePopup(popupAdd);

    addCard.renderer();

    popupInputTextInsertLinkInput.value = "";
    popupInputTextInsertNameInput.value = "";
};

popupEditFormAdd.addEventListener('submit', createPostItemFormSubmit);









