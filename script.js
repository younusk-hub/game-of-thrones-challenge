import charactersArr from "./data/data.js";

const container = document.querySelector(".card-container");
const search = document.getElementById("search");
const checkbox = document.querySelectorAll(".checkboxes")


const displayCards = (array) => {
    return (
        `<div class="card-container__card">
            <h2>${array.fullName}</h2>
            <img src="${array.imageUrl}" class="card-container__card__image">
                <div class="card-container__card__content">${array.family}</div>
                <div class="card-container__card__content">${array.title}</div>
        </div>`
    )
}

const addCards = (array) => {
    array.forEach(card => {
    container.innerHTML += displayCards(card)
    })
}

addCards(charactersArr)

const searchCard = (event) => {
    container.innerHTML = "";
    charactersArr.forEach(character => {
        if (character.fullName.toLowerCase().includes(event.target.value.toLowerCase())) {
            container.innerHTML += displayCards(character)
        } else if (character.family.toLowerCase().includes(event.target.value.toLowerCase())) {
            container.innerHTML += displayCards(character)
        } else if (character.title.toLowerCase().includes(event.target.value.toLowerCase())) {
            container.innerHTML += displayCards(character)
        }
    });
};

search.addEventListener("input", searchCard)


const arr = []

const checkEmptyArr = (array) => {
    if (array.length === 0) {
        charactersArr.forEach(card => {
            container.innerHTML += displayCards(card)
        })
    }
}
const manageArr = (event) => {
    if (event.target.checked && event.target.id === "house-stark" && !arr.includes("stark")) {
        arr.push("stark")
    } else if (event.target.checked && event.target.id === "house-lannister" && !arr.includes("lannister")) {
        arr.push("lannister")
    } else if (event.target.checked && event.target.id === "house-targaryen" && !arr.includes("targaryen")) {
        arr.push("targaryen")
    } else if (event.target.checked && event.target.id === "house-baratheon" && !arr.includes("baratheon")) {
        arr.push("baratheon")
    } else if (!event.target.checked && event.target.id === "house-stark") {
        arr.pop("stark")
    } else if (!event.target.checked && event.target.id === "house-lannister") {
        arr.pop("lannister")
    } else if (!event.target.checked && event.target.id === "house-targaryen") {
        arr.pop("targaryen")
    } else if (!event.target.checked && event.target.id === "house-baratheon") {
        arr.pop("baratheon")
    }
}
const searchByCheckbox = (event) => {

    container.innerHTML = "";
    manageArr(event)
    console.log(arr);

    arr.forEach(house => {
        if (house === "stark") {
            charactersArr.forEach(character => {
                if (character.family.toLowerCase().includes("stark")) {
                    container.innerHTML += displayCards(character)
                }
            });
       }
       if (house === "lannister") {
            charactersArr.forEach(character => {
                if (character.family.toLowerCase().includes("lannister")) {
                    container.innerHTML += displayCards(character)
                }
            });
        }
        if (house === "targaryen") {
            charactersArr.forEach(character => {
                if (character.family.toLowerCase().includes("targaryen")) {
                    container.innerHTML += displayCards(character)
                }
            });
        }
        if (house === "baratheon") {
            charactersArr.forEach(character => {
                if (character.family.toLowerCase().includes("baratheon")) {
                    container.innerHTML += displayCards(character)
                }
            });
        }
   })

   checkEmptyArr(arr)
}


checkbox.forEach(input => {
    input.addEventListener("change", searchByCheckbox)
});
