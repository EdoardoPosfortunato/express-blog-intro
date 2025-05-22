// console.log("ciao mondo")

import express from "express";
import fs from "fs";
import { contaOggetti } from "./functions.js";

// console.log(express);

const app = express(); // creazione dell'applicazione vera e propria

// console.log(app);

const port = 3000;

app.use(express.static("public"));

app.get('/', (req, res) => {
    res.send('server del mio blog');
})// questa parte è quello che rstituisce quando si interroga

    const postsJSON = fs.readFileSync("./data/posts.json")

    const onlyPosts = JSON.parse(postsJSON);  

    console.log(onlyPosts)
    
    const numeroDiPost = contaOggetti(onlyPosts)

app.get('/bacheca', (req, res) => {
    
    /*const posts = [
        {
            titolo: "I grandi classici della letteratura",
            contenuto: "Una panoramica sui capolavori della letteratura mondiale, dai tempi antichi ai giorni nostri.",
            immagine: "img/img1.jpg",
            tags: ["classici", "letteratura", "storia", "capolavori"]
        },
        {
            titolo: "Come scegliere il libro giusto per te",
            contenuto: "Consigli pratici per trovare il libro perfetto in base ai tuoi gusti e interessi.",
            immagine: "img/img2.jpg",
            tags: ["consigli", "lettura", "scelta", "hobby"]
        },
        {
            titolo: "I migliori thriller degli ultimi anni",
            contenuto: "Una selezione di thriller avvincenti da non perdere per gli amanti del mistero e del brivido.",
            immagine: "img/img3.jpg",
            tags: ["thriller", "mistero", "suspense", "libri"]
        },
        {
            titolo: "Libri di fantascienza che hanno fatto storia",
            contenuto: "Un viaggio tra i romanzi di fantascienza più influenti e innovativi.",
            immagine: "img/img4.jpg",
            tags: ["fantascienza", "scienza", "futuro", "classici"]
        },
        {
            titolo: "Romanzi d’amore senza tempo",
            contenuto: "Storie d’amore indimenticabili che hanno emozionato generazioni di lettori.",
            immagine: "img/img5.jpg",
            tags: ["romanzi", "amore", "emozioni", "classici"]
        }
    ]; */

    const posts = {
        titolo: "BLOG SUI LIBRI",
        post: onlyPosts,
        'numero di post': parseInt(numeroDiPost)

    }

    res.send(posts)

})



app.listen(port, () => {
    console.log("sto ascoltando")
}) // questa parte serve per fare in mdoo che il nostro PC che fa da server si metta in aspcolto