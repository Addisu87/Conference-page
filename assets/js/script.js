// toggle mobile menu
const menu = document.getElementById('menu');
const menuLinks = document.querySelectorAll('#menu a');
const menuToggler = document.getElementById('menu-toggler');
const closeMenuBtn = document.getElementById('menu-close-btn');

function toggleMenu(event, prevent = true) {
  if (prevent) event.preventDefault();
  document.body.classList.toggle('no-scroll');
  menu.classList.toggle('show');
}

menuToggler.addEventListener('click', (event) => {
  toggleMenu(event);
});

closeMenuBtn.addEventListener('click', (event) => {
  toggleMenu(event);
});

menuLinks.forEach((link) => link.addEventListener('click', (event) => toggleMenu(event, false)));

// dynamic speakers insertion
const speakers = [
  {
    name: 'Yonas Fissaha',
    title: 'Chief Scientist SABIC Technology, USA',
    image: '../img/person1.jpeg',
    bio: 'Yonas had been leading research group, was adviser for many Ph.D studies. Published more than 160 papers on mechanism, kinetic and mathematic models of chemical processes.',
  },
  {
    name: 'Mertzer Haile',
    title: 'Department of Astronomy, Nanjing University, China',
    image: '../img/person2.jpeg',
    bio: 'Mertzer Haile teached at Peking University for 18 years and then is teaching at Nanjing University.',
  },
  {
    name: 'Samuel Abayneh',
    title: 'Theoretical physicist @VORTEX|INSTITUTE',
    image: '../img/person3.jpg',
    bio: 'Samuel Abayneh is a theoretical physicist, a philosopher of physics, the inspiration behind the New York Times best seller Sex on the Moon.',
  },
  {
    name: 'Selam Teshome',
    title: 'Wageningen University & Research , Netherlands',
    image: '../img/person4.jpeg',
    bio: 'Selam Teshome has received a major grant to study very strong chemical bonds. The title of the project is: "Synthetic Catch Bonds."',
  },
  {
    name: 'Mulugeta Worku',
    title: 'Aalto University , Finland',
    image: '../img/person5.jpeg',
    bio: 'Research topics include solar long-term variability and effects within projects ReSoLVE Center of Excellence and G-EPOS infrastructure in FIRI road map.',
  },
  {
    name: 'Tewodros Abebaw',
    title: 'IBM Research USA, USA',
    image: '../img/person6.jpeg',
    bio: 'Dr. Tewodros Ababaw is currently in the Quantum Applications group in IBM Quantum at IBM Research Almaden in San Jose, California.',
  },
];

const speakersPlaceHolder = document.querySelector('#speakers .persons');

speakers.forEach((speaker, index) => {
  speakersPlaceHolder.innerHTML += `
  <div class="person ${index > 1 ? 'mobile-hide' : ''}">
    <div class="person-graphic">
      <img src="./assets/img/${speaker.image}" alt="speaker" />
    </div>
    <div class="person-info">
      <h4 class="person-name">${speaker.name}</h4>
      <p class="person-title"><em>${speaker.title}</em></p>
      <p class="person-bio">${speaker.bio}</p>
    </div>
  </div>
  `;
});

// show more speakers by clicking on more button
const moreSpeakerButton = document.getElementById('toggle-more-speakers');
moreSpeakerButton.addEventListener('click', (event) => {
  event.preventDefault();
  document.querySelectorAll('.mobile-hide').forEach((el) => {
    el.classList.toggle('mobile-hide');
  });
  moreSpeakerButton.style.display = 'none';
});
