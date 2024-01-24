const btn = document.getElementById("btn");
const birthday = document.getElementById("day");
const resultParagraph = document.getElementsByClassName("result")[0]; // Access the first element in the collection


function calculateAge() {
    const birthdayValue = birthday.value;
    const birthdayDate = new Date(birthdayValue);
    const today = new Date();

    if (birthdayValue === "") {
        alert("Please enter your birthday.");
    } else {
        let age;

        if (today.getMonth() > birthdayDate.getMonth() ||
            (today.getMonth() === birthdayDate.getMonth() && today.getDate() >= birthdayDate.getDate())) {
            // Birthday has occurred this year or it's today
            age = today.getFullYear() - birthdayDate.getFullYear();
            resultParagraph.textContent = `You are ${age} years old.`;
            alert(`You are ${age} years old.`);  
        } else {
            // Birthday hasn't occurred yet this year
            age = today.getFullYear() - birthdayDate.getFullYear() - 1;
            resultParagraph.textContent = `You are ${age} years old.`;
            alert(`You are ${age} years old.`);  
        }      
    }
}

btn.addEventListener("click", calculateAge);