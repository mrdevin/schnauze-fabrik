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
                border-bottom: 3px solid white;
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
            <svg part="logo" id="logo" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 850.4 850.4">
  <title>Schnauze Fabrik Logo</title>
  <path d="m302.2 728.3-11.2-5.8c5.7-11.5 4.3-19.8-4-24.8l-24.6-14.8-17.7 29.4 10.5 6.3c4.1 2.5 9.5-1 16.3-10.5l10.7 6.4-27.6 41.5-10.4-6.3c5.2-10.9 6.1-17.3 2.7-19.4l-9.6-5.8-14.5 24.2c-2.4 3.9 1.2 8.8 10.8 14.6l-6.3 10.5-51.9-31.2 6.3-10.5c7.6 4.6 12.6 4.9 15 1l37.6-62.6c2.4-3.9-.3-8.2-7.9-12.8l6.3-10.5 86.8 52.2-17.3 28.9zm42.9 62.1c.1 1.8 2 3.2 5.8 4.3l-2 6.6-32.3-9.6 2-6.6 6.2 1.8c1.6.5 2.5.2 2.8-.8.1-.2.1-.6 0-1l-.3-7.1-21.7-6.4-3.7 5.2c-.3.4-.5.7-.6 1-.4 1.3.6 2.4 3 3.1l4.6 1.4-2 6.6-22.8-6.7 1.9-6.6c2.3.7 4 1 5.2.9 1.2-.1 2-.5 2.5-1.1l33.1-45.6 16.3 4.8 2 55.8zM310 765.3l17.3 5.1-.6-28.7-16.7 23.6zm98.8-20.6c3.2.2 6.2.6 8.9 1.1 2.7.5 5 1.4 6.8 2.6 1.8 1.2 3.2 2.9 4.2 5 .9 2.1 1.3 4.9 1.1 8.3-.1 2-.5 3.7-1.2 5.1-.7 1.5-1.6 2.7-2.8 3.7-1.2 1-2.5 1.8-4 2.4-1.5.6-3.1 1-4.8 1.2 5.1.8 8.9 2.4 11.6 5.1 2.7 2.6 3.9 6.2 3.6 10.8-.2 3.5-.8 6.4-1.9 8.8-1.1 2.3-2.6 4.1-4.7 5.4-2 1.3-4.6 2.2-7.6 2.6-3.1.4-6.7.5-10.8.3l-39-2.3.4-6.9c5 .3 7.5-.8 7.7-3.4l2.4-40.2c.2-2.6-2.3-4-7.2-4.3l.4-7.5 36.9 2.2zm-14.4 32.4-1.2 20.1 10.8.6c1.9.1 3.5 0 4.8-.5 1.3-.4 2.3-1.1 3.1-2 .8-.9 1.4-1.9 1.8-3.2.4-1.2.6-2.6.7-4.1.2-3.2-.4-5.7-1.8-7.5s-3.9-2.7-7.4-2.9l-10.8-.5zm1.4-23.6-1 16.5 8.6.5c3.1.2 5.3-.4 6.5-1.9 1.3-1.4 2-3.7 2.2-6.9.3-4.8-2.3-7.4-7.8-7.7l-8.5-.5zm123.7 32.7c.3 1.6.2 3.1 0 4.6-.3 1.5-.8 2.8-1.7 4-.9 1.2-2.1 2.2-3.6 3-1.5.8-3.4 1.4-5.7 1.8-2.7.4-5 .5-6.9.1-2-.4-3.6-1-5-2-1.3-1-2.4-2.2-3.2-3.7-.8-1.5-1.3-3.1-1.6-4.8l-.9-5.4c-.3-2.2-.8-3.9-1.2-5.3-.5-1.4-1.1-2.5-1.8-3.2-.7-.8-1.6-1.3-2.7-1.5-1.1-.2-2.4-.2-3.9 0l-9.6 1.5 2.9 18.2c.4 2.5 3.7 3.3 9.8 2.3l1.1 6.8-33.4 5.4-1.1-6.7c4.9-.8 7.2-2.5 6.8-5l-6.5-40.5c-.4-2.5-3.1-3.4-8-2.6l-1.1-6.8 39.4-6.3c2.7-.4 5.4-.7 8-.7 2.7-.1 5.1.3 7.3 1.1s4.1 2.1 5.6 3.9c1.5 1.8 2.6 4.4 3.1 7.7.3 2.2.3 4.1-.1 5.8-.4 1.7-1 3.3-1.9 4.6s-2 2.5-3.2 3.4c-1.3.9-2.6 1.7-4.1 2.3 1.6.2 3 .6 4.2 1.2 1.3.6 2.4 1.4 3.4 2.4s1.8 2.4 2.5 4 1.2 3.6 1.6 5.8l1.1 6.7c.2 1.2.6 2.1 1.2 2.6s1.3.7 2 .6c.8-.1 1.4-.5 1.9-1.2.4-.7.5-1.6.3-2.8l-.6-4 5.2-.8.4 3.5zm-51.7-34.7 2.7 16.9 10.6-1.7c3.1-.5 5.2-1.5 6.4-3.1 1.2-1.6 1.5-4.1 1-7.5-.4-2.5-1.4-4.4-3-5.4-1.6-1.1-4-1.4-7.1-.9l-10.6 1.7zm80.7-23.2c-4.7 1.6-6.6 3.7-5.8 6.1l13.5 38.6c.9 2.4 3.6 2.8 8.3 1.2l2.3 6.5-30.3 10.6-2.3-6.5c4.8-1.7 6.7-3.7 5.9-6.1l-13.5-38.6c-.9-2.4-3.7-2.8-8.4-1.1l-2.3-6.5 30.3-10.6 2.3 6.4zm67.9-36c-1.7 1-3.2 2.3-4.6 3.9-1.4 1.6-2.4 3.4-3.1 5.2l-5.5 14.5 32.1 16.6c1.7.9 3.1 1.3 4.4 1.3 1.2 0 2.7-.4 4.3-1.4l1.6-.9 3.4 6-30 17.3-3.4-6 3.3-1.9c1.7-1 2.2-2.1 1.5-3.2-.3-.5-.9-1-1.8-1.6l-20.9-11.7-4.3 12 6.4 11.1c1.3 2.2 4.1 2.1 8.4-.4l3.4 6-27.7 16-3.4-6c4.3-2.5 5.8-4.9 4.5-7.1l-20.4-35.4c-1.3-2.2-4.1-2.1-8.4.4l-3.4-6 27.7-16 3.4 6c-4.3 2.5-5.8 4.9-4.5 7.1l9 15.6 8.8-24c.4-1.1.4-2.1-.2-3-.4-.7-1-1.1-1.7-1.3-.8-.2-1.6 0-2.6.6l-2 1.1-3.4-6 25.8-14.9 3.3 6.1zM185.3 156.4l-7.9 11c-3.8-2.5-7.5-4.1-11.3-4.7-3.8-.6-7.4-.5-10.9.5s-6.9 2.6-10.3 5c-3.3 2.3-6.5 5.2-9.5 8.7-1.3 1.5-2.7 3.2-4.1 5.2-1.4 2-2.5 4-3.2 6.2-.7 2.1-1 4.3-.7 6.4.3 2.1 1.5 4.1 3.6 6 1.8 1.6 3.8 2.3 6 2.2 2.2-.1 4.6-.9 7.1-2.2 2.5-1.3 5.2-3 8.1-5.2 2.8-2.2 5.8-4.5 8.8-6.9 3-2.5 6.2-4.9 9.6-7.4 3.4-2.4 6.8-4.7 10.3-6.7 6.7-3.7 13.3-5.4 19.7-5.1 6.4.3 12.8 3.3 19.3 9 4.4 3.9 7.6 8.1 9.6 12.7s2.9 9.2 2.6 14.1c-.3 4.8-1.5 9.7-3.8 14.7s-5.5 9.8-9.6 14.4c-4.9 5.6-9.4 9.6-13.5 12.2-4.1 2.6-7.9 4.5-11.5 5.8-2.5.9-4.3 2-5.5 3.3-.9 1.1-1.3 2.4-1 4.1.2 1.7.8 3.4 1.6 5l-9 10.2-29.7-26.2 8.2-10.7c7.1 5.2 14.6 6.8 22.5 4.8 7.8-2 15.5-7.2 22.9-15.7 2-2.3 3.9-4.7 5.4-7.1 1.6-2.4 2.7-4.8 3.3-7.1.6-2.3.6-4.6-.1-6.9-.7-2.3-2.2-4.4-4.6-6.6-2.6-2.2-5.4-2.9-8.5-2.1-3.1.9-6.4 2.6-10 5.1-3.6 2.5-7.4 5.5-11.4 9s-8.3 6.8-12.8 9.7c-8.9 6-17 9.1-24.3 9.1-7.3 0-14.7-3.3-22.3-9.9-3.2-2.8-5.7-5.9-7.6-9.5-1.9-3.6-3-7.5-3.1-11.7-.1-4.2.7-8.7 2.6-13.5 1.9-4.8 5-9.7 9.5-14.8 4.8-5.4 9.1-9.4 13.2-12 4-2.6 7.6-4.5 10.9-5.8 1.2-.4 2.2-.9 2.9-1.3.8-.4 1.5-1 2.1-1.7 1.4-1.6 2.1-3.1 2.1-4.5s-.4-3.2-1.1-5.2l7.6-8.7 27.8 24.8zm82.7-33.8-6.8 5.1c-3.1-3.2-6.3-5.2-9.8-5.9-3.5-.7-7 .1-10.7 2.5-5.3 3.4-8 7.6-8 12.5s2 10.6 6.1 17.1c2.1 3.4 4.3 6 6.5 8s4.4 3.3 6.6 4.1c2.2.8 4.3 1 6.4.7 2.1-.3 4.1-1 5.9-2.2 4.4-2.8 7.3-5.9 8.6-9.3 1.3-3.3 1.4-7.3.2-11.9l7.5-2.5c.9 2.8 1.4 5.6 1.7 8.4.2 2.8-.1 5.7-.9 8.5s-2.2 5.6-4.3 8.3c-2.1 2.7-5 5.2-8.6 7.5-3.7 2.4-7.6 4.1-11.6 5.1s-7.9 1.2-11.7.5c-3.8-.7-7.5-2.2-11.1-4.7-3.6-2.5-6.8-6-9.7-10.6-3-4.8-5-9.4-5.8-13.8-.8-4.4-.8-8.5.1-12.3.9-3.8 2.5-7.2 4.9-10.3 2.4-3.1 5.3-5.7 8.7-7.9 3.6-2.3 7-3.8 10.1-4.6 3.2-.8 5.9-1 8.3-.6l-.6-4.6 6.9-4.4 11.1 17.3zM350.3 78c-4.8 1.6-6.8 3.6-6 6l12.6 38.9c.8 2.5 3.6 2.9 8.4 1.3l2.1 6.6-29.6 9.6-2.1-6.6c4.1-1.3 5.8-3.2 5-5.7l-5.5-17.1-20.9 6.8 5.5 17.1c.8 2.5 3.3 3 7.4 1.7l2.1 6.6-29.6 9.6-2.1-6.6c4.7-1.5 6.7-3.5 5.9-6l-12.6-38.9c-.8-2.4-3.6-2.9-8.3-1.4l-2.1-6.6 29.6-9.6 2.1 6.6c-4.2 1.3-5.8 3.2-5 5.7l4.6 14.1 20.9-6.8-4.7-14.1c-.8-2.4-3.2-3-7.3-1.7l-2.1-6.6 29.6-9.6 2.1 6.7zm94.5-7.4c-5 .2-7.4 1.6-7.3 4.2l2.3 51.6-20.3.9-28.4-45.8 1.6 36.3c.1 2.6 2.7 3.7 7.6 3.5l.3 6.9-23.9 1.1-.3-6.9c5-.2 7.4-1.6 7.3-4.2l-1.8-40.9c-.1-2.6-2.7-3.7-7.6-3.5l-.3-6.9 27.3-1.2 29 47-1.7-37.4c-.1-2.6-2.7-3.7-7.6-3.5l-.3-6.9 23.8-1.1.3 6.8zm66.7 58.4c.2 1.8 2.3 3 6.2 3.8l-1.3 6.8-33-6.5 1.3-6.8 6.3 1.3c1.6.3 2.5 0 2.7-1 0-.2 0-.6-.1-1l-1-7-22.3-4.4-3.2 5.5c-.3.4-.4.7-.5 1-.3 1.4.8 2.3 3.3 2.8l4.7.9-1.3 6.8-23.3-4.6 1.3-6.8c2.4.5 4.1.6 5.3.4 1.2-.2 1.9-.7 2.4-1.4l28.7-48.4 16.6 3.3 7.2 55.3zm-37.3-21.8 17.7 3.5-3.3-28.6-14.4 25.1zM603.3 118c-4.6-2.1-7.4-2-8.5.4l-10.9 23.8c-1.7 3.8-3.7 7-5.8 9.6-2.1 2.7-4.6 4.6-7.4 5.9-2.8 1.3-5.9 1.8-9.4 1.5-3.5-.2-7.5-1.4-12-3.4-4.6-2.1-8.2-4.5-10.9-7.1-2.7-2.6-4.5-5.4-5.6-8.4-1-3-1.3-6.2-.9-9.6.5-3.4 1.5-7 3.3-10.8l10.9-23.8c1.1-2.3-.7-4.6-5.2-6.6l2.9-6.3 30.3 13.9-2.9 6.3c-2.9-1.3-5.1-2-6.6-2s-2.5.6-3 1.8L550.8 127c-1.3 2.8-2.2 5.3-2.7 7.5s-.6 4.1-.3 5.8c.3 1.7 1.1 3.2 2.4 4.5 1.3 1.3 3.1 2.5 5.5 3.6s4.6 1.7 6.5 1.9c1.9.1 3.7-.2 5.3-1 1.6-.8 3.1-2.1 4.4-3.9 1.4-1.8 2.7-4.1 4-6.9l10.9-23.8c.5-1.2.3-2.3-.7-3.5-1-1.2-2.9-2.4-5.8-3.7l2.9-6.3 23 10.5-2.9 6.3zm60.7 47-54.3 15.5 9.9 7.9c1.7 1.4 3.4 2.3 4.9 2.9 1.6.6 3.2.7 4.9.4 1.7-.3 3.5-1.2 5.4-2.5 1.9-1.3 4-3.2 6.3-5.5l5.6 5.2-17.2 18.4-42.2-33.4 5-6.3 55.1-14.8-10.3-8.2c-1.6-1.3-3.1-2.1-4.4-2.5-1.4-.4-2.8-.3-4.3.2s-3.1 1.5-4.9 3c-1.8 1.5-3.8 3.4-6.2 5.9l-5.6-4.7 16-20.2 41.2 32.6-4.9 6.1zm45.1 68.8-5.6-6.3c5.4-4.7 6.2-9.4 2.5-14.1l-9.9-12.3-13.7 11 4 5c1.6 2.1 5.1 1.3 10.3-2.2l4.6 5.8-21.2 15.3-4.5-5.6c4.7-4.5 6.4-7.7 5-9.4l-3.6-4.5-16.1 12.9 8 10c5.5 6.9 12.6 7.3 21.4 1.2l4.9 7.1-20 13.4-36.3-45.4 5.4-4.3c3.1 3.9 5.7 5 7.7 3.4l32-25.5c2-1.6 1.5-4.4-1.6-8.3l5.4-4.3 36.3 45.4-15 11.7zm-166.2-9.7c2.9-3.3 5.7-3.1 7.9.6.4.7.8 1.8 1.6 1.5 2.2-.8 3.2.2 4.1 2 .6 1.1 1.9 1.6 3.2 1.6 3.8-.1 7.1 1.9 10.8 2.3 5.6.7 10.2 4 14 8.3 1.6 1.9 3.5 3.5 5.8 4.5 1.8.7 2.8 2.1 3.7 3.7 3.7 6.4 4.7 13.4 5.3 20.6.6 6.8 1.3 13.7 2.4 20.4.7 4.4-.5 8.4-4 11.1-2.9 2.3-3.7 5.2-3.7 8.7 0 3.3-.4 6.5-.7 9.8-.6 6.7-5 10.2-10.1 13-3 1.7-6.1 3.2-9.5 3.7-2.3.4-3.6 1.8-4.4 3.8-1.1 2.6-2 5.3-1.8 8 .3 4.4-1.2 6.8-5.1 9.1-5.8 3.4-10.7 8.1-15 13.3-2.7 3.2-5.5 6.5-8.3 9.7-1.9 2.2-3.1 4.8-4.3 7.5-.3.7-.4 1.6-1 2.2-.7.6-1.7.8-1.9-.3-.3-2.2-1.5-4.3-1.2-6.7.5-3.6.6-7.3.8-11.2-2.2 1.4-2.2 1.4-4.2-.6-.9-.9-2-1-2.9-.1-.6.6-.8 1.4-1.3 2.1-1.2 1.5-2 1.4-2.9-.4-.2-.4-.5-.8-.5-1.1.8-4.5-2.6-7.1-4.7-10.1-2.9-4-2.5-8.2-2-12.5.3-2.3-.3-3.5-2.4-3-2 .5-2.5-.2-2.7-1.8-.2-1.4-.2-2.7-2.3-2.6-1.3.1-1.4-1.1-1.3-2.1.1-1.1.4-2.2.4-3.3 0-.9.1-2.4-1-2.5-2.6-.2-2.8-1.8-2.4-3.7.2-1.5-.7-2.3-1.6-3.1-2.7-2.3-5.4-4.7-8.1-6.9-4.7-3.8-9.1-7.9-13.6-11.9-5.9-5.3-12.7-9.5-19.5-13.7-1.5-.9-3.3-1.1-5.1-1.5-13.1-2.3-26.3-3.8-39.5-5.6-6-.8-9.7-5-9.9-10.8-.1-4.5 3.7-8.1 8.2-7.5 1.8.2 3.5.8 5.2 1.1.8.2 1.8.5 2.1-.5.3-1 .5-2.2-.8-2.9-1-.5-2-.9-3-1.3-.6-.3-1.3-.7-1.2-1.5.1-.9.8-1.5 1.6-1.6 2.7-.4 5.6-1.7 8.2.4.3.2.8.1 1.2.1.1 0 .2-.1.3-.2.6-1.8-2.7-1.9-1.8-3.6.7-1.3 2.5-.8 3.8-1.2.9-.2 1.2-.8 1.1-1.9-.4-2.3-1.1-4.7-.7-6.8.5-2.3 3.7-2.5 5-4.4 1.1-1.5 2.2-2.1 3.6-.6 1.5 1.6 2.5.5 3.8-.5 2.7-2.2 4.5-5.2 6.8-7.8.8-.8 1.2-1.4 2.3-.8.7.4 1.4.2 1.7-.5 1.3-2.8 3.8-3.4 6.5-3.4 1.8.1 2.6-.3 2.2-2.3-.2-.9 0-2 .9-2 4.6-.5 7.7-3.8 11.7-5.6 4.9-2.1 9.9-4.1 14.6-6.7 1.5-.8 3.7-.2 5.1-1.8.1-.1.7-.1.8 0 1.2 2.5 2.3.7 3.8.3 2.1-.6 4.5-.1 6.8-.1 1.5 0 .9 2.4 2.5 3.3 2.3-3.3 5.5-3.2 8.9-1.9 3 1.1 6.4 1.3 9.3 2.2 2.4.7 5.9.1 7.6 3.3.7 1.2 2.7 1.2 3.9-.3 1-1.2 2.1-1.2 2.4.2.8 2.2 2.9 3.2 4.5 4.8.1.6.1 1.3.1 2 .1 2.7-.5 3.5-2.9 2.9-3.2-.9-7-.7-8.9-4.4-.8-1.5-5.2-2.6-5.8-1.7-1.6 2.5-3.3 1.1-4.9.5-4.5-1.6-8.9-3.5-13.9-2.7-1.2.2-1.8-.5-2.3-1.4-.6-1-1.8-1.6-2.4-.9-1.7 1.8-4.2 1-5.9 2.2-1.6 1.1-3.2 1.2-5 .8-2.5-.5-6.5 2.1-6.9 4.3-.1.7-.1 1.4-1 1.5-.8.1-1.1-.6-1.4-1.2-.7-1.4-.6-3.1-2-4.6 0 1-.2 1.6 0 2.1 1 2.3.3 3.8-1.7 5.1-3.9 2.6-7.8 5.1-12.5 6.1-.5.1-1.5.2-1.5.4-.5 3.1-4 2.5-5.3 4.4-1.1 1.6-2.7.2-3.7 1-1.1.9-.2 2.8-1.7 3.5-.4.2-.7.4-1.1.6-3.2 1.9-3.2 1.9-2.1 5.4.5 1.7.8 2.7-1.7 2.9-3.2.3-3.5 1.5-1.6 4.3.5.7.9 1.4 1.5 2 1.1 1.2 1.7 2 .4 3.8-1.8 2.4-.8 4.1 2.1 4.8 4 1 7.4 2.9 10.3 5.8 4 3.9 9.1 5.6 14.5 6.2 1.9.2 4 .4 5.2-1.6 1.2-2.1-.2-3.8-1.5-5.1-2.3-2.3-1.7-5.4.3-7.4 3.3-3.4 7.4-5.9 12-6.6 4.8-.7 9.6 0 14.1 2.1 2.2 1.1 4.5 2 6.9 2.7 3.4 1 5.6 3.3 6.8 6.6 3 8.3 2.8 16.4-1 24.4-2.4 5-4.9 9.8-7.3 14.8-1.2 2.5-2.5 4.9-3.6 7.4-.6 1.3-.3 2.1 1.3 2.2.5 0 1.1.2 1.6.2 2.8.3 3.2.4 3 3-.1 1.6.2 2.7 1.6 3.4 1.4.7 1.3 2.2 2 3.4.6-.1 1.1-.2 1.7-.3.9-.2 1.9-1 2.6.2.5.8-.1 1.6-.4 2.3-.6 1.2-1.1 2.5-1.6 3.8-.3.8-.9 1.8.3 2.7 1.4-.7 1.7-2.3 2.7-3.4.6-.7 1.4-1 2.2-.4.8.7 2.6.7 2.1 2.1-.8 2.5.3 5.5-1.9 7.7-.7.7-1.2 1.8-.8 3.5 1.6-3.3 3.8-2.5 5.8-1.4 1.8 1 2.4.2 3-1.3.8-1.9.3-3.8.6-5.7.2-1.6.7-2.9 2.4-1.2.7.7 1.3.4 1.5-.3.3-.8.3-1.6.5-2.4 2.4-10.6 3.5-21.4 5.5-32 .9-4.8 2.2-9.6 2.6-14.6.1-.8.4-1.8 1.4-1.8 1.1.1 1.1 1 .9 1.9-.4 2.3-.5 4.4.9 6.7.8 1.4.9 3.7-.1 5.6-2.4 4.5-3.3 9.6-5 14.4-.6 1.8-1 3.8-.4 6.2 1.6-1 2.2-2.2 2.1-3.6 0-1-.2-1.9.3-2.8.5-1 .6-2.6 2.3-2.5.8 0 2.1 2.9 1.7 3.9-.4 1-1 1.9-1.5 2.9-1.1 2.2-3 4.3-3 6.7.1 2.9-.6 5.4-1.4 8-.3 1.2-.4 2.1 1 2.6 1.3.5.8 1.5.3 2.4-1.1 1.9-2.3 3.8-3.3 5.7-.3.5-.5 1.6.6 1.4 2.6-.3 1.8 1.1 1.4 2.5-.5 1.8.3 2.6 1.9 2.3.8-.1 1.6-.5 2.3-.8 1.7-.8 1.1-3.2 2.5-4.1 1.4-.9 3.5.6 4.8-1.4.8-1.3 1.7-1.1 3-.2 2.1 1.6 4.7.2 4.9-2.5.2-1.9.1-3.9 0-5.8-1.1-15.3 3-29.7 7.1-44.1.9-3.1 2.3-5.9 4.4-8.3 4.4-5.2 11.1-5.3 15.7-.4 2.4 2.6 3.9 5.6 4.3 9.1.2 1.8-.2 3.8 1 5.9 2.2-1.1 2.9-3 3.1-5.1.1-1.8.1-3.6-.2-5.3-1.1-6.7-1.7-13.3-2.3-20-.4-4.4-1-8.8-2.6-12.9-1-2.5-1.3-5.9-5.3-5.7-2.7-2.7-6.7-3.9-8.7-7.6-.8-1.4-2.1-2.8-3.8-2.8-2.5.1-4.7-1.4-7.2-.9-1.1.2-2.2-.1-2.8-1.3-.5-1.1-1.4-1.4-2.3-.8-2 1.3-3.1.7-4.7-1-2-2.1-5.9-1.4-7.9-4.2-5.1.9-7.1-2-8.1-6.3 0-.3-.1-.4-.2-.5zM534.5 380c-.5 0-.7.4-.7.8s.2.9.7.6c.3-.2.4-.6.5-1 0-.1-.4-.3-.5-.4zm32.3-42.9c.2-.1.3-.3.5-.4-.2-.1-.3-.4-.5-.4s-.3.2-.5.4c.2.1.4.3.5.4zM500.4 215c-.2-.1-.4-.4-.5-.4-.3 0-.4.3-.2.5.1.1.2.2.3.2.3.2.4.1.4-.3zM339.7 475.2c-.2-.1-.5-.4-.6-.4-6.1 1.9-12.6 3-17.4 7.7-.9.8-1.8 1.1-2.9 1.2-2.6.5-5.1 1-7.7 1.5-1.1.2-2.2.6-2.6 1.7-.5 1.3-1.6 1.8-2.8 2.2-8.6 2.9-17.1 5.9-25.1 10.3-.7.4-1.6.9-2.2 0-.8-1.1.3-1.8 1-2.3 3.1-2.1 6.6-3.4 10-4.8 2-.8 4.1-1.3 5-3.8.5-1.5 2.5-1.6 3.8-2.2.5-.3.9-.7.7-1.3-.3-.8-1.2-1-1.7-.6-6.1 3.9-13.8 3.5-19.7 7.8-.6.4-1.4.7-1.9.3-2.3-1.8-4.2-.3-6 .7-16.4 9-32.7 18.1-47.5 29.6-4.2 3.3-8.6 6.5-12.9 9.5-6.2 4.4-12.1 9.1-17.6 14.2-5.3 4.8-10.7 9.4-16 14.3-22.1 20.5-41.3 43.3-55 70.4-4.2 8.2-8.5 16.3-12.7 24.5-.3.5-.5 1-.8 1.4-.5.9-1.3 1.6-2.3 1-.8-.5-.7-1.4-.4-2.2.2-.6.5-1.3.8-1.9 8.6-16.4 16.6-33.2 27-48.6 4.2-6.2 8.6-12 13.4-17.8 16.2-19.5 34.8-36.6 54.6-52.4 18.2-14.6 37.3-28.1 57.7-39.5 1.2-.6 2.6-1 3.2-2.4-1-.9-1.8-.1-2.7.2-3.4 1.2-6.7 2.3-10 3.7-14 5.7-28 11.3-42.2 16.4-3.6 1.3-7.1 2.9-10.4 4.9-20.6 12.3-41.5 24.2-61.7 37.2-18.5 11.9-33.4 27.1-46.7 44.2-2.7 3.5-5.2 7.1-8.3 10.3-.7.7-1.3 1.4-2.1 1.9-.6.4-1.3.3-1.8-.4-.4-.5-.4-1-.2-1.5.5-1 1.3-1.7 2.1-2.5 4.8-4.9 8.3-10.8 13.2-16.7-3.7 1.5-7.1 4.1-11 8.3-.7.8-1.5 1.6-2.3 2.3-.5.5-1.3.6-1.9.1-.6-.5-.5-1.3-.2-1.9.6-.9 1.2-1.9 2-2.6 1.7-1.7 3.6-3.4 5.4-5.1 4.9-4.4 10.1-8.5 14.7-13.2 7.6-7.6 16.1-14.2 25.2-19.9 5.6-3.5 10.9-7.4 15.7-12 4.5-4.2 9.5-8 14.8-11.2 9.2-5.6 18-11.6 26.9-17.6 6.3-4.2 12.7-8.2 19.5-11.4 1.7-.8 3.5-1.6 5.5-1.8.7-.1 1.3.3 1.5 1.1.1.6-.3 1-.8 1.3-.5.3-1 .4-1.5.7-11.7 4.7-21.7 12.3-31.9 19.4-.3.2-.6.5-.4 1.1 1.4 0 2.4-.9 3.6-1.6 4.4-2.5 8.9-5 13.2-7.7 7.5-4.7 15.4-8.5 23.8-11.3 13.4-4.5 26.3-10.4 39.5-15.4 6.3-2.4 12.6-4.6 19.2-6.3 1.4-.4 2.9-.6 3.6-2.4.5-1.3 1.8-1.6 3-1.9 6.5-1.7 13-3.3 19.5-5 1.2-.3 2.3-.6 3.5.4 1.7 1.5 3.3 1 5.2.1 9-4.2 18.2-7.6 27.8-10.3.3-.1.5-.1.8-.2 1.1-.3 2.5-.8 2.8.7.3 1.5-1.3 1.5-2.3 1.7-8.3 2.1-16.1 5.5-24 8.7-.9.4-2.2.5-2.6 2.1 1.5.2 2.7-.5 3.9-.9 6.4-1.9 12.6-4.8 19.4-5.3.3 0 .7 0 .8-.2 2.3-4 7.5-3 10.4-6.1.9-1 2.3-1.4 2.7-2.9.2-.8 1-1.4 1.8-1.6 3.3-.9 5.8-3.7 9.1-4.6.8-.2 1.7-.6 1.4-1.7-.5-2.4 1.2-2.8 2.8-3.3 2.1-.7 4.6-.7 5.1-3.8.1-.7 1.2-1 2-1.3 5.1-2 10.3-3.9 15.4-5.9.3-.1.5-.2.8-.3 1.1-.3 2.7-1.2 3.2.4.6 1.8-1.5 1.5-2.5 1.9-2.9 1.1-5.9 2.1-9.2 4.1 2.7.5 4.5-.4 6.3-.7 2-.4 4-.8 6.1-.7.7 0 1.5.1 1.4 1.1-.1.6-.5 1-1.1 1.1-1.9.4-3.8.6-5.7 1-1.2.2-2.4.4-3.6 1.6 1.8.1 3.3.2 4.9.4.4 0 .8.3.8.8.1.6-.3 1.1-.9 1.2-.9.2-1.9.2-2.9.3-1.5.2-3.2.2-3 2.5 0 .2-.2.7-.3.7-2.2.7-3.6 2.7-5.8 3.4-1.6.5-3.3.2-2.3 2.8.2.5-.7 1-1.5 1.1-1.5.3-3 .5-4.5.8-2 .4-4.1.4-4.8 3.1-.2.9-1.2 1-2.1 1.1-3 .5-5.7 2-8.2 3.6-8.7 5.6-16.4 12.3-23.5 19.9-15.2 16.2-28.7 33.6-40.2 52.6-8.5 13.9-14.3 29-19.9 44.3-1.9 5.2-2.6 10.7-3 16.1-.4 5.1-.6 10.1-.8 15.2-.1 6.1-1 12-1.8 18-.1.4-.1.8-.2 1.2-.4 1.2-.6 3.2-2.3 2.9-2.1-.4-.9-2.1-.8-3.4 1-7.4 2-14.7 2.1-22.1.1-14 2.8-27.3 8-40.5 11.9-30.6 30-57 51.8-81.1 6.7-7.5 13.5-14.9 21.8-20.6.1-.1.5-.5.5-1.2zm-20.7 5.5c-.2-.1-.4-.4-.5-.4-.2 0-.5.2-.6.4-.1.5.3.6.6.5.2-.1.3-.4.5-.5zm243.3 35.2c-1.4-3.2-3.4-5.9-5.5-8.7-5.6-7.4-10-15.4-13.5-24-5.3-13.3-10.6-26.5-15.9-39.8-1.6-4.1-3.7-8-6.4-11.5-1.3-1.7-2.8-3.5-3.2-5.7-.5-2.4-2.7-2-4.2-2.7-1.7-.8-2.1.7-2.6 1.7-.2.3-.5.8-.8.9-3.7.7-5.6 3.8-8.1 6.1-5 4.5-10.3 8.7-14.4 14.1-2.2 2.9-4.8 5.2-7.6 7.5-2.3 2-5.5 2.8-7.6 4.8-2.3 2.2-4.8 4-7.5 5.7-11.1 7.1-21.6 15-32.7 22.2-6.9 4.5-14.2 8.3-21.1 12.8-3.7 2.4-7.1 5.2-11.2 7-6.4 2.9-12.5 6.4-18.5 9.9-5.7 3.3-11.5 6.5-17.6 8.9-1 .4-2 .9-3 1.4-.7.4-1.5 1-1.1 1.9.4 1 1.3 1 2.1.7 2.8-1.1 5.7-1.6 8.4-3.1 10.4-5.9 20.7-11.9 31.4-17.3 4.4-2.2 9-4.3 13-7.1 10.3-7.4 21.7-13 32.4-19.6 1-.6 2.2-1.7 3.3-1.6 3.3.4 5.3-1.8 7.7-3.3 1.5-.9 3.1-1.9 4.7-2.5 11-4.5 22.3-7.4 34.4-6.7 8.1.5 15.8 1.6 22.2 7.3.9.8 2 1.4 3.1 2.1 7.1 4.3 13.3 9.7 19 15.6 1.3 1.3 2.4 2.7 3.2 4.2 2.5 4.6 5.1 9.1 7.3 13.9 1.2 2.6 3.2 4.7 4.4 7.4.7 1.5 2.3 1.9 3.8 2.2 1.6.4 3-1 2.9-2.8-.2-.4-.5-1.1-.8-1.9zm-346.7-34.8c-2.1-1-3.3-.4-4.6-.1-11 2.6-21.7 5.9-32.2 9.9-16.3 6.1-32.7 12.1-49.2 17.5-17.2 5.6-32.9 14.5-48.6 23.2-11.2 6.2-22.4 12.4-34 17.8-3.4 1.5-6.8 2.9-10.3 4.2-1.3.5-2.6.7-4 .9-.9.1-1.7-.2-1.8-1.2-.1-.8.5-1.2 1.2-1.5 3.5-1.3 7-2.3 10.4-3.9 1.6-.8 3.3-1.3 3.7-3.4.2-1.1 1.4-1.6 2.3-2.2 15.1-10.4 30.9-19.5 47.9-26.4 19.4-7.9 38.6-16.6 57.4-26 5.7-2.8 11.4-5.4 17.3-7.6 15.8-5.9 31.6-11.8 47.5-17.7 3.1-1.1 6.1-2.5 9.1-3.8.7-.3 1.8-.7 2-1.3 1.1-3.2 4-3.5 6.6-4.2 5.9-1.8 11.9-3.4 17.8-5.2.8-.2 1.6-.4 2.4-.5.4-.1.8.2.9.7.1.4.1.9-.3 1.1-1.1.7-2.3 1.3-3.5 2 1 1.2 2 .5 2.7.2 3.3-1 6.5-2.1 9.8-3.2 1.3-.4 2.6-1 4-.6.8.2 1.6.6 1.6 1.6 0 1.1-1 1-1.8 1.2-5.8 1.7-11.5 3.5-17.3 5.3-.7.2-1.3.6-1.2 1.4.3 2.3-1.5 2.7-3 3.2-5.8 2.1-11.6 4.2-17.2 6.9-2.8 1.3-5.9 2.3-8.3 4.5-.8.8-1.8.9-2.5-.1-.8-1-.1-1.9.7-2.4 1.6-1 3.3-1.9 5.1-2.7 5.9-2.7 11.8-5.1 17.9-7.3 1-.4 2.1-.5 2.9-1.4-10-.4-95.1 32.1-108.1 41.2 1 .8 1.8.1 2.7-.2 10.6-3.4 21-7.3 31.3-11.3 16.2-6.2 32.8-10.9 49.8-14.2 2.2-.4 4.3-1 6.3-1.8 4.3-1.7 8.7-3.3 13.2-4.5 1.1-.3 2.1-.5 3.2-.7.7-.1 1.5-.2 1.7.6.3.8-.4 1.3-1 1.5-.9.3-1.8.6-2.8.8-2.7.9-5.5 1.7-8.2 2.7-1.3.4-2.7.7-3.8 2.1 1.4.9 2.7.4 3.9.3 1.1-.1 2.2-.4 3.2.2.4.2.7.5.6.9-.1.3-.3.8-.7.9-.5.2-1 .3-1.6.3-4.3.1-8.4 1.3-12.5 2.5-2.2.6-4.5 1.1-6 3.3-.7 1.1-2.2 1.1-3.3 1.5-1.8.7-3.6 1.3-5.4 2-.7.3-1.8.8-1 1.7 1.3 1.5 0 1.8-.7 2.8-1.8 2.6-4.5 3.3-7.1 4.3-4.2 1.7-8.3 3.5-12 6.3-.9.7-1.8 1.5-2.9.6-.8-.6-2.4-.3-2.5-1.8-.1-1.3 1-1.9 2-2.4 1.7-.9 3.1-2.1 4-4 .5-1.1 1.8-1.7 2.9-2.3 2.9-1.5 5.9-3 8.8-4.4 2-1 4.3-1.6 5.6-3.9.6-1.1 2.1-1.2 3.2-1.7 2-.7 3.6-1.3 5.8-2.2zM82 526.8c-5.5 1.3-12.2 5.2-14.7 8.4 5.6-2.6 10.2-5.4 14.7-8.4zm676.7 98.8c23.9 13.5 27.8 19.5 51.7 33 .8.5 1.7 1 2.5 1.4.6.3 1.3.8 1.9 0 .5-.7.5-1.6 0-2.3-.9-1.1-2.2-1.6-3.4-2.3-28.1-15.9-36.1-24.3-64.2-40.1-2.8-1.6-5.5-3.1-7.7-5.4-30.8-31.8-64.8-60.2-97.7-89.6-.6-.5-1.1-.8-1.8-.3-.5.4-.5 1-.4 1.5.2 1.1 1 2 1.8 2.7 1.8 1.8 3.7 3.7 5.7 5.4 11.2 9.7 22.5 19.3 33.7 29.1 15 13.1 29.4 26.9 43.6 40.9.8.8 1.9 1.4 1.8 3.1-1.8-.4-3.1-1.3-4.3-2.1-17.5-10.4-34.9-20.8-52.3-31.3-4.5-2.7-9.1-5.1-13-8.6-.7-.6-1.4-1-2.1-.1-.7.8-.3 1.6.2 2.2 1.5 1.8 3.6 2.9 5.6 4.2 24 15.2 48.5 29.7 73.1 43.9 4.7 2.7 8.9 5.9 12.7 9.7 7.3 7.4 14.8 14.7 22.3 22 19 18.4 34 41 54.5 57.8.8.7 1.7 1.4 2.6 2.1.6.4 1.2.7 1.9.1.9-.7.5-1.5-.1-2.2-1.9-2.2-4.1-4-6.3-5.9-23.8-20-41.8-45.9-63.9-67.7-.8-.8-2-1.4-2-3.1 1.2.1 2.4 1.2 3.6 1.9zm-445.1-291c7.1-.2 14.3.4 21.4 1 .8.1 1.9.1 2-.9.2-1-.8-1.3-1.6-1.4-3.4-.4-6.8-1-10.2-.9-1.3 0-2.7.3-3.9-.9 2.9-1.1 3-1.1 6.1-.7 4.4.5 8.7 1 13 2 .8.2 1.8.1 2-.9.1-.8-.7-1-1.3-1.3-1.3-.7-3.1-.3-4.7-1.9h1.8c5.4.2 10.6 1 15.9 2.2.8.2 1.7.5 2.2-.4.7-1.3-.7-1.5-1.3-2.1-.2-.2-.9-.4-.2-.8 1.9-.4 4.7 2.7 5.5-1.6.1-.5 1.2-.4 1.9-.2 1.2.3 2.4.7 3.6 1 .6.2 1.1 0 1.4-.6.3-.6-.1-1.1-.5-1.4-1.1-.9-2.5-1.1-3.8-1.4-6.7-1.5-13.6-1.5-20.4-2.3-1.7-.2-4.3-1.7-4.3 2.1 0 .3-.8.6-1.3.9-1.7 1.1-3.5 1.4-5.5 1.2-2.3-.2-4.9-.8-6.8.9-1.8 1.7-3.8 1.8-6 2-1.5.1-3.4 0-3.8 1.8-.5 2.1-1.9 2.1-3.4 2.2-1.9.1-3.8.3-5.8.4-1.1.1-2.4.3-2.8 1.4-.7 1.9-2.1 1.9-3.6 2-2 .2-4.7-.2-5.7 1.6-1.5 2.6-3.7 2.2-6 2.7-3 .7-6.8-.4-8.5 3.6-.4 1-1.9.8-3 .9-2.3.1-4.7.3-6.9.8-1.1.3-2.3.5-2.6 1.7-.4 1.9-1.8 2.2-3.3 2.5-2.4.5-4.9.9-7.2 1.7-6 2.2-11.8 4.9-18.1 6-1.6.3-3.5.7-3.9 2.6-.4 1.9-1.7 2.3-3.1 2.8-2.3.8-4.7 1.6-7 2.5-1.2.4-2.6.9-3 2.1-.7 2.4-2.6 2.5-4.4 3-2.7.6-5.4 1-7.8 2.5-.8.5-1.7 1.2-1 2.3.5.9 1.4.3 2.2 0 7.4-2.8 15.1-4 22.9-4.5 1.3-.1 3.7.8 3.6-1.4-.1-1.8-2.5-.9-3.8-1.1-2-.2-4 .7-6.1 0 .3-1 .8-1.3 1.5-1.5 3.5-1.1 7-2.3 10.6-3.3 5.1-1.3 10.2-2.1 15.5-1.9.8 0 1.8-.2 2-1.1.2-1.1-.9-1.1-1.7-1.3-.8-.2-1.8-.1-2.4-1.1 2.6-.8 4.9-.6 7.2-.6 1.2 0 2.8.3 3.5-.7 1.9-2.6 4.5-2.2 7.1-2.2 2.2-.1 4.4.1 6.6 0 1.1 0 3 .6 3.1-1 .2-1.9-1.8-1-2.8-1.4-.7-.2-1.7.3-1.9-.8.4-.6.9-.7 1.5-.8 3.4-.4 6.8-.4 10.3-.4 1.4 0 2.7 0 4.1-.1.4 0 .8-.3.8-.8.1-.6-.2-1.1-.8-1.2-1.9-.3-3.9-.4-5.8-.6 4.3-.6 8.5-.6 12.8-.7 1 0 2.5.6 2.6-1.1.1-1.4-1.4-1.1-2.2-1.2l-7.8-.6c-1-.1-2.1.2-3.3-1 6.6-.9 12.7-1.4 18.9-.8 1.6.2 3.3.3 4.9.4.8.1 1.8.1 1.9-1 .1-.8-.7-1-1.4-1.2-2.5-.7-5.2-.7-7.8-.8-1.4-.1-2.8.2-4-.7 6.2-.4 12.3-.5 18.4.2 1.4.2 3.8 1.3 4.1-.9.2-1.6-2.4-1.4-3.8-1.6-2.8-.4-5.7 0-9.2-1.3 1.5-.8 3.1-.5 4.6-.6zm303.2 230.5c-5.3-7-10.6-14-15.7-21.2-3.3-4.7-7.5-8.8-9-14.6-.1-.6-.7-.9-1.2-.8-.6.1-.9.6-1 1.1-.3 1.4 0 2.8.7 4 1 1.8 2 3.6 3.2 5.3 7.4 10.6 16.8 23 24.7 33.1 1.3 1.7-2 7.1-3.5 9.7-.5.9.2 2.3 1.4 1.7 2.5-1.1 4.6-9.4 5.8-7.9 11.6 14.6 24.7 33.7 34.3 49.8 6.7 11.3 13.6 22.6 20.8 33.6 7.2 11 14.7 21.9 21.3 33.3.2.4.4.7.7 1 .6.7 1.2 1.8 2.3 1 1-.7.6-1.7.2-2.6-.5-1-.9-2-1.5-2.9-1.6-2.7-3.2-5.4-4.9-8.1-8.5-13.3-17.2-26.5-25.7-39.8-7-11.1-13.5-22.6-20.8-33.6-7.2-10.9-15.3-21.1-23.4-31.3-1.4-1.8-2.4-3.5-1.8-6 1.7-7.8 2.6-15.7 3.6-23.6 2.3-17.2-.4-33.3-9.8-48.2-3.7-5.8-7.3-11.6-11.5-17.1-.9-1.2-1.7-3.7-3.5-2.3-1.6 1.2.4 2.7 1.2 3.8 4.6 6.5 8.9 13.2 12.8 20.1 6.1 10.8 8.9 22.4 8.3 34.8-.4 9.5-2 18.8-3.5 28.2-.1.9-.3 1.9-1.2 2.5-1.7-.4-2.4-1.8-3.3-3zM325.4 370.8c5.5.5 10.2.9 14.9 1.3 1.7.1 3.3.3 4.8.9.3.1.7.6.7.9.1.6-.4 1-1 1-1.2 0-2.5 0-3.7-.1-3-.2-6-.5-9-.7-1.4-.1-2.7-.1-3.7 1.3-.9 1.3-2.4 1.1-3.8 1.1-6 .1-12.1.1-18.1.3-3.2.1-6.5.5-9.7 1.1 2 1 4.2.7 6.3.7 3.6 0 7.1.3 10.7.8.7.1 1.4.4 1.4 1.2 0 .9-.8 1-1.5 1-2.6-.1-5.2-.2-7.8-.2-1.4 0-2.8-.2-3.5 1.4-.6 1.2-1.8 1.1-2.9 1.2-4.2.5-8.4 1-12.7 1.5-1.3.2-2.7.3-4 1.6 2.6.7 4.7 0 6.8-.3.8-.1 1.6-.4 2.4-.4.5 0 1.1.3 1.2.9.1.6-.1 1.1-.6 1.4-1.4.7-2.9.8-4.4 1-4.3.4-8.6.9-12.9 1.7 2.6.1 5.2.3 7.8.4.8 0 1.6.1 2.4.2.7.1 1.3.5 1.2 1.4-.1.6-.7.9-1.2.9-1.6 0-3.3-.1-4.9 0-2.4.2-5.3-.9-6.7 2.4-.4.8-1.7.6-2.7.7-2.8.2-5.7.4-8.6 1.3 1.3.2 2.5.3 3.8.5.4.1.8.4.7.9-.1.4-.4.9-.6.9-.9.2-1.9.2-2.8.3-8.4.1-16.7.4-25 1.5-.5.1-1.1.1-1.6.1-.6 0-1.1-.1-1.3-.7-.3-.8.3-1.3.9-1.6.9-.3 1.8-.6 2.8-.7 2.1-.3 4.4-.1 5.7-2.4.7-1.3 2.5-.9 3.8-1.1 2.2-.4 4.4-.4 6.3-2.3 1.6-1.6 4.4-1.2 6.7-1.5 1.1-.2 2.3-.1 2.6-1.5.4-1.9 2-2.1 3.5-2.3 2.6-.3 5.2-.5 7.8-.7 1.1-.1 2.2-.2 2.5-1.6.5-2 2.2-2.3 3.8-2.7 2.6-.6 5.3-1.1 8.2-1.7-1.4-1-2.6-.6-3.8-.7-.8-.1-1.8 0-2-1-.2-1.4 1.1-1.4 1.9-1.6.7-.2 1.4-.2 2-.2 1.6-.1 3.3.1 3.7-2.2.2-1.1 1.4-1.2 2.3-1.5 1.3-.3 2.3-.7 2-2.4-.2-1.2 1-1.5 1.9-1.8 1.5-.5 3-.3 4.5-.4 1 0 2.3.2 2.7-.7 1.2-2.5 3.3-2.1 5.3-2.2 12.1-.8 24.1.4 36.2-.3h.8c.8.1 1.7.3 1.7 1.4 0 .8-.8 1.1-1.5 1.1-1 .1-1.9.1-2.9.1-4.8 0-9.6.1-14.4.1-1.7.3-3.2.1-5.4 1zm-25.6 3.1c.5.2.6.3.7.3.7 0 1.3 0 2-.2.3-.1.2-.5-.2-.5-.7-.1-1.3 0-2 0-.1 0-.2.2-.5.4zm.1 58.3c-4.6.1-9 .7-13.4 2-22.6 6.3-45.3 12.2-68.2 17.5-16.6 3.9-32.5 10.1-48.4 16-24.1 8.9-48 18.1-71.1 29.5-6 3-11.9 6.3-17.4 10.1-.9.6-1.8 1.3-2.6 2-.6.5-.7 1.2-.2 1.9.5.7 1.2.6 1.8.3 1.2-.6 2.4-1.3 3.6-2.1 6.4-4.1 13-7.7 19.8-11 20.7-10 42-18.4 63.5-26.3 16.5-6 32.8-12.7 49.9-16.8 19.2-4.7 38.5-9.1 57.5-14.6 6.9-2 13.6-4.4 20.7-5.2 1.9-.2 3.8-.3 5.7-.5.9-.1 1.6-.4 1.6-1.5-.5-1.4-1.7-1.3-2.8-1.3zM837.5 650c-13.3-13.1-32.3-31.8-46.8-43.6-30.3-24.6-62.1-47.1-95-68.1-16.1-10.3-32.8-19.5-50.2-27.3-.5-.2-1-.4-1.5 0-.6.5-.6 1.3-.2 1.9.8 1.4 2.3 1.9 3.7 2.5 8.5 3.6 16.7 7.7 24.7 12.3 29.4 17 57.2 36.4 84.6 56.4 26.9 19.6 57.4 47.1 81 70.7.6.6 1 1.3 2.2 1.4 1.1-3-.8-4.5-2.5-6.2zm-4.1-28c-5.2-5.3-10.5-10.5-16.1-15.4-18-15.8-37.7-29.3-57.7-42.5-23.7-15.6-48.4-29.8-72.5-44.8-13.4-8.3-27-16.4-39-26.8-.3-.3-.6-.5-1-.7-.5-.3-1-.3-1.5.1s-.5 1-.2 1.5c.7 1.4 1.9 2.3 3.1 3.3 5.6 4.7 11.5 9 17.5 13 16.6 11.1 33.8 21.1 50.8 31.4 22.2 13.5 44.2 27.1 65.4 42.2 18 12.8 35.5 26.4 50.7 42.6.5.5 1 .9 1.9 1.7.9-2.6 0-4.1-1.4-5.6zm-610-195.3c-2.6.5-5.1 1.2-7.6 1.9-13.5 4.1-27 8.3-40.7 11.9-37.4 9.8-74.8 19.9-111.6 32.1-9.6 3.2-19.3 6.2-28.7 10.1-1.8.7-3.6 1.4-5.1 2.7-.6.5-.8 1.1-.3 1.8.3.5.9.7 1.5.5.9-.3 1.8-.7 2.7-1 3.2-1.3 6.3-2.6 9.6-3.8 20.3-7.3 40.9-13.6 61.5-19.8 26.9-8.1 54.3-14.8 81.4-22.3 11-3 21.8-6.6 32.7-9.9 1.6-.5 3.2-1.3 5.1 0 1.4.9 2.9-.3 2.9-2.1-.1-1.6-1.3-2.5-3.4-2.1zm585.2 151.5c-20.6-17.2-42.7-32.2-66-45.6-18.2-10.5-13-7.6-31.6-17.4-13.5-7.1-26.8-14.5-38.4-24.6-.7-.6-1.6-1.5-2.5-.5-.9.9-.1 1.8.6 2.5.8.8 1.5 1.6 2.4 2.3 3.6 3.2 7.6 5.9 11.6 8.5 14.1 9.4 5.3 4.5 20.3 12.3 36.5 18.9 71.8 39.7 103.3 66.5.7.6 1.3 1.4 2.6 1.3 1.4-2.7-.7-3.9-2.3-5.3zM196.3 442.5c-22.7 5.9-45.3 11.9-67.6 19.3-28.5 9.4-56.8 19.5-84.1 32.3-6.5 3-12.9 6.1-19.1 9.6-1.8 1-3.6 2.1-4.8 3.8-.4.6-.6 1.2-.1 1.9.5.6 1.2.6 1.8.2 2.7-1.6 5.3-3.4 8.1-4.9 8.7-4.7 17.7-8.7 26.7-12.7 25.3-11.4 51.6-20.3 77.9-28.7 21-6.7 42.1-13.3 63.8-17.3.3 0 .5-.1.8-.2 1.1-.5 2.1-1 1.7-2.4-.3-1.1-1.4-1.2-2.9-1.2-.4 0-1.3.1-2.2.3zm252.6-50c-1.6 1.4-2 3.8-4.2 4.8-1.3.5-.9 1.8.6 2.2 1.8.5 3.6.8 5.6.2 3.9-1.1 7.9-2.3 12-2.6 1.9-.2 2-1.3.8-2.5-1.8-1.7-.4-2.3.9-2.8 1.4-.5 2.9-.8 4.3-1.3s1.5-1.3.3-2.3c-.5-.4-1.6 0-1.5-1.4.2-2.6 0-2.6-2.1-2.1-1 .2-2.4 1.4-2.9.1-1.3-3.1-3.5-2-5.5-1.4-10.2 2.9-21 3.9-30.8 8.4-3.5 1.6-7.3 2.3-11 3.3-1.3.4-2.7 1.3-3.9 1.1-5.6-1.1-10.5 1.4-15.7 2.3-2.9.5-4.1 2.4-4.7 4.9-.6 2.6.7 4.1 3.2 3.5 5.5-1.2 10.8-3 16.5-3.6 1-.1 2.1-.6 1.7-1.8-.6-2.3.9-2.9 2.5-3.4 7.5-2.1 14.8-5.1 22.6-6 .8-.1 1.7-.2 2.2-1 .9-1.3 2.3-1.3 3.6-1.8 3.4-1.4 7-.3 10.6-.5-1.4 2-3.6 2.4-5.1 3.7zm147.8 16.9c2.8 1.4 5.6 2.8 8.4 4.3.5.3 1.1.4 1.5-.1.6-.6.4-1.3-.1-1.8-.4-.4-.8-.8-1.3-1-5.6-3.4-12.1-5.2-17.7-8.7-.7-.5-1.7-.2-2.2.6-.6.9 0 1.6.7 2 2 1.1 4.9 1.5 4 5 0 .2.2.5.4.7 3.1 2 5.4 4.8 7.5 7.8.4.6 1.3 1 2 1.4 1.3.8 2.1 2 3.1 3.1 2.3 2.7 2.5 6.2 4.4 9.1 1 1.5 2.9 2.4 3.1 4.1.3 2.8 2.3 3.9 4.2 5.2 3.6 2.3 7.2 4.5 10.8 6.7.7.4 1.9.6 1.7 2.1-1.6-.2-2.9-.9-4.2-1.5-2.2-1.1-4.4-2.3-6.5-3.5-.5-.3-1.1-.4-1.5.1-.4.5-.3 1 .1 1.5.4.4.7.8 1.2 1.1 4.8 3 10.1 4.8 15.1 7.4.6.3 1.8-.2 1.5-.7-1-1.6.4-3.2-.2-4.6-.4-1.2-1.6-1.8-2.7-2.4-2.3-1.2-4.7-2.3-4.7-5.5 0-.3-.4-.7-.7-1-1.9-1.8-4.9-2.6-4.7-6.1 0-.6-1.4-1.2-2.1-1.8-.8-.6-2-.7-2.4-2 1.8.1 3.1 1.2 4.7 1.6.7.2 1.5.3 1.9-.3.4-.7 0-1.4-.7-1.7-4-2.1-6.6-6-10.9-7.9-2.7-1.2-5.5-2.4-6.5-5.8-.3-1-1.7-1.7-2.8-2.3-1.9-1.3-4-2.4-5.9-3.7-.8-.5-2-.9-2-2.3 1.4-.4 2.4.4 3.5.9zm-215.8-57.9c1.6.2 4.5 1.6 4.7-.2.4-2.4-2.8-1.9-4.4-2.2-8.9-1.5-17.9-2.4-26.9-3.1-2.3-.2-4.3-.1-6.2 1.3-.5.4-1.4.4-1.5 1.2-.1.9.6 1.5 1.4 1.8 1 .3 2.1.7 3.1.9 3.4.6 6.8.9 10.2 1.6 3.2.6 6.6.6 9.5 2.2-3 0-6-.1-9-.5-7.6-1-15.3-.8-22.9-2.3-2.2-.4-5.2.8-5 1.6.6 2.3 2.7 1.9 4.4 2.2 6.1.9 12.2 1.5 18.3 2.5 6.2 1.1 12.5 1.2 18.8 2.3.7.1 1.6.3 2 0 2.5-2.2 5.1-1.1 7.8-.5.9.2 1.9 1 2.7 0 .9-1.1-.2-2.1-.5-3.1-.4-1.3-1.6-1.9-2.8-2.2-2.1-.7-4.2-1.3-6.3-1.8-3.6-.8-7.2-1.5-10.7-2.2 4.5-1 8.9 0 13.3.5zm-65.4 271.8c.5 1.5.8 4.1 2.7 3.5 2.5-.8.7-3 .3-4.5-1.7-5.8-3.6-11.5-4.1-17.6-1.1-14.9.7-29.7 3.2-44.2 2.6-15.6 8.2-30.4 14.7-44.8.9-2 2-3.9 3.5-5.6.7-.8 2-1.6.8-2.7-1-.9-2.1-.1-2.9.8-.7.8-1.5 1.7-2 2.6-1.3 2.4-2.7 4.8-3.8 7.3-7.4 17.6-13.9 35.5-15.2 54.8-.6 8.1-1.6 16.1-1.8 20.4-.2 12.8 1.6 21.5 4.6 30zm-87.6-246.8c.8-.1 1.8-.2 1.9-1.2 0-1.1-1-1-1.8-1.1h-.8c-7.6.6-14.7 3.1-21.7 5.8-1.1.4-2.1 1.2-1.4 2.5 1 1.8-.3 2.1-1.3 2.7-4.1 2.1-8.3 4.2-12.4 6.4-1.2.6-2.8 1-3.5 2-2.1 3.1-5.4 4-8.5 5.4-1.4.6-2.8 1.1-3.9 2.2-.4.4-.6.9-.4 1.5.2.6.7.7 1.3.7 1.9 0 3.6.2 5.5-.9 3.1-1.8 6.6-2.6 10.1-3.4 1.7-.4 3.7-.2 3.5-3-.1-.8 1.1-1.2 1.9-1.4 1.6-.4 3.2-.6 4.8-1.1 1.3-.3 3.6.4 3.7-1.6.1-1.8-2.5-.5-3.4-1.9.9-.4 1.6-.9 2.5-1.2 3.2-1.1 6.5-2.3 9.9-2.6 1.2-.1 2.8-.2 2.7-1.8-.2-2 1.1-2.1 2.4-2.6 1.7-.6 3.6-.2 5.2-1.1.5-.3.9-.7.6-1.3-.2-.3-.6-.7-.9-.7-1.3 0-2.7.2-4 .3 2-2.1 5-2.2 8-2.6zm412.7 33.7c1.3.5 2.9 2.4 3.8.7.9-1.6-1.5-2.3-2.7-3-4.7-2.5-9.6-4.7-13.9-8-.6-.4-1.2-.9-1.8-.1-.5.7-.2 1.3.2 1.9.8 1.1 2.6 1.5 2.9 2.9.5 2.5 2.2 4 3.8 5.7.6.6 1.1 1.2 1.4 2 1.3 4.6 4 8.3 7.7 11.2 1.1.8 2.5 1.5 2.8 2.9.6 2.4 2.3 3.6 4.1 4.9 2.8 2 5.8 4.4 7.1 7.3 1.3 3 3.4 5.2 5.4 7.5 2.9 3.4 6.7 5.6 10.6 7.7.5.3 1.1.4 1.5-.1.6-.6.3-1.3-.2-1.8s-1.2-.7-1.6-1.2c-2.3-2.8-6.9-3.8-6.6-8.6 0-.3-.4-.7-.7-.9-2-1.5-4.1-2.8-4.5-5.5-3.2-1.7-4.9-4.9-7.3-7.4-1.6-1.6-3.2-3-3.8-5.1-1.1-3.6-3.8-5.9-6.6-8.1-2.3-1.9-4.7-3.7-7.1-6.6 2.7-.1 4 1.1 5.5 1.7zm-408.2 12.4c1 0 1.5-.8 1-1.7-.8-1.4.3-1.8 1.2-1.9 2.3-.3 4.6-.3 7-.5 1-.1 2.3-.2 2-1.4-.7-2.4 2.1-1.8 2.4-3.1.5-1.9 2-2 3.5-2 .7 0 1.5-.2 1.5-1 .1-1.2-.9-1.3-1.7-1.3-5.7.2-11.5-.1-17.2.9-1.1.2-2.3.5-2.7 1.6-.7 2-2.4 2.1-3.9 2.5-1.6.4-3.3.5-3.7 2.6-.2 1.1-1.2 1.5-2.1 1.6-4.3.5-8 2.7-12.1 3.6-.8.2-1.8.4-1.7 1.4 0 1.4 1.2 1.2 1.8 1.2 8.3-.9 16.4-2.5 24.7-2.5zm83.5-61.3c-.9 0-1.7.1-1.8 1.2 0 1 .8 1.4 1.6 1.5 1.2.1 2.5.2 3.7.3 14.9.9 29.9.3 44.8 1.6 2 .2 4.2-1.8 4-3.8-.2-2-2.1-1.8-3.5-2-4.1-.7-8.2-.6-12.3-.8-9-.5-18.1-.5-27.1.2-1.5.1-3 .1-4.2 1.3-1 1-2.3.6-3.5.6-.6 0-1.1 0-1.7-.1zm55.9 33.5c-6.4 1.4-12.9 2.7-19.3 4.1-18.9 4.1-37.2 10.1-55.3 17-.9.3-1.8.7-2.6 1.2-.6.3-1.2.7-1.7 1.1-.5.5-.8 1.1-.5 1.8.3.7 1 1 1.7.9 1.7-.2 3.2-.8 4.5-1.9 1.1-.9 2.2-1.6 3.5-2 7.8-2.7 15.5-5.5 23.4-7.7 16.2-4.6 32.5-8.6 48.8-12.5.8-.2 2.2 0 1.9-1.5-.2-1.1-1.2-.9-2.2-.9-.6.1-1.4.3-2.2.4zM341.9 411c-.6.4-1 1-.8 1.7.3 1 1.2 1.1 2 .9.5-.1 1-.4 1.5-.6 9.2-3.5 18.7-6.2 28.3-8.2 1.9-.4 5.1.7 3.9-3.4 0-.1.2-.2.3-.3.6-.5 1.6-.9 1-1.9-.6-1.1-1.7-.6-2.6-.4-6.2.8-12.4 2-18.5 3.6-7.5 2-15.1 3.8-22.5 6.4-1.3.5-3.5.8-2.6 2.8.9 1.9 2.6.9 3.9.1 2.6-1.7 5.5-2.3 8.5-2.2-.7.6-1.6 1-2.4 1.5zm273.8 39.7c.1.9.8 1.4 1.4 2 5 4.6 10.8 8.3 15.6 13.1 1.8 1.8 4.4 2.8 5 5.7.2.9 1.4 1.7 2.2 2.3 2.3 1.8 4.6 3.4 7 5.1 1.9 1.3 4 2.4 6.2 3.2.6.3 1.4.5 1.9-.1.8-.8.1-1.6-.3-2.2-.4-.5-.9-1.1-1.5-1.4-1.7-.8-3.1-1.6-3.7-3.6-.4-1.2-1.7-1.8-2.7-2.4-1.8-1.2-3.6-2.5-5.5-3.6-1.5-.9-2.1-1.9-2.4-3.8-.7-5.2-1-5.1-6.3-7.1-5-1.9-9.9-4.1-14.2-7.3-.5-.4-1-.9-1.7-1-.8.1-1.1.5-1 1.1zM340.8 459c.7-.1 1.5.1 1.6-.8.2-1.2-.7-1.3-1.5-1.4-3.2-.4-6.2.5-9.2 1.5-9.1 2.9-16.6 8.6-25 12.8-.4.2-.7.5-.9.8-.6 1.1-.4 1.9.9 2.1.7.1 1.4.1 1.9-.4 2.4-2 5.4-2.6 8.2-3.5 4.4-1.5 8.9-2.8 13.3-4.1.8-.2 1.7-.4 1.6-1.5-.1-1.2-1.1-.9-1.9-.9-.8 0-1.6.7-2.3-.1 3.5-2.8 6.7-3.9 13.3-4.5zm153.4-82.9c-.1-1.5-.7-2.1-2-1.3-4.8 3.1-9.6 6.3-14.3 9.6-1.6 1.1-1.3 2 .7 2.4 1.8.4 1.6 1.2.8 2.2-1.1 1.2-2.6 2-3.4 3.5-.3.5-.4 1.1.2 1.4.3.2.9.3 1.1.1.7-.4 1.3-.9 2-1.4 3.9-3.1 8.2-5.4 12.7-7.5 1.3-.6 3.8-.5 3.4-2.2-.5-2.4-2.8.2-4.6-1 1.8-1.7 3.5-3.2 3.4-5.8zm-212.4 98.4c3.4-1.5 6.8-3 10.1-4.5.8-.4 2.2-.7 1.7-1.9-.6-1.5-1.9-.7-2.8-.3-6.8 3-13.5 6-20.3 9.1-1.7.8-2.6 1.9-2.7 4.1-.1 3-.1 3.3 2.4 2.2 6.4-2.5 12.8-4.9 19.5-6.4.9-.2 2.2-.2 2-1.5-.2-1.2-1.4-1.1-2.4-.9-.9.1-1.9.4-2.8.6-2.8.8-5.5 1.5-9.1 2.5 1.6-2 3.1-2.3 4.4-3zm121.7-84.4c-2.7.6-5.2 1.8-7.4 3.4-.7.5-1.5 1-1.1 1.9.4 1.1 1.3.6 2.1.3 3.3-1.4 6.8-1.9 10.4-2.4 1.1-.2 2.2-.2 3.3-.3 1.5-.2 3.4-2.2 3-3.3-.5-1.6-1.9-1.2-3.1-1.1-1 .1-2 .4-2.5-.7-1.1-2.4-3.2-2.4-5.3-2.3-6.8.1-13.3 1.5-19.6 3.8-1 .4-2 .9-2.7 1.8-.3.5-.5 1-.2 1.5.4.5 1 .5 1.5.3.4-.1.7-.4 1.1-.5 5.4-2.6 11.2-3.6 17-4.4 1.7-.2 3.5-.5 5.3.5-.5 1.3-1.1 1.4-1.8 1.5zm-54 28.1c1.8-1.5 4.1-2.1 6.3-2.9 7.5-2.6 15.1-4.9 22.8-6.7.9-.2 2.2-.4 2-1.6-.2-1.2-1.4-1-2.4-.8-1.2.2-2.4.5-3.6.7-7.8 1.9-15.6 4.3-23.2 6.9-1 .4-2.1.7-3.1 1.2s-2.1 1.1-1.6 2.4c.6 1.4 1.8.9 2.8.5.1.2 0 .3 0 .3zm66.5-71c.5-.1 1.1-.4 1.1-1 0-.7-.6-.9-1.1-1-4.5-.5-9-.3-13.4-1.3-.5-.1-1.1.1-1.2.8 0 .6.2 1 .7 1.3 1.2.9 2.7 1.1 4.2 1.3-2.4.5-4.7.3-7-.1-.9-.1-2.2-.6-2.4.7-.2 1.4 1.2 1.6 2.2 1.9.4.1.8.1 1.2.1 3.7.3 7.3.7 11 .9 1.3.1 3.4 1.1 3.8-.9.3-1.8-2.3-.8-3.5-2.3 1.8 0 3.1-.1 4.4-.4zm-181.3 58.6c-1.1.2-2.1.5-3.1.9-.7.2-1.2.9-1 1.6.2 1.1 1.1 1 2 .8 8.3-2.1 16.7-2.7 25.1-3.5.7-.1 1.4-.1 2-.4.3-.1.5-.6.6-1 .1-.4-.3-.8-.7-.8-1.4-.1-2.7 0-4.1 0-7.1.4-14 1.1-20.8 2.4zm116.9 15.5c-.8 1.1-2.1 1.2-3.1 1.8-.7.4-1.6.8-1.1 1.9.5 1 1.4.7 2.2.4 3.1-.9 6.3-1.9 9.4-2.7 4.2-1.1 8.5-1.9 12.9-2.2.7-.1 1.5-.1 1.5-1 0-1.1-.9-1.2-1.7-1.3-1.9-.1-3.8.2-5.7.4-4.9.8-9.6 2.3-14.4 2.7-.1 0 0 0 0 0zm0 0s-.1 0 0 0c5.5-2.4 11.3-3.8 17.1-5.3 1.3-.3 2.7-.6 4-.9.7-.2 1.4-.5 1.2-1.3-.2-.9-1-.9-1.6-.8-1.5.2-3 .4-4.4.7l-18.3 4.5.1-.1c-.1 1.5.3 2.6 1.9 3.2zm70.4-21.4c3.8-1.1 7.6-2.2 11.4-3.2 1.3-.4 2.7-.6 4-.9.8-.2 1.8-.3 1.5-1.4-.2-1-1.3-.9-2-.8-.7 0-1.4.1-2 .3-4.9 1.3-9.8 2.5-14.6 3.8-.7.2-1.3.5-1.9.8-.6.3-1.2.8-.9 1.6.2.6.8.6 1.9.6.5-.3 1.6-.6 2.6-.8zM279 502.3c-.8.5-1.7 1.3-.8 2.3.7.8 1.5.1 2.2-.2 4.8-2.7 9.8-4.9 15.1-6.2.8-.2 1.8-.3 1.7-1.4-.1-1-1.1-1-2.6-1-5 1.4-10.5 3.4-15.6 6.5zM400.4 341h9c.7 0 1.5 0 1.6-.9.2-1.2-.9-1.2-1.6-1.2-5.6-.2-11.2 0-16.8.3-.4 0-.8.2-1.2.3-.7.3-1.3.7-1.2 1.4.1.8.9 1 1.6.9 2.9-.2 5.7-.4 8.6-.6v-.2z"/>
</svg>
        </a>
        `;
    }
}