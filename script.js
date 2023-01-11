

const apiKey = "f292e982be664ec2994676e290830bc7";
fetch(`https://rawg.io/api/games?token&key=${apiKey}`)
  .then(res => res.json())
  .then(data => console.log(data))
  


//set up RAWG API and call it
// const button = document.getElementById('button-id');

// button.addEventListener('click', function () {
    fetch('https://rawg.io/api/games?token&key=f292e982be664ec2994676e290830bc7')
        .then(function (result) {
            return result.json () 

            
        })
        .then(function (data) {
            console.log(data);
        });
// });






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















