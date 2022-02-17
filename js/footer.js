let dropdown = document.getElementById("dropdown");
let navArr = [];
let disp;
for (let i = 0; i < 4; i++) {
	navArr.push(document.getElementById(`nav${i + 1}`));
}

navArr.forEach(navItem => {
	navItem.style.color = getComputedStyle(document.querySelector(".nav-box")).backgroundColor;
});

dropdown.addEventListener("click", () => {
	navArr.forEach(navItem => {
		navItem.style.color = getComputedStyle(document.querySelector(".nav-box")).color;
	});
	setTimeout(() => {
		navArr.forEach(navItem => {
			navItem.style.color = getComputedStyle(document.querySelector(".nav-box")).backgroundColor;
		});
	}, 3000);
});


