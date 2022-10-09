import { css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { ModelViewerElement } from '@google/model-viewer/dist/model-viewer.js';

// @ts-ignore
@customElement('sf-model')
export class SfModel extends ModelViewerElement {

  static styles = [
    css`
      :host {
        --poster-color: transparent;
        /* transform: translateY(-1em); */
      }

    `
  ];
}