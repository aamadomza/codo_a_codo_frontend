const importeTicket = 1000;

function inicializarValores() {

    console.log("Inicializa Valores");

    putValue("ticket-cantidad", 1);

    document.getElementById("ticket-valor").innerHTML = importeTicket ;

}

function ticketCalculaTotal() {

    let porcentajeDescuento = document.getElementById("descuento").value;

    let ticketCant = document.getElementById("ticket-cantidad").value;

    let importeTicketConDescuento = importeTicket - (importeTicket * porcentajeDescuento / 100);
    let importeTotal = importeTicketConDescuento * ticketCant;

    putValue("muestra-resultado", importeTotal);

}


function putValue(elementId, valueToPut) {

    const elemento = document.getElementById(elementId);

    elemento.nodeType

    if ( elemento ) {
    
        elemento.value = valueToPut;

    } else {
    
        alert("No Existe ElementId(" + elementId + ")");
    
    }

}

function comprarTicket(){
    alert("Compraste tu ticket");
}


