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
    }
    else if (room === "затопленный тоннель") {
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
    }
    else if (room === "библиотека бена") {
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
    else if (room === "старый колодец") {
        const choice = prompt(
            "СТАРЫЙ КОЛОДЕЦ\n" +
            "1 — Достать блестящий предмет\n" +
            "2 — Вернуться в библиотеку\n" +
            "0 — Уйти"
        );
        if (choice === "0" || choice === null) break;
        else if (choice === "1") takeItem("серебряная монета", "На дне колодца лежит серебряная монета.");
        else if (choice === "2") room = "библиотека бена";
        else alert("Такого действия нет.");
    }
    else if (room === "пустошь") {
        const choice = prompt(
            "ПУСТОШЬ\n" +
            "1 — Заброшенный дом\n" +
            "2 — Аптека Кэша\n" +
            "3 — Синагога\n" +
            "4 — Дверь в логово Пеннивайза\n" +
            "5 — Вернуться к Нейболт-стрит\n" +
            "0 — Уйти"
        );
        if (choice === "0" || choice === null) break;
        else if (choice === "1") room = "заброшенный дом";
        else if (choice === "2") room = "аптека кэша";
        else if (choice === "3") room = "синагога";
        else if (choice === "4") {
            if (inventory.includes("серебряная монета")) {
                alert("Монета падает в воду. Дверь открыта.");
                room = "логово";
            } else {
                alert("Дверь не поддаётся. Нужна серебряная монета.");
            }
        } else if (choice === "5") room = "нейболт";
        else alert("Такого прохода нет.");
    }
    else if (room === "заброшенный дом") {
        const choice = prompt(
            "ЗАБРОШЕННЫЙ ДОМ\n" +
            "1 — Взять рогатку\n" +
            "2 — Вернуться в Пустошь\n" +
            "0 — Уйти"
        );
        if (choice === "0" || choice === null) break;
        else if (choice === "1") takeItem("рогатка", "На гвозде висит рогатка Бена.");
        else if (choice === "2") room = "пустошь";
        else alert("Такого действия нет.");
    }
    else if (room === "аптека кэша") {
        const choice = prompt(
            "АПТЕКА КЭША\n" +
            "1 — Взять ингалятор\n" +
            "2 — Вернуться в Пустошь\n" +
            "0 — Уйти"
        );
        if (choice === "0" || choice === null) break;
        else if (choice === "1") takeItem("ингалятор Эдди", "На прилавке лежит ингалятор Эдди.");
        else if (choice === "2") room = "пустошь";
        else alert("Такого действия нет.");
    }
    else if (room === "синагога") {
        const choice = prompt(
            "СИНАГОГА\n" +
            "1 — Снять картину\n" +
            "2 — Вернуться в Пустошь\n" +
            "0 — Уйти"
        );
        if (choice === "0" || choice === null) break;
        else if (choice === "1") takeItem("картина Модильяни", "На стене висит картина Модильяни.");
        else if (choice === "2") room = "пустошь";
        else alert("Такого действия нет.");
    }
    else if (room === "логово") {
        const choice = prompt(
            "ЛОГОВО ПЕННИВАЙЗА\n" +
            "Клоун улыбается. Беверли висит в воздухе.\n" +
            "1 — Начать бой\n" +
            "2 — Отступить за снаряжением\n" +
            "0 — Уйти"
        );
        if (choice === "0" || choice === null) break;
        else if (choice === "1") {
            if (
                inventory.includes("рогатка") &&
                inventory.includes("ингалятор Эдди") &&
                inventory.includes("картина Модильяни") &&
                fear === 0
            ) {
                alert("Рогатка бьёт точно в цель. Ингалятор даёт силы, картина защищает. Пеннивайз визжит и исчезает. ПОБЕДА!");
                const inhalerIndex = inventory.indexOf("ингалятор Эдди");
                if (inhalerIndex !== -1) {
                    inventory.splice(inhalerIndex, 1);
                }
            } else {
                alert("Пеннивайз смеётся. Не хватает снаряжения или страх уже пустил корни. ПОРАЖЕНИЕ.");
            }
            break;
        } else if (choice === "2") {
            fear = fear + 1;
            alert("Вы отступили. Страх стал сильнее (уровень: " + fear + ").");
            room = "пустошь";
        } else alert("Такого действия нет.");
    }
