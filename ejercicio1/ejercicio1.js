let butEnviarOnClick = function(){
    console.log("click")
}
let main = function(){
    let butEnviar = document.getElementById("but_enviar")
    butEnviar.addEventListener("click",butEnviarOnClick)
}
main()