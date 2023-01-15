import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';

import animatedFlat from '@/models/flat-3d.webm?url';
import animatedFlatMp4 from '@/models/flat-3d.mp4?url';
import animatedPointed from '@/models/pointed-3d.webm?url';
import animatedPointedMp4 from '@/models/pointed-3d.mp4?url';

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
import star from '../img/home/star.svg?url';
import FlatAssemblyMp4 from '/src/vids/flach-tile-assembly.mp4';
import FlatAssemblyWebm from '/src/vids/flach-tile-assembly.webm';

import GlobalStyles from '@/css/global-styles.css?inline';
import HomeStyles from '@/css/home-styles.css?inline';

import '@/components/observed-section';
import '@/components/slide-show';
import '@/components/cl-bl';

@customElement('page-home')
export class PageHome extends LitElement {
  static readonly styles = [
    GlobalStyles,
    HomeStyles,
    css`
      .mixMatch {
        background-image: url(${unsafeCSS(star)});
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
          <img active width="580" height="387" alt="Heagonal Wandkunst" src="${slide7}">
          <img width="580" height="435" alt="Heagonal Wandkunst" src="${slide2}">
          <img width="580" height="387" alt="Heagonal Wandkunst" src="${slide3}">
          <img width="580" height="387" alt="Heagonal Wandkunst" src="${slide4}">
          <img width="580" height="387" alt="Heagonal Wandkunst" src="${slide5}">
          <img width="580" height="435" alt="Heagonal Wandkunst" src="${slide1}">
          <img width="580" height="387" alt="Heagonal Wandkunst" src="${slide6}">
          <img width="580" height="387" alt="Heagonal Wandkunst" src="${slide8}">
          <img width="580" height="387" alt="Heagonal Wandkunst" src="${slide9}">
          <img width="580" height="387" alt="Heagonal Wandkunst" src="${slide10}">
        </slide-show>
      </observed-section>
      <observed-section class="">
        <h2 class="tape-title">Wollen sie spitzige Fliesen oder flache Fliesen?</h2>
        <p>Beiden verfügbar für den gleichen Preis!</p>
        <div class="models">
          <div class="model-wrap">
            <header>Spitzig Fliesen bringt mehr Dimension auf ihre Wand.</header>
            <video autoplay muted loop>
              <source src="${animatedPointed}" type="video/webm">
              <source src="${animatedPointedMp4}" type="video/mp4">
            </video>
          </div>

          <div class="model-wrap">
            <header>Flach Fliesen sind die perfekte Basis für ihre Basteln Projekte.</header>
            <video autoplay muted loop>
              <source src="${animatedFlat}" type="video/webm">
              <source src="${animatedFlatMp4}" type="video/mp4">
            </video>
          </div>
          <div class="mixMatch">
            <div>Mix</div>
            <div>&</div>
            <div>Match</div>
          </div>
        </div>
      </observed-section>
      <observed-section class="colors-section">
        <div class="colors-title">
          <h2>Wahlen von</h2>
          <span class="number">7</span>
          <h2>prächtig Farben.</h2>
        </div>
        <div class="colors">
          <cl-bl color="rgb(26, 63, 169)">Starling Blue</cl-bl>
          <cl-bl color="rgb(147,1,1)">Burgundy Velvet</cl-bl>
          <cl-bl color="rgb(30, 112, 22)"> Forest Green</cl-bl>
          <cl-bl color="rgb(252, 85, 33)">Sunset Orange</cl-bl>
          <cl-bl color="rgb(257, 252, 14)"> Oriole Gold</cl-bl>
          <cl-bl color="rgb(66, 160, 236)"> Peacock Blue</cl-bl>
          <cl-bl color="rgb(222, 133, 165)"> Bullfinch Pink</cl-bl>
        </div>
      </observed-section>
      <observed-section>
        <h2 class="tape-title">Einfache und Schnelle Montage</h2>
        <p> Teile herausnehmen • falten • kleben • auf die Wand hängen.</p>
        <video id="assVid"   controls loop autoplay muted>
          <source src="${FlatAssemblyWebm}" type="video/webm">
          <source src="${FlatAssemblyMp4}" type="video/mp4">
        </video>
      </observed-section>


  `;
  }
}