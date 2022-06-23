const containerTitle = document.querySelector(".container__title");
const containerText = document.querySelector(".container__text");

const data = fetch("https://api.adviceslip.com/advice")
.then((res) => res.json())
.then((data) => {
    console.log(data)
    return data
}).then((data) => {
    containerTitle.textContent = `ADVICE #${data.slip.id}`;
    containerText.textContent = `"${data.slip.advice}"`;
})


