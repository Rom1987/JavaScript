// // 1. Создать объект с тремя свойствами. С тремя ключами.
// let dataUser = {
//     name: "Роман",
//     age: "19",
//     well: "4 курс",
// }
// // //  2. Вывести значение объектов
// // for (let value of Object.entries(dataUser)) {
// //     alert(value[0] + ":" + value[1]);
// // }
// // удалить свойства
// delete dataUser.age;
// alert("Я удалил: age");
// // новые свойства
// // 4. Работа со свойством с двумя словами:добавить,присвоить значение,. Получить значения,удалить свойства.
// newName = prompt("Введи название ключа:");
// newMeaning = prompt("Введи название ключа:");
// dataUser[newName] = newMeaning;
// // Object.entries() метод возвращает массив собственных перечисляемых свойств указанного объекта в формате [key, value]
// for (let value of Object.entries(dataUser)) {
//     alert(value[0] + ":" + value[1]);
// }
// // 3. Изменить объект, объявленый как константа.
// const developer = {
//     name: "John"
// };
// alert("Разработчик " + developer.name + "... ой ошибся");
// developer.name = "Романов Роман"; // (*)

// alert("Разработчик " + developer.name + ". Теперь всё прааильно:)))");

// 5. Объявить новую переменную и вывести новое свойство через эту переменную. Вывести значение конкретного свойства, через переменую. (По желанию преподавателя любое)
let userWell = dataUser.well;
alert(userWell);

// 6. Сделать одно вычисляемое свойство.

function createObject(key, value) {
    return {
        ["Student" + key[0]]: value[0],
        ["Student" + key[1]]: value[1],
        ["Student" + key[2]]: value[2],
    };
}
let key = [1, 2, 3, ];
let students = [
    "Агаев Даниэль Эминович",
    "Аникин Александр Михайлович",
    "Бабаев Руслан Эльчинович",
];

let new_object = createObject(key, students);
alert("Key: " + 1 + "\nName: " + new_object.Student1);
alert("Key: " + 2 + "\nName: " + new_object.Student2);
alert("Key: " + 3 + "\nName: " + new_object.Student3);