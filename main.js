const addBtn = document.getElementById("addBtn");
const notes = document.getElementById("notes");

addBtn.addEventListener("click", function(e){
    e.preventDefault(); 
    const newNote = document.createElement("textarea");

    newNote.classList.add("textareaField");
    newNote.style.display = "block";
    newNote.placeholder = "Empty Note";

    notes.insertBefore(newNote, addBtn);

    newNote.addEventListener("dblclick", function(){
        let conf = confirm("Do u really want to close this note?");
        if(conf){
            newNote.remove();
        }
    })
});

const clearBtn = document.getElementById("clearBtn");

clearBtn.addEventListener("click", function(){
    const allNotes = document.querySelectorAll(".textareaField");
    allNotes.forEach((Note) => {
        Note.remove();
    })
});