/* Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe*/




// MILESTONE 1:
// Creare l’array di oggetti con le informazioni fornite.

const group = [
    // ? Creo objects per ogni section
    {
        name: 'Wayne Barnett',
        rol:'Founder & CEO',
        photo:'wayne-barnett-founder-ceo.jpg',
    },
        // ? Creo objects per ogni section
    {
        name: 'Angela Caroll',
        rol: 'Chief Editor',
        photo: 'angela-caroll-chief-editor.jpg',
    },
        // ? Creo objects per ogni section
    {
        name: 'Walter Gordon',
        rol: 'Office Manager',
        photo: 'walter-gordon-office-manager.jp',
    },
        // ? Creo objects per ogni section
    {
        name: 'Angela Lopez',
        rol: 'Social Media Manager',
        photo: 'angela-lopez-social-media-manager.jpg',
    },
        // ? Creo objects per ogni section
    {
        name: 'Scott Estrada',
        rol: 'Developer',
        photo: 'scott-estrada-developer.jpg',
    },
        // ? Creo objects per ogni section
    {
        name: 'Barbara Ramos',
        rol: 'Graphic Designer',
        photo: 'barbara-ramos-graphic-designer.jpg',
    },
];

// !Mostra array
console.log(group);


// MILESTONE 2:
//STAMPARE LA INFORMAZIONE
const groupContainer = document.getElementsById('info-container')

//creo una for
for (let i = 0; i < group.length; i++){
    const user = group[i];
    const userElement = document.createElement('div');
    //creo il text
    userElement.textContent = `name: ${user.name}, role: ${user.rol}, photo  ${user.photo}`; 
    // !cl contenuto testo
    console.log(textContent);
    
}
