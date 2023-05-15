//Массив с дефеолтными карточками
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

//Массив с селекаторами для валидации форм
export const configValidation = {
    inputSelector: '.popup__input-text',
    submitButtonSelector: '.popup__btn-save-edit',
    inactiveButtonClass: 'popup__btn-save-edit_disabled',
    inputErrorClass: 'popup__input-text_type_error',
    errorClass: 'popup__input-error_active'
};


export const editButton = document.querySelector('.profile__btn-edit');
export const popupProfile = document.querySelector('.popup_profile');
export const popupAdd = document.querySelector('.popup_add');
export const closePopupBtn = document.querySelector('.popup__btn-close');


export const popupBtnCloseAdd = document.querySelector('.popup__btn-close_add');


export const formElement = document.querySelector('.popup__edit-form');

/* Через document.querySelector отказывается работать вебпак выдает ошибку:
https://disk.yandex.ru/i/wmWbd1fj9Y5y6g   
В Пачке мне так никто и не помог*/
export const photoPostList = '.photo-post__list';


export const profileBtnPicAdd = document.querySelector('.profile__btn-pic-add');
export const popupEditFormAdd = document.querySelector('.popup__edit-form_add');
export const popupBtnCloseOpenImg = document.querySelector('.popup__btn-close_open-img');
export const popupOpenImg = document.querySelector('.popup_open-img');
export const nameInput = document.querySelector('.popup__input-text_insert_nameinput');
export const jobInput = document.querySelector('.popup__input-text_insert_jobinput');
export const popupInputTextInsertNameInput = document.querySelector('.popup__input-text_insert_textinput');
export const popupInputTextInsertLinkInput = document.querySelector('.popup__input-text_insert_linkinput');
export const nameTitle = document.querySelector('.profile__name-title');
export const profileText = document.querySelector('.profile__text');


export const popup = document.querySelector('.popup');
export const formValidProf = document.querySelector('.popup__edit-form');
export const formValidCard = document.querySelector('.popup__edit-form_add');