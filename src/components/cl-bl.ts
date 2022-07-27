import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('cl-bl')
export class clBl extends LitElement {
    static styles = [
        css`
            :host {
                display: flex;
                flex-wrap: wrap;
                --clbl-size: 150px;
                --clbl-color: currentColor;
                align-items: center;
                justify-content: center;
            }

            i{
                display: inline;
                font-style: normal;
                color: var(--clbl-color);;
                font-size: var(--clbl-size);
                -webkit-text-stroke: 3px white;
                margin-right: .18em;
            }

            :host span{
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                justify-content: center;
                font-size: .8em;
                color: currentColor;
                white-space: nowrap;
            }
        `
    ];

    @property({ type: String })
    color: string;

    constructor(){
        super();
        this.color = '';
    }

    willUpdate(changedProperties) {
        // console.log("🚀 ~ file: cl-bl.ts ~ line 23 ~ clBl ~ willUpdate ~ changedProperties", changedProperties, this.color)
        // only need to check changed properties for an expensive computation.
        if (changedProperties.has('color') && !!this.color ) {
            this.style.setProperty('--clbl-color', this.color);
        }
    }

    render() {
        return html`
            	<i>⬢</i>
               <span>
                    <slot></slot>
                </span>
        `;
    }
}