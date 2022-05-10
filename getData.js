const getData = async () =>{  //Al colocar async la funcion se hace asincronica
    try {
        const respuesta = await fetch("./productos.json")  //Await: Espera una respuesta mediante la consulta que hacemos a traves de fetch a la ruta relativa
        const data = await respuesta.json(); 
        return data
    } catch (error) {
        console.log("Error", error); 
    }

}

export {getData} 