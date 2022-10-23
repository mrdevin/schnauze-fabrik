import {LitElement, html, css} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';

@customElement('observed-section')
export class ObservedSection extends LitElement {
  static styles = [
    css`
      observed-section {
        display: block;
        box-sizing: border-box;
        background-color: var(--primary-color);
      }
    `
  ];

  createRenderRoot() { return this; }


  @property() name = 'observed-section';
  @property({type: String})
  title: string = '';

  @state()
  prevRatio = 0.0;

  connectedCallback() {
      super.connectedCallback();
      this.createObserver(this);
  }
  // @ts-ignore
  increasingCallback(ratio){
    // console.log("🚀 ~ file: observed-section.ts ~ line 21 ~ ObservedSection ~ increasingCallback ~ ratio", ratio)

  }
  // @ts-ignore
  decreasingCallback(ratio){
    // console.log("🚀 ~ file: observed-section.ts ~ line 26 ~ ObservedSection ~ decreasingCallback ~ ratio", ratio)

  }

  handleIntersect(entries) {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > this.prevRatio) {
        entry.target.style.backgroundColor = this.increasingCallback(entry.intersectionRatio);
      } else {
        entry.target.style.backgroundColor = this.decreasingCallback(entry.intersectionRatio);
      }

      this.prevRatio = entry.intersectionRatio;
    });
  }

  createObserver(boxElement) {
    let observer;

    let options = {
      root: null,
      rootMargin: "0px",
      threshold: this.buildThresholdList()
    };

    observer = new IntersectionObserver(this.handleIntersect.bind(this), options);
    observer.observe(boxElement);
  }

  buildThresholdList() {
    let thresholds: number[] = [];
    let numSteps = 20;

    for (let i = 1.0; i <= numSteps; i++) {
      let ratio = i / numSteps;
      thresholds.push(ratio);
    }

    thresholds.push(0);
    return thresholds;
  }

  getTitleDom() {
    if (!!this.title) {
      return html`<h3>${this.title}</h3>`;
    } else {
      return html``;
    }
  }
  render() {
    return html`
      ${this.getTitleDom()}
      <slot></slot>
    `;
  }
}