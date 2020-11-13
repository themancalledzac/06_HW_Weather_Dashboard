// GIVEN a weather dashboard with form inputs

// create main button to save data---------------------------------------------------------------//
var btnMain = $("#btnMain");
btnMain.on('click', saveToStorage);
var weatherAPI = ("d72f1a4bff52ece19272994df97781f7");
var cityArray = [];

// $('.cities.children:empty').hide();
// For loop for the saved search cities
for (let i = 1; i <= 8; i++) {
    //---------------DIV ID = '#hour-" + 1;"-----------------------------------------------------//
    var elementId = $("#cty" + i);
    $(elementId).attr('data-key', i);
    //---------------DIV ID 
    // if city text is empty, don't show element, NOT SURE THIS IS CORRECT
    if (elementId.text === null) {
        $(elementId).hide();
    }
    // console.log(elementId);
};






// FUNCTION for saving to storage----------------------------------------------------------------//
function saveToStorage(event) {
    event.preventDefault();

        // Need a pointer so that every button click moves the data to the next cty1/cty2, etc---//
        cityPointer = "";

        // Do I need a for loop so every cityInput saves to the NEXT cty1/cty2, etc?
        // text area data stored to a variable
        let cityInput = $(this).parent('div').parent('div').parent('form').next().children('li').data('time');
        let value = $(this).parent('div').parent('div').children('input').val();
        // 1 push into array
        // 2 JSONIFYING array
        // 3 push JSONIFIED ARRAY into localStorage
        localStorage.setItem(cityArray, value);
        console.log(cityInput);
    savedCity();

};


// Saving to JSONIFIED array

// FUNCTION to add city name to each city element

// pull from localstorage
// un-stringify(parse) data
// loop over array


function savedCity() {
    for (let ii=1; ii <= 8; ii++) {
        let savedData = localStorage.getItem('cty' + ii);
        $(`#cty${ii}`).text(savedData)
    
    };
};
// Calls function so that reloading page will show saved cities.
savedCity();

// Variable for button listener for all rendered cities------------------------------------------//
var btnCities = $("")


// FUNCTION to display cities from Saved data----------------------------------------------------//

// for (let ii=1; ii <= 8; ii++) {
//     let savedData = localStorage.getItem('cty' + ii);
//     $(`#cty${ii}`).text(savedData)

// };



    // 5 day forecast
// api.openweathermap.org/data/2.5/forecast?q={USER INPUT}&appid={API key}

    // main forecast for city
// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

    // UV index, needs Lat/Long from our main weather forcast
// http://api.openweathermap.org/data/2.5/uvi?lat={lat}&lon={lon}&appid={API key}

// 2 separate calls

$("")


function handleSearch() {
    // specifically handling callback function and click
    makeWeatherRequest( search );
};


function makeWeatherRequest( search ) {
    
    $.ajax( queryURL ).then(function( response ) {

        // START rendering data to HTML

        // THEN get the lat and lng out of the 'response' object

        // make variables for lat and for lng

        // NEXT call makeOneCallRequest and pass in the lat and lng.


    });

};


function makeOneCallRequest( lat, lon ) {

    // next, we need to build the URL for the first API request
    //
};

// what is the data I NEED to make this work ----------------------------------------------------//

console.log(localStorage);






document.getElementById("MyElement").classList.add('d-flex');

document.getElementById("MyElement").classList.remove('displayNone');