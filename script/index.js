let content = document.querySelector('.content');
let editButton = content.querySelector('.profile__btn-edit');
let popup = document.querySelector('.popup');
let closePopupEdit = popup.querySelector('.popup__btn-close');
let formElement = popup.querySelector('.popup__edit-form')
let nameInput = popup.querySelector('.popup__text-form_type-name');
let jobInput = popup.querySelector('.popup__text-form_type-job');


function popupEditOpen() {
    popup.classList.add('popup_opened');
}

function popupEditClose() {
    popup.classList.remove('popup_opened');
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
    let nameTitle = document.querySelector('.profile__name-title');
    let profileText = document.querySelector('.profile__text');

    // Вставьте новые значения с помощью textContent
    nameTitle.textContent = editName;
    profileText.textContent = editJob;

    popup.classList.remove('popup_opened');
}

formElement.addEventListener('submit', handleFormSubmit);
editButton.addEventListener('click', popupEditOpen);
closePopupEdit.addEventListener('click', popupEditClose);



