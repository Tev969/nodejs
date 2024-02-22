async function getDresseurs() {
  let response = await fetch("http://127.0.0.1:3001/dresseurs");
  let data = await response.json();
  return data;
}

async function createDresseursCard() {
  const cardDresseurContainer = document.querySelector(
    "#cardDresseurContainer"
  );
  cardDresseurContainer.innerHTML = " ";
  console.log("yolo");
  const data = await getDresseurs();
  data.forEach((dresseur) => {
    //   ⁡⁢⁣⁢  CONSTANTE⁡
    const card = document.createElement("div");
    card.classList.add("container");
    let title = document.createElement("h3");
    let age = document.createElement("p");
    const update = document.createElement("button");
    const deleteDresseurbtn = document.createElement("button");
    const details = document.createElement("button");
    //    ⁡⁢⁣⁢ TEXTCONTENT⁡
    title.textContent = dresseur.name;
    age.textContent = dresseur.age + " ans";
    update.textContent = "Modifier";
    deleteDresseurbtn.textContent = "Supprimer";
    details.textContent = "Détails";
    //    ⁡⁢⁣⁢ APPENDCHILD⁡
    card.appendChild(title);
    card.appendChild(age);
    card.appendChild(update);
    card.appendChild(deleteDresseurbtn);
    card.appendChild(details);
    cardDresseurContainer.appendChild(card);

    //     ⁡⁢⁣⁢DELETE⁡
    deleteDresseurbtn.addEventListener("click", () => {
      deleteDresseur(dresseur._id);
    });

    //    ⁡⁢⁣⁢ SHOWPOKE⁡
    details.addEventListener("click", () => {
      showPokemon(dresseur._id, card);
      const show = document.querySelector("#showPoke");
      show.style.display = "block";
    });

    //𝘜𝘗𝘋𝘈𝘛𝘌 52 𝘈 73⁡
    update.addEventListener("click", () => {
      let form = document.querySelector("#form");
      form.style.display = "block";
      form.setAttribute("data-id", dresseur._id);
    });
  });

  let form = document.querySelector("#form");
  form.addEventListener("submit", () => {
    updateDresseur(dresseur._id);
  });

  let sendForm = document.querySelector("#sendForm");
  sendForm.addEventListener("click", () => {
    const id = form.getAttribute("data-id");
    updateDresseur(id);
  });
}
async function updateDresseur(id) {
  console.log("test");
  if (document.querySelector("#name").value === "zgeg") {
    let audio = new Audio("../assets/audio/zgeg.mp3");

    audio.play();
  }
  const response = await fetch("http://localhost:3001/dresseurs/" + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: document.querySelector("#name").value,
      age: document.querySelector("#ages").value,
    }),
  });
  let form = document.querySelector("#form");
  form.style.display = "none";
  createDresseursCard();
}
// ⁡⁢⁣⁢FIN UPDATE⁡

//⁢SHOW POKEMON FUN

const container = document.querySelector(".container");
async function showPokemon(id, card) {
  let pokeDiv = document.querySelector("#showPoke");
  card.appendChild(pokeDiv)
  pokeDiv.innerHTML = "";
  const response = await fetch("http://localhost:3001/dresseurs/" + id, {
    method: "GET",
  });
  const data = await response.json();
  const pokeList = document.createElement("ul");
  pokeList.classList.add("pokeListing");

  // Pour chaque Pokémon du dresseur, créer un élément de liste et l'ajouter à la liste
  data.pokemons.forEach((pokemon) => {
    const pokeItem = document.createElement("li");

    pokeItem.innerHTML = `
            <strong>Nom:</strong> ${pokemon.name} <br>
            <strong>Niveau:</strong> ${pokemon.level} <br>
            <strong>Attaque:</strong> ${pokemon.attack} <br>
            <strong>Type:</strong> ${pokemon.type} <br>
        `;

    pokeList.appendChild(pokeItem);
  });
  const close = document.createElement("button");
  close.textContent = "Close";
  close.classList.add("closeBtn");
  close.addEventListener("click", () => {
    pokeDiv.style.display = "none";
  });
  
  pokeDiv.appendChild(pokeList);
  pokeDiv.appendChild(close);
  const container = card.querySelector(".container");
  container.appendChild(pokeDiv);
  


console.log(container);
  createDresseursCard();
}

// ⁡⁢⁣⁢DELETE FUN⁡
async function deleteDresseur(id) {
  const response = await fetch("http://localhost:3001/dresseurs/" + id, {
    method: "DELETE",
  });
  createDresseursCard();
}

createDresseursCard();


