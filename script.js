function searchBooks() {
    let searchQuery = document.getElementById('search').value.toLowerCase();
    let books = document.querySelectorAll('.book-item');
    books.forEach(function(book) {
        let title = book.querySelector('.book-title')?.innerText.toLowerCase() || "";
        let author = book.querySelector('.book-author')?.innerText.toLowerCase() || "";
        let genre = book.querySelector('.book-genre')?.innerText.toLowerCase() || "";
        if (title.includes(searchQuery) || author.includes(searchQuery) || genre.includes(searchQuery)) {
            book.style.display = 'block';
        } else {
            book.style.display = 'none';
        }
    });
}