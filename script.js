//MODEL
const view = document.getElementById("insert-view");

//TODO legg til egen file path til bilde for hver pokemon
//TODO Add funksjon
//TODO Edit funksjon (updateView med en parameter som sier at det skal legges til diverse edit knapper)
//TODO Delete funksjon (^ det samme med en delete knapp i stedet for)

const pokedex =
{
    pokemons: [
        {
            name: "Bulbasaur",
            image_path: "img/Bulbasaur.png",
            type: ["Grass", "Poison"],
            abilities: "Overgrow",
            category: "Seed",
            height: "61cm",
            weight: "6,8kg",
        },
        {
            name: "Charmander",
            image_path: "img/Charmander.png",
            type: ["Fire"],
            abilities: "Blaze",
            category: "Lizard",
            height: "60cm",
            weight: "8,5kg",
        },
        {
            name: "Squirtle",
            image_path: "img/Squirtle.png",
            type: ["Water"],
            abilities: "Torrent",
            category: "Tiny Turtle",
            height: "33cm",
            weight: "8,9kg",
        },
        {
            name: "Weedle",
            image_path: "img/Weedle.png",
            type: ["Poison"],
            abilities: "Shield Dust",
            category: "Hairy Bug",
            height: "30cm",
            weight: "3,2kg",
        },
        {
            name: "Pikachu",
            image_path: "img/Pikachu.png",
            type: ["Electric"],
            abilities: "Static",
            category: "Mouse",
            height: "31cm",
            weight: "6kg",
        },
        {
            name: "Jigglypuff",
            image_path: "img/Jigglypuff.png",
            type: ["Fairy"],
            abilities: "Cute Charm",
            category: "Balloon",
            height: "32cm",
            weight: "5,4kg",
        },
        {
            name: "Meowth",
            image_path: "img/Meowth.png",
            type: ["Normal"],
            abilities: "Pickup",
            category: "Scratch Cat",
            height: "31cm",
            weight: "4,2kg",
        },
        {
            name: "Psyduck",
            image_path: "img/Psyduck.png",
            type: ["Water"],
            abilities: "Cloud Nine",
            category: "Duck",
            height: "63cm",
            weight: "19,5kg",
        },
        {
            name: "Abra",
            image_path: "img/Abra.png",
            type: ["Psychic"],
            abilities: "Inner Focus",
            category: "Psi",
            height: "65cm",
            weight: "18,5kg",
        },
        {
            name: "Golem",
            image_path: "img/Golem.png",
            type: ["Rock"],
            abilities: "Rock Head",
            category: "Megaton",
            height: "124cm",
            weight: "300kg",
        },
        {
            name: "Slowpoke",
            image_path: "img/Slowpoke.png",
            type: ["Water", "Psychic"],
            abilities: "Own Tempo",
            category: "Dopey",
            height: "94cm",
            weight: "36kg",
        },
        {
            name: "Magnemite",
            image_path: "img/Magnemite.png",
            type: ["Electric"],
            abilities: "Magnet Pull",
            category: "Magnet",
            height: "30,4cm",
            weight: "6kg",
        },
        {
            name: "Bellsprout",
            image_path: "img/Bellsprout.png",
            type: ["Grass", "Poison"],
            abilities: "Chlorophyll",
            category: "Flower",
            height: "62cm",
            weight: "4kg",
        },
    ],
};

let pokemons = pokedex["pokemons"];

let deleteButton = document.getElementById("deleteButton");

//VIEW
updateView();

function updateView(del = false) {

    view.innerHTML = /*HTML*/`
        <div class='card-list'>
        ${generatePokedexCards(del)}
        </div>
        `;
}

function profileView(index) {
    view.innerHTML = /*HTML*/`
        <div class="card-list">
            <div class="cards profile">
                <div class="pokemon-image">
                    ${addImage(index)}
                </div>
                <h1>${pokemons[index].name}</h1>
                <div class="type">
                    ${addType(index)}
                </div>
                <div class="pokemon-info">
                    ${addPokemonInfo(index)}
                </div>
                <button onclick="updateView()">Go back</button>
            </div>
        </div>
    `;
}

