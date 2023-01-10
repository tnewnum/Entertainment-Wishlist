 function marvel () {
 console.log("anything")

 let timestamp = new Date
 timestamp = timestamp.getTime()
 console.log(timestamp)


 //fetch request to the openweathermap API
 fetch('https://gateway.marvel.com/v1/public/comics?ts=1&apikey=edeef70bcb85a7b1d24cbec22d4ae7d4&hash=4210b3cb502a39ad299a252758911801')

 //then function that returns the API call into json
 .then(function (response) {
 return response.json()
 })
 //then it turns the json response into a variable "data"
 .then(function (data) {
     console.log(data) 
    })
 }; marvel ()
