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