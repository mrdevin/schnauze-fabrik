import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('cl-bl')
export class clBl extends LitElement {
    static styles = [
        css`
            :host {
                display: inline;
                --clbl-size: 50px;
                color: currentColor;
                font-size: var(--clbl-size);
                -webkit-text-stroke: 3px white;
            }

        `
    ];

    render() {
        return html`
            	⬢
        `;
    }
}