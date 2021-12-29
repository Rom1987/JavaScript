let global_var = 5;
let user = "Романов Роман";


function funcDeclaration() {
    alert("2 в степени " + global_var + " равна " + 2 ** global_var)
}

function openWindow(url) {
    window.open(url);
}
// alert('url'+url)
let funcExpression = function () {
    alert("Привет, это первая практика по 4 курсу. Cтудента " + user);
};

let creator = function () {
    window.open("https://vk.com/romanromanov2001");
};

let codeJS = function () {
    return `let global_var = 5;
    let user = "Романов Роман";
    
    
    function funcDeclaration() {
        alert("2 в степени " + global_var + " равна " + 2 ** global_var)
    }
    
    function openWindow() {
        let url = document.querySelector("#url_text").value;
        window.open(url);
    }
    
    let funcExpression = function () {
        alert("Привет, это первая практика по 4 курсу. Cтудента " + user);
    };
    
    let creator = function () {
        window.open("https://vk.com/romanromanov2001");
    };`
};

let outputJS = function () {
    alert(codeJS);
};