const imgchooseyou = document.querySelector('#imgpokemon');
const audiopokemon = document.querySelector('#audiopokemon');
const nomepokemon = document.querySelector('#nomepokemon');
const numeropokemon = document.querySelector('#numeropokemon');
const botao1 = document.querySelector('#btn1');
const botao2 = document.querySelector('#btn2');
const pesopokemon = document.querySelector('#pesopokemon');
const alturapokemon = document.querySelector('#alturapokemon');
const form = document.querySelector('.formBusca');
const input = document.querySelector('#input');
const tipo1 = document.querySelector('#tipo1');
const tipo2 = document.querySelector('#tipo2');
const audiomusica = document.querySelector('#audioplayer');

let idpokemon = 1;
audiomusica.play();
const fetchPokemon = async (pokemon) => {
    const APIresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await APIresponse.json();
    return data;
}

const showPokemon = async (pokemon) => {
    const datapokemon = await fetchPokemon(pokemon);
    idpokemon = datapokemon.id;
    imgchooseyou.src = datapokemon.sprites.front_default;
    audiopokemon.src = datapokemon.cries.latest;
    nomepokemon.innerHTML = datapokemon.name;
    numeropokemon.innerHTML = datapokemon.id;
    pesopokemon.innerHTML = datapokemon.weight;
    alturapokemon.innerHTML = datapokemon.height;
    tipo1.innerHTML = datapokemon.types[0].type.name;
    if (datapokemon.types.length > 1) {
        tipo2.innerHTML = datapokemon.types[1].type.name;
    } else
        tipo2.innerHTML = '';
}

botao1.addEventListener("click", () => {
    if (idpokemon > 1) {
        idpokemon -= 1;
        showPokemon(idpokemon);
    }

})

botao2.addEventListener("click", () => {
    idpokemon += 1;
    showPokemon(idpokemon);
})
input.addEventListener("input", () => {
    idpokemon = toString(input.value);

}
)
form.addEventListener('submit', (event) => {
    event.preventDefault();
    showPokemon(input.value.toLowerCase());

})



showPokemon(idpokemon);