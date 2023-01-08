import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import FlowerJpeg from '@/img/design-ideen/flower.jpeg';
import FlowerWebp from '@/img/design-ideen/flower.webp';
import SlantedGridJpeg from '@/img/design-ideen/slanted-grid.jpeg';
import SlantedGridWebp from '@/img/design-ideen/slanted-grid.webp';
import AnleitungStyles from '/src/css/anleitung-styles.css?inline';

@customElement('anleitung-design-ideen')
export class AnleitungDesignIdeen extends LitElement {

  createRenderRoot() { return this; }

  render() {
    return html`
      <style>
        ${AnleitungStyles}

        .instImg {
          display: inline-flex;
          margin-right: 1em;
        }
      </style>
      <h1>Design Ideen</h1>

      <h2>Tiling Patterns</h2>
      <p>Here are a few examples of some patterns that you can create</p>
      <picture class="instImg" height="400" width="300">
        <source type="image/webp" srcset="${FlowerWebp}">
        <img loading="lazy" src="${FlowerJpeg}">
      </picture>

      <picture class="instImg" height="300" width="2122">
        <source type="image/webp" srcset="${SlantedGridWebp}">
        <img loading="lazy" src="${SlantedGridJpeg}">
      </picture>
      <p>Here are a few examples of some patterns that you can create.
      Many more patterns can be found in the Pattern Maker App.</p>
      <a target="_blank" rel="noopener noreferrer"  href="https://schnauze-fabrik.app">Use the Pattern Maker App</a>

      <h2>Words</h2>
      <p>Words, Letters, Numbers, and Symbols can add symbolic meaning to your designs. These are easiest to do on Flat Tiles.</p>

      <h2>Shapes and Patterns</h2>
      <p>Shapes and Patterns can add new levels of interest to your sculpture.</p>

      <h2>Photos</h2>
      <p>You can use the Flat Tiles as a photo frame. We have prepared a Cropping Template for you to use. You will need to print it out on <i>heavy-weight</i> paper and cut it out. You can then use it to draw a thin line on your printed photo and cut the photo to size. Once the photo is cropped you can also use the template to align the photo on your Tile and affix it with a bit of glue or double-sided tape.</p>
      <a download rel="noopener noreferrer" target="_blank" href="/photo-cropping-template.pdf">Photo Cropping Template</a>

      <h2>Collage</h2>
      <p>For a more free-form look, you can print out images or cut up magazines to collage on top of the assembled tile. Feel free to collage on the main surface as well as around the edges and on the sides of the tile.</p>

    `
  }
}