var Capturar = function(){
    let lstNumero = document.getElementsByClassName("precioProducto"),
        arrayPrecios = [];         
    for (var i = 0; i < 10; i++) {    
        arrayPrecios[i] = parseInt(lstNumero[i].value); 
    }       

    let lstNumero2 = document.getElementsByClassName("nombreProducto"),
        arrayNombres = [];         
    for (var i = 0; i < 10; i++) {    
        arrayNombres[i] = lstNumero2[i].value;  
    }       

    console.log(arrayPrecios);

    console.log(arrayNombres);
    
    document.querySelector("div .informeProductos").innerHTML = arrayNombres;
    document.querySelector("div .informePedido").innerHTML = arrayPrecios;
        
    

    
    }