import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('cl-bl')
export class clBl extends LitElement {
  static readonly styles = [
    css`
      :host {
        display: flex;
        flex-wrap: wrap;
        /* --clbl-size: 150px; */
        --clbl-color: currentColor;
        align-items: center;
        justify-content: center;
        position: relative;
        box-sizing: border-box;
        position: relative;
        height: var(--clbl-size);
        max-width: var(--clbl-size);
        margin-bottom: 1rem;
      }

      :host([hidden]){
        visibility: hidden;
        display: flex !important;
      }

      svg {
        width: 100%;
        height: 100%;
      }

    `
  ];

  svgStyles = css`
      .st0{
          fill:var(--highlight-color);
          stroke:var(--shadow-color);
          stroke-width:3;
          stroke-miterlimit:0;
      }

      .st1{
        fill:var(--clbl-color);
        stroke:var(--shadow-color);
        stroke-width: 6px;
        stroke-linejoin: round;
      }

      .st2{
        fill:var(--shadow-color);
        font-family:'GTSuperDisplay-Super';
        font-size:24px;
      }

      .st3{
        opacity:.3;
        fill:none;
        stroke:var(--shadow-color);
        stroke-width:4;
        stroke-miterlimit:10;
      }

      .st4{
        fill:var(--highlight-color)
      }

      .st5{
        fill:none
      }

  `;

  @property({ type: String })
    color: string;

  @property({ type: String })
    title: string;

  @property({ type: String })
    startOffset: string;

  constructor() {
    super();
    this.color = '';
    this.startOffset = '50%';
    this.title = this.innerText;
  }

  connectedCallback(){
    super.connectedCallback();
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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xml:space="preserve"
        viewBox="0 0 207.4 210.2">
        <style>
          ${this.svgStyles}

        </style>
        <path id="banner-left" d="M2.1 94.8c-.1-1.7 1.5-3.3 6.6-4 2.5-.4 7-.2 7-.2l-2.1 10.9S2.2 96.3 2.1 94.8z" class="st0"/>
        <path id="banner-right" d="M201 78.3s-1.9-2.4-6-3.1c-2.5-.4-8 .1-8 .1l-.1 8.7 14.9-1.1-.8-4.6z" class="st0"/>
        <g id="hex">
          <path d="M11.6 155.9V54.3l88-50.8 88 50.8v101.6l-88 50.8z" class="st1"/>
        </g>
        <path id="banner-shadow" d="M3.2 123.4c-.8-12.7-.7-24.5-.4-28.4 6.8 1.3 25 .8 39.7 0 46-2.2 139.3-10.7 153.4-18.7 7.8 7.8 7.9 49.1 4.2 57.5-3.7 5.2-82 16.9-144.6 19.9-25.4 1.2-42.3.6-47.6-1.9-1.2-.8-3.5-7.7-4.7-28.4" class="st3"/>
        <g id="banner">
          <path d="M31.8 151.5c-15.7 0-22-1.2-24.5-2.2-.3-.4-3-4.1-4.3-27-.7-11.4-.6-21.4-.3-25.6 2.8.4 7.1.6 12.9.6 22.1 0 65.3-2.8 105-6.7 25.6-2.5 68.6-7.5 78.5-12.6.8.5 1.5 1.5 2 2.4 5.7 10.8 4.2 43.9.9 51.4-2.2 1.8-18.9 6.5-67.5 12.3-38.9 4.5-78.2 7.4-102.7 7.4z" class="st4"/>
          <path d="M198.6 80.9c1.5 2.4 3.5 9.3 3.8 22.5.2 12.2-1.2 22.7-2.4 26.5-4.4 2.1-25 6.7-67.4 11.7-38.2 4.5-76.8 7.3-100.8 7.3-14.5 0-20.4-1-22.7-1.7-1-2.2-2.7-9.6-3.6-25.8C5 112 5 104 5.1 99.3c2.4.2 5.8.3 10.5.3 22.2 0 65.5-2.8 105.3-6.7 20.6-2.1 38.7-4.3 52.1-6.4 14.9-2.2 21.9-4 25.6-5.6m.2-5.7C188.5 83.4 61 94.7 15.6 94.7c-7.5 0-12.8-.3-14.9-1-1.5 0-.9 54.1 5.4 57.8 3.9 1.7 13.2 2.5 25.7 2.5 54.2 0 169-13.8 172.4-21 4.2-8.9 6-56.1-5.4-57.8z" class="st2"/>
        </g>
        <path id="textPath" d="M6.1,130.9c8.8,2.2,46.3,1,98.5-4.2c52.1-5.1,84.1-9,97.7-14.5" class="st5"/>
        <text   id="name">
          <textPath text-anchor="middle" xlink:href="#textPath" startOffset="${this.startOffset}">
            <tspan id="titleEl" class="st2" style="">
              ${this.title}
            </tspan>
          </textPath>
      </text>
      </svg>
    `;
  }
}