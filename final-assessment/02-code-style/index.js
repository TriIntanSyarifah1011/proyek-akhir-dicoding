const books = {}; 

function getBooks() {
  return books;
}

function getBookById(id) {
  const book = books[id];

  if (!book) {
    return null;
  }

  return book.id;
}

// Fungsi menyimpan buku ke dalam objek books
function saveBook(book) {
  books[book.id] = book;  
}

// Simpan buku pertama
saveBook({ id: 'book-1', name: 'Book 1' });
  
const myBooks = getBooks();
const myBook = getBookById('book-1');

console.log(myBooks);  
console.log(myBook);