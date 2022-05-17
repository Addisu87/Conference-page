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

menuLinks.forEach((link) =>
  link.addEventListener('click', (event) => toggleMenu(event, false))
);

// dynamic speakers insertion

const speakers = [
  {
    name: 'Yonas',
    title: 'Software Freedom Activist',
    image: '../img/person1.jpeg',
    bio: 'I support Software Freedom as it is the only way to achieve justice in IT.'
  },
  {
    name: 'Mertzer',
    title: 'Lawyer',
    image: '../img/person2.jpeg',
    bio: 'I help individuals and companies to make sure nobody violate GPL licenses.'
  },
  {
    name: 'Addisu',
    title: 'Digital painter',
    image: '../img/person3.jpg',
    bio: 'I use krita for my creative art works. I help others to do the same.'
  },
  {
    name: 'Samuel',
    title: 'Lawyer',
    image: '../img/person4.jpeg',
    bio: 'We deserve more that being merely operator of proprietary software.'
  }
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
