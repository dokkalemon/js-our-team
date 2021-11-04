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
    
    teamCont.innerHTML += `
    <div class="team-card">
            <div class="card-image">
              <img
                src="img/${teams[i].img}"
                alt="Wayne Barnett"
              />
            </div>
            <div class="card-text">
              <h3>Wayne Barnett</h3>
              <p>Founder & CEO</p>
            </div>
          </div>`
}

