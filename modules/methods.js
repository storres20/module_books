class Methods {
   addbook = (boo) => {
     const addBook = document.getElementById('addBook');
     addBook.innerHTML += `
    <div class="books">
      <p>"${boo.title}" by "${boo.author}"</p>
      <button class="remove" name="${boo.title}">Remove</button>
    </div>
  `;
     if (localStorage.getItem('books') === null) {
       const books = [];
       books.push(boo);
       localStorage.setItem('books', JSON.stringify(books));
     } else {
       const books = JSON.parse(localStorage.getItem('books'));
       books.push(boo);
       localStorage.setItem('books', JSON.stringify(books));
     }
   }

  removebook = () => {
    /* remove button */
    const remove = document.querySelectorAll('.remove');

    remove.forEach((item) => {
      item.addEventListener('click', () => {
        item.parentElement.remove();
        const bookname = item.name;

        /* remove from localStorage */
        const getremove = JSON.parse(localStorage.getItem('books'));

        const newArr = getremove.filter((object) => object.title !== bookname);

        /* update localstorage */
        localStorage.setItem('books', JSON.stringify(newArr));
      });
    });
  }
}

export default Methods;