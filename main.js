const punchline = document.getElementById("punch");
const setup = document.getElementById("setup");
function getJoke() {
    // const Api = `https://official-joke-api.appspot.com/random_joke`;
    const Api = `https://v2.jokeapi.dev/joke/Programming,Spooky`;
    fetch(Api)
    .then((res) => res.json())
    .then((data) => {
        setup.innerHTML = data.setup;
        punchline.innerHTML = data.delivery;
        
    })
}