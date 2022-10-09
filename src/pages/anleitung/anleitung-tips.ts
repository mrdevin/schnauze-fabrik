import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import DirtyFingerJpeg from '@/img/tips/finger-dirty.jpeg';
import DirtyFingerWebp from '@/img/tips/finger-dirty.webp';
import GlueJpeg from '@/img/tips/glue.jpeg';
import GlueWebp from '@/img/tips/glue.webp';
import LargeTabTwoJpeg from '@/img/tips/large-tab-2.jpeg';
import LargeTabTwoWebp from '@/img/tips/large-tab-2.webp';
import TabFingerJpeg from '@/img/tips/tab-finger.jpeg';
import TabFingerWebp from '@/img/tips/tab-finger.webp';
@customElement('anleitung-tips')
export class AnleitungTips extends LitElement {

  createRenderRoot() { return this; }

  render() {
    return html`
      <h1>Tips und Tricks</h1>

      <h2>Kleber</h2>
      <p>
        We recommend the use of PVA Glue because it gives you few moments to adjust the position when attaching tabs, resulting in a more accurate final model. You can also use Glue Sticks, tape, or Double Sided tape. The vast majority of recycling facilities can still recycle paper that has PVA glue on it.
      </p>
      <picture height="300" width="225">
        <source type="image/webp" srcset="${GlueWebp}">
        <img loading="lazy" src="${GlueJpeg}">
      </picture>

      <h2>Kleben</h2>
      <p>
       When attaching a tab you need very little glue. If you use too much glue it will squeeze out the seams. Excessive glue also means that you will have to hold the pieces longer before they set.
      </p>

      <p>
        After you first press a tab in place check the alignment. You will have a few moments to make any necessary corrections. After you are happy with the Placement you should <i></i>Press & Hold</i> the pieces together for <strong>3 to 5 seconds</strong> until the glue starts to set.
      </p>

      <h3>Keeping Things Clean</h3>
      <p>One disadvantage of glue is that it will get on your fingers and potentially transfer to your tiles. Keep a piece of paper towel or tissue on hand to wipe up and spills or squeeze out from the seems. Using a tissue or paper towel wipe up any excess glue, wiping it towards the seam. Wiping away from the seam may cause the glue to spread across the surface of the Tile and cause discoloration. Keep you fingers clean, the mixture of dirt and glue on your fingers will easily transfer to the Tile.</p>
      <picture height="300" width="225">
        <source type="image/webp" srcset="${DirtyFingerWebp}">
        <img loading="lazy" src="${DirtyFingerJpeg}">
      </picture>

      <h2>Precision</h2>

      <p>
        The most important part to be precise about is making sure that the folds meet at the same point on the corner. This will ensure that your Tile forms proper corners. The corners of the Back Panel need close to the corners of the main body but
        you should only be concerned with them extending beyond the edges of the main body. Any other imperfections will be hidden since this side will be facing the wall.
      </p>

      <h2>Falten</h2>

      <p>
        The score lines have been pressed deep into the model. The score lines will end up on the inside of the completed Tile. It is easiest to fold by placing the Tile flat on the table and working from the outside to the inside. Place a finger
        or two next to the inside of the fold and with your other hand lift the outside piece of the fold. Remove your fingers from the inside of the fold once and lay the outside piece on top of the inside piece. Run your finger along the fold line to make a crisp and accurate fold.
      </p>


      <picture height="300" width="400">
        <source type="image/webp" srcset="${LargeTabTwoWebp}">
        <img loading="lazy" src="${LargeTabTwoJpeg}">
      </picture>


      <picture width="300" height="225">
        <source type="image/webp" srcset="${TabFingerWebp}">
        <img loading="lazy" src="${TabFingerJpeg}">
      </picture>

    `
  }
}