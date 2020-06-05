/*
    --------------------------
        Variables Globales
    --------------------------
*/



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






function verificación_input (dni_verificar, letra_caracter)
    {
        // Se comprueba si existe un error al introducir el DNI
            if (dni_verificar <= 0 || dni_verificar === "") 
            {
                alert("ERROR!!! Vuelve a intentarlo");
                return;
            }


        // Calculamos el resto del numero introducido por teclado
        var resultado_resto = dni_verificar % (Letra_DNI.length-1);
        

        //Comparamos le letra introducida con el letra real que debe ser
            if (letra_caracter === Letra_DNI[resultado_resto])
                {
                    alert(`La letra "${letra_caracter}" del numero "${dni_verificar}" , SI CORRESPONDE  a la letra de su numero de DNI`);
                    
                }
            else   
                {
                    alert(`La letra "${letra_caracter}" del numero "${dni_verificar}" , NO CORRESPONDE  a la letra de su numero de DNI`);
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


// Funcion que se ejecuta luego del click
btn_entrar.addEventListener("click",function()
    {
        let letra_introducida_imput = numero_dni.value.substr(-1);    // La letra siempre estara en la posición 9
        // aseguramos que le letra sea mayúscula
        var letra_mayuscula = letra_introducida_imput.toUpperCase();

        //convertimos el string en un "number"
        var numero_dni_imput = parseInt(numero_dni.value, 10);

        //llamamos a una funcion para verifcar los datos introducidos y si la letra corresponde al DNI
        verificación_input(numero_dni_imput,letra_mayuscula);



    });

