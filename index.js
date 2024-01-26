var btn = document.getElementById("btn");
var birthday = document.getElementById("day");
var resultParagraph = document.getElementsByClassName("result")[0]; // Access the first element in the collection
btn.addEventListener("click", function () {
    var birthdayValue = document.getElementById('day').value;
    var birthdayDate = new Date(birthdayValue);
    var today = new Date();
    if (birthdayValue === "") {
        alert("Please enter your birthday.");
    }
    else {
        var age = void 0;
        if (today.getMonth() > birthdayDate.getMonth() ||
            (today.getMonth() === birthdayDate.getMonth() && today.getDate() >= birthdayDate.getDate())) {
            // Birthday has occurred this year or it's today
            age = today.getFullYear() - birthdayDate.getFullYear();
            document.getElementById('resultParagraph').textContent = "You are ".concat(age, " years old.");
            alert("You are ".concat(age, " years old."));
        }
        else {
            // Birthday hasn't occurred yet this year
            age = today.getFullYear() - birthdayDate.getFullYear() - 1;
            resultParagraph.textContent = "You are ".concat(age, " years old.");
            alert("You are ".concat(age, " years old."));
        }
    }
});
/* Option 2

function calculateAge(): void {
    const birthdayValue: string = (document.getElementById('birthday') as HTMLInputElement).value;
    const birthdayDate: Date = new Date(birthdayValue);
    const today: Date = new Date();

    if (birthdayValue === "") {
        alert("Please enter your birthday.");
    } else {
        let age: number;

        if (today.getMonth() > birthdayDate.getMonth() ||
            (today.getMonth() === birthdayDate.getMonth() && today.getDate() >= birthdayDate.getDate())) {
            // Birthday has occurred this year or it's today
            age = today.getFullYear() - birthdayDate.getFullYear();
            (document.getElementById('resultParagraph') as HTMLParagraphElement).textContent = `You are ${age} years old.`;
            alert(`You are ${age} years old.`);
        } else {
            // Birthday hasn't occurred yet this year
            age = today.getFullYear() - birthdayDate.getFullYear() - 1;
            (document.getElementById('resultParagraph') as HTMLParagraphElement).textContent = `You are ${age} years old.`;
            alert(`You are ${age} years old.`);
        }
    }
}

btn.addEventListener("click", calculateAge); */ 
