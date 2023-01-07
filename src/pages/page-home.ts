import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';

import animationPointed from '../models/base-hex-title-pointed-animation.glb?url';
import animationFlat from '../models/base-hex-title-animation.glb?url';
import slide1 from '../img/home/slide1.jpg?url';
import slide2 from '../img/home/slide2.jpg?url';
import slide3 from '../img/home/slide3.jpg?url';
import slide4 from '../img/home/slide4.jpg?url';
import slide5 from '../img/home/slide5.jpg?url';
import slide6 from '../img/home/slide6.jpg?url';
import slide7 from '../img/home/slide7.jpg?url';
import slide8 from '../img/home/slide8.jpg?url';
import slide9 from '../img/home/slide9.jpg?url';
import slide10 from '../img/home/slide10.jpg?url';

import GlobalStyles from '@/css/global-styles.css';

import '@/components/observed-section';
import '@/components/slide-show';
import '@/components/sf-model';
import '@/components/cl-bl';

@customElement('page-home')
export class PageHome extends LitElement {
  static styles = [
    unsafeCSS(GlobalStyles),
    css`
      .split-tape-title span{
        display: block;
        color: var(--primary-color);
        transform: rotate(-4deg);
        font-size: 36px;
        padding: .4rem .8rem;
        display: block;
        width: min-content;
        margin-bottom: .2rem;
        position: relative;
        filter: var(--drop-shadow);
      }

      .split-tape-title span:before {
        content: '';
        display: inline-block;
        width: 100%;
        height: 100%;
        background-color: var(--shadow-color);
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        transform: skew(-10deg, 0deg)
      }

      .tape-title{
        text-align: center;
        justify-self: center;
        display: flex;
        transform: rotate(-1deg);
        font-size: 36px;
        padding: .4rem .8rem;
        display: block;
        width: max-content;
        margin-bottom: .2rem;
        position: relative;
        filter: var(--drop-shadow);
      }

      .tape-title:before {
        content: '';
        display: inline-block;
        width: 100%;
        height: 100%;
        background-color: var(--highlight-color);
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        transform: skew(-10deg, 0deg)
      }

      .tape-title + p {
        width: 100%;
        text-align: center;
        font-size: 24px;
      }

      .split23 {
        display: grid;
        width: 100%;
        column-gap: 1rem;
        grid-template-columns: 1fr 3fr;
      }

      .split23 div {
        display: flex;
        flex-wrap: wrap;
        align-content: center;
        justify-self: flex-end;
        /* justify-content: center; */
      }

      .split23 h1, .split23 p {
        margin: 0;
        /* margin-left: auto; */
      }

      .split23 p {
        /* width: 80%; */
      }

      .split23 h1 {
        margin-bottom: 1rem;
      }

      h2 {
        margin: 0;
      }
    `
  ]

  render() {
    return html`
      <observed-section class="split23">
        <div>
          <h1 class="split-tape-title"><span>Hexagonal</span><span>Wandkunst</span></h1>
          <p>
            Ihre Wand aufpeppen, mit ihren eigenen hexagonalen Designs.
          </p>
        </div>
        <slide-show>
          <picture>
            <img alt="Heagonal Wandkunst" src="${slide6}">
            <img alt="Heagonal Wandkunst" src="${slide2}">
            <img alt="Heagonal Wandkunst" src="${slide3}">
            <img alt="Heagonal Wandkunst" src="${slide4}">
            <img alt="Heagonal Wandkunst" src="${slide5}">
            <img alt="Heagonal Wandkunst" src="${slide1}">
            <img alt="Heagonal Wandkunst" src="${slide7}">
            <img alt="Heagonal Wandkunst" src="${slide8}">
            <img alt="Heagonal Wandkunst" src="${slide9}">
            <img alt="Heagonal Wandkunst" src="${slide10}">
          </picture>
        </slide-show>
      </observed-section>
      <observed-section>
        <h2 class="tape-title">Wollen sie spitzige Fliesen oder flache Fliesen?</h2>
        <p>Beiden verfügbar für den gleichen Preis!</p>
      </observed-section>
      <observed-section>
        <h2 class="tape-title">Wahlen von prächtig Farben.</h2>
        <p>Beiden verfügbar für den gleichen Preis!</p>
      </observed-section>
      <observed-section>
        <h2 class="tape-title">Einfache und Schnelle Montage</h2>
        <p> Teile herausnehmen •falten •kleben • auf die Wand hängen.</h2>
      </observed-section>

      </observed-section>

  `;
  }
}