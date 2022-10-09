import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('cl-bl')
export class clBl extends LitElement {
  static styles = [
    css`
      :host {
        display: flex;
        flex-wrap: wrap;
        --clbl-size: 250px;
        --clbl-color: currentColor;
        align-items: center;
        justify-content: center;
        position: relative;
        box-sizing: border-box;

      }

      i{
        display: inline;
        font-style: normal;
        color: var(--clbl-color);;
        font-size: var(--clbl-size);
        line-height: calc(var(--clbl-size) - .2em);
        -webkit-text-stroke: 6px var(--shadow-color);
        font-family: monospace;
        box-sizing: border-box;

      }

      :host span{
        display: block;
        position: absolute;
        bottom: 2.25rem;
        background-color: var(--highlight-color);
        border: 3.5px solid var(--shadow-color);
        width: calc(var(--clbl-size) - 5.6em);
        text-align: center;
        font-size: 0.9em;
        font-weight: bold;
        font-family: 'GT-Super-Display-Super';
        color: currentcolor;
        padding: 3px 5px;
        box-sizing: border-box;
      }
    `
  ];

  @property({ type: String })
  color: string;

  constructor() {
    super();
    this.color = '';
  }

  willUpdate(changedProperties) {
    // console.log("🚀 ~ file: cl-bl.ts ~ line 23 ~ clBl ~ willUpdate ~ changedProperties", changedProperties, this.color)
    // only need to check changed properties for an expensive computation.
    if (changedProperties.has('color') && !!this.color) {
      this.style.setProperty('--clbl-color', this.color);
    }
  }

  render() {
    return html`
      <i>⬢</i>
      <span>
        <slot></slot>
      </span>
    `;
  }
}