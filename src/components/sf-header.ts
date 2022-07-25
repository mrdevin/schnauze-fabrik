import {LitElement, html, css} from 'lit';
import {customElement, state} from 'lit/decorators.js';

// @ts-ignore
@customElement('sf-header')
export class SfModel extends LitElement {
    static styles = [
        css`
            :host {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                --sf-logo-size: 250px;
            }

            svg {
                width: var(--sf-logo-size);
                height: var(--sf-logo-size);

            }
        `
    ];

    constructor(){
        super();
        this.oldScroll = window.scrollY;
        requestAnimationFrame(()=>{
            this.updateHeaderDimensions()
        })
        window.addEventListener('scroll',()=>{
            this.updateHeaderDimensions()
        })
    }

    @state()
    oldScroll: Number = 0;

    updateHeaderDimensions(){

        if(window.scrollY > 0 && window.scrollY < 200){
            let currentVal = parseInt(getComputedStyle(this).getPropertyValue(
                "--sf-logo-size"
            ));

            let newValue = 0;
            // @ts-ignore
            newValue = currentVal - (window.scrollY - this.oldScroll);
                newValue = newValue < 80 ? 80 : newValue;
                newValue = newValue > 250 ? 250 : newValue;
            this.style.setProperty('--sf-logo-size', `${newValue}px`);
        }

        this.oldScroll = window.scrollY
    }

    render() {
        return html`
        <a part="link" href="/">
            <svg part="logo" viewBox="0 0 100 100">
                <use href="/src/img/logo.svg#logo"></use>
            </svg>
        </a>
        `;
    }
}