
// =============
// Using Local Storage
// Pro: Persists after refresh or close, so I don't lose data.
// Con: Cannot easily reset....
// Requires manual delete using devConsole.  Revist later it's fine for now.
// =============

// let button = document.getElementById("my-button");
// let clickCount = 0;
// let display = document.getElementById("click-count");

// const clickCountFxn = () => {
//     clickCount++;
//     display.innerHTML = `Button clicked: ${clickCount} times.`;
//     localStorage.setItem("clickCount", clickCount);
// }

// const resetLocal = () => {
//     localStorage.clear();
// }

// if (localStorage.getItem("clickCount")) {
//     clickCount = parseInt(localStorage.getItem("clickCount"));
// }
// button.addEventListener("click", clickCountFxn);