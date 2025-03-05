const punchline = document.getElementById("punch");
const setup = document.getElementById("setup");
const type = document.getElementById("type");
function getJoke() {
    // const Api = `https://official-joke-api.appspot.com/random_joke`;
    const Api = `https://v2.jokeapi.dev/joke/Programming,Spooky`;
    fetch(Api)
    .then((res) => res.json())
    .then((data) => {
        setup.type = data.type;
        setup.innerHTML = data.setup;
        punchline.innerHTML = data.delivery;
        
    })
}