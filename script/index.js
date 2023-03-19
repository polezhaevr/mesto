let content = document.querySelector('.content');
let editButton = content.querySelector('.profile__btn-edit');
let popup = document.querySelector('.popup');
let popupAdd = document.querySelector('.popup_add');
let closePopupBtn = popup.querySelector('.popup__btn-close');
let popupBtnCloseAdd = document.querySelector('.popup__btn-close_add');
let formElement = popup.querySelector('.popup__edit-form');
let nameInput = popup.querySelector('.popup__input-text_insert_nameinput');
let jobInput = popup.querySelector('.popup__input-text_insert_jobinput');
let nameTitle = document.querySelector('.profile__name-title');
let profileText = document.querySelector('.profile__text');
let photoPostList = document.querySelector('.photo-post__list');
let photoPostTemplate = document.querySelector('#photo-post-template').content;
let profileBtnPicAdd = document.querySelector('.profile__btn-pic-add');
let popupBtnSaveEditCreate = document.querySelector('.popup__btn-save-edit_create');
let popupInputTextInsertNameInput = document.querySelector('.popup__input-text_insert_textinput');
let popupInputTextInsertLinkInput = document.querySelector('.popup__input-text_insert_linkinput');
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

    popupAddCLose();

}

popupBtnSaveEditCreate.addEventListener('click', createPostItemFormSubmit);