function addPokemonView() {
    view.innerHTML = /*HTML*/`
        <div class="card-list">
            <div class="cards add">
                <h2>Add pokemon</h1>
                <input id="pokemonName" type="text" placeholder="Pokemon name">
                <input id="pokemonAbility" type="text" placeholder="Abilities">
                <input id="pokemonCategory" type="text" placeholder="Category">
                <input id="pokemonHeight" type="text" placeholder="Height">
                <input id="pokemonWeight" type="text" placeholder="Weight">
                <input type="file" hidden accept=".png,.jpg,.jpeg" id="fileID" style="display:none;">
                <p><b>Add pokemon image</b></p>
                <select id="pokemonType" name="Type" multiple>
                    <option value="Grass">Grass</option>
                    <option value="Fire">Fire</option>
                    <option value="Water">Water</option>
                    <option value="Poison">Poison</option>
                    <option value="Electric">Electric</option>
                    <option value="Normal">Normal</option>
                    <option value="Psychic">Psychic</option>
                    <option value="Rock">Rock</option>
                </select>

                <button onclick="addPokemon()" class="addbutton">Add pokemon</button>
                
                <button onclick="updateView()">Go back</button>

                <div id="add-pokemon-error">
            </div>
        </div>
    `;
}

function generatePokedexCards(del) {
    let pokedexCards = "";


    for (let i = 0; i < pokemons.length; i++) {

        let deleteButton = del ? '<button onclick="deletePokemon()">Delete pokemon</button>' : "";

        let onClickProfile = del ? '' : `onclick="profileView(${i})"`;

        pokedexCards += /*HTML*/`
            <div class="cards" ${onClickProfile}>
                <div class="pokemon-image">
                    ${addImage(i)}
                </div>

                <h1>${pokemons[i].name}</h1>
                ${addType(i)}
                ${deleteButton}
            </div>`;
    }

    return pokedexCards;
}

function addPokemonInfo(index) {
    text = /*HTML*/`
        <div class="pokemon-info-card">
            <h2>Category</h2>
            <p>${pokemons[index].category}</p>
        </div>
        <div class="pokemon-info-card">
            <h2>Abilities</h2>
            <p>${pokemons[index].abilities}</p>
        </div>
        <div class="pokemon-info-card">
            <h2>Height</h2>
            <p>${pokemons[index].height}</p>
        </div>
        <div class="pokemon-info-card">
            <h2>Weight</h2>
            <p>${pokemons[index].weight}</p>
        </div>
        `;

    return text;
}

function addImage(index) {
    let file_path = pokemons[index].image_path;

    return `<img src="${file_path}">`;
}

function addType(index) {
    let types = pokemons[index].type;

    let type = "<div class='type'>";

    for (let i = 0; i < types.length; i++) {
        type += `<span class="${types[i].toLowerCase()}">${types[i]}</span>`;
    }

    type += "</div>";

    return type;
}

//CONTROLLER

function addPokemon() {
    let errorMessage = document.getElementById("add-pokemon-error");

    let name = document.getElementById("pokemonName").value;
    let ability = document.getElementById("pokemonAbility").value;
    let category = document.getElementById("pokemonCategory").value;
    let height = document.getElementById("pokemonHeight").value;
    let weight = document.getElementById("pokemonWeight").value;
    let type = [];

    for (let option of document.getElementById("pokemonType").options) {
        if (option.selected) {
            type.push(option.value);
        }
    }

    if (name == "" || ability == "" || category == "" || height == "" || weight == "" || type == "") {
        errorMessage.innerHTML = "<h2>Missing information!</h2>";
    }
    else {
        //Add pokemon
        pokemons.push(
            {
                name: name,
                image_path: "img/Pokeball.png",
                type: type,
                abilities: ability,
                category: category,
                height: height,
                weight: weight,
            }
        );

        updateView();
    }
}

function deleteMode() {
    if(deleteButton.innerHTML.includes("Delete")) {
        deleteButton.innerHTML = "Stop deleting";
        updateView(true);
    } else {
        updateView(false);
        deleteButton.innerHTML = "Delete";
    }
}

function deletePokemon() {
    if(deleteButton.innerHTML.includes("Stop")) {
        deleteButton.innerHTML = "Delete";
        updateView();
    }
}