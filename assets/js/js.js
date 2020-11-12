// GIVEN a weather dashboard with form inputs

// create main button to save data---------------------------------------------------------------//
var btnMain = $("#btnMain");
btnMain.on('click', saveToStorage);

// FUNCTION for saving to storage----------------------------------------------------------------//
function saveToStorage(event) {
    event.preventDefault();

    // text area data stored to a variable
    let cityWritten = $(this).parent('div').parent('div').children('input')
    // localStorae.setItem()
}

// Variable for button listener for all rendered cities------------------------------------------//
var btnCities = $("")


// FUNCTION to display cities from Saved data----------------------------------------------------//

    // 5 day forecast
// api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}

    // main forecast for city
// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

    // UV index, needs Lat/Long from our main weather forcast
// http://api.openweathermap.org/data/2.5/uvi?lat={lat}&lon={lon}&appid={API key}
