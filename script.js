// eslint-disable-next-line no-unused-vars
/* eslint-disable no-unused-vars */

const actList = document.querySelector('.act-list');
// To toggle Nav Menu on Mobile Screen
function clickToSwitch() {
  const switchD = document.getElementById('switch-display');
  if (switchD.style.display === 'block') {
    switchD.style.display = 'none';
  } else {
    switchD.style.display = 'block';
  }
}

const speakers = [
  {
    img: './images/features-speaker-1.png',
    name: 'Ofentse Mokwena',
    profession: 'Strategic Projects Lead | Uber SA',
    description: 'Responsible for the coordination of engineering and construction work, constantly communicating with all project team.',
  },
  {
    img: './images/Pamela-Mkhize.jpg',
    name: 'Pamela Mkhize',
    profession: 'Head of Africa Digital Solutions – Enel Group Power',
    description: 'Shares lessons gives dynamic and educational insights on doing business in Africa',
  },
  {
    img: './images/kobus_louw.jpg',
    name: 'Kobus Louw',
    profession: 'Founder & CEO Digemy',
    description: 'Africa Tech Week is an unbelievable event, and it’s a great honour for me to be selected and take part in something where I can give back to a community that has supported us tremendously in the past year.',
  },
  {
    img: './images/Mmapula Kgari.jpg',
    name: 'Mmapula Kgari',
    profession: 'Acting Executive of Broadband, Sentech',
    description: 'Responsible for the growth and expansion plans of the business',
  },
  {
    img: './images/Mlamli Booi.jpg',
    name: 'Malamli Booi',
    profession: 'Chief Executive Officer and Executive Director, Sentech',
    description: 'Delegates and drives agendas, driving profitability, managing company organizational structure, strategy, and communicating with the board.',
  },
  {
    img: './images/Artwell Nwaila.jpg',
    name: 'Artwell Nwaila',
    profession: 'Head of Creative, Google',
    description: 'I generally develop and oversee projects at the earliest stage',
  },
];

speakers.forEach((speaker) => {
  const speakerContent = `<div class="col-md-6 act-item">
  <img src="${speaker.img}" alt="">
  <div class="card-content">
    <h6 class="name">${speaker.name}</h6>
    <small>${speaker.profession}</small>
    <p class="p-0">
      ${speaker.description}
    </p>
  </div>`;

  actList.innerHTML += speakerContent;
});