import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import SpitzigVidMp4 from '@/vids/pointed-hexagon-instructions.mp4';
import SpitzigVidWebm from '@/vids/pointed-hexagon-instructions.webm';
import EnSubs from '@/vids/pointed-hexagon-instructions-en.vtt?url';
import DeSubs from '@/vids/pointed-hexagon-instructions-de.vtt?url';

import { AnleitungStyles } from '/src/css/anleitung-styles.js';
@customElement('anleitung-spitzig-hex')
export class AnleitungSpitzigHex extends LitElement {
  static styles = [
    AnleitungStyles,
    css``
  ]

  createRenderRoot() { return this; }

  render() {
    return html`
        <style>
          ${AnleitungStyles}
        </style>
        <h1>Anleitung für flache Fliesen</h1>

        <video id="assVid" controls loop autoplay muted>
          <source src="${SpitzigVidWebm}" type="video/webm">

          <source src="${SpitzigVidMp4}" type="video/mp4">
          <track label="English" kind="subtitles" srclang="en" src="${EnSubs}"  />
          <track label="Deutsch" kind="subtitles" srclang="de" src="${DeSubs}" default/>
        </video>

        <section>
          <h2>How to assemble your Pointed Tile</h2>
          <p>
            You may wish to review our general tips and tricks for assembling Paper Craft Projects.
            <br>
            <a href="tips">Allgemeine Tips und Tricks</a>
          </p>

          <h3>Steps</h3>
          <div class="instStep">
            <p>
              <span class="num">1</span>
              The Tile is attached to the sheet of paper by several small 1mm Holding Tabs. Carefully remove the Tile from the larger sheet by pinching on both sides of a Holding Gap and slowly moving them apart.
            </p>
          </div>
          <div class="instStep">
            <p>
              <span class="num">2</span>
              Inside the Back Panel, you should see a start shape that is also held in place by several Holding Tabs. Carefully remove the star shape.
            </p>
          </div>
          <div class="instStep">
            <p>
              <span class="note">Note:</span>
              If you wish to add designs, stickers, photos, or anything else to your Tile Now is the time to do it. We have compiled a list of ideas about how you can modify your Tile.
              <br>
              <a href="design-ideen">Design Ideen</a>
            </p>
          </div>
          <div class="instStep">
            <p>
              <span class="num">3</span>
              Take note of the pre-scored lines on the Tile. Place the Tile flat on a table and fold along each score line, pressing the fold with your finger. After making a fold, unfold it before moving on to the next fold.
            </p>
          </div>
          <div class="instStep">

            <p>
              <span class="num">4</span>
              Once you have creased all of the folds you are ready to start gluing. We recommend using PVA, also known as School Glue, as it will dry quickly. You will only need a small amount of glue. Starting with the large tabs inside the point glue together main point.  Press and hold the tab for 3 to 5 seconds, to allow the glue to partially set. Use a tissue, wipe away any excess glue.

            </p>
          </div>

          <div class="instStep">
            <p>
              <span class="num">5</span>
              Now glue together the  small tabs  to form all 6 corners. Pay attention that all of the score lines line up in the corners. Press and hold the tabs for 3 to 5 seconds, to allow the glue to partially set. Use a tissue, wipe away any excess glue.
            </p>
          </div>

          <div class="instStep">
            <p>
              <span class="num">6</span>
              Now you have to attach the Back Panel to the rest of the Tile. Apply a small amount of glue to all of the remaining tabs. Starting where the Back Panel is attached to the rest of the tile, Fold the Back Panel down. Try your best to align the sides and corners to the main body of the tile, working your way around to the other side of the tile. Using a tissue, wipe away any excess glue.
            </p>
          </div>
          <h3>Next Steps</h3>
          <p>
            Once you have assembled all of your Tiles you are ready to hang your design. We have prepared additional instructions and tips to help you hang the design that you have envisioned.
            <br>
            <a href="aufhaengen">Hanging Instructions</a>
          </p>

        </section>
    `
  }
}