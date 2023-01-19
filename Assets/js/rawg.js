

//establish API key and general API call
const key = "f292e982be664ec2994676e290830bc7"
const apiKey = "https://api.rawg.io/api/platforms?token&key=" + key;

const platformButtonEl = document.querySelectorAll(".bttn")
console.log(platformButtonEl)
     for(let i = 0; i < platformButtonEl.length; i++) {
        platformButtonEl.item(i).addEventListener("click", getAPIdata)
     }
     
  
  
  
  //write function that calls Rawg API data for all platforms (note hardcoding api Key as string literal and apiKey const wasn't working)
  function getAPIdata(){
    const selectedPlatform = this.textContent;
    fetch(apiKey)

    //have it report to console log
      .then(function(response){
        return response.json()
      })
      .then(function(data){
        console.log(data)
      
      
    //   single out noted specific consoles based on html class to generate that list    
      for(let i = 0; i < data.results.length; i++){
          console.log(data.next)
          if(data.results[i].name == selectedPlatform){

            let html ="";
            for (let j = 0; j < data.results[i].games.length; j++ ){

                let gameData = data.results[i].games[j];

                html += '<div class="card game-list" onclick="gameListClick(' + gameData.id + ', ' + gameData.name + ')" data-id="' + gameData.id + '" data-gname="' + gameData.name + '" >'
                html += '<h3 class="card-header">' + gameData.name + '</h3></div>'
                  
                  
                  
                }
                //have list pop in app under Showing Card (repos-container)
                document.getElementById("repos-container").innerHTML = html;
                const gameListBTN = document.querySelectorAll(".game-list")

                // doing a quick for loop through each button created for each game -- element = i in a for loop
                gameListBTN.forEach((element) => element.addEventListener("click",gameListClick))
                
                
                break;
            }
        }
        
        
    })
};
    




//add items on list to LS
function gameListClick(){
    var gameid = this.getAttribute("data-id")
    var gameName = this.getAttribute("data-gname")
    console.log("Game",gameid)
    
    var storedGameList = JSON.parse(localStorage.getItem("entertainment")) || []
    storedGameList.push({id:gameid, game:gameName})
    localStorage.setItem("entertainment", JSON.stringify(storedGameList))
}

  



            



      






    
























