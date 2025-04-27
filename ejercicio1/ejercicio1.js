let butEnviarOnClick = function(){
    let inputNombe = document.getElementById("nombre")
    let inputCorreo = document.getElementById("correo")
    let textAreaMensaje = document.getElementById("mensaje")
    let divAreaMensajes = document.getElementById("area_mensajes")
    //1.Verificar si todas las cajas de texto tienen valores
    if(inputNombe.value == "" || 
       inputCorreo.value == "" ||
       textAreaMensaje.value ==""
    ){
            console.error("Deben ingresar todos los campos")
            divAreaMensajes.innerText = "Deben ingresar todos los campos"
            return
    }
    //2.Verificar el formato el correo (@ y .)
    if(!inputCorreo.value.includes("@") || 
       !inputCorreo.value.includes(".")
    ){
        console.error("Error en el formato de email")
        divAreaMensajes.innerText = "Error en el formato de email"
        return
    }
    //3. Pintar que se envio correctamente
    console.log("Se envio correcamente")
    divAreaMensajes.innerText = "Se envio correcamente"
}
let main = function(){
    let butEnviar = document.getElementById("but_enviar")
    butEnviar.addEventListener("click",butEnviarOnClick)
}
main()