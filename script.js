//MODEL
const view = document.getElementById("insert-view");

//TODO Edit funksjon (editmode = false)

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
    types: ["Grass", "Fire", "Water", "Poison", "Electric", "Normal", "Psychic", "Rock"],
};

let pokemons = pokedex["pokemons"];

const deleteButton = document.getElementById("deleteButton");
const editButton = document.getElementById("editButton");

let deleteMode = false;

let editMode = false;

//VIEW
updateView();

function updateView() {

    view.innerHTML = /*HTML*/`
        <div class='card-list'>
        ${generatePokedexCards()}
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

function generatePokedexCards() {
    let pokedexCards = "";


    for (let i = 0; i < pokemons.length; i++) {

        let showProfile = deleteMode || editMode ? '' : `onclick="profileView(${i})"`;

        let removeButton = deleteMode ? `<button onclick="deletePokemon(${i})">Delete pokemon</button>` : "";

        let editModeText = editMode ? `<input id="edit-name-${i}" class="edit-input" type='text' value=${pokemons[i].name}>` : `<h1>${pokemons[i].name}</h1>`;

        let editButton = editMode ? `<button onclick="editPokemon(${i})">Submit Changes</button>` : "";

        let editInfo = editMode ? `
        <input id="edit-category-${i}" class="edit-input" type='text' value=${pokemons[i].category}>
        <input id="edit-abilities-${i}" class="edit-input" type='text' value=${pokemons[i].abilities}>
        <input id="edit-height-${i}" class="edit-input" type='text' value=${pokemons[i].height}>
        <input id="edit-weight-${i}" class="edit-input" type='text' value=${pokemons[i].weight}>
        ` : '';

        pokedexCards += /*HTML*/`
            <div class="cards" ${showProfile}>
                <div class="pokemon-image">
                    ${addImage(i)}
                </div>

                ${editModeText}
                ${addType(i)}
                ${editInfo}
                ${editButton}
                ${removeButton}
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

    if(!editMode) {
        //Edit mode FALSE
        let type = "<div class='type'>";
    
        for (let i = 0; i < types.length; i++) {
            type += `<span class="${types[i].toLowerCase()}">${types[i]}</span>`;
        }
    
        type += "</div>";

        return type;
    } else {
        // Edit mode TRUE
        let type = `<select id="edit-type-${index}" name="Type" multiple>`;

            for (let y = 0; y < pokedex["types"].length; y++) { //Loops through all types and add them as options
                let typeName = pokedex["types"][y];

                let selectedText = types.includes(typeName) ? "selected" : "";
                type += `<option ${selectedText} value="${typeName}">${typeName}</option>`;
            }  
                
        type += '</select>';

        return type;
    }


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

function deletePokemon(index) {
    pokemons.splice(index, 1);
    updateView();
}
function editPokemon(index) {
    let name = document.getElementById(`edit-name-${index}`).value;
    let abilities = document.getElementById(`edit-abilities-${index}`).value;
    let category = document.getElementById(`edit-category-${index}`).value;
    let height = document.getElementById(`edit-height-${index}`).value;
    let weight = document.getElementById(`edit-weight-${index}`).value;
    let type = [];

    for (let option of document.getElementById(`edit-type-${index}`).options) {
        if (option.selected) {
            type.push(option.value);
        }
    }

    let editArray = pokemons[index];

    editArray.name = name;
    editArray.abilities = abilities;
    editArray.category = category;
    editArray.height = height;
    editArray.weight = weight;
    editArray.type = type;
    
    clickEditButton()

}

function clickDeleteButton() {
    deleteMode = !deleteMode;
    let deleteButtonText = deleteMode ? "Stop deleting" : "Delete";
    deleteButton.innerHTML = deleteButtonText;
    updateView();
}

function clickEditButton() {
    editMode = !editMode;
    let editButtonText = editMode ? "Stop editing" : "Edit";
    editButton.innerHTML = editButtonText;
    updateView();
}