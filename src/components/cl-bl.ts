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
        position: relative;
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
        display: flex;
        margin-top: -75%;
        background-color: var(--highlight-color);
        border: 3px solid var(--shadow-color);
        width: calc(var(--clbl-size) - 5.6em);
        text-align: center;
        font-size: 0.9em;
        font-weight: bold;
        font-family: 'GT-Super-Display-Super';
        color: currentolor;
        padding: 3px 5px;
        box-sizing: border-box;
        justify-content: center;
      }

      :host span:after,
      :host span:before {
        content: "";
        width: 0px;
        height: 10px;
        /* background-color: var(--shadow-color); */
        display: flex;
        align-self: flex-end;
        margin-bottom: -23px;
        position: absolute;
      }


      :host span:after {
        right: 33.8px;
        border-top: 7px solid var(--shadow-color);
        border-right: 5px solid transparent;
      }


      :host span:before {
        left: 33.8px;
        border-top: 7px solid var(--shadow-color);
        border-left: 5px solid transparent;
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