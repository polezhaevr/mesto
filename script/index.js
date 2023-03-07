let content = document.querySelector('.content');
let editButton = content.querySelector('.profile__btn-edit');
let popup = document.querySelector('.popup');
let closePopupBtn = popup.querySelector('.popup__btn-close');
let formElement = popup.querySelector('.popup__edit-form');
let nameInput = popup.querySelector('.popup__text-form-type-name');
let jobInput = popup.querySelector('.popup__text-form-type-job');
let nameTitle = document.querySelector('.profile__name-title');
let profileText = document.querySelector('.profile__text');


function popupEditOpen() {
    popup.classList.add('popup_opened');
}

function popupEditClose() {
    popup.classList.remove('popup_opened');
    nameInput.value = nameTitle.textContent;
    jobInput.value = profileText.textContent;
}

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    // Так мы можем определить свою логику отправки.
    // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    let editName = nameInput.value;
    let editJob = jobInput.value;

    // Выберите элементы, куда должны быть вставлены значения полей


    // Вставьте новые значения с помощью textContent
    nameTitle.textContent = editName;
    profileText.textContent = editJob;

    popupEditClose();
}

formElement.addEventListener('submit', handleFormSubmit);
editButton.addEventListener('click', popupEditOpen);
closePopupBtn.addEventListener('click', popupEditClose);



