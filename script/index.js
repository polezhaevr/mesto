let content = document.querySelector('.content'),
    editButton = content.querySelector('.profile__btn-edit'),
    popup = document.querySelector('.popup'),
    popupAdd = document.querySelector('.popup_add'),
    closePopupBtn = popup.querySelector('.popup__btn-close'),
    popupBtnCloseAdd = document.querySelector('.popup__btn-close_add'),
    formElement = popup.querySelector('.popup__edit-form'),
    nameInput = popup.querySelector('.popup__input-text_insert_nameinput'),
    jobInput = popup.querySelector('.popup__input-text_insert_jobinput'),
    nameTitle = document.querySelector('.profile__name-title'),
    profileText = document.querySelector('.profile__text'),
    photoPostList = document.querySelector('.photo-post__list'),
    photoPostTemplate = document.querySelector('#photo-post-template').content,
    profileBtnPicAdd = document.querySelector('.profile__btn-pic-add'),
    popupBtnSaveEditCreate = document.querySelector('.popup__btn-save-edit_create'),
    popupInputTextInsertNameInput = document.querySelector('.popup__input-text_insert_textinput'),
    popupInputTextInsertLinkInput = document.querySelector('.popup__input-text_insert_linkinput'),
    popupOpenImg = document.querySelector('.popup_open-img'),
    popupOpenedImg = document.querySelector('.popup__opened-img'),
    popupOpenedImgText = document.querySelector('.popup__opened-img-text'),
    popupBtnCloseOpenImg = document.querySelector('.popup__btn-close_open-img');
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
];


function popupEditOpen() {
    popup.classList.add('popup_opened');
}

function popupAddOpen() {
    popupAdd.classList.add('popup_opened');
}

function popupEditClose() {
    popup.classList.remove('popup_opened');
    nameInput.value = nameTitle.textContent;
    jobInput.value = profileText.textContent;
}

function popupAddCLose() {
    popupAdd.classList.remove('popup_opened');
    popupInputTextInsertLinkInput.value = "";
    popupInputTextInsertNameInput.value = "";
}

function popupOpenImgClose() {
    popupOpenImg.classList.remove('popup_opened');
}


function handlerFormSubmit(evt) {
    evt.preventDefault();

    let editName = nameInput.value;
    let editJob = jobInput.value;

    nameTitle.textContent = editName;
    profileText.textContent = editJob;

    popupEditClose();
}


formElement.addEventListener('submit', handlerFormSubmit);
editButton.addEventListener('click', popupEditOpen);
profileBtnPicAdd.addEventListener('click', popupAddOpen);
closePopupBtn.addEventListener('click', popupEditClose);
popupBtnCloseAdd.addEventListener('click', popupAddCLose);
popupBtnCloseOpenImg.addEventListener('click', popupOpenImgClose);



const initialCardsInfo = initialCards.map(item => {
    return {
        name: item.name,
        link: item.link
    };
});

function insert() {
    initialCardsInfo.forEach(inserPhotoItem);
};

function inserPhotoItem({
    name,
    link
}) {
    const photoPostItem = photoPostTemplate.querySelector('.photo-post__item').cloneNode(true);

    photoPostItem.querySelector('.photo-post__image').src = link;
    photoPostItem.querySelector('.photo-post__image').alt = 'Фотография ' + name;
    photoPostItem.querySelector('.photo-post__text').textContent = name;

    photoPostList.prepend(photoPostItem);

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

}

insert();

function createPostItemFormSubmit(evt) {
    evt.preventDefault();
    const photoPostItem = photoPostTemplate.querySelector('.photo-post__item').cloneNode(true);
    let addLink = popupInputTextInsertLinkInput.value;
    let addText = popupInputTextInsertNameInput.value;

    photoPostItem.querySelector('.photo-post__image').src = addLink;
    photoPostItem.querySelector('.photo-post__text').textContent = addText;
    photoPostItem.querySelector('.photo-post__image').alt = 'Фотография ' + addText;

    photoPostList.prepend(photoPostItem);
    photoPostItem.querySelector('.photo-post__btn-trash').addEventListener('click', function () {
        photoPostItem.remove();
    });

    photoPostItem.querySelector('.photo-post__btn-like').addEventListener('click', function () {
        photoPostItem.querySelector('.photo-post__btn-like').classList.toggle('photo-post__btn-like_focus');
    });

    photoPostItem.querySelector('.photo-post__image').addEventListener('click', function () {
        popupOpenImg.classList.add('popup_opened');
        popupOpenedImg.src = addLink;
        popupOpenedImg.alt = 'Фотография ' + addText;
        popupOpenedImgText.textContent = addText;

    });

    popupAddCLose();

}

popupBtnSaveEditCreate.addEventListener('click', createPostItemFormSubmit);