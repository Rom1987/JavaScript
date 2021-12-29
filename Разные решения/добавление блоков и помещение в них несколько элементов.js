// добавление блоков и помещение в них контент
// левый контент
let basket__bodyLeft = document.createElement("div"),
    products = document.createElement("div"),
    product__item = document.querySelectorAll(".product__item"),
    basket__body = document.querySelector('.basket__body');

basket__bodyLeft.classList.add("basket__body--left");
products.classList.add("products");

product__item.forEach((item) => products.prepend(item));

basket__bodyLeft.prepend(products);
basket__body.prepend(basket__bodyLeft);

// // правый контент
// let right__title = document.querySelector('.right__title'),
//     right__item = document.querySelectorAll(".product__item-right");

// right__item.forEach((item) => right__title.after(item));

// document.querySelector('.wrapper').appendChild(basket__bodyLeft)
// products.innerHTML = product__item;
// basket__bodyLeft.innerHTML = products;
