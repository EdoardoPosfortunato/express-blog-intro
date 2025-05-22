// console.log("ciao mondo")

import express from "express";

// console.log(express);

const app = express(); // creazione dell'applicazione vera e propria

// console.log(app);

const port = 3000;

app.get('/', (req, res) => {
    res.send('ciao mondo');
}) // questa parte è quello che rstituisce quando si interroga

app.listen(port, () => {
    console.log("sto ascoltando")
}) // questa parte serve per fare in mdoo che il nostro PC che fa da server si metta in aspcolto