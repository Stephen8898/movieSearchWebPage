$(document).ready(function(){
    //  var searchBar = $("#movieSearcher").val();

    $("#mainForm").submit(function(evt){
        // prevents page refreash
        evt.preventDefault(); 
    });
    $("#movieSearcher").keyup(function(event){
        var valueSearch = $("#movieSearcher").val();
        if(valueSearch.length > 3){
            $.ajax({
                type : "GET",
                url: "http://www.omdbapi.com/?apikey=74fa978f&",
                data:{
                    t: $("#movieSearcher").val()
                },
                dataType: "json",
                success: function(response){
                    $("#movie-title").html(response.Title);
                    $("#poster").attr("src", response.Poster);
                    $("#para").html(response.Plot);

                }

            })

        }
    })
});