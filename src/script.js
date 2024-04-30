import './style.css';

const preloadImage = new Image();
preloadImage.src = './assets/images/double-chevron-down.gif';

const contacts = document.getElementById('contacts');
const contactsLinks = document.getElementById('contacts-links');
const contactsIcon = document.getElementById('contacts-icon');
const contactsRings = document.getElementById('contacts-rings');

contacts.addEventListener('click', () => {
  const isDisplayFlex = contactsLinks.style.display === 'flex';

  contactsLinks.classList.remove(!isDisplayFlex ? 'animate-translate-bottom' : 'animate-translate-top');
  contactsLinks.classList.add(isDisplayFlex ? 'animate-translate-bottom' : 'animate-translate-top');

  const switchContacts = () => {
    contactsIcon.src = !isDisplayFlex ? './assets/images/double-chevron-down.gif' : './assets/images/contacts.png';
    contactsRings.style.display = isDisplayFlex ? 'initial' : 'none';
    contactsLinks.style.display = isDisplayFlex ? 'none' : 'flex';
  };

  if (isDisplayFlex) {
    setTimeout(switchContacts, 250);
  } else {
    switchContacts();
  }
});

const header = document.getElementsByTagName('header')[0];

document.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    header.classList.add('header-scrolled');
  } else {
    header.classList.remove('header-scrolled');
  }
});
