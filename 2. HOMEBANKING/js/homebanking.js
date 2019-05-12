//Declaración de variables
var nombreUsuario = "mi loco";
var saldoCuenta = 1000;
var agua = 350;
var telefono = 425;
var luz = 210;
var internet = 570;
limiteExtraccion = 20000;
var codigoSeguridad = "1111";
iniciarSesion()


//FUNCIONES DINERO
function sumarDinero(dineroSumado) {
    saldoCuenta += dineroSumado;
    console.log(saldoCuenta)
}
function restarDinero(dineroRestado) {
    saldoCuenta -= dineroRestado;
    console.log(saldoCuenta)
}

function billetesDe100(dineroARestar) {
    if (dineroARestar % 100 != 0) {
        alert("No tenemos monedas ni billetes chicos nene, podemos darte solo billetes de $100.\nProba ingresando un multiplo de 100.")
    }
}

function disminucionSaldo(dineroARestar) {
    if (dineroARestar > limiteExtraccion && dineroARestar > saldoCuenta) {
        alert("Alto ahi " + nombreUsuario + ", podes sacar solo hasta $" + limiteExtraccion + ", pero ademas ni siquiera tenes tanta moneda en la cuenta.\nProba de nuevo con menos de $" + saldoCuenta)
    }
    else if (dineroARestar > limiteExtraccion) {
        alert("Alto ahi " + nombreUsuario + ", podes sacar solo hasta $" + limiteExtraccion + ", proba de nuevo con otro monto.")
    }
    else if (dineroARestar == agua || dineroARestar == internet || dineroARestar == luz || dineroARestar == telefono) {
        restarDinero(dineroARestar);
        actualizarSaldoEnPantalla();
    }
    else if (dineroARestar % 100 != 0) {
        alert("No tenemos monedas ni billetes chicos nene, podemos darte solo billetes de $100.\nProba ingresando un multiplo de 100.")
    }
    else if (dineroARestar < saldoCuenta) {
        restarDinero(dineroARestar);
        alert("Te cuento, " + nombreUsuario + ":\nExtrajiste: $" + dineroARestar + "\nComo antes tenias $" + (saldoCuenta + dineroARestar) + "\nAhora te quedaron (sumo aca, me llevo una..)... unos flamantes $" + saldoCuenta);
        actualizarSaldoEnPantalla();
    }
    else if (dineroARestar == saldoCuenta) {
        restarDinero(dineroARestar);
        alert("Te cuento, " + nombreUsuario + ":\nSacaste todo lo que tenias y por lo tanto te quedaste bien crocante. No te quedo nada en la cuenta.");
        actualizarSaldoEnPantalla();
    }
    else {
        alert("Te cuento, " + nombreUsuario + ":\nTu nivel de sequia no te permite sacar esa plata, porque no la tenes.\nProba con un monto menor que sea acorde a tu pobreza. Es decir, $" + saldoCuenta + " o menos.")
    }

}


//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function () {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}


//Funciones que tenes que completar
function cambiarLimiteDeExtraccion(nuevoLimite) {
    nuevoLimite = parseInt(prompt("¿En cuánta guita pisamos el freno " + nombreUsuario + "?", "Monto"));
    limiteExtraccion = nuevoLimite;
    alert("Te cuento, " + nombreUsuario + ":\nTu nuevo limite de extraccion va a ser de: $" + nuevoLimite)
    actualizarLimiteEnPantalla()
}

function extraerDinero(dineroARestar) {
    dineroARestar = parseInt(prompt("Decime ¿cuanto guita querés sacar " + nombreUsuario + "?", "Monto"));
    disminucionSaldo(dineroARestar)
}

function depositarDinero(dineroADepositar) {
    dineroADepositar = parseInt(prompt("Ingresa la moneda que querés dejar debajo de este colchón virtual " + nombreUsuario, "Monto"));
    sumarDinero(dineroADepositar);
    alert("Te cuento, " + nombreUsuario + ":\nDepositaste: $" + dineroADepositar + "\nComo antes tenias $" + (saldoCuenta - dineroADepositar) + "\nAhora te quedaron (sumo aca, me llevo una..)... unos flamantes $" + saldoCuenta);
    actualizarSaldoEnPantalla();
}

var nombreServicio;
function pagarServicio(servicioAPagar) {
    servicioAPagar = prompt("Ingresa el numero correspondiente al servicio a pagar: \n1- Agua\n2- Luz\n3- Telefono\n4- Internet")
    if (servicioAPagar == null) {
        alert("Hasta la proxima " + nombreUsuario);
    }
    else {
        switch (servicioAPagar) {
            case "1":
                servicioAPagar = agua;
                nombreServicio = "AGUA";
                break;
            case "2":
                servicioAPagar = luz;
                nombreServicio = "LUZ";
                break;
            case "3":
                servicioAPagar = telefono;
                nombreServicio = "TELEFONO";
                break;
            case "4":
                servicioAPagar = internet;
                nombreServicio = "INTERNET";
                break;
            default:
                alert("Ese no es un servicio válido " + nombreUsuario);
                break;
        }
        if (servicioAPagar > saldoCuenta) {
            alert("Te cuento, " + nombreUsuario + ":\nTu nivel de sequia no te permite realizar esa operacion porque no tenes la suficiente moneda.\nProba con una operacion de monto menor que sea acorde a tu pobreza. Es decir, $" + saldoCuenta + " o menos.")
        }
        else {
            disminucionSaldo(servicioAPagar);
            alert("Bueno " + nombreUsuario + ", ya pagaste tu factura de " + nombreServicio + " por $" + servicioAPagar + "\nComo antes tenias $" + (saldoCuenta + servicioAPagar) + "\nAhora le podes agradecer a la quita de subsidios que te quedaron $" + saldoCuenta)
        };
    }
}

var cuentaAmiga1 = "123456";
var cuentaAmiga2 = "7654321";

function transferirDinero(dineroATransferir) {
    dineroATransferir = parseInt(prompt("Decime " + nombreUsuario + ", cuánto querés transeferir?"));
    if (dineroATransferir > saldoCuenta) {
        alert("Te cuento, " + nombreUsuario + ":\nTu nivel de sequia no te permite realizar esa operacion porque no tenes la suficiente moneda.\nProba con un monto menor que sea acorde a tu pobreza. Es decir, $" + saldoCuenta + " o menos.")
    }
    else {
        cuentaATransferir = prompt("Bueno " + nombreUsuario + ", a que cuenta 'amiga' le queres transferir la moneda?")
        if (cuentaATransferir != cuentaAmiga1 && cuentaATransferir != cuentaAmiga2) {
            alert("Te cuento, " + nombreUsuario + ":\nParece que te equivocaste, porque no tenemos registrado el numero de cuenta que ingresaste. Solo podes transferir la plata a una cuenta 'amiga'. Proba de nuevo.")
        }
        else {
            restarDinero(dineroATransferir);
            actualizarSaldoEnPantalla();
            alert("Bueno " + nombreUsuario + ", transferiste $" + dineroATransferir + " a la cuenta " + cuentaATransferir);
        }
    }
}


function iniciarSesion(codigo) {
    codigo = prompt("A ver " + nombreUsuario + ", vamos a asegurarnos que sos vos.\nIngresa tu codigo de seguridad:")
    if (codigo != codigoSeguridad) {
        alert("Ese no es el codigo pillo.\nNo vas a poder hacer nada.")
        saldoCuenta = 0;
    }
    else {
        alert("Bienvenido " + nombreUsuario + ".\nAca esta toda tu plata para que hagas lo que quieras.")
    }

}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}