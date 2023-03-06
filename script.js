const btnEL = document.getElementById("btn")
// hear we use one website " https://api-ninjas.com/profile"
// in wich we creat api request to get jokes from server.
const jokeEL = document.getElementById("joke");
const apiKey = "NP8kjHFrBY7GnNpfiQCbOg==7HIFwkTtHMcKBrd4";
const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1"


// function getJoke(){
//     console.log("clicked")
// }

const options = {
    method : "GET",
    headers : { 
        "X-Api-Key": apiKey,
    },
};


async function getJoke(){

try {
    jokeEL.innerText = "Updating..."; //it is added bcz of delay between data updates and show the user that data are updated means new joke is updated .
    btnEL.disabled = true; //disabled during the upadte 
    btnEL.innerText = "Loading...";
    // async is used for asynchronus data functionality
    const response = await fetch(apiUrl ,options)
    // hera we use awuit to wait for the get data from the api server
    const data = await response.json(); // .json is method in js to cinverdata to json
    // also hear await is used for waiting fro data then converting those data into json
    btnEL.disabled = false; //enabled aftr the update
    btnEL.innerText ="Tell Me A Joke "


    jokeEL.innerText = data[0].joke;
    // hear we declare one const elemnet and then change innertext with the host joke data at index data[0].joke through #joke id declared in index.html

}
    
catch (error) {
    jokeEL.innerText = "An Error Occured Try Again Letter."; //shows error if no internet acess 
    btnEL.disabled = false; //enabled aftr the update
    btnEL.innerText ="Tell Me A Joke "

    
}
} 

btnEL.addEventListener("click", getJoke)//it describes action happen on button