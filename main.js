/*  see the name 
    see the image 
    see the type
    moves - abilities 

*/
    

document.getElementById("button").addEventListener("click", getfetch)
// Capitalize Function
function capitalizeName(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

function getfetch(){
    const userInput = document.querySelector('input').value.toLowerCase()
    const url = `https://pokeapi.co/api/v2/pokemon/${userInput}`

    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        //setting const variable equal to grabbed API data
        const name = data.name
        // slice(startIndex, endIndex) // slice(0,3) Dit does not include the last  
        // slice(1) itto
        // D + itto
        const type = data.types[0].type.name  
        const abilities = data.abilities
        const image = data.sprites.other["official-artwork"]["front_default"]    

        // Display On the DOM
        document.getElementById('name').innerText = `Name: ${capitalizeName(name)}`
        document.getElementById('type').innerText = `Type: ${capitalizeName(type)}`
        document.getElementById('abilities').innerText = `Abilities: ${capitalizeName(abilities)}`
        document.querySelector('img').src = image

    })
}

