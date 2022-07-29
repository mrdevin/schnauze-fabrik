import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('cl-bl')
export class clBl extends LitElement {
    static styles = [
        css`
            :host {
                display: flex;
                flex-wrap: wrap;
                --clbl-size: 250px;
                --clbl-color: currentColor;
                align-items: center;
                justify-content: center;
                position: relative;
                box-sizing: border-box;

            }

            i{
                display: inline;
                font-style: normal;
                color: var(--clbl-color);;
                font-size: var(--clbl-size);
                -webkit-text-stroke: 10px white;
                box-sizing: border-box;

            }

            :host span{
                display: block;
                position: absolute;
                bottom: 5.9rem;
                background-color: white;
                width: calc(var(--clbl-size) - 7em);
                text-align: center;
                font-size: 0.9em;
                color: currentcolor;
                padding: 3px 5px;
                box-sizing: border-box;
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