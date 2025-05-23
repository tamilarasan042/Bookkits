var popupoverley=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopupbutton=document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){
        popupoverley.style.display = "block"
        popupbox.style.display = "block"
    })

    var closepopup=document.getElementById("close-popup")
    closepopup.addEventListener("click",function(event){
        event.preventDefault()
        popupoverley.style.display = "none"
        popupbox.style.display = "none"
    })

    var container=document.querySelector(".container")
    var addbook=document.getElementById("add-book")
    var booktitleinput=document.getElementById("book-title-input")
    var bookauthorinput=document.getElementById("book-author-input")
    var bookdescriptioninput=document.getElementById("book-description-input")

    addbook.addEventListener("click",function(event){
        event.preventDefault()
        var div=document.createElement("div")
        div.setAttribute("class","book-container")
        div.innerHTML=`<h2>${booktitleinput.value}</h2>
            <h5>${bookauthorinput.value}</h5>
            <p>${bookdescriptioninput.value}</p>
            <button onclick="deletebook(event)">Delete</button>`
        container.append(div)
        popupoverley.style.display = "none"
        popupbox.style.display = "none"
    })

    function deletebook(event)
    {
        event.target.parentElement.remove()
    }