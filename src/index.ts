const btn = document.getElementById("btn") as HTMLButtonElement;
const birthday = document.getElementById("day") as HTMLInputElement;
const resultParagraph = document.getElementsByClassName("result")[0] as HTMLParagraphElement; // Access the first element in the collection

btn.addEventListener("click", (): void => {
    const birthdayValue: string = (document.getElementById('day') as HTMLInputElement).value;
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
            resultParagraph.textContent = `You are ${age} years old.`;
            alert(`You are ${age} years old.`);
        }
    }
})

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