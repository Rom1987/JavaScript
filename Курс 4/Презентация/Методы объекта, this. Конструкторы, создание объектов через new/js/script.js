// // !Методы
// // !Слайд 3
// let user = {
//     name: "Джон",
//     age: 30
// };

// user.sayHi = function () {
//     alert("Привет!");
// };

// user.sayHi(); // !Привет!


// !Ключевое слово «this» в методах
// // !Слайд 5
// let user = {
//     name: "Джон",
//     age: 30,

//     sayHi() {
//         // !this - это "текущий объект"
//         alert(this.name);
//     }

// };

// user.sayHi(); // !Джон


// // Слайд 6
// let user = {
//     name: "Джон",
//     age: 30,
//     sayHi() {
//         alert(user.name); // !используем переменную "user" вместо ключевого слова "this" 
//     }
// };

// user.sayHi();


// // !Слайд 7
// let user = {
//     name: "Джон",
//     age: 30,

//     sayHi() {
//         alert(this.name); // !приведёт к ошибке
//     }

// };

// user.sayHi();

// let admin = user;
// user = null; // !обнулим переменную для наглядности, теперь она не хранит ссылку на объект.

// admin.sayHi(); // !Ошибка! Внутри sayHi() используется user, которая больше не ссылается на объект


// !Функция-конструктор
// !Слайд 9
function User(name) {
    // this = {}; (неявно)
    // добавляет свойства к this 
    this.name = name;
    this.isAdmin = false;
    // return this; (неявно) 
}

let user = new User("Вася");

alert(user.name); // !Вася
alert(user.isAdmin); // !false