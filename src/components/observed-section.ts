import {LitElement, html} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';

@customElement('observed-section')
export class ObservedSection extends LitElement {

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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  increasingCallback(ratio){
    // console.log("🚀 ~ file: observed-section.ts ~ line 21 ~ ObservedSection ~ increasingCallback ~ ratio", ratio)

  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: this.buildThresholdList()
    };

    const observer = new IntersectionObserver(this.handleIntersect.bind(this), options);
    observer.observe(boxElement);
  }

  buildThresholdList() {
    const thresholds: number[] = [];
    const numSteps = 20;

    for (let i = 1.0; i <= numSteps; i++) {
      const ratio = i / numSteps;
      thresholds.push(ratio);
    }

    thresholds.push(0);
    return thresholds;
  }

  getTitleDom() {
    if (this.title) {
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