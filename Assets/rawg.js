const apiKey = "f292e982be664ec2994676e290830bc7";
const platformButtonEl = document.querySelectorAll(".class-pc")
platformButtonEl.forEach(element => element.addEventListener("click",getAPIdata))

fetch(`https://rawg.io/api/games?token&key=${apiKey}`)
  .then(res => res.json())
  .then(data => console.log(data));

fetch('https://rawg.io/api/games?token&key=f292e982be664ec2994676e290830bc7')
  .then(function (response) {
    return response.json ()
      
    })
  .then(function (data) {
      console.log(data);
  });







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

function gameListClick(){
    var gameid = this.getAttribute("data-id")
    var gameName = this.getAttribute("data-gname")
    console.log("Game",gameid)
    var storedGameList = JSON.parse(localStorage.getItem("entertainment")) || []
    storedGameList.push({id:gameid, game:gameName})
    localStorage.setItem("entertainment", JSON.stringify(storedGameList))
}

  



            



      






    









//   const apiKey = "f292e982be664ec2994676e290830bc7";
//   fetch(`https://rawg.io/api/games?token&key=${apiKey}`)
//     .then(res => res.json())
//     .then(data => console.log(data))


// const apiKey = "f292e982be664ec2994676e290830bc7";
// fetch(`https://rawg.io/api/games?token&key=${apiKey}`)
//   .then(res => res.json())
//   .then(data => console.log(data))
  


// //set up RAWG API and call it
// // const button = document.getElementById('button-id');

// button.addEventListener('click', function () {
    // function pc (){
    // fetch('https://api.rawg.io/api/platforms=0?token&key=${apiKey}')
    //     .then(function (result) {
    //         return result.json () 
    //         })
    //     .then(function (data) {
    //         console.log(data);
    //     })
    // }; pc ()

    // function ps (){
    // fetch('https://rawg.io/games/playstation4/api/games?token&key=f292e982be664ec2994676e290830bc7')
    //     .then(function (result) {
    //         return result.json () 
    //         })
    //     .then(function (data) {
    //         console.log(data);
    //     })
    // }; ps ()

    // function xbox (){
    //     fetch('https://rawg.io/games/xbox/api/games?token&key=f292e982be664ec2994676e290830bc7')
    //         .then(function (result) {
    //             return result.json () 
    //             })
    //         .then(function (data) {
    //             console.log(data);
    //         })
    //     }; xbox ()








//call API for each console for top 30 games/items to display as a div list








//have results show in an ol




//form Wishlist of selected items that get sent to local.storage
// button = document.getElementById('<Game on Top 30 List>');

// button.addEventListener("click",(event)=> {
//     event.preventDefault() 
  
//     const wishlist = localStorage.getItem("<item on wishlist>");
//     ...
//   });





//















