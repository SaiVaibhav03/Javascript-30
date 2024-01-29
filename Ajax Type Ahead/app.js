const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const myinput = document.querySelector('.search')
const UL = document.querySelector('.suggestions')
const cities = []

// fetch(endpoint)
//     .then((res)=>{
//         const parseData = res.json();
//         return parseData
//     })
//     .then((parseData)=>{
//         cities.push(... parseData)
//     })
//     .catch((e)=>{
//         console.log(e)
//     })

async function myfunction(){
    try{
        const res = await fetch(endpoint)
        const parseData = await res.json()    
        cities.push(... parseData)
    }
    catch(e){
        console.log(e)
    }
}
myfunction()


// function deleteLIelements(){
//     const allLI = document.querySelectorAll('li');
//     allLI.forEach((eachElement)=>{
//         UL.removeChild(eachElement)
//     })
// }

// function addLIelements(suggestionData){
//     deleteLIelements();
//     suggestionData.forEach( eachElement => {
//         const newLI = document.createElement('li')
//         newLI.innerText = eachElement.city
//         UL.appendChild(newLI)
//     });
// }

function findMatching(inputWord){
    const suggestion = cities.filter((eachElement)=>{
        const pattern = new RegExp(inputWord, 'gi')
        if(eachElement.city.match(pattern) || eachElement.state.match(pattern)){
            return  eachElement
        }
    })
    return suggestion
}

function numberWithCommas(x){
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
function myinputEventListner(e){
    if(e.key === 'Backspace' && !myinput.value){
        return 
    }
    const data = myinput.value
    const suggestionData = findMatching(data)
    // addLIelements(suggestionData)
    const html = suggestionData.map((eachElement)=>{
        const pattern = new RegExp(data, 'gi')
        const cityName = eachElement.city.replace(pattern, `<span class='hl'>${data}</span>`)
        const stateName = eachElement.state.replace(pattern, `<span class='hl'>${data}</span>`)
        return `
            <li>
                <span class='name'>${cityName},${stateName}</span>
                <span class='population'>${numberWithCommas(eachElement.population)}</span>
            </li>
        `
    }).join('');
    UL.innerHTML = html

}

myinput.addEventListener('keyup', myinputEventListner)