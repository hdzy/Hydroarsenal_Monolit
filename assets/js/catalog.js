elemInsertFirst=document.getElementById("catalog__insert__first");
elemInsertSecond=document.getElementById("catalog__insert__second");

elem=document.getElementById("button-load-more-catalog");

elem.addEventListener('click', ()=> insertCatalog());

function insertCatalog() {
    elemInsertFirst.innerHTML+="     <div class=\"HOME_catalog__row  HOME_catalog__row__fix\">\n" +
        "            <div class=\"HOME_catalog__card  HOME_catalog__autochemic__card\">\n" +
        "            <div class=\"HOME_catalog-textblock\">\n" +
        "                <a href=\"#\" class=\"HOME_catalog__headings\">АВТОХИМИЯ</a>\n" +
        "                <a href=\"#\" class=\"HOME_catalog-text\">Для двигателя, дисков и шин</a>\n" +
        "                <a href=\"#\" class=\"HOME_catalog-text\">Для стекол автомобиля</a>\n" +
        "                <a href=\"#\" class=\"HOME_catalog-text\">Для хрома автомобиля</a>\n" +
        "                <a href=\"#\" class=\"HOME_catalog-text\">Для салона автомобиля (пластик, велюр,кожа)</a>\n" +
        "                <a href=\"#\" class=\"HOME_catalog-text\">Моечный инвентарь</a>\n" +
        "                <a href=\"#\" class=\"HOME_catalog-text\">Растворители, смазки, защита резиновых уплотнителей</a>\n" +
        "                <a href=\"#\" class=\"HOME_catalog-text\">Протирочные и вспомогательные средства</a>\n" +
        "            </div>\n" +
        "            <img class=\"HOME_autochemic__img\" src=\"./assets/img/index/catalog/autochemic.svg\" alt=\"autochemic\">\n" +
        "        </div>\n" +
        "            <div class=\"HOME_catalog__card\">\n" +
        "            <div class=\"HOME_catalog-textblock\">\n" +
        "                <a href=\"#\" class=\"HOME_catalog__headings  HOME_catalog__headings__pish\">ДЛЯ ПИЩЕВОЙ ПРОМЫШЛЕННОСТИ</a>\n" +
        "                <a href=\"#\" class=\"HOME_catalog-text\">Парогенераторы</a>\n" +
        "                <a href=\"#\" class=\"HOME_catalog-text\">Оборудование для мойки молоковозов</a>\n" +
        "                <a href=\"#\" class=\"HOME_catalog-text\">Моечное оборудувание</a>\n" +
        "                <a href=\"#\" class=\"HOME_catalog-text\">Пенные станции</a>\n" +
        "                <a href=\"#\" class=\"HOME_catalog-text\">АВД для пищевой промышленности</a>\n" +
        "            </div>\n" +
        "            <div class=\"HOME_catalog-textblock__second\">\n" +
        "                <a href=\"#\" class=\"HOME_catalog-text\">Оборудование и средства для дезинфекции</a>\n" +
        "                <a href=\"#\" class=\"HOME_catalog-text\">Моющие головки</a>\n" +
        "                <a href=\"#\" class=\"HOME_catalog-text\">Барабаны</a>\n" +
        "                <a href=\"#\" class=\"HOME_catalog-text\">Моющие дезинфицирующие средства</a>\n" +
        "                <a href=\"#\" class=\"HOME_catalog-text\">Аксессуары для оборудования</a>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "        </div>";

    elemInsertSecond.innerHTML+="<div class=\"HOME_catalog__vaccleaner  HOME_catalog__card-four  HOME_catalog__card\">\n" +
        "            <div class=\"HOME_catalog__vaccleaner-textblock  HOME_catalog-textblock\">\n" +
        "                <a href=\"#\" class=\"HOME_catalog__headings  HOME_catalog__selhoz-headings\">ДЛЯ СЕЛЬХОЗ ПРОМЫШЛЕННОСТИ</a>\n" +
        "                <a href=\"#\" class=\"HOME_catalog-text\">Дезинфицирующее и моющее оборудование</a>\n" +
        "                <a href=\"#\" class=\"HOME_catalog-text\">Оборудование с мембранными насосами</a>\n" +
        "                <img class=\"HOME_catalog__selhoz-image\" src=\"./assets/img/index/catalog/selhoz.svg\" alt=\"selhoz\">\n" +
        "            </div>\n" +
        "        </div>\n" +
        "        <div class=\"HOME_catalog__water-prepare  HOME_catalog__card  HOME_catalog__card-four\">\n" +
        "            <div class=\"HOME_catalog__water-prepare-textblock  HOME_catalog-textblock\">\n" +
        "                <a href=\"#\" class=\"HOME_catalog__headings\">НАСОСЫ</a>\n" +
        "                <div class=\"HOME_nasos__row\">\n" +
        "                    <div class=\"HOME_nasos__column__first\">\n" +
        "                        <a href=\"#\" class=\"HOME_catalog-text\">Comet</a>\n" +
        "                        <a href=\"#\" class=\"HOME_catalog-text\">Hawk</a>\n" +
        "                        <a href=\"#\" class=\"HOME_catalog-text\">Interpump</a>\n" +
        "                    </div>\n" +
        "                    <div class=\"HOME_nasos__column__second\">\n" +
        "                        <a href=\"#\" class=\"HOME_catalog-text\">Bertolini</a>\n" +
        "                        <a href=\"#\" class=\"HOME_catalog-text\">Annovi reverberi</a>\n" +
        "                        <a href=\"#\" class=\"HOME_catalog-text\">Редуктор насоса выс. давления</a>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "                <img class=\"HOME_nasos__img\" src=\"./assets/img/index/catalog/nasos.svg\" alt=\"nasos\">\n" +
        "            </div>\n" +
        "        </div>\n" +
        "        <div class=\"HOME_catalog__electricmotor  HOME_catalog__card  HOME_catalog__card-four\">\n" +
        "            <div class=\"HOME_catalog__electricmotor-textblock  HOME_catalog-textblock\">\n" +
        "                <a href=\"#\" class=\"HOME_catalog__headings\">ГИДРАВЛИКА</a>\n" +
        "                <a href=\"#\" class=\"HOME_catalog-text\">Фитинг и муфты</a>\n" +
        "                <a href=\"#\" class=\"HOME_catalog-text\">Магистрали высокого давление</a>\n" +
        "                <img class=\"HOME_gidravlika__img\" src=\"./assets/img/index/catalog/gidravlika.svg\" alt=\"gidravlika\">\n" +
        "            </div>\n" +
        "        </div>\n" +
        "        <div class=\"HOME_catalog__floorwash  HOME_catalog__card  HOME_catalog__card-four\">\n" +
        "            <div class=\"HOME_catalog__floorwash-textblock  HOME_catalog-textblock\">\n" +
        "                <a href=\"#\" class=\"HOME_catalog__headings  HOME_catalog__floorwash-headings HOME_pena-heading\">ПЕНООБРАЗУЮЩЕЕ ОБОРУДОВАНИЕ</a>\n" +
        "                <a href=\"#\" class=\"HOME_catalog-text\">Пеногенераторы для автомойки</a>\n" +
        "                <a href=\"#\" class=\"HOME_catalog-text\">Дозатрон и запчасти</a>\n" +
        "                <a href=\"#\" class=\"HOME_catalog-text\">Пенокомплект и пенная насадка</a>\n" +
        "                <a href=\"#\" class=\"HOME_catalog-text\">Аксессуары для пеногенератора</a>\n" +
        "                <a href=\"#\" class=\"HOME_catalog-text\">Аксессуары для пенной насадки</a>\n" +
        "                <img class=\"HOME_pena-image\" src=\"./assets/img/index/catalog/pena.svg\" alt=\"pena\">\n" +
        "            </div>\n" +
        "        </div>"
    elem.style.display="none";
}
