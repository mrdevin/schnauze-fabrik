import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('lazy-video')
export class LazyVideo extends LitElement {
  static readonly styles = [
    css`
      :host {
        display: flex;
      }
    `
  ];

  @property({type: Object})
  observer: IntersectionObserver;


  observeCallback(entries, observer){
    if (!entries[0].isIntersecting){return};
    let sources = this.querySelectorAll('source');
    sources.forEach((source)=>{
      source.src = source.getAttribute('lazy-src');
    })
    let video: HTMLVideoElement = this.querySelector('video');
    video.load();
    video.play();
    observer.unobserve(this);
  }

  connectedCallback() {
    super.connectedCallback();
    let observer = new IntersectionObserver(this.observeCallback.bind(this));
    observer.observe(this);
  }

  render() {
    return html`
        <slot></slot>
    `;
  }
}