/*------------------- Anonymous functions     --------------------*/ 
/*
function(){
    alert("Hey i'm anonymous");
}
*/

var myAnony = function(){console.log("Mr. Anonymous");}

//This declared function takes in a anonymous function in its parameter
//This runs another function.
function thisFunc(takesInAfunction){
" this calls to " + takesInAfunction();
}

//Anonymous function is being used as an argument
thisFunc(myAnony);

/*------------------------------------------------*/

$.ajax({
    url:"js/file.json",
    success: function(d){
        console.log(d.people[2]);
    }
});

a = JSON.parse('{"ip": "192.74.49.4.122","country_code": "US", "phoneCode": "1"}')

console.log(a.phoneCode);
// $.ajax({
//     type: "GET",
//     url: "https://gist.githubusercontent.com/mshafrir/2646763/raw/8b0dbb93521f5d6889502305335104218454c2bf/states_hash.json",
//     success: function(d){
//         console.log(d);
//     }
// })

$(document).ready(function(){

    $("#btn").click(function(){
        $.ajax({
            type: "GET",
            url: "js/file.json",
            success: function(d){
                for(var i = 0; i < 51; i++){
                $('table').append("/tr><tr><td>" + d.states[i]+ "</td><td>NY</td> </tr>");
                }
        }
        })


    })
   
});
