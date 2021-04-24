const API_KEY = 'b15ae133a3c70b65373849d6da9a5b8a'

async function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    let names = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou"
    ]

    if(names.includes(inputText)) {
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Dallas&appid='+API_KEY)
        const data = response ? await response.json() : null

        if (data) {
            alert("Welcome, Captain! The weather in " + data.name + " is " + data.weather[0].description)
        } else {
            alert("Welcome, Captain!")
        }
    }
}

export { checkForName }
