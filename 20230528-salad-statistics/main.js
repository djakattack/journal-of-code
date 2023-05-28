let button = document.getElementById("my-button");
let clickCount = 0;
let display = document.getElementById("my-button");

const clickCountFxn = () => {
    clickCount++;
    display.innerHTML = `Button clicked: ${clickCount} times.`;
    localStorage.setItem("clickCount", clickCount);
}

if (localStorage.getItem("clickCount")) {
    clickCount = parseInt(localStorage.getItem("clickCount"));
}
button.addEventListener("click", clickCountFxn);