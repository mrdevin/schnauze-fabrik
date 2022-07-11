import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('observed-section')
export class LitApp extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    @property() name = 'observed-section';

    render() {
        return html`

            <h2>Hello, ${this.name}</h2>
            <slot></slot>
        `;
    }
}