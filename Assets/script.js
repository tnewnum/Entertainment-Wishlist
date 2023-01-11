

const apiKey = "f292e982be664ec2994676e290830bc7";

//api call to identify platform id #'s
// fetch(`https://rawg.io/api/platforms?token&key=${apiKey}`)
//   .then(res => res.json())
//   .then(data => console.log(data))

fetch(`https://rawg.io/api/platforms=(0)?token&key=${apiKey}`)
    .then(res => res.json())
    .then(data => console.log(data))

fetch(`https://rawg.io/api/games?=2022-10-01,2023-01-01&ordering=-added?token&key=${apiKey}`)
    .then(res => res.json())
    .then(data => console.log(data))


      
















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















