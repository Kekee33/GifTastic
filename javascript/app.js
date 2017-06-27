"Use Strict"

var topics = ["Bugs Bunny", "Mickey Mouse", "Simba", "Pokemon", "Gumball", "Clarence", 
				"Spongebob", "Goku", "Peppa Pig", "Casper"];

      
    function displayToons() {

    var movie = $(this).attr("data-name");
    var queryURL = "http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC";

    $.ajax({
    url: queryURL,
    method: "GET"
    }).done(function(response) {
    $("#movies-view").html(JSON.stringify(response));
    renderButtons();
    });
    }