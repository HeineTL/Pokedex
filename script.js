//MODEL
const view = document.getElementById("insert-view");

const pokemon =
    [
        {
            pokemons: [
                {
                    name: "Bulbasaur",
                    type: ["grass", "fire", "poison"],
                    abilities: "Fireball",
                    category: "Flame",
                    height: "160cm",
                    weight: "200kg"
                },
                {
                    name: "Charmander",
                    type: ["fire"],
                    abilities: "Blaze",
                    category: "Lizard",
                    height: "60cm",
                    weight: "8,6kg"
                },
            ],
        }
    ];

//VIEW
pokedexView();

function pokedexView() {
    // view.innerHTML = /*HTML*/`
    //     <div class="card-list">
    //         <div class="cards">
    //             <div class="pokemon-image">
    //                 <img src="img/Bulbasaur.png" />
    //             </div>
    //             <h1>Bulbasaur</h1>
    //             <div class="type">
    //                 <span class="grass">Grass</span>
    //                 <span class="fire">Fire</span>
    //                 <span class="water">Water</span>
    //                 <span class="poison">Poison</span>
    //             </div>
    //         </div>
    //     </div>
    // `;
    generatePokedexView();
}

function profileView() {
    view.innerHTML = /*HTML*/`
        <div class="card-list">
            <div class="cards profile">
                <div class="pokemon-image">
                    <img src="img/Bulbasaur.png" />
                </div>
                <h1>Bulbasaur</h1>
                <div class="type">
                    <span class="grass">Grass</span>
                    <span class="fire">Fire</span>
                    <span class="water">Water</span>
                    <span class="poison">Poison</span>
                </div>
                <div class="pokemon-info">
                    <div class="pokemon-info-card">
                        <h2>Abilities</h2>
                        <p>Fireball</p>
                    </div>
                    <div class="pokemon-info-card">
                        <h2>Category</h2>
                        <p>Flame</p>
                    </div>
                    <div class="pokemon-info-card">
                        <h2>Height</h2>
                        <p>160cm</p>
                    </div>
                    <div class="pokemon-info-card">
                        <h2>Weight</h2>
                        <p>200kg</p>
                    </div>
                </div>
                <button>Go back</button>
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
function generatePokedexView() {
    for (let i = 0; i < pokemon[0].pokemons.length; i++) {
        let name = pokemon[0].pokemons[i].name;

        view.innerHTML += /*HTML*/`
            <div class="card-list">
                <div class="cards">
                    <div class="pokemon-image">
                        <img src="img/${name}.png" onerror="this.style.display = 'none'"/>
                    </div>
                    <h1>${name}</h1>
                    <div class="type">
                        <span class="grass">Grass</span>
                        <span class="fire">Fire</span>
                        <span class="water">Water</span>
                        <span class="poison">Poison</span>
                    </div>
                </div>
            </div>
    `;   
    }
}