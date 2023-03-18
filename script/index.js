let content = document.querySelector('.content');
let editButton = content.querySelector('.profile__btn-edit');
let popup = document.querySelector('.popup');
let closePopupBtn = popup.querySelector('.popup__btn-close');
let formElement = popup.querySelector('.popup__edit-form');
let nameInput = popup.querySelector('.popup__input-text_insert_nameinput');
let jobInput = popup.querySelector('.popup__input-text_insert_jobinput');
let nameTitle = document.querySelector('.profile__name-title');
let profileText = document.querySelector('.profile__text');
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
let photoPostList = document.querySelector('.photo-post__list');
let photoPostTemplate = document.querySelector('#photo-post-template').content;


function popupEditOpen() {
    popup.classList.add('popup_opened');
    console.log('deleting');
}

function popupEditClose() {
    popup.classList.remove('popup_opened');
    nameInput.value = nameTitle.textContent;
    jobInput.value = profileText.textContent;
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
closePopupBtn.addEventListener('click', popupEditClose);


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
    photoPostItem.querySelector('.photo-post__text').textContent = name;

    photoPostList.prepend(photoPostItem);

    photoPostItem.querySelector('.photo-post__btn-trash').addEventListener('click', function () {
        photoPostItem.remove();
        });

}

insert();