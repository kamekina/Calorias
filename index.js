const botaozinho = document.getElementById("mudar")
let pageMode = "light" 
const bodystyle = document.getElementById("corpo")



botaozinho.addEventListener("click", changeMode);


function changeMode(){
    if(pageMode =="light"){
        pageMode = "dark";
        botaozinho.className = "darkbutton"
        bodystyle.className = "dark"
    } else{
        pageMode= "light";
        botaozinho.className="lightbutton"
        bodystyle.className="ligth"
    }
}
