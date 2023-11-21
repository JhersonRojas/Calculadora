var valor_dado = "";
var dato1 = "";
var dato2 = "";
var operacion = "";

function Asignar_uno() {
    valor_dado = document.getElementById("pantalla").value;
    document.getElementById("pantalla").value = valor_dado + 1;
}

function Asignar_dos() {
    valor_dado = document.getElementById("pantalla").value;
    document.getElementById("pantalla").value = valor_dado + 2;
}

function Asignar_tres() {
    valor_dado = document.getElementById("pantalla").value;
    document.getElementById("pantalla").value = valor_dado + 3;
}

function Asignar_cuatro() {
    valor_dado = document.getElementById("pantalla").value;
    document.getElementById("pantalla").value = valor_dado + 4;
}

function Asignar_cinco() {
    valor_dado = document.getElementById("pantalla").value;
    document.getElementById("pantalla").value = valor_dado + 5;
}

function Asignar_seis() {
    valor_dado = document.getElementById("pantalla").value;
    document.getElementById("pantalla").value = valor_dado + 6;
}

function Asignar_siete() {
    valor_dado = document.getElementById("pantalla").value;
    document.getElementById("pantalla").value = valor_dado + 7;
}

function Asignar_ocho() {
    valor_dado = document.getElementById("pantalla").value;
    document.getElementById("pantalla").value = valor_dado + 8;
}

function Asignar_nueve() {
    valor_dado = document.getElementById("pantalla").value;
    document.getElementById("pantalla").value = valor_dado + 9;
}

function Asignar_cero() {
    valor_dado = document.getElementById("pantalla").value;
    document.getElementById("pantalla").value = valor_dado + 0;
}

function Asignar_suma() {
    dato1 = document.getElementById("pantalla").value;
    valor_dado = "";
    document.getElementById("pantalla").value = "";
    operacion = "suma";
}

function Asignar_resta() {
    dato1 = document.getElementById("pantalla").value;
    valor_dado = "";
    document.getElementById("pantalla").value = "";
    operacion = "resta";
}

function Asignar_multi() {
    dato1 = document.getElementById("pantalla").value;
    valor_dado = "";
    document.getElementById("pantalla").value = "";
    operacion = "multiplicacion";
}

function Asignar_division() {
    dato1 = document.getElementById("pantalla").value;
    valor_dado = "";
    document.getElementById("pantalla").value = "";
    operacion = "division";
}

function Asignar_igual() {
    dato2 = document.getElementById("pantalla").value;

    if (operacion == "suma") {
        document.getElementById("pantalla").value =
            parseFloat(dato1) + parseFloat(dato2);
    }

    if (operacion == "resta") {
        document.getElementById("pantalla").value =
            parseFloat(dato1) - parseFloat(dato2);
    }

    if (operacion == "multiplicacion") {
        document.getElementById("pantalla").value =
            parseFloat(dato1) * parseFloat(dato2);
    }

    if (operacion == "division") {
        document.getElementById("pantalla").value =
            parseFloat(dato1) / parseFloat(dato2);
    }
}

function Asignar_reset() {
    dato1 = 0;
    dato2 = 0;
    document.getElementById("pantalla").value = "";
}