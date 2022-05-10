let miFormulario = document.getElementById("formularioParaAsociarse"); 
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario (e){
    e.preventDefault();
    let formulario = e.target;  
    let nombre = document.getElementById("nombreCompleto");
    let emailContacto = document.getElementById("email-contacto");
    let nombreDeLaEmpresa = document.getElementById("nombre-empresa");
    
    let botonEnviar = document.getElementById("enviarForm");
    botonEnviar.addEventListener("click", () =>{
        Swal.fire({
            title: 'Estas a punto de enviar el formulario',
            text: "Te aseguraste de que los datos ingresados sean los correctos?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, enviar'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                `Estamos muy contentos de que ${nombreDeLaEmpresa.value} haya decidido formar parte de nuestra familia`,
                `A la brevedad nos estaremos comunicando via email a la siguiente casilla: "${emailContacto.value}"`,
                'success'
              )
            }
          })
    }); 

   
}

