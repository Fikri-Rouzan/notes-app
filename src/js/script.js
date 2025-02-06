function getRandomColor() {
  const pastelColors = ["#f8d5d3", "#d3e0f8", "#d3f8e2", "#f8f4d3", "#e8d3f8"];
  return pastelColors[Math.floor(Math.random() * pastelColors.length)];
}

function renderNotes() {
  const notesList = document.getElementById("notesList");
  notesList.innerHTML = "";

  notesData.forEach((note) => {
    const noteElement = document.createElement("note-item");
    noteElement.setAttribute("title", note.title);
    noteElement.setAttribute("body", note.body);
    noteElement.setAttribute("date", note.createdAt);
    noteElement.setAttribute("color", getRandomColor());
    notesList.appendChild(noteElement);
  });
}

function addNoteHandler(event) {
  event.preventDefault();
  const title = this.shadowRoot.getElementById("noteTitle").value;
  const body = this.shadowRoot.getElementById("noteBody").value;

  if (!title || !body || title.length < 5 || body.length < 10) return;

  const newNote = {
    id: `notes-${Date.now()}`,
    title,
    body,
    createdAt: new Date().toISOString(),
    archived: false,
  };

  notesData.push(newNote);
  renderNotes();
  event.target.reset();
}

document.addEventListener("DOMContentLoaded", () => {
  renderNotes();

  const noteForm = document.querySelector("note-form");
  noteForm.shadowRoot
    .getElementById("noteForm")
    .addEventListener("submit", addNoteHandler.bind(noteForm));
});
