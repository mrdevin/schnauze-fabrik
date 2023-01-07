import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('slide-show')
export class SlideShow extends LitElement {
  static styles = [
    css`
      :host {
        border-radius: 207px;
        border: 7px solid var(--highlight-color);
        width: 100%;
        display: block;
        height: 360px;
        overflow: hidden;
        display:block;
        position: relative;
      }

      ::slotted(img){
        object-fit: cover;
        width: 100%;
        height: 100%;
        position: relative;
      }
    `
  ];

  firstUpdated(){

  }

  render() {
    return html`
      <slot></slot>
      <nav></nav>

    `;
  }
}