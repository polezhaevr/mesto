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
    photoPostTemplate = document.querySelector('#photo-post-template').content,
    popupOpenedImg = document.querySelector('.popup__opened-img'),
    popupOpenedImgText = document.querySelector('.popup__opened-img-text');


function openPopup(popup) {
    popup.classList.add('popup_opened');
}

editButton.addEventListener('click', popup => openPopup(popupProfile));
profileBtnPicAdd.addEventListener('click', popup => openPopup(popupAdd));

function closePopup(popup) {
    popup.classList.remove('popup_opened');
}

closePopupBtn.addEventListener('click', popup => closePopup(popupProfile));
popupBtnCloseAdd.addEventListener('click', popup => closePopup(popupAdd));
popupBtnCloseOpenImg.addEventListener('click', popup => closePopup(popupOpenImg));

function handlerFormSubmit(evt) {
    evt.preventDefault();

    let editName = nameInput.value;
    let editJob = jobInput.value;

    nameTitle.textContent = editName;
    profileText.textContent = editJob;

    closePopup(popupProfile);
}

formElement.addEventListener('submit', handlerFormSubmit);

function createCard({
    name,
    link
})  {
    const photoPostItem = photoPostTemplate.querySelector('.photo-post__item').cloneNode(true); 
    photoPostItem.querySelector('.photo-post__image').src = link;
    photoPostItem.querySelector('.photo-post__image').alt = 'Фотография ' + name;
    photoPostItem.querySelector('.photo-post__text').textContent = name;


    photoPostItem.querySelector('.photo-post__btn-trash').addEventListener('click', function () {
        photoPostItem.remove();
    });

    photoPostItem.querySelector('.photo-post__btn-like').addEventListener('click', function () {
        photoPostItem.querySelector('.photo-post__btn-like').classList.toggle('photo-post__btn-like_focus');

    });

    photoPostItem.querySelector('.photo-post__image').addEventListener('click', function () {
        popupOpenImg.classList.add('popup_opened');
        popupOpenedImg.src = link;
        popupOpenedImg.alt = 'Фотография ' + name;
        popupOpenedImgText.textContent = name;

    });
    return photoPostItem; 
}


function renderCard(item) {
    const photoPostItem  = createCard(item); 
    photoPostList.prepend(photoPostItem);
  
};

function insert() {
    initialCards.forEach(renderCard);
};

insert();


function createPostItemFormSubmit(evt) {
    evt.preventDefault();

    const item = renderCard ({
        name: popupInputTextInsertNameInput.value,
        link: popupInputTextInsertLinkInput.value
    });

    renderCard(item);
    closePopup(popupAdd);

    popupInputTextInsertLinkInput.value = "";
    popupInputTextInsertNameInput.value = "";
}

popupEditFormAdd.addEventListener('submit', createPostItemFormSubmit);