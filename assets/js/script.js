//variables

// var textFormEl = document.getElementById("gamesrch").value;
//var rawgDataObj = //rawg api
//var bestBuyDataObj = //best buy api
var submitButtonEl = document.querySelector("#input-group-button");
var rawgKey = "c43811ca668944d58cb70bb7abcca226";
var rawgObjArr = [];



//Search Function
submitButtonEl.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("button clicked!");
    getUserData();
    
});
    

var getUserData = function() {
    //gathers data entered into textFormEl
  var gameSearchData = document.getElementById("gamesrch").value;
  console.log(gameSearchData);
  saveSearch();
  //reset form fields for next task to be entered
  document.getElementById("gamesrch").value="";
};

//api data call 

var getApiData = function() {
    //format the api url 
    var gameApi = "https://api.rawg.io/api/games?search=super+mario+64&key=" + rawgKey;

    //make a request to URL
    fetch (gameApi).then(function(response) {
        console.log("check1");
        //request successful
        if (response.ok) {
            response.json().then(function(data) {
                console.log(data);
                for(var i = 0; i < 6; i++) {
                    console.log(data.results[i]);
                    if(data.results[i]) {
                        rawgObjArr[i] = data.results[i];
                    }
                }
                // displayResults(data);
            }); 
        }
        else {
            //possibly pull "similar games or related games from api"
        }
    })
    .catch(function(error) {
        //throw 404 page 
    });
}

//best buy data call 
var getBestBuyData = function() {
    //format api url
    var bestApi = "#";

    //make a request to the url
    fetch (bestApi).then(function(response) {
    //request successful
    if (response.ok) {
    response.json().then(function(data) {
    displayPrice(data);
    });
    }
     else {
                // display list item element saying "not available"
            }
        })
        .catch(function(error) {
            //throw 404 page
        });
    }

    //saves search data to local storage
    var saveSearch = function() {
        var gameName = document.getElementById("gamesrch").value;
        localStorage.setItem("search", JSON.stringify(gameName)); 

    }

    var loadHistory = function() {
        //get search history from localStorage
        var loadGame = document.getElementById("gamesrch").value;
        window.localStorage.getItem('loadGame');
        JSON.parse(window.localStorage.getItem(loadGame));
        //display value in container - max 3 previous searches
        console.log(loadGame);
        var prevSearchEl = document.getElementById("prev-search");
        

    };
    loadHistory();
   

getApiData();
// submitButtonEl.addEventListener("submit", getUserData);
