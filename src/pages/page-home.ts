import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';

import animationPointed from '../models/base-hex-title-pointed-animation.glb?url';
import animationFlat from '../models/base-hex-title-animation.glb?url';
import pinkPoster from '../img/home/pink-poster.jpg?url';
import bluePoster from '../img/home/blue-poster.jpg?url';
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
import FlatAssemblyMp4 from '/src/vids/flach-tile-assembly.mp4';
import FlatAssemblyWebm from '/src/vids/flach-tile-assembly.webm';

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
        width: calc(100% - 5px);
        height: 100%;
        background-color: var(--highlight-color);
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        transform: translateX(2.5px) skew(-10deg, 0deg)
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

      .models {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 1rem;
      }

      .model-wrap {
        border-radius: 40px;
        border: 7px solid var(--highlight-color);
        min-height: 325px;
      }
      .model-wrap header {
        border-top-left-radius: 30px;
        border-top-right-radius: 30px;
        background-color: var(--highlight-color);
        line-height: 40px;
        font-size: 24px;
        letter-spacing: 5%;
        text-align: center;
        padding: 25px;
      }

      .colors-section{
        text-align: center;
        justify-self: center;
        align-items: center;
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin-bottom: 4rem;
        margin-top: 6rem;
        position: relative;
        filter: var(--drop-shadow);
      }

      .colors-title {
        display: flex;
        flex-wrap: wrap;
        color: var(--highlight-color);
        text-align: center;
        position: relative;
        height: 190px;
      }

      .colors-title h2{
        font-size: 40px;
        margin:auto auto 4.5rem auto;
      }

      .colors-section .number {
        display: flex;
        color: var(--primary-color);
        font-size: 96px;
        text-align: center;
        justify-self: center;
        text-shadow: 3px 4px 2px rgba(239, 229, 169, 0.25);
        position: absolute;
        top: 2.5rem;
        left: 50%;
        transform: translateX(-50%);
      }

      .colors-section:after {
        content: '';
        display: inline-block;
        width: calc(100% - 30px);
        height: 100%;
        background-color: var(--shadow-color);
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        transform: translateX(2.5px) skew(-10deg, 0deg)
      }

      .colors {
        width: 400px;
        height: 280px;
        /* overflow: hidden; */
        position: relative;
      }

      .colors cl-bl{
        position: absolute;
        --color-spacing: 10px;
        filter: drop-shadow(3px 4px 2px rgba(239, 219, 169, 0.25));
      }

      .colors cl-bl:nth-of-type(1) {
        top: -1.6rem;
        transform: translateX( calc(50% + (var(--color-spacing))))

      }

      .colors cl-bl:nth-of-type(2) {
        top: -1.6rem;
        transform: translateX( calc(150% + (var(--color-spacing) * 2)))
      }

      .colors cl-bl:nth-of-type(3) {
        top: calc(var(--clbl-size) - 3rem);
        transform: translateX(10px)
      }

      .colors cl-bl:nth-of-type(4) {
        top: calc(var(--clbl-size) - 3rem);
        transform: translateX(calc(100% + ( 17px )))
      }

      .colors cl-bl:nth-of-type(5) {
        top: calc(var(--clbl-size) - 3rem);
        transform: translateX(calc(200% + (var(--color-spacing) * 2)))
      }

      .colors cl-bl:nth-of-type(6) {
        top: calc((var(--clbl-size) * 2) - 4rem);
        transform: translateX(calc(50% + (var(--color-spacing))))
      }

      .colors cl-bl:nth-of-type(7) {
        top: calc((var(--clbl-size) * 2) - 4rem);
        transform: translateX(calc(150% + (var(--color-spacing) * 2)))
      }


      sf-model {
        margin: 0 auto;
      }

      h2 {
        margin: 0;
      }

      video {
        width: 100%;
        border-radius: 40px;
        border: 7px solid var(--highlight-color);
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
          <img alt="Heagonal Wandkunst" src="${slide7}">
          <img alt="Heagonal Wandkunst" src="${slide2}">
          <img alt="Heagonal Wandkunst" src="${slide3}">
          <img alt="Heagonal Wandkunst" src="${slide4}">
          <img alt="Heagonal Wandkunst" src="${slide5}">
          <img alt="Heagonal Wandkunst" src="${slide1}">
          <img alt="Heagonal Wandkunst" src="${slide6}">
          <img alt="Heagonal Wandkunst" src="${slide8}">
          <img alt="Heagonal Wandkunst" src="${slide9}">
          <img alt="Heagonal Wandkunst" src="${slide10}">
        </slide-show>
      </observed-section>
      <observed-section>
        <h2 class="tape-title">Wollen sie spitzige Fliesen oder flache Fliesen?</h2>
        <p>Beiden verfügbar für den gleichen Preis!</p>
        <div class="models">
          <div class="model-wrap">
            <header>Spitzig Fliesen bringt mehr Dimension auf ihre Wand.</header>
            <sf-model id="animationPointedEl" src="${animationPointed}" poster="${pinkPoster}" autoplay loading="eager">
              <span hidden slot="progress-bar"></span>
            </sf-model>
          </div>

          <div class="model-wrap">
            <header>Flach Fliesen sind die perfekte Basis für ihre Basteln Projekte.</header>
            <sf-model id="animationFlatEl" src="${animationFlat}" poster="${bluePoster}" autoplay loading="eager">
              <span hidden slot="progress-bar"></span>
            </sf-model>
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
        <video id="assVid" controls loop autoplay muted>
          <source src="${FlatAssemblyWebm}" type="video/webm">
          <source src="${FlatAssemblyMp4}" type="video/mp4">
        </video>
      </observed-section>


  `;
  }
}