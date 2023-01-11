//  function comics () {
 
//  //fetch request for comics from API
//  fetch('https://gateway.marvel.com/v1/public/comics?ts=1&apikey=edeef70bcb85a7b1d24cbec22d4ae7d4&hash=4210b3cb502a39ad299a252758911801')

//  //then function that returns the API call into json
//  .then(function (response) {
//  return response.json()
//  })
//  //then it turns the json response into a variable "data"
//  .then(function (data) {
//      console.log(data)
//      let comics = []

//         for (let i = 0; i < 20; i++) {

//             comics.push(data.data.results[i].title) 
//             console.log(comics)

//         }


//     })
//  }; comics ()


//  function characters () {

//  //fetch request for characters from API
//  fetch('https://gateway.marvel.com/v1/public/characters?ts=1&apikey=edeef70bcb85a7b1d24cbec22d4ae7d4&hash=4210b3cb502a39ad299a252758911801')

//  //then function that returns the API call into json
//  .then(function (response) {
//  return response.json()
//  })
//  //then it turns the json response into a variable "data"
//  .then(function (data) {
//      console.log(data) 
//      let characters = []

//      for (let i = 0; i < 20; i++) {

//          characters.push(data.data.results[i].name) 
//          console.log(characters)

//      }
//     })
// }; characters ()





function series () {
    //fetch request fpr series from API
    fetch('https://gateway.marvel.com/v1/public/series?ts=1&apikey=edeef70bcb85a7b1d24cbec22d4ae7d4&hash=4210b3cb502a39ad299a252758911801')
   
    //then function that returns the API call into json
    .then(function (response) {
    return response.json()
    })
    //then it turns the json response into a variable "data"
    .then(function (data) {
        console.log(data)
        let series = []

             for (let i = 0; i < 20; i++) {
        
                 series.push(data.data.results[i].title) 
                 console.log(series)
             }
       })
   }; series ()
