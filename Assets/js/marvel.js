let listGroup = document.querySelector('#repos-container')

function comics () {
    let comicsBtn = document.getElementById('comics')
    comicsBtn.addEventListener(`click`, () =>{

            //fetch request for comics from API
            fetch('https://gateway.marvel.com/v1/public/comics?ts=1&apikey=edeef70bcb85a7b1d24cbec22d4ae7d4&hash=4210b3cb502a39ad299a252758911801')
       
            // /then function that returns the API call into json
            .then(function (response) {
            return response.json()
            })

            //then it turns the json response into a variable "data"
            .then(function (data) {
                console.log(data)
       
                //  let linkBack = data.attributionHTML
                //  console.log(linkBack)
       
                //list of empty arrays established for later use
                let comics = []
                //    let images = []          
       
                for (let i = 0; i < 20; i++) {
                             
                   if ( data.data.results[i].title !== undefined) {       
                    comics.push(data.data.results[i].title)
                    console.log(comics)                
                   } 

                   let comicsList = comics[i]

                   let repoEl = document.createElement('div');
                   repoEl.classList = 'list-item flex-row justify-space-between align-center';

                   var titleEl = document.createElement('span');
                   titleEl.textContent = comicsList;

                   repoEl.appendChild(titleEl)
                   listGroup.appendChild(repoEl)
       
                }

                // for (let i = 0; i < 20; i++) {       
                 
                //     if ( data.data.results[i].images[0] !== undefined) {
    
                //      images.push(data.data.results[i].images[0].path)
                //         console.log(images)
    
                //     }
    
    
                // }
       
       
            })


    })
 
}; comics ()


function series () {

let seriesBtn = document.getElementById('series')
seriesBtn.addEventListener(`click`, () =>{

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
        
                 if ( data.data.results[i].title !== undefined) {

                    series.push(data.data.results[i].title) 
                    console.log(series)
    
                   } 
    
                   let seriesList = series[i]
    
                   let repoEl = document.createElement('div');
                   repoEl.classList = 'list-item flex-row justify-space-between align-center';
    
                   var titleEl = document.createElement('span');
                   titleEl.textContent = seriesList;
    
                   repoEl.appendChild(titleEl)
                   listGroup.appendChild(repoEl)
    
             }
       })
   });
 } series ()

 

function characters () {
    let characterBtn = document.getElementById('characters')
    characterBtn.addEventListener(`click`, () =>{


        //fetch request for characters from API
        fetch('https://gateway.marvel.com/v1/public/characters?ts=1&apikey=edeef70bcb85a7b1d24cbec22d4ae7d4&hash=4210b3cb502a39ad299a252758911801')

        //then function that returns the API call into json
        .then(function (response) {
        return response.json()

        })

        //then it turns the json response into a variable "data"
        .then(function (data) {
            console.log(data) 
            let characters = []

            for (let i = 0; i < 20; i++) {

            if ( data.data.results[i].name !== undefined) {       

                characters.push(data.data.results[i].name) 
                console.log(characters)

               } 

               let charactersList = characters[i]

               let repoEl = document.createElement('div');
               repoEl.classList = 'list-item flex-row justify-space-between align-center';

               var titleEl = document.createElement('span');
               titleEl.textContent = charactersList;

               repoEl.appendChild(titleEl)
               listGroup.appendChild(repoEl)

            

            }
        })
    });
} characters ()





