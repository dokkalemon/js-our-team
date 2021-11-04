/* 
Ricreiamo le card del nostro team aggiungendo al layout di base fornito 
(allegato sotto) il nostro JavaScript in cui:
- Creiamo il nostro array di oggetti che rappresentano ciascun membro del team. 
Ogni membro dovrà avere le informazioni necessarie per stampare la relativa 
card: Nome, Ruolo e Foto.
- Prendendo come riferimento il layout di esempio presente nell’html, stampiamo 
tutte le card del nostro team.
- Utilizziamo poi gli input presenti nella pagina per permettere all’utente di 
aggiungere nuovi membri del team.
Inserire a inizio del file JavaScript una sezione di commento dove scrivere gli 
step richiesti di logica in italiano, per aiutarvi a ragionare prima della stesura
 del codice.
*/


//Creazione di un array i oggetti
const teams = [
    {
        img: 'wayne-barnett-founder-ceo.jpg',
        name: 'Wayne Barnet',
        role: 'Founder & CEO',
    },
    {
        img: 'angela-caroll-chief-editor.jpg',
        name: 'Angela Caroll',
        role: 'Chief Editor',
    },
    {
        img: 'walter-gordon-office-manager.jpg',
        name: 'Walter Gordon',
        role: 'Office Manager',
    },
    {
        img: 'angela-lopez-social-media-manager.jpg',
        name: 'Angela Lopez',
        role: 'Social Media Manager',
    },
    {
        img: 'scott-estrada-developer.jpg',
        name: 'Scott Estrada',
        role: 'Developer',
    },
    {
        img: 'barbara-ramos-graphic-designer.jpg',
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
    },   
];

console.log(teams);

//Referenze HTML
const teamCont = document.querySelector('.team-container');

for (let i = 0; i < teams.length; i++) {

    //Aggiungiamo un div con classe team-card
    const teamCard = document.createElement('div');
    teamCard.classList.add('team-card');
    teamCont.append(teamCard);

    //aggiungiamo l'immagine
    addImg(teamCard, i)

    //aggiungiamo il nome
    addText(teamCard, i)
}







/* FUNCTION */
function addText(teamCard, i) {
    //Aggiungiamo il div per il testo con classe card-text
    const cardText = document.createElement('div');
    cardText.classList.add('card-text')
    teamCard.append(cardText);

    //aggiungiamo un h3
    const nameSurname = document.createElement('h3');
    cardText.append(nameSurname)

    //aggiungiamo un p
    const paragraph = document.createElement('p');
    cardText.append(paragraph)

    //aggiungiamo le info dell'array
    nameSurname.innerHTML = teams[i].name
    paragraph.innerHTML = teams[i].role

}







//Aggiungiamo un immagine
function addImg(teamCard, i) {
    //aggiungiamo al div card un div con classe card-image
    const cardImage = document.createElement('div');
    cardImage.classList.add('card-image');
    teamCard.append(cardImage);

    //Aggiungiamo un img alla card-image
    const imgEl = document.createElement('img');
    cardImage.append(imgEl)

    //Aggiungiamo il link all'immagine
    imgEl.src = `./img/${teams[i].img}`
}