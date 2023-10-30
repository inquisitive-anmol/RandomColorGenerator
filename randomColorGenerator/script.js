let btn = document.querySelector("button");

btn.addEventListener("click", generate);


function generate() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let cont = document.querySelector(".cont");
    let body = document.querySelector(".main");
    let color = `rgb(${r},${g},${b})`;
    cont.innerText = color;
    cont.style.backgroundColor = color;
    body.style.backgroundColor = color;


}