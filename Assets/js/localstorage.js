let saveBtn = document.getElementById("save-button");
let txt = document.getElementById("item-input");
let ul = document.getElementById("ul")

function saveInput() {
    //save form data in object
    let lastItem = {
        item: txt.value.trim()
    };

    //save input to local storage as string
    localStorage.setItem("lastItem", JSON.stringify(lastItem));
}

function renderInput() {

    //covert text to JS object using json.parse
    let item = JSON.parse(localStorage.getItem("lastItem"));
    
    //check if data is returned, if not exit function
    if (item === !null) {
        document.getElementById("#saved-input").innerHTML = lastInput;
        let list = document.createElement("li");
        list.innerHTML = txt.value;
        ul.appendChild(list.innerHTML);
    } else {
        alert("Enter an item!!");
        return;
    }
}


saveBtn.addEventListener("click", function(event) {
    event.preventDefault;
    saveInput();
    renderInput();
} )

//init fucntion runs when page is loaded
// function init() {
//     // When the init function is executed, the code inside renderLastGrade function will also execute
//     renderInput();
// }
// init()

