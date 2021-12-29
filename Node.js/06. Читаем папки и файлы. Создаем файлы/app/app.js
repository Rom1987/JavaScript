// task 1 - читать файл
const fs = require('fs'); // подключение модуля файловой системы
const path = require('path'); // работа с путями

// // way 1
// // 3 параметр - это функция, которая будет получать и обрабатывать результат асинхрона.
// // Асинхрона - это значит, что программа после выполнения не будет останавливаться и ждать чтение файла она продолжит чтение и выполение программы
// fs.readFile('t1.txt', 'utf-8', (err, data) => {
//     console.log(data);
// });

// // way 2
// let text = fs.readFileSync('t2.txt', 'utf-8');
// console.log(text);
// console.log("====================");

fs.readdir('one', (err, data) => {
    console.log(data);
    data.forEach(file => {
        // \t - отступ в ввиде таба
        console.log(file + '\t\t' + path.extname(file)) + '\t\t' + console.log(fs.statSync('one/' + file).size + 'B');
    });
});

fs.writeFile('newfile.txt', 'goo\noooo', (err) => {
    if (err) console.log(err);
});