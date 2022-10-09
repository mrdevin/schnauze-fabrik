import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import NailOneJpg from '@/img/aufhaengen/nail-1.jpeg?url';
import NailOneWebp from '@/img/aufhaengen/nail-1.webp?url';
import NailTwoJpg from '@/img/aufhaengen/nail-2.jpeg?url';
import NailTwoWebp from '@/img/aufhaengen/nail-2.webp?url';
import NailThreeJpg from '@/img/aufhaengen/nail-3.jpeg?url';
import NailThreeWebp from '@/img/aufhaengen/nail-3.webp?url';
import TemplateOneJpg from '@/img/aufhaengen/template-1.jpeg?url';
import TemplateOneWebp from '@/img/aufhaengen/template-1.webp?url';
import TemplateTwoJpg from '@/img/aufhaengen/template-2.jpeg?url';
import TemplateTwoWebp from '@/img/aufhaengen/template-2.webp?url';
import NailPullJpg from '@/img/aufhaengen/nail-pull.jpeg?url';
import NailPullWebp from '@/img/aufhaengen/nail-pull.webp?url';
import PuttyTwoJpg from '@/img/aufhaengen/putty-2.jpeg?url';
import PuttyTwoWebp from '@/img/aufhaengen/putty-2.webp?url';
@customElement('anleitung-aufhaengen')
export class AnleitungAufhaengen extends LitElement {

  createRenderRoot() { return this; }

  render() {
    return html`
      <h1>Aufhängen</h1>

      <p>Your Tiles should have come with a hanging template but if you need another one we have provided them for download as PDFs.</p>
      <a target="_blank"  rel="noopener noreferrer" href="/public/deeper-base-hex-title-hanging.pdf">Flat Tile Hanging Template</a>
      <br/>
      <a target="_blank"  rel="noopener noreferrer" href="/public/deeper-base-pointed-hex-title-hanging.pdf">Pointed Tile Hanging Template</a>

      <h2>Placing on the wall</h2>
      <p>We recommend using nails to affix your Tiles to the wall. It is by far the easiest method and causes the least amount of damage to the wall. You can also use double-sided tape but it is more likely to damage the wall and your tiles when you remove them from the wall.
      </p>
      <picture >
        <source type="image/webp" srcset="${NailThreeWebp}">
        <img height="253" width="400" loading="lazy" src="${NailThreeJpg}">
      </picture>

      <h3>Preparing the hanging template</h3>
      <p>On the template, you will see Multiple scales of 1/2 cm And 1 cm marks extending from the sides of a Tile shape. Trim the template along the scale line that represents the amount of spacing you would like to have between the tiles.
      </p>
      <picture >
        <source type="image/webp" srcset="${TemplateOneWebp}">
        <img height="400" width="350" loading="lazy" src="${TemplateOneJpg}">
      </picture>

      <h3>Placing the first Tile</h3>
      <p>Use the template to determine the position of the first Tile in your design. Hold the template in place or loosely affix it to the wall with a small bit of Masking tape. If your tape is too sticky it may harm your walls, but you can reduces its tackiness by placing the piece of tape on you pant leg and removing it a few times.</p>
      <picture >
        <source type="image/webp" srcset="${TemplateTwoWebp}">
        <img height="400" width="300" loading="lazy" src="${TemplateTwoJpg}">
      </picture>
      <p>
      Use a hammer and nail to mark the uppermost point of the star shape in the middle of the tile.</p>
      <picture >
        <source type="image/webp" srcset="${NailOneWebp}">
        <img height="400" width="300" loading="lazy" src="${NailOneJpg}">
      </picture>
      <p>
      Remove the template from the wall and hammer the nail into the marked position. It is best to drive the nail in so that is angled upwards, this will help to hold your tile close to the wall. Leave about 1/2 to 1 centimeter of the nail exposed. Hang the completed Tile on the nail using the star-shaped cutout on the back of the Tile.
      </p>
      <picture >
        <source type="image/webp" srcset="${NailTwoWebp}">
        <img height="400" width="312" loading="lazy" src="${NailTwoJpg}">
      </picture>


      <h3>Placing the additional Tiles</h3>
      <p>
        Align the outside edges of your hanging template to the edges of the first Tile. This should locate the template in the correct spot for your next tile. Attach the template to the wall and step back from your design. Check that your design is level and positioned as you desire.
      </p>
      <picture >
        <source type="image/webp" srcset="${TemplateTwoWebp}">
        <img height="400" width="300" loading="lazy" src="${TemplateTwoJpg}">
      </picture>

      <p>
        Now repeat the steps from above to mark the hole, insert a nail and hand your Tile.
        <br/>
        Repeat this process until all tiles for your design are hung on the wall.
      </p>

      <h2>Repairing holes in the wall</h2>
      <p>If you want to change your design or adjust the placement of the tiles we have some tips for easily repairing the unsightly holes left by the nails. Remove the nails with a pair of pliers, pulling straight out in the direction that the
      nail is pointed. This should minimize the size of the hole.</p>
      <picture >
        <source type="image/webp" srcset="${NailPullWebp}">
        <img height="400" width="300" loading="lazy" src="${NailPullJpg}">
      </picture>

      <p> Place a small bit of Ready Putty on your fingertip and push it into the hole. Wipe up and excess and allow to dry. </p>
      <picture >
        <source type="image/webp" srcset="${PuttyTwoWebp}">
        <img height="301" width="400" loading="lazy" src="${PuttyTwoJpg}">
      </picture>
      <p>The hole should be completely invisible once it has dried. If your walls are not white you will need to apply a small amount of paint on top of the dried plaster.</p>
    `
  }
}