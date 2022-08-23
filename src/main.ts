const pokemonName = document.querySelector(".pokemon__name") as HTMLSpanElement;
const pokemonNumber = document.querySelector(
  ".pokemon__number"
) as HTMLSpanElement;
const pokemonImage = document.querySelector(
  ".pokemon__image"
) as HTMLImageElement;

const form = document.querySelector(".form") as HTMLFormElement;
const input = document.querySelector(".input__search") as HTMLInputElement;
const buttonPrev = document.querySelector(".btn-prev") as HTMLButtonElement;
const buttonNext = document.querySelector(".btn-next") as HTMLButtonElement;
const buttonPesq = document.querySelector(".btn-pesq") as HTMLButtonElement;

let searchPokemon = 1;

const fetchPokemon = async (pokemon: string | number) => {
  const APIResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  );

  if (APIResponse.status === 200) {
    const data = await APIResponse.json();
    return data;
  }
};

const renderPokemon = async (pokemon: string | number) => {
  pokemonName.innerHTML = "Loading";
  pokemonNumber.innerHTML = "";

  const data = await fetchPokemon(pokemon);

  if (data) {
    pokemonImage.style.display = "block";
    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id;

    pokemonImage.src =
      data["sprites"]["versions"]["generation-v"]["black-white"]["animated"][
        "front_default"
      ];
    input.value = "";
    searchPokemon = data.id;

    pokemonImage.style.height = `${data.height * 0.5 + 10}%`;
    // console.log(` ${data.height*0.2+10} px`)

    changeBackgroundColor(data);
  } else {
    pokemonImage.style.display = "none";
    pokemonName.innerHTML = "Not Found";
    pokemonNumber.innerHTML = "";
  }
};

function renderZoeira() {
  if (input.value.toLowerCase() === "vitor") {
    pokemonName.innerHTML = "Vitinho";
    pokemonNumber.innerHTML = "";
    pokemonImage.src = "/pokedex-vite/assets/pokemon.vi.png";
    input.value = "";
  }

  if (input.value.toLowerCase() === "leticia") {
    pokemonName.innerHTML = "Lelê";
    pokemonNumber.innerHTML = "";
    pokemonImage.src = "/pokedex-vite/assets/pokemon.le.png";
    input.value = "";
  }

  if (input.value.toLowerCase() === "marcelo") {
    pokemonName.innerHTML = "Macelão";
    pokemonNumber.innerHTML = "";
    pokemonImage.src = "/pokedex-vite/assets/pokemon.pai.png";
    input.value = "";
  }

  if (input.value.toLowerCase() === "luciana") {
    pokemonName.innerHTML = "Mãe";
    pokemonNumber.innerHTML = "";
    pokemonImage.src = "/pokedex-vite/assets/pokemon.mae.png";
    input.value = "";
  }

  if (input.value.toLowerCase() === "luciano") {
    pokemonName.innerHTML = "Lulu";
    pokemonNumber.innerHTML = "";
    pokemonImage.src = "/pokedex-vite/assets/pokemon.lu.png";
    input.value = "";
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  console.log("oi");

  if (
    input.value.toLowerCase() === "luciano" ||
    input.value.toLowerCase() === "luciana" ||
    input.value.toLowerCase() === "marcelo" ||
    input.value.toLowerCase() === "leticia" ||
    input.value.toLowerCase() === "vitor"
  ) {
    renderZoeira();
    return;
  } else renderPokemon(input.value.toLowerCase());
});

buttonPrev.addEventListener("click", (_event) => {
  if (searchPokemon > 1) {
    searchPokemon -= 1;
    renderPokemon(searchPokemon);
  }
});

buttonNext.addEventListener("click", (_event) => {
  searchPokemon += 1;
  renderPokemon(searchPokemon);
});

buttonPesq.addEventListener("click", (_event) => {
  _event.preventDefault();

  renderZoeira();
  return;

  renderPokemon(input.value.toLowerCase());
});

renderPokemon(searchPokemon);

function changeBackgroundColor(data: any) {
  const element = data.types[0];
  const type = element["type"]["name"];

  const bodyGradient = document.querySelector(".bodyG") as HTMLBodyElement;

  switch (type) {
    case "normal":
      bodyGradient.style.background =
        "linear-gradient(to bottom, #A8A77A, #fff)";
      break;
    case "fire":
      bodyGradient.style.background =
        "linear-gradient(to bottom, #EE8130, #fff)";
      break;
    case "water":
      bodyGradient.style.background =
        "linear-gradient(to bottom, #6390F0, #fff)";
      break;
    case "electric":
      bodyGradient.style.background =
        "linear-gradient(to bottom, #F7D02C, #fff)";
      break;
    case "grass":
      bodyGradient.style.background =
        "linear-gradient(to bottom, #7AC74C, #fff)";
      break;
    case "ice":
      bodyGradient.style.background =
        "linear-gradient(to bottom, #96D9D6, #fff)";
      break;
    case "fighting":
      bodyGradient.style.background =
        "linear-gradient(to bottom, #C22E28, #fff)";
      break;
    case "poison":
      bodyGradient.style.background =
        "linear-gradient(to bottom, #A33EA1, #fff)";
      break;
    case "ground":
      bodyGradient.style.background =
        "linear-gradient(to bottom, #E2BF65, #fff)";
      break;
    case "flying":
      bodyGradient.style.background =
        "linear-gradient(to bottom, #A98FF3, #fff)";
      break;
    case "psychic":
      bodyGradient.style.background =
        "linear-gradient(to bottom, #F95587, #fff)";
      break;
    case "bug":
      bodyGradient.style.background =
        "linear-gradient(to bottom, #A6B91A, #fff)";
      break;
    case "rock":
      bodyGradient.style.background =
        "linear-gradient(to bottom, #B6A136, #fff)";
      break;
    case "ghost":
      bodyGradient.style.background =
        "linear-gradient(to bottom, #735797, #fff)";
      break;
    case "dragon":
      bodyGradient.style.background =
        "linear-gradient(to bottom, #6F35FC, #fff)";
      break;
    case "dark":
      bodyGradient.style.background =
        "linear-gradient(to bottom, #705746, #fff)";
      break;
    case "steel":
      bodyGradient.style.background =
        "linear-gradient(to bottom, #B7B7CE, #fff)";
      break;
    case "fairy":
      bodyGradient.style.background =
        "linear-gradient(to bottom, #D685AD, #fff)";
      break;
    default:
      break;
  }
}
