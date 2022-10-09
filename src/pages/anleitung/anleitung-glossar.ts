import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import SmallTabJpeg from '@/img/tips/small-tab.jpeg';
import SmallTabWebp from '@/img/tips/small-tab.webp';
@customElement('anleitung-glossar')
export class AnleitungGlossar extends LitElement {

  createRenderRoot() { return this; }

  render() {
    return html`
      <h1>Glossar</h1>

      <dl>
        <dt>Holding Tab</dt>
        <dd> These are small 1mm break in the cut that leave the final cutout shape attached to the main body of the paper sheet
          <picture>
            <img>
          </picture>
        </dd>

        <dt>Score Lines</dt>
        <dd> The lines that are pressed into the paper to indicate where to fold and ensure a clean accurate fold.
          <picture height="300" width="400">
            <source type="image/webp" srcset="${SmallTabWebp}">
            <img loading="lazy" src="${SmallTabJpeg}">
          </picture>
        </dd>
      </dl>

    `
  }
}