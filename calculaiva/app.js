
const formulario = document.querySelector("#formulario");

//crear el evento
formulario.addEventListener( "submit", validarFormulario )


//Funcion para calcular los porcentajes correspondientes segun problema planteado.
function validarFormulario(e){
    e.preventDefault();
    const nombre = document.querySelector("#nombre").value
    const edad = document.querySelector("#edad").value
    const compra = document.querySelector("#compra").value
    const genero = document.querySelector('input[name="genero"]:checked').value
    const desmujerMay = (compra*24/100);
    const desmujerMen = (compra*22/100);
    const desHombMay = (compra*23.5/100);
    const desHombMen = (compra*20.5/100);
    const desHombreIva = (compra*19/100);
    const tope = 200000;

    //F > 19 = 24%
    //F < 19 = 22%
    //M > $200,000 && EDAD>23 = 23.5%
    //M > $200,000 && EDAD<23 = 20.5%
    //M < $200,000 && EDAD NO IMPORTA YA 19%

     if(genero == "Femenino" && edad > 19){
        alert('Su descuento es de: $'+desmujerMay + '  Pesos' );
        document.getElementById("respuesta5").innerHTML = "► $ "+ desmujerMay + " Pesos";
        document.getElementById("respuesta6").innerHTML = "Total a pagar: $"+(compra-desmujerMay)+" Pesos";
        
    } else if(genero == "Femenino" && edad < 19){
        alert('Su descuento es de: $'+desmujerMen + '  Pesos' );
        document.getElementById("respuesta5").innerHTML =  "► $ "+ desmujerMen + " Pesos";
        document.getElementById("respuesta6").innerHTML = "Total a pagar: $"+(compra-desmujerMen)+" Pesos";
       
    }else if(genero == "Masculino" && compra > tope && edad > 23){
        alert('Su descuento es de: '+desHombMay + '  Pesos');
        document.getElementById("respuesta5").innerHTML = "► $ "+ desHombMay + " Pesos";
        document.getElementById("respuesta6").innerHTML = "Total a pagar: $"+(compra-desHombMay)+" Pesos";

    }else if(genero == "Masculino" && compra > tope && edad < 23){
        alert('Su descuento es de: '+desHombMen  + '  Pesos');
        document.getElementById("respuesta5").innerHTML = "► $ "+  desHombMen + " Pesos";
        document.getElementById("respuesta6").innerHTML = "Total a pagar: $"+(compra-desHombMen)+" Pesos";

    }else{
        alert('Su descuento es de: '+desHombreIva  + '  Pesos');
        document.getElementById("respuesta5").innerHTML = "► $ "+  desHombreIva + " Pesos";
        document.getElementById("respuesta6").innerHTML = "Total a pagar: $"+(compra-desHombreIva)+" Pesos";
    }
    
   
    const respuesta = document.getElementById("respuesta");
    const respuesta2 = document.getElementById("respuesta2");
    const respuesta3 = document.getElementById("respuesta3");
    const respuesta4 = document.getElementById("respuesta4");
 
    
    respuesta.textContent = `Hola ${nombre} sus datos son:`                     
    respuesta2.textContent =  `► Edad: ${edad} años`
    respuesta3.textContent =  `► Compra SIN descuento: $${compra} Pesos` 
    respuesta4.textContent =  `► Usted tiene un descuento por: `
  
     
        
}



//numero entre 1 y 6
let dado = Number((Math.random() * 6).toFixed(0));
console.log(dado)