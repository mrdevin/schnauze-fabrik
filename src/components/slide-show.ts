import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';
import SlideShowStyles from '@/css/slide-show-styles.css?inline';
@customElement('slide-show')
export class SlideShow extends LitElement {
  static styles = [
    SlideShowStyles,
    css``
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