const title = document.getElementById("title");
const author = document.getElementById("author");
const year = document.getElementById("year");
const bookList = document.getElementById("book-list");
const btn = document.querySelector(".btn");

let editRow = null;

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

  if (editRow !== null) {
    editRow.children[0].innerText = title.value;
    editRow.children[1].innerText = author.value;
    editRow.children[2].innerText = year.value;

    const activeActions = editRow.querySelector(".actions");
    if (activeActions) {
      activeActions.style.display = "flex";
    }

    editRow = null;
    btn.innerText = "Add Book";
  } else {
    const section = document.createElement("section");

    const bookTitle = document.createElement("div");
    bookTitle.innerText = title.value;

    const bookAuthor = document.createElement("div");
    bookAuthor.innerText = author.value;

    const bookYear = document.createElement("div");
    bookYear.innerText = year.value;

    const actionsContainer = document.createElement("div");
    actionsContainer.className = "actions";

    const editBtn = document.createElement("button");
    editBtn.innerHTML = '<i class="fa-solid fa-pencil"></i>';
    editBtn.className = "action-btn edit-btn";

    editBtn.addEventListener("click", function () {
      document.querySelectorAll(".actions").forEach((a) => {
        a.style.display = "flex";
      });

      title.value = bookTitle.innerText;
      author.value = bookAuthor.innerText;
      year.value = bookYear.innerText;

      editRow = section;
      btn.innerText = "Update Book";

      actionsContainer.style.display = "none";
    });
    
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteBtn.className = "action-btn delete-btn";

    deleteBtn.addEventListener("click", function () {
      if (editRow === section) {
        editRow = null;
        btn.innerText = "Add Book";
        title.value = "";
        author.value = "";
        year.value = "";
      }
      section.remove();
    });

    actionsContainer.appendChild(editBtn);
    actionsContainer.appendChild(deleteBtn);

    section.appendChild(bookTitle);
    section.appendChild(bookAuthor);
    section.appendChild(bookYear);
    section.appendChild(actionsContainer);

    bookList.appendChild(section);
  }

  title.value = "";
  author.value = "";
  year.value = "";
});