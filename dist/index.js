"use strict";
const btn = document.getElementById("btn");
const birthday = document.getElementById("day");
const resultParagraph = document.getElementsByClassName("result")[0];
btn.addEventListener("click", () => {
    const birthdayValue = document.getElementById('day').value;
    const birthdayDate = new Date(birthdayValue);
    const today = new Date();
    if (birthdayValue === "") {
        alert("Please enter your birthday.");
    }
    else {
        let age;
        if (today.getMonth() > birthdayDate.getMonth() ||
            (today.getMonth() === birthdayDate.getMonth() && today.getDate() >= birthdayDate.getDate())) {
            age = today.getFullYear() - birthdayDate.getFullYear();
            document.getElementById('resultParagraph').textContent = `You are ${age} years old.`;
            alert(`You are ${age} years old.`);
        }
        else {
            age = today.getFullYear() - birthdayDate.getFullYear() - 1;
            resultParagraph.textContent = `You are ${age} years old.`;
            alert(`You are ${age} years old.`);
        }
    }
});
//# sourceMappingURL=index.js.map