// THE GOAL OF THIS PROJECT WAS TO CREATE A MAD LIBS GAME USING ARRAYS AND CONNECTING HTML CODE WITH P5JS AND SO FORTH
// I WANTED A RELIVANT STORY TO PROTRAY SOMETHING THAT THE CLASS COULD RECOGNIZE AND BE FUNNY SO I CHOSE THE COVID STORY ABOUT CONN GOING REMOTE BECAUSE IT IS FIRMILAR TO ALL OF US AND FUNNY TO RE CREATE!
// THE BIGGEST STRUGGLE WAS GETTING THE DIFFERENT CLASSES TO ACTIVATE WHEN THE FAKE IT BUTTON WAS PRESSED, BUT EVENTUALY I FIGURED OUT HOW TO CONNECT IT 
// IN THE FUTURE I WOULD LIKE TO ADD MORE GRAPHICS AND MAKE THE SITE MORE INTERACTIVE

//THIS IS THE CLICKED FUNCTION THAT I PUT IN USING THE NEW CODE

$(document).ready(function () {
    $("p").click(changeParStyle);

    function changeParStyle() {
        $(this).addClass("clicked");
    }
});

//CODE FOR CREATING ARRAYS
var nounArray = ["bird", "monkey", "camel", "flip flop", "bunny", "apple", "saucer", "iguana", "tiger", "mouse", "bannana", "firework"]

var nameArray = ["librarians", "jedis", "Kardashians", "gossip girls", "chess players", "puppies", "politicians", "aliens", "influencers", "artists", "pelicans"]

var adjArray = ["fantastic", "ugly", "unpleasing", "beautiful", "horrific", "life threatenting", "boring", "stellar"]

var verbArray = ["running", "singing", "flying", "swimming", "celebrating"]

var locArray = ["disneyworld", "castles", "caves", "bars", "space shuttles", "ragers", "roller coasters", "breakdancing club"]

// NOW ADD IS CLICKED FOR EACH CLASS

$(document).ready(function () {


    $("button").click(function () {
        $(".noun").each(function () {
            var randomIndex = Math.floor(Math.random() * nounArray.length);
            $(this).text(nounArray[randomIndex]);
        });

    });

    $("button").click(function() {
        $(".name").each(function() {
            var randomIndex = Math.floor(Math.random() * nameArray.length);
            $(this).text(nameArray[randomIndex]);
        });
        
    });

    $("button").click(function() {
        $(".adj").each(function() {
            var randomIndex = Math.floor(Math.random() * adjArray.length);
            $(this).text(adjArray[randomIndex]);
        });
        
    });

    $("button").click(function() {
        $(".verb").each(function() {
            var randomIndex = Math.floor(Math.random() * verbArray.length);
            $(this).text(verbArray[randomIndex]);
        });
        
    });

    $("button").click(function() {
        $(".location").each(function() {
            var randomIndex = Math.floor(Math.random() * locArray.length);
            $(this).text(locArray[randomIndex]);
        });
        
    });
});



