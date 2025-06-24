const pokemonName = document.querySelector('.pokemon_name');
const pokemonNumber = document.querySelector('.pokemon_number');
const pokemonImage = document.querySelector('.pokemon_image');

const  form = document.querySelector('.form');
const  input = document.querySelector('.input_search');
const buttonPrev = document.querySelector('.btn-prev');
const  ButtonNext = document.querySelector('.btn-next');
const  PokemonType = document.querySelector('.pokemon_types');
let searchPokemon = 1;

const fetchPokemon = async (pokemon) => {

const APIresponse =  await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);


if(APIresponse.status === 200){
    const data = await APIresponse.json();

return data;
}
const fetchPokemonType = async (typeId) => {
    const APIresponse = await fetch(`https://pokeapi.co/api/v2/type/${typeId}`);
    const data = await APIresponse.json();
    fetchPokemonType('1');

}

}

const renderPokemon = async (pokemon) => {

    pokemonName.innerHTML = 'Carregando...';

    const data =  await fetchPokemon(pokemon);
    if(data){
    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id;
    PokemonType.innerHTML = data.id;
    pokemonImage.src = data ['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
 
    PokemonType.innerHTML = data ['types']['0']['type']['name'];
  
    input.value = '';
  searchPokemon = data.id;
  
} else {
    pokemonImage.style . display = 'none'
    pokemonName.innerHTML= 'Nao encontrado';
    pokemonNumber.innerHTML= '';}
}


form.addEventListener('submit', (event) => {

    event.preventDefault();
    renderPokemon(input.value.toLowerCase());
  
});
buttonPrev.addEventListener('click', () => {

    if(searchPokemon >1){
    searchPokemon -= 1;
    renderPokemon(searchPokemon)
    }  
});
ButtonNext.addEventListener('click', () => {

    searchPokemon += 1;
    renderPokemon(searchPokemon)
  
});
renderPokemon(searchPokemon);
