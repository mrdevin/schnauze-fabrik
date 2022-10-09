import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('page-about')
export class PageAbout extends LitElement {

  createRenderRoot() { return this; }

  render() {
    return html`
      <h1>About</h1>

      <h2>Devin Hartman = Schnauze Fabrik</h2>
    `
  }
}