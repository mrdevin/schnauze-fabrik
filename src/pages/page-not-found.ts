import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('page-not-found')
export class PageNotFound extends LitElement {

  constructor() {
    super();
  }

  createRenderRoot() { return this; }

  render() {
      return html`
      <h2>Not found</h2>
  `;
  }
}