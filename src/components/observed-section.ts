import {LitElement, html, css} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';

@customElement('observed-section')
export class ObservedSection extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
                min-height: calc(100vh - 155px);
                box-sizing: border-box;
                border-top: .5em double white ;
                background-color: var(--primary-color);
            }

            :host([last]) {
                min-height: calc(100vh - 294px);
                top: 294px;
            }
        `
    ];

    @property() name = 'observed-section';

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

    render() {
        return html`
            <slot></slot>
        `;
    }
}