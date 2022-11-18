let container = document.querySelector('.sec-column');

// info to add
let info = [
  ['./res/1.svg', 'FLIGHT BOOKING', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.'],
  ['./res/2.png', 'HOTEL & RESORT BOOKING', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.'],
  ['./res/3.png', 'FAMILY TRIP PLANNER', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.'],
  ['./res/4.png', 'CRUISE TOUR', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.'],
  ['./res/5.png', 'FIRE CAMP', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.'],
  ['./res/6.png', 'CORPORATE HOLIDAYS', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.'],
];


// un/hides burger menu button
function burgerMenu() {
    let x = document.getElementById("mob-nav-links");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
}

// adding info to single card and then to container
for (let each in info) {
  let card = document.createElement('div');
  let button = document.createElement('button');
  let img = document.createElement('img'); 
  let h4 = document.createElement('h4'); 
  let p = document.createElement('p'); 

  card.classList.add('card');
  card.classList.add('card');
  button.classList.add('card-button');
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