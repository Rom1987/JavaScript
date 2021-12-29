function backgroundChange(optionValue) {
    let image = document.querySelector('.image');
    image.style.display = "block";
    if (optionValue == 'Солнце +35') {
        document.body.style.backgroundImage = 'url(img/background/son+35.jpg)';
        document.querySelector('#image').src = 'img/clothes/son+35.png';
    } else if (optionValue == 'Солнце +15') {
        document.body.style.backgroundImage = 'url(img/background/son+15.jpg)';
        document.querySelector('#image').src = 'img/clothes/son+15.png';
    } else if (optionValue == 'Дождь') {
        document.body.style.backgroundImage = 'url(img/background/rain.jpg)';
        document.querySelector('#image').src = 'img/clothes/rain.png';
    } else if (optionValue == 'Снег') {
        document.body.style.backgroundImage = 'url(img/background/winter.jpg)';
        document.querySelector('#image').src = 'img/clothes/winter.png';
    }
}