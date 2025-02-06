class AppHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="src/css/style.css" />
        <header>
            <h1>📝 Notes App</h1>
        </header>
    `;
  }
}

customElements.define("app-header", AppHeader);
