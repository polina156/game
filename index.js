const inventory = [];
let room = "нейболт";
let fear = 0;
let readDiary = false;
function showInventory() {
    if (inventory.length === 0) {
        alert("Рюкзак пуст.");
    } else {
        alert("В рюкзаке: " + inventory.join(", "));
    }
}
function takeItem(name, message) {
    if (inventory.includes(name)) {
        alert("Здесь пусто. " + name + " уже у вас.");
        return;
    }
    const take = confirm(message + " Взять " + name + "?");
    if (take === true) {
        inventory.push(name);
        alert(name + " добавлен(а) в рюкзак!");
    } else {
        alert("Вы оставили " + name + ". Можно вернуться позже.");
    }
} alert(
    "ОНО: БИТВА В КАНАЛИЗАЦИИ\n\n" +
    "Беверли в логове Пеннивайза. Чтобы победить в бою, найдите:\n" +
    "серебряную монету (открывает дверь), ингалятор Эдди (силы),\n" +
    "рогатку (оружие) и картину Модильяни (защита).\n\n" +
    "Совет: в библиотеке Бена есть дневник. И не отступайте в логове —\n" +
    "клоун питается страхом."
);
while (true) {
    if (room === "нейболт") {
        const choice = prompt(
            "ДОМ НА НЕЙБОЛТ-СТРИТ\n" +
            "1 — Затопленный тоннель\n" +
            "2 — Пустошь\n" +
            "3 — Проверить рюкзак\n" +
            "0 — Уйти"
        );
        if (choice === "0" || choice === null) break;
        else if (choice === "1") room = "затопленный тоннель";
        else if (choice === "2") room = "пустошь";
        else if (choice === "3") showInventory();
        else alert("Такого прохода нет.");
    } else if (room === "затопленный тоннель") {
        const choice = prompt(
            "ЗАТОПЛЕННЫЙ ТОННЕЛЬ\n" +
            "1 — В библиотеку Бена\n" +
            "2 — Назад к Нейболт-стрит\n" +
            "0 — Уйти"
        );
        if (choice === "0" || choice === null) break;
        else if (choice === "1") room = "библиотека бена";
        else if (choice === "2") room = "нейболт";
        else alert("Такого прохода нет.");
    } else if (room === "библиотека бена") {
        const choice = prompt(
            "БИБЛИОТЕКА БЕНА\n" +
            "1 — Прочитать дневник Бена\n" +
            "2 — Заглянуть в старый колодец\n" +
            "3 — Вернуться в тоннель\n" +
            "0 — Уйти"
        );
        if (choice === "0" || choice === null) break;
        else if (choice === "1") {
            if (readDiary === true) alert("Вы уже прочли дневник.");
            else {
                readDiary = true;
                alert("«Пеннивайз питается страхом. Не отступай — и он ослабнет».");
            }
        } else if (choice === "2") room = "старый колодец";
        else if (choice === "3") room = "затопленный тоннель";
        else alert("Такого действия нет.");
    }