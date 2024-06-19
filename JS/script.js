class Ejercicios{
    // USO DE NÚMEROS

    // 1. Presentar un mensaje N veces
    Ejercicio1(){
        let n,r,c=1,msg="",m
        n = parseInt(document.getElementById("n").value)
        m = document.getElementById("msg").value
        r = document.getElementById("resultado")

        while (c <= n){
            msg = msg + m + "<br>"
            c=c+1
        }
        r.innerHTML = msg

    }

    // 2. Presentar numeros multiplos del 7 de 1 a N numeros
    Ejercicio2() {
        let num = parseInt(document.getElementById("n").value);
        let cont = 1, mul = "";
        let r = document.getElementById("resultado");

        while (cont <= num) {
            if (cont % 7 === 0) {
                mul = mul + cont + "<br>";
            }
            cont = cont + 1
        }
        r.innerHTML = mul;
    }

    // 3. Presentar numeros multiplos de cualquier numero hasta N
    Ejercicio3() {
        let numBase = parseInt(document.getElementById("numBase").value);
        let num = parseInt(document.getElementById("num").value);
       
        let cont = 1, mult = "";
        let r = document.getElementById("resultado");

        while (cont <= num) {
            if (cont % numBase === 0) {
                mult = mult + cont + "<br>";
            }
            cont=cont+1;
        }
        r.innerHTML = mult;
    }

    // 4. Presentar los numeros Positivos de N numeros
    Ejercicio4(){
        let num,r,c=1,posi=""
        num = parseInt(document.getElementById("n").value)
        r = document.getElementById("resultado")

        while (c <= num){
            if (num > 0){
            posi = posi + c + "<br>"
            }
            c=c+1
        }
        r.innerHTML = posi
    }

    // 5. Presentar los numero Pares de N numeros
    Ejercicio5(){
        let num,r,c=1,pares=""
        num = parseInt(document.getElementById("n").value)
        r = document.getElementById("resultado")

        while (c <= num){
            if (c % 2 === 0){
            pares = pares + c + "<br>"
            }
            c=c+1
        }
        r.innerHTML = pares
    }

    // 6. Presentar los divisores de cualquier numero. Ejem: num=6 divisores(1,2,3)
    Ejercicio6() {
        let num = parseInt(document.getElementById("num").value);
        let div = "", c = 1;
        let r = document.getElementById("resultado");

        while (c <= num) {
            if (num % c === 0) {
                div = div + c + "<br>";
            }
            c=c+1;
        }
        r.innerHTML = div
    }

    // 7. Presentar la tabla de sumar del 10 del 1 al 12 Ejemplo: (1+2=3 …12+2=14)
    Ejercicio7() {
        let resultado = document.getElementById("resultado");
        let tabla = "<h2>Tabla de Sumar del 10</h2>";
        let c = 1;
        
        while (c <= 12) {
            let suma = c + 10;
            tabla += c + " + 10 = " + suma + "<br>";
            c++;
        }
        resultado.innerHTML = tabla;
    }

    // 8. Presentar cualquier tabla de multiplicar desde un valor inicial a un valor final.
    Ejercicio8() {
        let num = parseInt(document.getElementById("num").value);
        let inicio = parseInt(document.getElementById("inicio").value);
        let final = parseInt(document.getElementById("final").value);
        let r = document.getElementById("resultado");
        let tabla = `<h2>Tabla de Multiplicar del ${num}</h2>`;
        let c = inicio;
        
        while (c <= final) {
            let resul = c * num;
            tabla += `${num} x ${c} = ${resul}<br>`;
            c++;
        }
        r.innerHTML = tabla;
    }

    // 9. Presentar los numeros comprendidos entre dos numeros
    Ejercicio9() {
        let numInicio = parseInt(document.getElementById("inicio").value);
        let numFinal = parseInt(document.getElementById("final").value);
        let r = document.getElementById("resultado");

        let numeros = "<h2>Números comprendidos entre " + numInicio + " y " + numFinal + ":</h2>";
        let c = numInicio + 1; 
        
        while (c < numFinal) { 
            numeros += c + "<br>";
            c++;
        }
        r.innerHTML = numeros;
    }

    // 10. Presentar los numeros pares comprendidos entre dos numeros
    Ejercicio10() {
        let numInicio = parseInt(document.getElementById("inicio").value);
        let numFinal = parseInt(document.getElementById("final").value);
        let r = document.getElementById("resultado");
    
        let numPares = "<h2>Números Pares comprendidos entre " + numInicio + " y " + numFinal + ":</h2>";
        let c = numInicio + 1; 
        
        while (c < numFinal) { 
            if (c % 2 === 0) {
                numPares += c + "<br>";
            }
            c++;
        }
        r.innerHTML = numPares;
    }

    // USO DE ARREGLOS

    // 11. Ingresar datos en un arreglo: Crea un programa que permita al usuario
    // ingresar 5 números en un arreglo y luego imprima todos los números
    Ejercicio11() {
        let arreglo = [];

        for (let i = 1; i <= 5; i++) {
         let num = document.getElementById(`num${i}`).value;
         if (num!== "") {
         arreglo.push(Number(num));
        }
       }
    document.getElementById("resultado").innerHTML = `Los números ingresados son: ${arreglo.join(", ")}`;
    }

    // 12. Números pares: Crea un programa que permita al usuario ingresar 10 números
    // en un arreglo y luego imprima solo los números pares.
    Ejercicio12() {
        let arreglo, num, c = 0, par = "", cad="",r
        cad = document.getElementById("numeros").value // "12;10;20"
        arreglo = cad.split(",")// ["12","10","20"]
        //                           0     1   2 length=3

        if (arreglo.length !== 10) {
            document.getElementById("resultado").innerHTML = "<p>Por favor, ingresa exactamente 10 números.</p>";
            return;
        }

        while (c < arreglo.length){
            num = parseInt(arreglo[c])
            if (num % 2 == 0){
                par = par + num + "<br>"
            }
            c = c + 1
        }
        r = document.getElementById("resultado")
        r.innerHTML = par
    }

    // 13. Suma de los elementos: Crea un programa que permita al usuario ingresar 8
    // números en un arreglo y luego imprima la suma de todos los números
    Ejercicio13() {
        let cad = document.getElementById("numeros").value;
        let arreglo = cad.split(",");
        let suma = 0, c = 0, r;
    
        if (arreglo.length !== 8) {
            document.getElementById("resultado").innerHTML = "<p>Por favor, ingresa exactamente 8 números.</p>";
            return;
        }
    
        while (c < arreglo.length) {
            let num = parseFloat(arreglo[c]);
            suma = suma + num;
            c = c + 1;
        }
        r = document.getElementById("resultado");
        r.innerHTML = "La suma de los números es: " + suma;
    }

    // 14. Promedio de los elementos: Crea un programa que permita al usuario ingresar
    // 6 números en un arreglo y luego imprima el promedio de los números.
    Ejercicio14() {
        let cad = document.getElementById("numeros").value;
        let arreglo = cad.split(",");
        let suma = 0, c = 0, r, promedio;
    
        if (arreglo.length !== 6) {
            document.getElementById("resultado").innerHTML = "<p>Por favor, ingresa exactamente 6 números.</p>";
            return;
        }
    
        while (c < arreglo.length) {
            let num = parseFloat(arreglo[c]);
            suma = suma + num;
            c = c + 1;
        }
    
        promedio = suma / arreglo.length;
    
        r = document.getElementById("resultado");
        r.innerHTML = "El promedio de los números es: " + promedio;
    }
    
    // 15. Mayor y menor número: Crea un programa que permita al usuario ingresar 7
    // números en un arreglo y luego imprima el mayor y el menor número.
    Ejercicio15() {
        let cad = document.getElementById("numeros").value;
        let arreglo = cad.split(",");
        let mayor, menor, c = 0, r;
    
        if (arreglo.length !== 7) {
            document.getElementById("resultado").innerHTML = "<p>Por favor, ingresa exactamente 7 números.</p>";
            return;
        }
    
        mayor = menor = parseFloat(arreglo[0]);
    
        while (c < arreglo.length) {
            let num = parseFloat(arreglo[c]);
            if (num > mayor) {
                mayor = num;
            }
            if (num < menor) {
                menor = num;
            }
            c = c + 1
        }
        r = document.getElementById("resultado");
        r.innerHTML = "El mayor número es: " + mayor + "<br>El menor número es: " + menor;
    }

    // 16. Números positivos y negativos: Crea un programa que permita al usuario
    // ingresar 10 números en un arreglo y luego imprima los números positivos y
    // negativos por separado
    Ejercicio16() {
        let cad = document.getElementById("numeros").value;
        let arreglo = cad.split(",");
        let positivos = "", negativos = "", c = 0, r;
    
        if (arreglo.length !== 10) {
            document.getElementById("resultado").innerHTML = "<p>Por favor, ingresa exactamente 10 números.</p>";
            return;
        }
    
        while (c < arreglo.length) {
            let num = parseFloat(arreglo[c]);
            if (num >= 0) {
                positivos = positivos + num + "<br>";
            } else {
                negativos = negativos + num + "<br>";
            }
            c = c + 1
        }
    
        r = document.getElementById("resultado");
        r.innerHTML = "<strong>Positivos:</strong><br>" + positivos + "<br><strong>Negativos:</strong><br>" + negativos;
    }

    // 17. Contar ocurrencias de un número: Crea un programa que permita al usuario
    // ingresar 10 números en un arreglo y luego pregunte al usuario por un número
    // específico, e imprima cuántas veces aparece ese número en el arreglo.
    Ejercicio17() {
        let cad = document.getElementById("numeros").value;
        let arreglo = cad.split(",");
        let numeroEspecifico = parseFloat(document.getElementById("numeroEspecifico").value);
        let ocurrencias = 0, c = 0, r;
    
        if (arreglo.length !== 10) {
            document.getElementById("resultado").innerHTML = "<p>Por favor, ingresa exactamente 10 números.</p>";
            return;
        }
    
        while (c < arreglo.length) {
            let num = parseFloat(arreglo[c]);
            if (num === numeroEspecifico) {
                ocurrencias = ocurrencias + 1;
            }
            c = c + 1;
        }
    
        r = document.getElementById("resultado");
        r.innerHTML = "El número " + numeroEspecifico + " aparece " + ocurrencias + " veces en el arreglo.";
    }

    // 18. Números en orden inverso: Crea un programa que permita al usuario ingresar 5
    // números en un arreglo y luego imprima los números en orden inverso.
    Ejercicio18() {
        let cad = document.getElementById("numeros").value;
        let arreglo = cad.split(",");
        let resul = "", c = arreglo.length - 1, r;
    
        if (arreglo.length !== 5) {
            document.getElementById("resultado").innerHTML = "<p>Por favor, ingresa exactamente 5 números.</p>";
            return;
        }
    
        while (c >= 0) {
            let num = parseFloat(arreglo[c]);
            resul = resul + num + "<br>";
            c = c - 1;
        }
    
        r = document.getElementById("resultado");
        r.innerHTML = "Números en orden inverso:<br>" + resul;
    }

    // 19. Elementos mayores que un valor dado: Crea un programa que permita al
    // usuario ingresar 8 números en un arreglo y luego pregunte al usuario por un
    // valor específico, e imprima todos los números en el arreglo que sean mayores
    // que ese valor
    Ejercicio19() {
        let cad = document.getElementById("numeros").value;
        let arreglo = cad.split(",");
        let valorEspecifico = parseFloat(document.getElementById("valorEspecifico").value);
        let mayores = "", c = 0, r;
    
        if (arreglo.length !== 8) {
            document.getElementById("resultado").innerHTML = "<p>Por favor, ingresa exactamente 8 números.</p>";
            return;
        }
    
        while (c < arreglo.length) {
            let num = parseFloat(arreglo[c]);
            if (num > valorEspecifico) {
                mayores = mayores + num + "<br>";
            }
            c = c + 1;
        }
    
        r = document.getElementById("resultado");
        r.innerHTML = "Números mayores que " + valorEspecifico + ":<br>" + mayores;
    }

    // 20. Encontrar duplicados: Crea un programa que permita al usuario ingresar 10
    // números en un arreglo y luego imprima todos los ceros.
    Ejercicio20() {
        let cad = document.getElementById("numeros").value;
        let arreglo = cad.split(",");
        let ceros = "", c = 0, r;
    
        if (arreglo.length !== 10) {
            document.getElementById("resultado").innerHTML = "<p>Por favor, ingresa exactamente 10 números.</p>";
            return;
        }
    
        while (c < arreglo.length) {
            let num = parseFloat(arreglo[c]);
            if (num === 0) {
                ceros = ceros + num + "<br>";
            }
            c = c + 1;
        }
    
        r = document.getElementById("resultado");
        r.innerHTML = "Ceros en el arreglo:<br>" + ceros;
    }

    // USO DE CADENAS

    // 21. Ingresar y mostrar cada carácter: Crea un programa que permita al usuario
    //ingresar una cadena y luego imprima cada carácter de la cadena en una línea
    // diferente
    Ejercicio21() {
        let cadena = document.getElementById("cadena").value;
        let caracteres = "", c = 0, r;
    
        while (c < cadena.length) {
            caracteres = caracteres + cadena[c] + "<br>";
            c = c + 1;
        }
    
        r = document.getElementById("resultado");
        r.innerHTML = "Cada carácter de la cadena en una línea:<br>" + caracteres;
    }

    // 22. Contar vocales: Crea un programa que permita al usuario ingresar una cadena y
    // luego cuente e imprima el número de vocales en la cadena.
    Ejercicio22() {
        let cadena = document.getElementById("cadena").value.toLowerCase();
        let numVocales = 0;
        const vocales = ['a', 'e', 'i', 'o', 'u'];
    
        for (let caracter of cadena) {
            if (vocales.includes(caracter)) {
                numVocales++;
            }
        }
    
        let mensaje = `Número de vocales en la cadena: ${numVocales}`;
        let respuesta = document.getElementById("resultado");
        respuesta.textContent = mensaje;
    }

    // 23. Mostrar caracteres en posiciones pares: Crea un programa que permita al
    //usuario ingresar una cadena y luego imprima los caracteres en las posiciones
    // pares de la cadena.
    Ejercicio23() {
        let cadena = document.getElementById("cadena").value;
        let caracteresPares = "", c = 1; 
    
        for (let i = c; i < cadena.length; i += 2) {
            caracteresPares += cadena[i] + "<br>";
        }
    
        let mensaje = `Caracteres en posiciones pares:<br>${caracteresPares}`;
        let respuesta = document.getElementById("resultado");
        respuesta.innerHTML = mensaje;
    }

    // 24. Convertir a mayúsculas: Crea un programa que permita al usuario ingresar una
    // cadena y luego imprima cada carácter en mayúsculas.
    Ejercicio24() {
        let cadena = document.getElementById("cadena").value;
        let cadenaMayusculas = cadena.toUpperCase();
    
        let mensaje = `Cadena en mayúsculas:<br>${cadenaMayusculas}`;
        let respuesta = document.getElementById("resultado");
        respuesta.innerHTML = mensaje;
    }

    // 25. Contar palabras: Crea un programa que permita al usuario ingresar una cadena
    // y luego cuente e imprima el número de palabras en la cadena. (Una palabra se
    // define como cualquier secuencia de caracteres separados por un espacio.)
    Ejercicio25() {
        let cadena = document.getElementById("cadena").value;
        let numPalabras = 0;
        let i = 0;
    
        // Usamos un bucle while para contar las palabras
        while (i < cadena.length) {
            // Ignoramos los espacios iniciales
            while (i < cadena.length && cadena[i] === ' ') {
                i++;
            }
    
            // Si encontramos un carácter no espacio, incrementamos el contador de palabras
            if (i < cadena.length && cadena[i] !== ' ') {
                numPalabras++;
            }
    
            // Ignoramos el resto de la palabra actual
            while (i < cadena.length && cadena[i] !== ' ') {
                i++;
            }
        }
    
        let mensaje = `Número de palabras en la cadena: ${numPalabras}`;
        let respuesta = document.getElementById("resultado");
        respuesta.textContent = mensaje;
    }

    // 26. Presentar el primer carácter: de una cadena las veces que indica la longitud 
    // de la cadena
    Ejercicio26() {
        let cadena = document.getElementById("cadena").value.trim();
        let primerCaracter = cadena.charAt(0);
        let longitud = cadena.length; 
    
        let resul = "";
        for (let i = 0; i < longitud; i++) {
            resul += primerCaracter;
        }
    
        let mensaje = `El primer carácter "${primerCaracter}" es repetido ${longitud} veces: ${resul}`;
        let respuesta = document.getElementById("resultado");
        respuesta.textContent = mensaje;
    }

    // 27. Invertir la cadena: Crea un programa que permita al usuario ingresar una
    // cadena y luego imprima la cadena invertida
    Ejercicio27() {
        let cadena = document.getElementById("cadena").value;
        let cadenaInvertida = "";
    
        for (let i = cadena.length - 1; i >= 0; i--) {
            cadenaInvertida += cadena[i];
        }
    
        let mensaje = `Cadena invertida: ${cadenaInvertida}`;
        let respuesta = document.getElementById("resultado");
        respuesta.textContent = mensaje;
    }

    // 28. Frecuencia de caracteres: Crea un programa que permita al usuario ingresar
    // una cadena y luego cuente e imprima la frecuencia del ultimo carácter en la
    // cadena.
    Ejercicio28() {
        let cadena = document.getElementById("cadena").value.trim();
        let ultimoCaracter = cadena.charAt(cadena.length - 1);
    
        let frecuencia = 0;
        for (let i = 0; i < cadena.length; i++) {
            if (cadena.charAt(i) === ultimoCaracter) {
                frecuencia++;
            }
        }
    
        let mensaje = `Frecuencia del último carácter "${ultimoCaracter}": ${frecuencia}`;
        let respuesta = document.getElementById("resultado");
        respuesta.textContent = mensaje;
    }

    // 29. Contar caracteres: Crea un programa que permita al usuario ingresar una
    // cadena y luego la recorra para contar cuantos caracteres tiene la cadena.
    Ejercicio29() {
        let cadena = document.getElementById("cadena").value.trim();
        let numCaracteres = cadena.length;
    
        let mensaje = `Número de caracteres en la cadena: ${numCaracteres}`;
        let respuesta = document.getElementById("resultado");
        respuesta.textContent = mensaje;
    }

    // 30. Eliminar espacios: Crea un programa que permita al usuario ingresar una
    // cadena y luego imprima todos los caracteres menos los espacios.
    Ejercicio30() {
        let cadena = document.getElementById("cadena").value;
        let cadenaSinEspacios = cadena.replace(/\s/g, '');
    
        let mensaje = `Cadena sin espacios: ${cadenaSinEspacios}`;
        let respuesta = document.getElementById("resultado");
        respuesta.textContent = mensaje;
    }
}

let ope = new Ejercicios()