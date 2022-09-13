/*  see the name 
    see the image 
    see the type
    moves - abilities 

*/
    

document.getElementById("button").addEventListener("click", getfetch)
// Capitalize Function
function capitalizeName(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)

    /*
    data.name.charAt(0).toUpperCase() + data.name.slice(1)

    slice(startIndex, endIndex) // slice(0,3) Dit does not include the last  
    slice(1) itto
    D + itto
    */
}

// array = data.abilities

function abilityMaker(skillsData /* data */){
    const abilityArr = skillsData.abilities // array   
    // skillsData ===  data
    

    const ul = document.getElementById("abilities")
    ul.innerText = ""
    for (let i = 0; i < abilityArr.length; i++) {
        let li = document.createElement('li')
        ul.appendChild(li).innerText = `Ability ${i+ 1}: ${abilityArr[i].ability.name}`
        //  abilityArr[i].ability.name === data.abilities[i].ability.name
        // Abilit 1 : Stone 
    }
}
//const abilities = data.abilities[0].ability.name

// Ability i:  limber abilityArr[i].ability.name
//   document.getElementById('type').innerText = `Type: ${capitalizeName(type)}`

// limber => Ability 1: Limber
// innterText = limber 
// innerText = Ability 1: Lim

const userInput = document.querySelector('input').value.toLowerCase()

async function getfetch(){
    try {
    const userInput =  document.querySelector('input').value.toLowerCase()
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${userInput}`) 


    const data = await response.json() 

        console.log(data)

        console.log(data.abilities[0].ability.name.abilities)
        //setting const variable equal to grabbed API data
        const name = data.name


        const type = data.types[0].type.name  

        
        const image = data.sprites.othgit er["official-artwork"]["front_default"] 

        
        const abilities = data.abilities[0].ability.name
        
        // array = data.abilities 
        //for loop 

        // innerText = ability.name
      
        // Display On the DOM
        // document.getElementById('name').innerText = `Name: ${capitalizeName(name)}`
        document.getElementById('name').innerText = `Name: ${capitalizeName(name)}`

        document.getElementById('type').innerText = `Type: ${capitalizeName(type)}`

        document.querySelector('img').src = image
        
        abilityMaker(data)
        /*
        Ability 1 : Limber 
        Ability 2: Imposter 
        */

        //const abilities = data.abilities[0].ability.name
    } catch(error) {
        //console.log("Harman is eating yummy food"
        const userInput = document.querySelector('input').value.toLowerCase()
        document.querySelector('h1').innerHTML = `Error: ${userInput} not Harman`

        document.getElementById('type').innerText = ""

        document.getElementById('abilities').innerText = ""

        document.getElementById('image').src = 'https://pbs.twimg.com/profile_images/1491205677183815681/SmH0imWH_400x400.jpg'
    }
}
















