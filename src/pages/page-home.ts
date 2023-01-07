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

  `;
  }
}