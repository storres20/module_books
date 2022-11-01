import Methods from './modules/methods.js';
/* import { DateTime } from './node_modules/luxon/build/es6/luxon.js'; */
import { DateTime } from './modules/luxon.js';

const addButton = document.getElementById('addButton');
const title = document.getElementById('title');
const author = document.getElementById('author');

const list = document.getElementById('list'); // link LIST
const addBook = document.getElementById('addBook');

const addNew = document.getElementById('addNew'); // link ADDNEW
const newBook = document.getElementById('newBook');

const contact = document.getElementById('contact'); // link CONTACT
const contactBook = document.getElementById('contactBook');

/* Datetime */
const dateTime = document.getElementById('dateTime');
const now = DateTime.now();

dateTime.innerHTML = now.toLocaleString(DateTime.DATETIME_MED);

/* initialize page */
newBook.style.display = 'block';
contactBook.style.display = 'none';
addBook.style.display = 'none';
addNew.style.color = 'blue';

/* navbar links */
list.addEventListener('click', () => {
  newBook.style.display = 'none';
  contactBook.style.display = 'none';
  addBook.style.display = 'block';
  list.style.color = 'blue';
  addNew.style.color = 'black';
  contact.style.color = 'black';
});

addNew.addEventListener('click', () => {
  newBook.style.display = 'block';
  addBook.style.display = 'none';
  contactBook.style.display = 'none';
  list.style.color = 'black';
  addNew.style.color = 'blue';
  contact.style.color = 'black';
});

contact.addEventListener('click', () => {
  newBook.style.display = 'none';
  addBook.style.display = 'none';
  contactBook.style.display = 'block';
  list.style.color = 'black';
  addNew.style.color = 'black';
  contact.style.color = 'blue';
});
/* ****** */

/* addBook - hold books after every refresh page */
if (localStorage.getItem('books') !== null) {
  const getbook = JSON.parse(localStorage.getItem('books'));

  getbook.forEach((item) => {
    addBook.innerHTML += `
      <div class="books">
        <p>"${item.title}" by "${item.author}"</p>
        <button class="remove" name="${item.title}">Remove</button>
      </div>
    `;
  });
}
/* ***** */

addButton.addEventListener('click', (e) => {
  e.preventDefault();

  const book1 = { title: title.value, author: author.value };

  /* add book with method class */
  const ui = new Methods();
  ui.addbook(book1);

  /* remove book with method class */
  ui.removebook();

  title.value = '';
  author.value = '';
});
