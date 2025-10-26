import './style.css';
import headerImg from './assets/memory.png';

const container = document.querySelector('.container');

//HEADER
const header = document.createElement('header');
header.classList.add('header');

const aboutImage = document.createElement('img');
aboutImage.classList.add('about-image');
aboutImage.src = headerImg;
aboutImage.alt = 'header image';

const about = document.createElement('div');
about.classList.add('header-about');

const leadText = document.createElement('h1');
leadText.classList.add('header-lead');
leadText.innerText = 'About Me';

const aboutText = document.createElement('p');
aboutText.classList.add('about-text');
aboutText.innerText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pretium, tortor a convallis viverra, nibh eros faucibus lorem, non varius justo nulla ut metus. Suspendisse potenti. Phasellus vitae lacus id nisl fermentum cursus. Duis quis sem eu purus dictum suscipit. Curabitur euismod ligula vel neque tempor, nec cursus odio placerat.';

const buttonDiv = document.createElement('div');
buttonDiv.classList.add('btn-div');

const githubBtn = document.createElement('button');
githubBtn.classList.add('github-btn');
githubBtn.innerHTML = '<i class="fa-brands fa-github"></i>';

const linkedBtn = document.createElement('button');
linkedBtn.classList.add('linked-btn');
linkedBtn.innerHTML = '<i class="fa-brands fa-linkedin"></i>';

const twitterBtn = document.createElement('button');
twitterBtn.classList.add('twitter-btn');
twitterBtn.innerHTML = '<i class="fa-brands fa-twitter"></i>';

buttonDiv.appendChild(githubBtn);
buttonDiv.appendChild(linkedBtn);
buttonDiv.appendChild(twitterBtn);

about.appendChild(leadText);
about.appendChild(aboutText);
about.appendChild(buttonDiv);

header.appendChild(aboutImage);
header.appendChild(about);

container.appendChild(header);

//MAIN
const main = document.createElement('div');
main.classList.add('main');

const mainTitle = document.createElement('h1');
mainTitle.classList.add('main-title');
mainTitle.innerText = 'My Work';

const cardGrid = document.createElement('div');
cardGrid.classList.add('card-grid');

function createCard(imgSrc, imgAlt, title, description) {
  const card = document.createElement('div');
  card.classList.add('card');

  const cardImg = document.createElement('img');
  cardImg.src = imgSrc;
  cardImg.alt = imgAlt;
  cardImg.classList.add('card-img');

  const titleDiv = document.createElement('div');
  titleDiv.classList.add('title-div');

  const cardTitle = document.createElement('h1');
  cardTitle.innerText = title;
  cardTitle.classList.add('title');

  const gitBtn = document.createElement('button');
  gitBtn.classList.add('git-btn');
  gitBtn.innerHTML = '<i class="fa-brands fa-github"></i>';

  const shareBtn = document.createElement('button');
  shareBtn.classList.add('share-btn');
  shareBtn.innerHTML = '<i class="fa-solid fa-share"></i>';

  const cardDes = document.createElement('p');
  cardDes.innerText = description;
  cardDes.classList.add('description');

  titleDiv.appendChild(cardTitle);
  titleDiv.appendChild(gitBtn);
  titleDiv.appendChild(shareBtn);

  card.appendChild(cardImg);
  card.appendChild(titleDiv);
  card.appendChild(cardDes);

  return card;
}

const card1 = createCard(
  headerImg,
  'image',
  'DSC',
  'Decentralized Stable coin'
);

const card2 = createCard(
  headerImg,
  'image',
  'DSC',
  'Decentralized Stable coin'
);
const card3 = createCard(
  headerImg,
  'image',
  'DSC',
  'Decentralized Stable coin'
);
const card4 = createCard(
  headerImg,
  'image',
  'DSC',
  'Decentralized Stable coin'
);
const card5 = createCard(
  headerImg,
  'image',
  'DSC',
  'Decentralized Stable coin'
);

const card6 = createCard(
  headerImg,
  'image',
  'DSC',
  'Decentralized Stable coin'
);

cardGrid.appendChild(card1);
cardGrid.appendChild(card2);
cardGrid.appendChild(card3);
cardGrid.appendChild(card4);
cardGrid.appendChild(card5);
cardGrid.appendChild(card6);

main.appendChild(mainTitle);
main.appendChild(cardGrid);

container.appendChild(main);

//FOOTER
const footer = document.createElement('footer');
footer.classList.add('footer');

const contactDiv = document.createElement('div');
contactDiv.classList.add('contact-div');

const contactTitle = document.createElement('h1');
contactTitle.classList.add('contact-title');
contactTitle.innerText = 'Contact Me';

const contactDes = document.createElement('p');
contactDes.classList.add('contact-des');
contactDes.innerText =
  'Please get in touch if you think our work would be mutually beneficial!';

const address = document.createElement('p');
address.classList.add('address');
address.innerText = '1234 Random Road, Random Town, California 234456';

const phoneDiv = document.createElement('div');
phoneDiv.classList.add('phone-div');

const phoneBtn = document.createElement('button');
phoneBtn.classList.add('phone-btn');
phoneBtn.innerHTML = '<i class="fa-solid fa-phone"></i>';

const phoneNo = document.createElement('p');
phoneNo.classList.add('phone-no');
phoneNo.innerText = '343-5454958';

phoneDiv.appendChild(phoneBtn);
phoneDiv.appendChild(phoneNo);

const emailDiv = document.createElement('div');
emailDiv.classList.add('email-div');

const emailBtn = document.createElement('button');
emailBtn.classList.add('email-btn');
emailBtn.innerHTML = '<i class="fa-solid fa-envelope"></i>';

const email = document.createElement('p');
email.classList.add('email');
email.innerText = 'this@that.com';

emailDiv.appendChild(emailBtn);
emailDiv.appendChild(email);

const footerBtnDiv = document.createElement('div');
footerBtnDiv.classList.add('footer-btn-div');

const footergithub = document.createElement('button');
footergithub.classList.add('github-btn');
footergithub.innerHTML = '<i class="fa-brands fa-github"></i>';

const footerLinkedBtn = document.createElement('button');
footerLinkedBtn.classList.add('linked-btn');
footerLinkedBtn.innerHTML = '<i class="fa-brands fa-linkedin"></i>';

const footerTwitterBtn = document.createElement('button');
footerTwitterBtn.classList.add('twitter-btn');
footerTwitterBtn.innerHTML = '<i class="fa-brands fa-twitter"></i>';

const footerImg = document.createElement('img');
footerImg.classList.add('footer-img');
footerImg.src = headerImg;

footerBtnDiv.appendChild(footergithub);
footerBtnDiv.appendChild(footerLinkedBtn);
footerBtnDiv.appendChild(footerTwitterBtn);

contactDiv.appendChild(contactTitle);
contactDiv.appendChild(contactDes);
contactDiv.appendChild(address);
contactDiv.appendChild(phoneDiv);
contactDiv.appendChild(emailDiv);
contactDiv.appendChild(footerBtnDiv);

footer.appendChild(contactDiv);
footer.appendChild(footerImg);

container.appendChild(footer);
