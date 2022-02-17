// news blog toggle button
const toggleQuery = window.matchMedia('(min-width: 768px)');
console.log("ggg: ", !toggleQuery.matches);

let rowView = document.querySelector(".toggle-row-view");
let colView = document.querySelector(".toggle-column-view");
let toggleBtnRow = document.querySelector(".toggle-btn-row");
let toggleBtnCol = document.querySelector(".toggle-btn-col");
if (toggleQuery.matches) {

    toggleBtnRow.addEventListener("click", () => {
        rowView.style.display = "none";
        toggleBtnRow.style.display = "none";

        colView.style.display = "block";
        toggleBtnCol.style.display = "block";
    });

    toggleBtnCol.addEventListener('click', () => {
        colView.style.display = "none";
        toggleBtnCol.style.display = "none";

        rowView.style.display = "block";
        toggleBtnRow.style.display = "block";
    });
}

if(!toggleQuery.matches) {
    rowView.style.display = "none";
    toggleBtnRow.style.display = "none";
}

