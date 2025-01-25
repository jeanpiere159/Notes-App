document.addEventListener('DOMContentLoaded', () => {
    const notesContainer = document.getElementById('notes-container');
    const createBtn = document.querySelector(".btn");
    let notes = document.querySelectorAll(".input-box");

    function showNotes() {
        notesContainer.innerHTML = localStorage.getItem("notes") || '';
        notes = document.querySelectorAll(".input-box");
        notes.forEach(note => {
            note.addEventListener("input", updateStorage);
        });
    }

    showNotes();

    function updateStorage() {
        localStorage.setItem("notes", notesContainer.innerHTML);
    }

    createBtn.addEventListener("click", () => {
        let inputBox = document.createElement("p");
        let img = document.createElement("img");
        inputBox.className = "input-box";
        inputBox.setAttribute("contenteditable", "true");
        img.src = "images/delete.png";
        img.className = "delete-icon";
        inputBox.appendChild(img);
        notesContainer.appendChild(inputBox);
        inputBox.addEventListener("input", updateStorage);
        updateStorage();
    });

    notesContainer.addEventListener("click", function(e) {
        if (e.target.tagName === "IMG") {
            e.target.parentElement.remove();
            updateStorage();
        }
    });
});