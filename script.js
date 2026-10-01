const title = document.getElementById('title');
const author = document.getElementById('author');
const year = document.getElementById('year');
const bookList = document.getElementById('book-list');
const btn = document.querySelector('.btn');

btn.addEventListener("click", function (e) {
  e.preventDefault();

    if (title.value === "") {
        alert("Enter the Book Title");
        return;
    }
    else if (author.value === "") {
        alert("Enter the Book Author");
        return;
    }
    else if (year.value === "") {
        alert("Enter the Published Year");
        return;
    }

  const section = document.createElement("section");

  const bookTitle = document.createElement("div");
  bookTitle.innerText = title.value;

  const bookAuthor = document.createElement("div");
  bookAuthor.innerText = author.value;

  const bookYear = document.createElement("div");
  bookYear.innerText = year.value;

  section.appendChild(bookTitle);
  section.appendChild(bookAuthor);
  section.appendChild(bookYear);

  bookList.appendChild(section);
});