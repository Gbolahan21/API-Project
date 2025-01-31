// fetch('https://api.thecatapi.com/v1/images/search')
//     .then(res => res.json())
//     .then(data => {
//         console.log(data[0].url)
//         document.querySelector('img').src = data[0].url
//     })
//     .catch(err => {
//         console.log(`error ${err}`)
//     })

//  fetch('https://v2.jokeapi.dev/joke/Programming')
//     .then(res => res.json())
//     .then(data => {
//         console.log(data.joke)
//         document.querySelector('h2').innerText = data.joke
//     })
//     .catch(err => {
//         console.log(`error ${err}`)
//     })

document.querySelector('#choiceBtn').addEventListener('click', getNasa)

function getNasa() {
    let choiceInput = document.querySelector('#choice').value.toLowerCase()
    let url = `https://api.nasa.gov/planetary/apod?api_key=LBnQckBZn2PvVhzVycdM6Egv1dqTtDfOSBbTbAmg&date=${choiceInput}`

    fetch (url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.media_type === 'video') {
                document.querySelector('iframe').src = data.url
                document.querySelector('h2').innerText = data.explanation
            }
            else if(data.media_type === 'image'){
                document.querySelector('img').src = data.hdurl
                document.querySelector('h2').innerText = data.explanation
            }
            else {
                return null
            }
        })
        .catch(err => {
            console.log(err)
        })
}

document.querySelector('#drinkBtn').addEventListener('click', getDrink)

function getDrink() {
    const fetchDrink = document.querySelector('#drinkIndex').value.toLowerCase()
    fetch (`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${fetchDrink}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('h3').innerText = data.drinks[0].strDrink
    })
    .catch(err => {
        console.log(err)
    })
}
