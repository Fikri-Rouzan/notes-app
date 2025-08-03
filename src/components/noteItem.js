class NoteItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  static get observedAttributes() {
    return ["title", "body", "date", "color"];
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="src/style.css" />
        <div class="note-card" style="background-color: ${this.getAttribute(
          "color"
        )};">
            <h3>${this.getAttribute("title")}</h3>
            <p>${this.getAttribute("body")}</p>
            <small>${new Date(this.getAttribute("date")).toLocaleDateString(
              "id-ID",
              {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              }
            )}</small>
        </div>
    `;
  }
}

customElements.define("note-item", NoteItem);
