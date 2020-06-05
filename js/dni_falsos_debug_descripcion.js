/*
    --------------------------
        Variables Globales
    --------------------------
*/

var ayuda = "¿Necesitas ayuda?";

// letra invariable de referencia para saber la letra de un número DNI
const Letra_DNI = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X",
                    "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K",
                    "E", "T",];

//variable recibida por la función "resto"
var resto_dni=0;
var si ='si';
var no ='no';


/*
    ----------------
        Funciones
    ----------------
*/






function verificación_imput (dni_extraido, letra_caracter)
    {
        // Se comprueba si existe un error al introducir el DNI
        if (dni_extraido <= 0 || dni_extraido === "") 
            {
                alert("ERROR!!! Vuelve a intentarlo");
                return;
            }



        var resultado_resto = dni_extraido % (Letra_DNI.length-1);
        //alert(resultado_resto);
        

        //Comparamos le letra introducida con el letra real que debe ser
        if (letra_caracter === Letra_DNI[resultado_resto])
            {
                alert("Si corresponde la letra con su numero de DNI");
            }
        else   
            {
                alert("No corresponde la letra con su numero de DNI");
            }

        
            

        
    
    }










/*
    -----------------------------------
        Main - Desarrollo principal
    -----------------------------------
*/


/* Adquisición de datos (imput) del DOM */    

var nombre = document.getElementById("nombre");
var numero_dni = document.getElementById("dni");

var btn_entrar = document.getElementById("boton_entrar");


btn_entrar.addEventListener("click",function()
    {
        //alert(nombre.value);              // Debug imput "nombre"
        //alert(numero_dni.value);          // Debug imput "numero de dni"
        
        let letra_introducida_imput = numero_dni.value.substr(-1);    // La letra siempre estara en la posición 9
        //alert(letra_introducida_imput);                            // Debug : si extrae ultima "letra"    
        
        // aseguramos que le letra sea mayuscula
        var letra_mayuscula = letra_introducida_imput.toUpperCase();
        alert(letra_mayuscula);  

        //convertimos el string en un "number"
        var numero_dni_imput = parseInt(numero_dni.value, 10);
        //alert(numero_dni_imput);                  // Debg  del numero dni

        verificación_imput(numero_dni_imput,letra_mayuscula);



    });