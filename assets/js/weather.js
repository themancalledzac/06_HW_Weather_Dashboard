// ON OPENING PAGE
    // access user location?
    // run weather api function
        // this allows our user location to be the first weather they see, and keeps the webpage functional from the start.
    // run weather 3 day forcast function
    // run renderButtons function



// global variables
    // city array



// weather api function
    // save weather data to premade




// weather api 3 day forcast function
    //save weather data to premade cards.



// renderButtons function
    // takes city array data
    // deleting the movies prior to adding new movies
        // $("#buttons-view").empty();
    // loop through the cities array
    // dynamically generating butons for each movie in the array
        // var a = $("<button>");
          // Adding a class of movie-btn to our button
        // a.addClass("movie-btn");
          // Adding a data-attribute
        // a.attr("data-name", movies[i]);
          // Providing the initial button text
        // a.text(movies[i]);
          // Adding the button to the buttons-view div
        //$("#buttons-view").prepend(a);



// Click function
    //saves city data in city array
    // runs weather api function
    // runs weather 3dayforcast function
    // run renderButtons function



    // ---------------------------------------------- CURRENT CODE----------------------------------------------------------------//


// Global Variables------------------------------------------------------------------------------//
    //--1. Main button, 2. input, 3. List of Cities searched , 4. weatherAPI key-------------//
var btnMain = $('#btnMain');
var cityInput = $('#citiesInput');
var cityList = $('#citiesList');
var weatherAPI = ("d72f1a4bff52ece19272994df97781f7");
var cityArray = [];



// Button Handler--------------------------------------------------------------------------------//
    //  1. handleSearch: To verify city is real, in system, and can move forward-------------//
    //  2. saveToStorage: To save data to local storage string-------------------------------//
btnMain.on('click', mainWeatherDisplay);
btnMain.on('click', saveToStorage);


// FUNCTION handleSearch-------------------------------------------------------------------------//
    //  1. Is city Real? Start Loading data in background------------------------------------//
    //  2. If not a real city? Let User know-------------------------------------------------//
    //  3. line24 is our first API search----------------------------------------------------//
function mainWeatherDisplay() {

    var city = cityInput.val().toLowerCase();
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + weatherAPI;

    //  AJAX for getting data--------------------------------------------------------------------//
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response);

        // create a div to hold the temp
        var cityDiv = $("<div class='temp'>");

        // storing the rating data
        var tempDiv = response.main.temp;
        $(".data1").text("Temperature: " + response.main.temp + "F");
        $(".data1").text("Humidity: " + response.main.humidity + "%");
        $(".data1").text("Wind Speed: " + response.wind.speed + "mph");
        // only if the city is valid data
        // if city already exists in arraay
        // Create button, append 
        // add to array
        // save to storage

    });

};

// FUNCTIOn saveToStorage------------------------------------------------------------------------//
    //  1. Save data to local Storage--------------------------------------------------------//
    //  2. 
function saveToStorage() {

    localStorage.setItem('cityArray', JSON.stringify(cities));
};




// FUNCTION localStorageData---------------------------------------------------------------------//
    //  1. JSON parse of saved data
function localStorageData(){
    return JSON.parse(localStorage.getItem('cityArray'));
    // .concat method to concatonate into the array
    // spread instead
}


// FUNCTION for our cityList --------------------------------------------------------------------//
    //  1. Is our list empty? RETURN---------------------------------------------------------//
    //  2. 
function cityList() {
    var cityArray = getDataFromLocalStorage();
    //For loop to add LI to page

    // Add classes and attributes, along with .text for the cities Name

    // prepend to page

}


