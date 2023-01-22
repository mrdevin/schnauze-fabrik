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

import slide1Webp from '../img/home/slide1.webp?url';
import slide2Webp from '../img/home/slide2.webp?url';
import slide3Webp from '../img/home/slide3.webp?url';
import slide4Webp from '../img/home/slide4.webp?url';
import slide5Webp from '../img/home/slide5.webp?url';
import slide6Webp from '../img/home/slide6.webp?url';
import slide7Webp from '../img/home/slide7.webp?url';
import slide8Webp from '../img/home/slide8.webp?url';
import slide9Webp from '../img/home/slide9.webp?url';
import slide10Webp from '../img/home/slide10.webp?url';

import star from '../img/home/star.svg?url';
import FlatAssemblyMp4 from '/src/vids/flach-tile-assembly.mp4';
import FlatAssemblyWebm from '/src/vids/flach-tile-assembly.webm';

import GlobalStyles from '@/css/global-styles.css?inline';
import HomeStyles from '@/css/home-styles.css?inline';
import TapeTitle from '@/css/tape-title.css?inline';

import '@/components/observed-section';
import '@/components/slide-show';
import '@/components/cl-bl';
import '@/components/lazy-video';

@customElement('page-home')
export class PageHome extends LitElement {
  static readonly styles = [
    GlobalStyles,
    TapeTitle,
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

          <picture active>
            <source srcset="${slide7Webp}" type="image/webp">
            <img width="580" loading="lazy" height="387" alt="Heagonal Wandkunst" src="${slide7}">
          </picture>
          <picture>
            <source srcset="${slide2Webp}" type="image/webp">
            <img width="580" loading="lazy" height="435" alt="Heagonal Wandkunst" src="${slide2}">
          </picture>
          <picture>
            <source srcset="${slide3Webp}" type="image/webp">
            <img width="580" loading="lazy" height="387" alt="Heagonal Wandkunst" src="${slide3}">
          </picture>
          <picture>
            <source srcset="${slide4Webp}" type="image/webp">
            <img width="580" loading="lazy" height="387" alt="Heagonal Wandkunst" src="${slide4}">
          </picture>
          <picture>
            <source srcset="${slide5Webp}" type="image/webp">
            <img width="580" loading="lazy" height="387" alt="Heagonal Wandkunst" src="${slide5}">
          </picture>
          <picture>
            <source srcset="${slide1Webp}" type="image/webp">
            <img width="580" loading="lazy" height="435" alt="Heagonal Wandkunst" src="${slide1}">
          </picture>
          <picture>
            <source srcset="${slide6Webp}" type="image/webp">
            <img width="580" loading="lazy" height="387" alt="Heagonal Wandkunst" src="${slide6}">
          </picture>
          <picture>
            <source srcset="${slide8Webp}" type="image/webp">
            <img width="580" loading="lazy" height="387" alt="Heagonal Wandkunst" src="${slide8}">
          </picture>
          <picture>
            <source srcset="${slide9Webp}" type="image/webp">
            <img width="580" loading="lazy" height="387" alt="Heagonal Wandkunst" src="${slide9}">
          </picture>
          <picture>
            <source srcset="${slide10Webp}" type="image/webp">
            <img width="580" loading="lazy" height="387" alt="Heagonal Wandkunst" src="${slide10}">
          </picture>
        </slide-show>
      </observed-section>
      <observed-section class="">
        <h2 class="tape-title">Wollen sie spitzige Fliesen oder flache Fliesen?</h2>
        <p>Beiden verfügbar für den gleichen Preis!</p>
        <div class="models">
          <div class="model-wrap">
            <header>Spitzig Fliesen bringt mehr Dimension auf ihre Wand.</header>
            <lazy-video >
              <video playsinline autoplay muted loop>
                <source lazy-src="${animatedPointed}" type="video/webm">
                <source lazy-src="${animatedPointedMp4}" type="video/mp4">
              </video>
            </lazy-video>
          </div>

          <div class="model-wrap">
            <header>Flach Fliesen sind die perfekte Basis für ihre Basteln Projekte.</header>
            <lazy-video >
              <video playsinline autoplay muted loop>
                <source lazy-src="${animatedFlat}" type="video/webm">
                <source lazy-src="${animatedFlatMp4}" type="video/mp4">
              </video>
            </lazy-video>
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
        <lazy-video >
          <video id="assVid" playsinline controls loop autoplay muted>
            <source lazy-src="${FlatAssemblyWebm}" type="video/webm">
            <source lazy-src="${FlatAssemblyMp4}" type="video/mp4">
          </video>
        </lazy-video>
      </observed-section>


  `;
  }
}