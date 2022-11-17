

// un/hides burger menu button
function myFunction() {
    let x = document.getElementById("mob-nav-links");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
}

let container = document.querySelector('.sec-column');
let info = [
  ['./res/1.svg', 'FLIGHT BOOKING', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.'],
  ['./res/2.png', 'HOTEL & RESORT BOOKING', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.'],
  ['./res/3.png', 'FAMILY TRIP PLANNER', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.'],
  ['./res/4.png', 'CRUISE TOUR', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.'],
  ['./res/5.png', 'FIRE CAMP', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.'],
  ['./res/6.png', 'CORPORATE HOLIDAYS', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.'],
];

for (let each in info) {
  let card = document.createElement('div');
  let img = document.createElement('img'); 
  let h4 = document.createElement('h4'); 
  let p = document.createElement('p'); 

  card.classList.add('card');
  img.src = info[each][0];
  h4.textContent = info[each][1];
  p.textContent = info[each][2];

  card.appendChild(img);
  card.appendChild(h4);
  card.appendChild(p);

  container.appendChild(card);
  console.log(info[each]);
}

console.log(container)