const Name=document.querySelector("#Name");
Name.addEventListener("input", function(event){
    console.log(event.target.value)
})
const button=document.querySelector("#send")

function sendButton(){
    console.log("se da click")
    console.log("Name", Name.value)
    if(Name.value){
        console.log("Validare")
    }else{
        Name.getElementsByClassName.border="2px solid red";
    }
}
button.addEventListener("click",sendButton)