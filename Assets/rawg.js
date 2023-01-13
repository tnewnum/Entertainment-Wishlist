

//establish API key and general API call

const apiKey = "f292e982be664ec2994676e290830bc7";
const platformButtonEl = document.querySelectorAll(".class-pc")
platformButtonEl.forEach(element => element.addEventListener("click",getAPIdata))

// fetch(`https://rawg.io/api/games?token&key=${apiKey}`)
//   .then(res => res.json())
//   .then(data => console.log(data));

// fetch('https://rawg.io/api/games?token&key=f292e982be664ec2994676e290830bc7')
//   .then(function (response) {
//     return response.json ()
      
//     })
//   .then(function (data) {
//       console.log(data);
//   });





//write function that calls Rawg API data for all platforms
//have it report to console log
//single out noted specific consoles based on html class to generate that list
//have list pop in app under Showing Card (repos-container)

  function getAPIdata(){
    const selectedPlatform = this.textContent;
  fetch('https://api.rawg.io/api/platforms?token&key=f292e982be664ec2994676e290830bc7')
.then(res => res.json())
.then(data => {console.log(data)
    for(let i = 0; i < data.results.length; i++){
        console.log(selectedPlatform,data.results[i].name)
        if(data.results[i].name == selectedPlatform){
            let html =""
            for (let j = 0; j<data.results[i].games.length;j++ ){
                html += `
                <div class="card game-list" data-id="${data.results[i].games[j].id}" data-gname="${data.results[i].games[j].name}" >
                   <h3 class="card-header">${data.results[i].games[j].name}</h3>
                </div>
                `
            }
            document.getElementById("repos-container").innerHTML = html;
            const gameListBTN = document.querySelectorAll(".game-list")
            gameListBTN.forEach(element => element.addEventListener("click",gameListClick))
            break;
        }
    }

    
});

}

//add items on list to LS

function gameListClick(){
    var gameid = this.getAttribute("data-id")
    var gameName = this.getAttribute("data-gname")
    console.log("Game",gameid)
    var storedGameList = JSON.parse(localStorage.getItem("entertainment")) || []
    storedGameList.push({id:gameid, game:gameName})
    localStorage.setItem("entertainment", JSON.stringify(storedGameList))
}

  



            



      






    
























