import {LitElement, html, css} from 'lit';
import { customElement, state } from 'lit/decorators.js';
import SlideShowStyles from '@/css/slide-show-styles.css?inline';
@customElement('slide-show')
export class SlideShow extends LitElement {
  static styles = [
    SlideShowStyles,
    css``
  ];

  @state()
  images = [];

  @state()
  timer;

  @state()
  animationDuration = 2000;

  connectedCallback() {
    super.connectedCallback()
    requestAnimationFrame(()=>{
      this.images = this.shadowRoot.querySelector('slot').assignedElements({ flatten: true });
      console.log("🚀 ~ file: slide-show.ts:21 ~ SlideShow ~ requestAnimationFrame ~ this.images", this.images)
      this.requestUpdate();
      this.timer = setTimeout(()=>{
        this.nextImage()
      }, this.animationDuration);
    });
  }

  nextImage(event?, index?){
    clearTimeout(this.timer);
    let activeImageIndex = this.images.indexOf(this.querySelector('img[active]'));
    let newImage = activeImageIndex + 1;
    console.log("🚀 ~ file: slide-show.ts:33 ~ SlideShow ~ nextImage ~ newImage", newImage)
    if (newImage >= this.images.length){
      newImage = 0;
    }
    if(index){
      newImage = index;
    }
    this.images[activeImageIndex].removeAttribute('active');
    this.images[newImage].setAttribute('active', '');
    this.images = Array.from(this.querySelectorAll('img'));

    this.timer = setTimeout(() => {
      this.nextImage()
    }, this.animationDuration);
  }

  render() {
    return html`
      <div class="slotWrap"><slot></slot></div>
      <nav>
        ${this.images.map((img, index)=>{
          return html`<span @click=${(event)=>{this.nextImage(event, index)}} ?active=${img.hasAttribute('active')} class="dot"></span>`;
        })}
      </nav>

    `;
  }
}