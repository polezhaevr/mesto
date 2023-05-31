export const initialCards = [{
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
];

export const configValidation = {
    inputSelector: '.popup__input-text',
    submitButtonSelector: '.popup__btn-save-edit',
    inactiveButtonClass: 'popup__btn-save-edit_disabled',
    inputErrorClass: 'popup__input-text_type_error',
    errorClass: 'popup__input-error_active'
};

export const editButton = document.querySelector('.profile__btn-edit');
export const popupProfile = '.popup_profile';
export const photoPostList = '.photo-post__list';
export const profileBtnPicAdd = document.querySelector('.profile__btn-pic-add');
export const nameInput = document.querySelector('.popup__input-text_insert_nameinput');
export const jobInput = document.querySelector('.popup__input-text_insert_jobinput');
export const formValidProf = document.querySelector('.popup__edit-form');
export const formValidCard = document.querySelector('.popup__edit-form_add');
export const formValidAvatar = document.querySelector('.popup__edit-avatar');
export const profileImgAvatar = document.querySelector('.profile__img-avatar');
export const popupUpdateAvatar = '.popup_update-avatar';
export const popupOpen = '.popup_open-img';
export const popupOpenFormAddCard = '.popup_add';
export const popupDelete = '.popup_delete';

export const  apiToken =  {
    url: 'https://mesto.nomoreparties.co/v1/cohort-66',
    headers: {
        authorization: 'fddca936-00b0-4ef4-8880-e5be0a3a842e',
        'Content-Type': 'application/json'
    }
};
