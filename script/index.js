import { Card } from './Card.js'
import { FormValidator } from './FormValidator.js'


const initialCards = [{
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
},
{
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
},
{
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
},
{
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
},
{
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
},
{
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
}
],

    configValidation = {
        inputSelector: '.popup__input-text',
        submitButtonSelector: '.popup__btn-save-edit',
        inactiveButtonClass: 'popup__btn-save-edit_disabled',
        inputErrorClass: 'popup__input-text_type_error',
        errorClass: 'popup__input-error_active'
    },
    content = document.querySelector('.content'),
    editButton = content.querySelector('.profile__btn-edit'),
    popupProfile = document.querySelector('.popup_profile'),
    popupAdd = document.querySelector('.popup_add'),
    closePopupBtn = popupProfile.querySelector('.popup__btn-close'),
    popupBtnCloseAdd = document.querySelector('.popup__btn-close_add'),
    formElement = popupProfile.querySelector('.popup__edit-form'),
    photoPostList = document.querySelector('.photo-post__list'),
    profileBtnPicAdd = document.querySelector('.profile__btn-pic-add'),
    popupEditFormAdd = document.querySelector('.popup__edit-form_add'),
    popupBtnCloseOpenImg = document.querySelector('.popup__btn-close_open-img'),
    popupOpenImg = document.querySelector('.popup_open-img'),
    nameInput = popupProfile.querySelector('.popup__input-text_insert_nameinput'),
    jobInput = popupProfile.querySelector('.popup__input-text_insert_jobinput'),
    popupInputTextInsertNameInput = document.querySelector('.popup__input-text_insert_textinput'),
    popupInputTextInsertLinkInput = document.querySelector('.popup__input-text_insert_linkinput'),
    nameTitle = document.querySelector('.profile__name-title'),
    profileText = document.querySelector('.profile__text'),
    popupOpenedImg = document.querySelector('.popup__opened-img'),
    popupOpenedImgText = document.querySelector('.popup__opened-img-text'),
    popup = document.querySelector('.popup'),
    popupBtnSaveEdit = document.querySelector('.popup__btn-save-edit_create'),
    formValidProf = document.querySelector('.popup__edit-form'),
    formValidCard = document.querySelector('.popup__edit-form_add');

const formValidatorProfile = new FormValidator(configValidation, formValidProf);
formValidatorProfile.enableValidation();

const formValidatorAddCard = new FormValidator(configValidation, formValidCard);
formValidatorAddCard.enableValidation();

export { popupOpenImg, popupOpenedImg, popupOpenedImgText };

export function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closePressEsc);
};

editButton.addEventListener('click', popup => {
    openPopup(popupProfile);
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

function createCard(item) {
    const card = new Card('.photo-post-template', item);
    const cardElement = card.generateCard();
    return cardElement
}

function renderCard(item) {
    const photoPostItem = createCard(item);
    photoPostList.prepend(photoPostItem);
};

function insert() {
    initialCards.forEach(renderCard);
}

function createPostItemFormSubmit(evt) {
    evt.preventDefault();

    const item = {
        name: popupInputTextInsertNameInput.value,
        link: popupInputTextInsertLinkInput.value
    };

    renderCard(item);
    closePopup(popupAdd);

    popupInputTextInsertLinkInput.value = "";
    popupInputTextInsertNameInput.value = "";
};

popupEditFormAdd.addEventListener('submit', createPostItemFormSubmit);

insert(); 