import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

interface Source {
  src: string,
  type: string
}

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
    console.log("🚀 ~ file: lazy-video.ts:33 ~ LazyVideo ~ observeCallback ~ entries, observer", entries, observer)
    if (!entries[0].isIntersecting){return};
    let sources = this.querySelectorAll('source');
    sources.forEach((source)=>{
      source.src = source.getAttribute('lazy-src');
    })
    let video: HTMLVideoElement = this.querySelector('video');
    video.load();
    this.observer.unobserve(video);

  }

  connectedCallback() {
    super.connectedCallback();
    this.observer = new IntersectionObserver(this.observeCallback.bind(this));
    this.observer.observe(this);
  }

  render() {
    return html`
      <slot></slot>
    `;
  }
}