
function contaOggetti (arraydioggetti) {
    let contatore = 0;
    arraydioggetti.forEach(element => {
        contatore++;
    });

    return contatore
}

export {contaOggetti}