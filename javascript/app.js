"Use Strict"

var topics = ["Bugs Bunny", "Mickey Mouse", "Simba", "Pokemon", "Gumball", "Clarence", 
        "Spongebob", "Goku", "Peppa Pig", "Casper"];

      
    function displayToons() {

    //var toon = $(this).attr("data-name");
    var text =$(this).text().toLowerCase();
    var queryURL = 'https://api.giphy.com/v1/gifs/search?key=dc6zaTOxFJmzC&limit=10&rating=pg&q=' + text;
    
    $.ajax({
    url: queryURL,
    method: "GET"
    }).done(function(response) {
    console.log(response);
    renderButtons();  
    
    $(".gifs").empty();

    $.getJSON(queryURL, function(json) {
    json.data.forEach(function(gif) {
      var still_image = gif.images.downsized_still.url;
      var animated = gif.images.downsized.url;
      $('.gifs').append(
        '<div class="gif" data-animated="' + animated + '" data-still="' + still_image + '">' +
          '<img src="' + still_image + '">' +
        '</div>'
      );
    });
    
    
    $('.gifs .gif').mouseenter(function() {
      var gif = $(this);
      gif.find('img').attr('src', gif.attr('data-animated'));
    })
    .mouseleave(function() {
      var gif = $(this);
      gif.find('img').attr('src', gif.attr('data-still'));
    });
  });
}) 

    };
    

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

    