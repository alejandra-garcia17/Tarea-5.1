class Ejercicios{

    // 1. Presentar un mensaje N veces
    Ejercicio1(){
        // console.log("mensaje desde tarea")
        debugger;
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
            if (c % numBase === 0) {
                mult = mult + c + "<br>";
            }
            cont=cont+1;
        }
        r.innerHTML = mult;
    }

    // 4. Presentar los numeros Positivos de N numeros

    
    


}

let ope = new Ejercicios()