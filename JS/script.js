class Ejercicios{

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
    
    
    
    
    
    

    

    
    


}

let ope = new Ejercicios()