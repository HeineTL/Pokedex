//MODEL
const view = document.getElementById("insert-view");

//TODO Gjør om pokedex array til objekt

const pokedex =
    [
        {
            pokemons: [
                {
                    name: "Bulbasaur",
                    type: ["Grass", "Poison"],
                    abilities: "Overgrow",
                    category: "Seed",
                    height: "61cm",
                    weight: "6,8kg",
                },
                {
                    name: "Charmander",
                    type: ["Fire"],
                    abilities: "Blaze",
                    category: "Lizard",
                    height: "60cm",
                    weight: "8,5kg",
                },
                {
                    name: "Squirtle",
                    type: ["Water"],
                    abilities: "Torrent",
                    category: "Tiny Turtle",
                    height: "33cm",
                    weight: "8,9kg",
                },
                {
                    name: "Weedle",
                    type: ["Poison"],
                    abilities: "Shield Dust",
                    category: "Hairy Bug",
                    height: "30cm",
                    weight: "3,2kg",
                },
                {
                    name: "Pikachu",
                    type: ["Electric"],
                    abilities: "Static",
                    category: "Mouse",
                    height: "31cm",
                    weight: "6kg",
                },
                {
                    name: "Jigglypuff",
                    type: ["Fairy"],
                    abilities: "Cute Charm",
                    category: "Balloon",
                    height: "32cm",
                    weight: "5,4kg",
                },
                {
                    name: "Meowth",
                    type: ["Normal"],
                    abilities: "Pickup",
                    category: "Scratch Cat",
                    height: "31cm",
                    weight: "4,2kg",
                },
                {
                    name: "Psyduck",
                    type: ["Water"],
                    abilities: "Cloud Nine",
                    category: "Duck",
                    height: "63cm",
                    weight: "19,5kg",
                },
                {
                    name: "Abra",
                    type: ["Psychic"],
                    abilities: "Inner Focus",
                    category: "Psi",
                    height: "65cm",
                    weight: "18,5kg",
                },
                {
                    name: "Golem",
                    type: ["Rock"],
                    abilities: "Rock Head",
                    category: "Megaton",
                    height: "124cm",
                    weight: "300kg",
                },
                {
                    name: "Slowpoke",
                    type: ["Water", "Psychic"],
                    abilities: "Own Tempo",
                    category: "Dopey",
                    height: "94cm",
                    weight: "36kg",
                },
                {
                    name: "Magnemite",
                    type: ["Electric"],
                    abilities: "Magnet Pull",
                    category: "Magnet",
                    height: "30,4cm",
                    weight: "6kg",
                },
                {
                    name: "Bellsprout",
                    type: ["Grass", "Poison"],
                    abilities: "Chlorophyll",
                    category: "Flower",
                    height: "62cm",
                    weight: "4kg",
                },
            ],
        }
    ];

//VIEW
pokedexView();

function pokedexView() {

    view.innerHTML = /*HTML*/`
    <div class='card-list'>
        ${generatePokedexCards()}
    </div>
    `;

}

function profileView(name, index) {
    view.innerHTML = /*HTML*/`
        <div class="card-list">
            <div class="cards profile">
                <div class="pokemon-image">
                    ${addImage(name)}
                </div>
                <h1>${name}</h1>
                <div class="type">
                    ${addTypes(index)}
                </div>
                <div class="pokemon-info">
                    ${generatePokemonInfo(index)}
                </div>
                <button onclick="pokedexView()">Go back</button>
            </div>
        </div>
    `;
}

function addView() {
    view.innerHTML = /*HTML*/`
        <div class="card-list">
            <div class="cards add">
                <h2>Add pokemon</h1>
                <input type="text" placeholder="Pokemon name">
                <input type="text" placeholder="Abilities">
                <input type="text" placeholder="Category">
                <input type="text" placeholder="Height">
                <input type="text" placeholder="Weight">
                <p>Hold down CTRL to select multiple types</p>
                <select id="type" name="Type" multiple>
                    <option value="grass">Grass</option>
                    <option value="fire">Fire</option>
                    <option value="water">Water</option>
                    <option value="poison">Poison</option>
                </select>

                <button class="addbutton">Add pokemon</button>
                
                <button>Go back</button>
            </div>
        </div>
    `;
}

//CONTROLLER
function generatePokedexCards() {
    let content = "";

    for (let i = 0; i < pokedex[0].pokemons.length; i++) {
        let name = pokedex[0].pokemons[i].name;

        content += /*HTML*/`
            <div class="cards" onclick="profileView('${name}', '${i}')">
                <div class="pokemon-image">
                    ${addImage(name)}
                </div>
                <h1>${name}</h1>
                ${addTypes(i)}
            </div>
    `;
    }

    return content;
}

function generatePokemonInfo(index) {
    let text = "";

    let questionsAmount = Object.keys(pokedex[0].pokemons[index]).length;

    let questions = Object.keys(pokedex[0].pokemons[index]);

    for (let i = 2; i < questionsAmount; i++) {
        text += /*HTML*/`
        <div class="pokemon-info-card">
            <h2>${questions[i].toUpperCase()}</h2>
            <p>${pokedex[0].pokemons[index][questions[i]]}</p>
        </div>
        `;
    }

    return text;
}

function addImage(imageSrc) {
    let http = new XMLHttpRequest();

    let img = "img/" + imageSrc + ".png";

    http.open('HEAD', img, false);
    http.send();

    let svar = http.status != 404 ? `<img src="${img}">` : `<img src="img/Pokeball.png">`;

    return svar;
}

function addTypes(index) {
    let types = pokedex[0].pokemons[index].type;

    let type = "<div class='type'>";

    for (let i = 0; i < types.length; i++) {
        type += `<span class="${types[i].toLowerCase()}">${types[i]}</span>`;
    }

    type += "</div>";

    return type;
}