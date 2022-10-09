import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import animationPointed from '../models/base-hex-title-pointed-animation.glb?url';
import animationFlat from '../models/base-hex-title-animation.glb?url';
import pinkPoster from '../img/home/pink-poster.jpg?url';
import bluePoster from '../img/home/blue-poster.jpg?url';
import StackOneJpeg from '/src/img/home/stack-1.jpg';
import StackOneWebp from '/src/img/home/stack-1.webp';
import WallOneJpeg from '/src/img/home/wall-1.jpg';
import WallOneWebp from '/src/img/home/wall-1.webp';
import FlowerJpeg from '@/img/design-ideen/flower.jpeg';
import FlowerWebp from '@/img/design-ideen/flower.webp';
import WallCloseOneJpeg from '/src/img/home/wall-close-1.jpg';
import WallCloseOneWebp from '/src/img/home/wall-close-1.webp';
import FlatAssemblyMp4 from '/src/vids/flach-tile-assembly.mp4';
import FlatAssemblyWebm from '/src/vids/flach-tile-assembly.webm';

import '@/components/observed-section';
import '@/components/sf-model';
import '@/components/cl-bl';

@customElement('page-home')
export class PageHome extends LitElement {

  constructor() {
    super();
  }

  createRenderRoot() { return this; }

  render() {
      return html`
      <h2>Hexagonal Wandkunst</h2>

      <p>Ihre Wand aufpeppen, mit ihren eigenen hexagonalen Designs.</p>
      <div class="split-2">
        <picture height="300" width="200" class="split-item">
          <source type="image/webp" srcset="${StackOneWebp}">
          <img loading="lazy" src="${StackOneJpeg}">
        </picture>
        <picture height="300" width="200" class="split-item">
          <source type="image/webp" srcset="${WallOneWebp}">
          <img loading="lazy" src="${WallOneJpeg}">
        </picture>
      </div>

      <observed-section title="Wollen Sie Spitzige Fliesen Order Flach Fliesen? Beiden verfügbar für den gleichen Preis! ">
        <div class="split-2">
          <div class="split-item">
            <h5>Spitzig Fliesen bringt mehr Dimension auf ihre Wand.</h5>

            <sf-model id="animationPointedEl" src="${animationPointed}" poster="${pinkPoster}" autoplay loading="eager">
              <span hidden slot="progress-bar"></span>
            </sf-model>
          </div>
          <div class="split-item">
            <h5>Flach Fliesen sind die perfekte Basis für ihre DIY Projekte.</h5>
            <sf-model id="animationFlatEl" src="${animationFlat}" poster="${bluePoster}" autoplay loading="eager">
              <span hidden slot="progress-bar"></span>
            </sf-model>
          </div>
        </div>
      </observed-section>
      <observed-section>
        <h3>Wahl ihre gewünschten Farben aus. Verfügbar im 7 verschiedene Farben.</h3>
        <div class="split-color">
          <cl-bl color="rgb(26, 63, 169)">Starling Blue</cl-bl>
          <cl-bl color="rgb(147,1,1)">Burgundy Velvet</cl-bl>
          <cl-bl color="rgb(30, 112, 22)">Forest Green</cl-bl>
          <cl-bl color="rgb(252, 85, 33)">Sunset Orange</cl-bl>
          <cl-bl color="rgb(257, 252, 14)">Oriole Gold</cl-bl>
          <cl-bl color="rgb(66, 160, 236)">Peacock Blue</cl-bl>
          <cl-bl color="rgb(222, 133, 165)">Bullfinch Pink</cl-bl>
        </div>
      </observed-section>
      <observed-section>
        <h3>Plan ihren Design.</h3>
        <h4>Erstellen Sie ein Design und ihr Design neu umstellen. Sie können alles ändern, so oft wie Sie willen.</h4>
        <p>Welche Form passt zu ihrer Lust, zu ihrem Leben und zu ihrer Wand? Spiel mit aller die verschiedene Möglichkeiten und wähle ihre Favoriten aus.</p>
        <div class="split-2">
          <picture class="split-item">
            <source type="image/webp" srcset="${WallCloseOneWebp}">
            <img loading="lazy" src="${WallCloseOneJpeg}">
          </picture>
          <picture class="split-item">
            <source type="image/webp" srcset="${FlowerWebp}">
            <img loading="lazy" src="${FlowerJpeg}">
          </picture>
        </div>
      </observed-section>
      <observed-section last>
        <h3>Einfache Montage, Teile herausnehmen, falten, kleben und auf die Wand hängen.</h3>
        <video id="assVid" controls loop autoplay muted>
          <source src="${FlatAssemblyWebm}" type="video/webm">

          <source src="${FlatAssemblyMp4}" type="video/mp4">
        </video>
        <a href="/anleitung">Assembly Instructions</a>
        <a href="/anleitung/design-ideen">link to example grids</a>
        <a target="_blank" rel="noopener noreferrer" href="https://schnauze-fabrik.app/">grid app</a>
        <a href="/anleitung/aufhaengen">Schablone zum Aufhängen</a>
      </observed-section>
  `;
  }
}