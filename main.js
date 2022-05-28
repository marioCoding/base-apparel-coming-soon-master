// main.js file for index.html

let button = document.querySelector("button");
let input = document.querySelector("input");

button.addEventListener('click', function(){
    if (input.value === '' || null) {
        alert("Input an email address")
        input.style.border = '2px solid var(--Soft Red)';
    } else {
        input.style.border = '1px solid var(--Desaturated_Red)'
    }
})