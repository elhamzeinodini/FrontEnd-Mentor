const charts = document.querySelector(".expense__data");

const data = fetch("./data.json")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        return data;
    }).catch(error => console.log(error));


data.then(data => {
    data.forEach((item) => {
        let expenseChart = document.createElement("div");
        expenseChart.classList.add("expense__chart");
        let height = item.amount / 7;
        let value = "";
        if(item.day === "wed"){
            value = `<div class="expense__bar expense__bar--active" style="height: ${height}rem">`
        }
        else{
            value = `<div class="expense__bar" style="height: ${height}rem">`
        }
        expenseChart.innerHTML = `
            <div class="expense__days">
                <div class="expense__day">${item.day}</div>
            </div>
            <div class="expense__bars">
                ${value}
            </div>

        `;
        charts.append(expenseChart);
    })
})