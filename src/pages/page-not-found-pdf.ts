import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('page-not-found-pdf')
export class PageNotFoundPdf extends LitElement {

  constructor() {
    super();
  }

  createRenderRoot() { return this; }

  render() {
      return html`
      <h2>Not found PDF</h2>
  `;
  }
}