class NoteForm extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="src/css/style.css" />
        <form id="noteForm">
          <div class="form-group">
            <label for="noteTitle">Note Title:</label>
            <input type="text" id="noteTitle" placeholder="Type your note title" required>
            <div class="validation">Note title must be at least 5 characters.</div>
          </div>
          <div class="form-group">
            <label for="noteBody">Note Content:</label>
            <textarea id="noteBody" rows="4" placeholder="Type your note content" required></textarea>
            <div class="validation">Note content must be at least 10 characters</div>
          </div>
          <button type="submit" disabled>Create a Note</button>
        </form>
      `;

    this.titleInput = this.shadowRoot.getElementById("noteTitle");
    this.bodyInput = this.shadowRoot.getElementById("noteBody");
    this.submitButton = this.shadowRoot.querySelector("button[type='submit']");

    this.titleInput.addEventListener("input", () =>
      this.validateInput(this.titleInput, 5)
    );
    this.bodyInput.addEventListener("input", () =>
      this.validateInput(this.bodyInput, 10)
    );
  }

  validateInput(input, minLength) {
    const validationMessage = input.parentElement.querySelector(".validation");
    if (input.value.length < minLength) {
      input.parentElement.classList.add("invalid");
      validationMessage.style.display = "block";
    } else {
      input.parentElement.classList.remove("invalid");
      validationMessage.style.display = "none";
    }
    this.checkFormValidity();
  }

  checkFormValidity() {
    if (
      this.titleInput.value.length >= 5 &&
      this.bodyInput.value.length >= 10
    ) {
      this.submitButton.removeAttribute("disabled");
    } else {
      this.submitButton.setAttribute("disabled", "true");
    }
  }
}

customElements.define("note-form", NoteForm);
