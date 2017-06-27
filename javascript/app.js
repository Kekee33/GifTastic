"Use Strict"

var topics = ["Bugs Bunny", "Mickey Mouse", "Simba", "Pokemon", "Gumball", "Clarence", 
				"Spongebob", "Goku", "Peppa Pig", "Casper"];

      
    function displayToons() {

    var toon = $(this).attr("data-name");
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=cartoons&api_key=dc6zaTOxFJmzC&limit=5&rating=pg";

    $.ajax({
    url: queryURL,
    method: "GET"
    }).done(function(response) {
    console.log(response);
    console.log(response.data[0].url);    
    $("#toon-view").append(response.data[0].url);  
    
    renderButtons();  
  
    });
    }

    function renderButtons() {

     $("#buttons-view").empty();

        for (var i = 0; i < topics.length; i++) {

          var a = $("<button>");
          
          a.addClass("toon");
          
          a.attr("data-name", topics[i]);
          
          a.text(topics[i]);
          
          $("#buttons-view").append(a);
        }
      }

      $("#add-toon").on("click", function(event) {
        event.preventDefault();

        var toons = $("#toon-input").val().trim();

        
        topics.push(toons);
        console.log(topics)

        
        renderButtons();
      });

      $(document).on("click", ".toon", displayToons);

      
      renderButtons();