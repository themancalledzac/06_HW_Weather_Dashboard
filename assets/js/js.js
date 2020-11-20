    // ---------------------------------------------- CURRENT CODE----------------------------------------------------------------//


// Global Variables------------------------------------------------------------------------------//
    //--1. Main button, 2. input, 3. List of Cities searched , 4. weatherAPI key-------------//
    var btnMain = $('#btnMain');
    var cityInput = $('#citiesInput');
    var cityList = $('#citiesList');
    var weatherAPI = ("d72f1a4bff52ece19272994df97781f7");
    var fivedayAPI = ("305d10ba9b33ae5a8b09b43025d5b77f");
    var cityArray = [];




    // FUNCTION handleSearch-------------------------------------------------------------------------//
    //  1. Is city Real? Start Loading data in background------------------------------------//
    //  2. If not a real city? Let User know-------------------------------------------------//
    //  3. line24 is our first API search----------------------------------------------------//
function mainWeatherDisplay( city ) {

    var city = cityInput.val().toLowerCase();
    var weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + weatherAPI;
    console.log(weatherURL);
    //  AJAX for getting data--------------------------------------------------------------------//
    $.ajax({
        url: weatherURL,
        method: "GET"
      }).then(function(response) {
        console.log(response)

        var mainTemp = Math.ceil(response.main.temp);
        $("#mainTemp").text("Temperature: " + mainTemp + " F");

        var humidity = (response.main.humidity);
        $("#humidity").text("Humidity: " + humidity + "%");

        var windSpeed = (response.wind.speed);
        $("#windSpeed").text("Wind Speed: " + windSpeed + "MPH");

        console.log(response.main.temp);
        // $(".data1").text("Temperature: " + response.main.temp + "F");
        // $(".data1").text("Humidity: " + response.main.humidity + "%");
        // $(".data1").text("Wind Speed: " + response.wind.speed + "mph");
        // only if the city is valid data
        // if city already exists in arraay
        // Create button, append 
        // add to array
        // save to storage

    });

};


function fiveDayWeatherDisplay( city ) {

    var city = cityInput.val().toLowerCase();
    var fiveDayURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=" + fivedayAPI;
    console.log(fiveDayURL);
    //  AJAX for getting data--------------------------------------------------------------------//
    $.ajax({
        url: fiveDayURL,
        method: "GET"
      }).then(function(response) {
        console.log(response);



    });

};


function cityArray() {

    // when click happens, wipe cityArray, and repopulate with localStorage data
    // call storageAside function
};





function storageAside( city ) {

    // for loop to go through all cityArray
    for (let i = 0; i < city.length; i++) {
        var cities = city[i];

        var cityEl = $("<li id='cities' class='list-group-item d-flex justify-content-between 1h-condensed displayNone'>").text(cities);
        $("#citiesList").prepend( cityEl );

        console.log(cities);


        // create list element with id: "cty" + [i];
        // $("#citiesList").prepend(
        //     $("<div/>", {
        //     "id": city,
        //     "class": "list-group-item d-flex justify-content-between 1h-condensed displayNone",
        //     "text":  city ,
        //     }
        // ));
    };
    
};

// Button Handler--------------------------------------------------------------------------------//
    //  1. handleSearch: To verify city is real, in system, and can move forward-------------//
    //  2. saveToStorage: To save data to local storage string-------------------------------//
    btnMain.on('click', function(event) {
        event.preventDefault();
        var city = $("#citiesInput").val().trim();
        $("#cityTitle").text( city );
        mainWeatherDisplay( city );
        fiveDayWeatherDisplay( city );
        storageAside( city );
        localStorage.setItem( 'cityArray', JSON.stringify(city));
        console.log(city)
    });
