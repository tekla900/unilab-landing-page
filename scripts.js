let container = document.querySelector('.sec-column');
let banner = document.querySelector('.banner');
let h1 = document.querySelector('h1');
let arrows = document.querySelectorAll('.arrows');
let leftArrow = document.getElementById('left');
let rightArrow = document.getElementById('right');

// info to add
let info = [
  ['./res/1.png', 'FLIGHT BOOKING', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.'],
  ['./res/2.png', 'HOTEL & RESORT BOOKING', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.'],
  ['./res/3.png', 'FAMILY TRIP PLANNER', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.'],
  ['./res/4.png', 'CRUISE TOUR', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.'],
  ['./res/5.png', 'FIRE CAMP', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.'],
  ['./res/6.png', 'CORPORATE HOLIDAYS', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.'],
];


// un/hides burger menu button
function burgerMenu() {
    let nav = document.getElementById("mob-nav-links");
    if (nav.style.display === "flex") {
      nav.style.display = "none";
    } else {
      nav.style.display = "flex";
    }
}

// changing banner on click of navigation buttons
let currentBanner = 0; //storing current banner

arrows.forEach(arrow => {  // adding event listener on each arrow
  arrow.addEventListener('click', changeSlide);
});

function changeSlide() {
  if (currentBanner % 2 == 0) {
    // if current banner is greece, changes to switzerland
    banner.style.backgroundImage = "url('./res/Brightness_Cont.png')";
    h1.textContent = 'Discover Switzerland';
    currentBanner += 1;
  } else {
    // else changes to greece
    banner.style.backgroundImage = "url('./res/banner.png')";
    h1.textContent = 'Discover Greece';
    currentBanner += 1;
  };
};

// adding info to single card and then to container
for (let each in info) {
  let card = document.createElement('div');
  let img = document.createElement('img'); 
  let h4 = document.createElement('h4'); 
  let p = document.createElement('p'); 

  card.classList.add('card');
  img.classList.add('btn-img');
  img.dataset.toggle = "modal";
  img.dataset.target = "#exampleModal";
  img.dataset.title = info[each][1];
  img.dataset.par = info[each][2];
  img.dataset.src = info[each][0];

  img.src = info[each][0];
  h4.textContent = info[each][1];
  p.textContent = info[each][2];

  card.appendChild(img);
  card.appendChild(h4);
  card.appendChild(p);

  container.appendChild(card);
}

// MODALS
$('#exampleModal').on('show.bs.modal', function (e) {

  let button = $(e.relatedTarget); // Button(image) that triggered the modal

  // Extract info from data-* attributes
  let title = button.data('title'); 
  let par = button.data('par'); 
  let src = button.data('src');

  let modal = $(this);

  // write info into modal
  modal.find('.modal-title').text(title)
  modal.find('#modal-par').text(par);
  modal.find('#modal-img').attr('src', src);
})