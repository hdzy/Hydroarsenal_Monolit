function createPopUp() {
    document.body.innerHTML+="<div class=\"backcall__popup\">\n" +
        "  <form class=\"bcpp__form\" action=\"\">\n" +
        "    <img class=\"popup__close\" onclick=\"deletePopUp()\" src=\"./img/popup.svg\" style=\"cursor: pointer\">\n" +
        "    <h1 class=\"bcpp_title\">ОБРАТНЫЙ ЗВОНОК</h1>\n" +
        "    <div class=\"input__container\">\n" +
        "      <input class=\"input__popup\" type=\"text\" placeholder=\"ФИО\">\n" +
        "    </div>\n" +
        "\n" +
        "    <div class=\"input__container\">\n" +
        "      <input class=\"input__popup\" type=\"text\" placeholder=\"Номер телефона\">\n" +
        "    </div>\n" +
        "\n" +
        "    <div class=\"input__container\">\n" +
        "      <input class=\"input__popup\" type=\"text\" placeholder=\"Антиспам (2+2=?)\">\n" +
        "    </div>\n" +
        "    <div class=\"under__row\">\n" +
        "      <button class=\"popup__submit\" type=\"submit\">Отправить</button>\n" +
        "      <p class=\"popup__subtext\">Нажимая на кнопку, Вы соглашаетесь с условиями <a href=\"#\" class=\"pk__link\">Политики конфиденциальности</a></p>\n" +
        "    </div>\n" +
        "  </form>\n" +
        "</div>"
}

function deletePopUp() {
    document.querySelector('body .backcall__popup').remove();
}