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
}