let content = document.querySelector('.content');
let editButton = content.querySelector('.profile__btn-edit');
let popup = document.querySelector('.popup');
let closePopupEdit = popup.querySelector('.popup__btn-close');
// Находим форму в DOM
let formElement = popup.querySelector('.popup__edit-form')// Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
let nameInput = popup.querySelector('.popup__text-form_type-name');// Воспользуйтесь инструментом .querySelector()
let jobInput = popup.querySelector('.popup__text-form_type-job');// Воспользуйтесь инструментом .querySelector()


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

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit);
editButton.addEventListener('click', popupEditOpen);
closePopupEdit.addEventListener('click', popupEditClose);

console.log(nameInput.value);

