let saveBtn = document.getElementById("save-button");
let text = document.getElementById("item-input");
let ul = document.getElementById("ul")


function saveInput() {

    saveBtn.addEventListener('click', function(event) {
        event.preventDefault()
      
        let item = []     
        item = text.value
        console.log(item)
        localStorage.setItem('item1', JSON.stringify(item))       
        }

        // for (i = 1; i < 10; i++) { 
        //     item = text.value[i]
        //     console.log(item)
        // localStorage.setItem('item1', JSON.stringify(item[i]))       
        // }
    
    )

}; saveInput()
  
function renderInput() {

    //covert text to JS object using json.parse
    let item = JSON.parse(localStorage.getItem("item1"));
    console.log(item)
    
    //check if data is returned, if not exit function
    if (item === !null) {
    
        let list = document.createElement("div");
        list.classList ='list-item flex-row justify-space-between align-center'
       

        var titleEl = document.createElement('span');
        titleEl.textContent = item;
       

        list.appendChild(titleEl)
        ul.appendChild(list)
        
    } 
}renderInput()


// saveBtn.addEventListener("click", function(event) {
//     event.preventDefault;
//     saveInput();
    
    
// } )
