import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';
import { ShopButton } from './shop-button';
import GlobalStyles from '@/css/global-styles.css?inline';

// @ts-ignore
@customElement('sf-header')
export class SfModel extends LitElement {
  static styles = [
    GlobalStyles,
    css`
      :host {
        --logo-space: calc(var(--sf-logo-size) + 10px);
        display: grid;
        align-content: center;
        justify-content: start;
        grid-template-rows: var(--logo-space) 50px;
        grid-template-columns: 1fr;
        --sf-logo-size: 111px;
        --border-style: 4px solid var(--shadow-color);
        border: var(--border-style);
        position: relative;
        color: var(--shadow-color);
        position: sticky;
        top: 0;
        margin-bottom: 1em;
        background-color: var(--primary-color);
        box-shadow: 0 5px  3px 0px var(--primary-color);
        z-index: 100;
      }

      :host > div{
        display: grid;
        grid-template-columns: var(--sf-logo-size) auto;
      }

      :host > div h2 {
        place-self: center;
        font-size: 32px;
      }

      @media(max-width: $mobileBreakpoint){
        :host > div h2 {
        place-self: center;
        font-size: 32px;
      }
      }

      svg {
        width: var(--sf-logo-size);
        height: var(--sf-logo-size);
        margin-left: 10px;
      }

      nav {
        width: 100%;
        background: var(--highlight-color);
        display: flex;
        align-items: center;
        border-top: 3px solid var(--shadow-color);
        padding: 0 1em;
      }

      nav a {
        padding-right: 1em;
        margin-bottom: -5px;
        font-family: 'JosefinSans', sans-serif;
        font-size: 16px;
        font-weight: normal;
      }

      .shop-button {
        place-self: center;
        position: absolute;
        right: -10px;
      }

      :host([animate-svg]) svg{
        transition: all .4s linear;
      }
    `
  ];

  constructor(){
    super();
  }

  render() {
    return html`
    <div>
    <a part="link" href="/">
      <svg part="logo" id="logo" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 850.4 850.4">
        <title>Schnauze Fabrik Logo</title>
        <path d="M235.3 644.2 214.7 666l-.4-.4c9.2-15.1 8.2-29.9-.2-39l-2-2.2-27 25.1 1.2 1.3c6.2 6.7 16.7 6.7 23.5 3.4l.4.4-24 22.3-.4-.4c3.7-6.4 4.4-17.1-1.7-23.7l-1.2-1.3-19.8 18.4c-5.7 5.3-6.3 10.1-1.8 17.1l-.4.4-30-32.3.4-.4c4 1.8 7.6 2.4 12.6-1.4l44-40.9c6.1-5.6 5.8-9.1 3.9-14.1l.4-.4 43.1 46.3zm31.8 104.7c-1.5 6.7-1.6 11.5 1.6 16.2l-.3.5-36.6-22.5.3-.5c6 .5 10.6-3.2 13-13.3l2.8-11.8-22-13.5-12.1 10.1c-6.3 5.3-6.1 10.6-3.4 15.1l-.3.5-17.6-10.8.3-.5c5.6.8 10.2-1.7 17.2-7.4l55.8-45.6 17 10.4-15.7 73.1zm-38.2-47.5 19.7 12.1L257 678l-28.1 23.4zm131.2 46.5c17.4 3.7 27.2 13.7 24.2 26.8-3.4 14.5-16.8 19.2-39.7 13.8l-41.5-9.6.1-.6c5-.8 8.5-2.7 10.4-10.9l12.9-55.9c1.9-8.1-.3-10.8-4.7-13.9l.1-.6 42.4 9.8c19.4 4.5 27.9 13.2 24.9 25.9-2.8 12.2-13.3 17.1-29.2 14.4l.1.8zm-20.2 35.8c7.7 1.8 14.4-4.2 17-15.3 3-12.7.2-19.5-9.8-21.9l-2.5-.6-8.5 36.8 3.8 1zm13.4-75.7-8.1 35.1 2.5.6c8.5 2 13.3-4.8 15.7-15.2 2.6-11.2.1-18.1-7.8-19.9l-2.3-.6zm63.3 91.6-.1-.6c4.5-2.3 7.2-5.2 6.5-13.6l-5.1-57.1c-.7-8.2-3.7-10.2-8.8-11.7l-.1-.6 41.1-3.7c23.7-2.1 33.7 5.4 34.8 17.6 1 11.2-10.4 21.8-25.3 23.1l.1.8c12.8-1.5 22.8 3.4 27.2 12.6l7.5 16.2c2.5 5.6 6.5 7.7 9.8 8.3l.1.8-31.9 2.9c-2.6-3-4-6.6-5.7-10.6l-7.9-18.3c-3.2-7.3-5.5-10-10.4-9.5l-2.7.2 2.4 26.8c.5 6 4 10.7 8.8 12.2l.1.6-40.4 3.6zm28.9-46.2 2.3-.2c7.5-.7 10.9-8.5 9.9-20.3-1-10.9-5.1-17.4-13.2-16.6l-2.3.2 3.3 36.9zm99.6-64.7c-3.9 3.6-4.9 8.9-2.8 14.4l20 53.8c2.1 5.6 6.7 9.3 11.7 9.5l.2.6-38 14.2-.2-.6c3.7-3.4 5.6-7 2.7-14.8l-20-53.8c-2.9-7.8-6.2-8.8-11.6-9l-.2-.6 38-14.2.2.5zm46.7-27.6c-2.8 4.5-2.3 9.9 1.2 14.6l33.8 46.3c3.5 4.8 8.9 7.1 13.8 5.9l.4.5-32.7 23.9-.4-.5c2.6-4.3 3.5-8.2-1.4-15l-33.8-46.3c-4.9-6.7-8.4-6.8-13.6-5.5l-.4-.5 32.7-23.9.4.5zm74.1 32.4c10.1 4.1 13.3 4.6 17.5 3.2l.4.5-28.1 20.5-46-19.2 5.2-31.1c1-5.6 1.4-9.3-.8-12.3-2.5-3.4-6.6-4.2-13.3-.5l-.4-.5 28.5-20.8.4.5c-5.9 7.4-7.2 15.6-8.7 23.3l-2.8 17.2 48.1 19.2zM150.5 328.7l-17.3-16.8.3-.5c17 3.5 30.4-4.5 35.7-15.4 3-6.2 1.6-12.4-4.1-15.2-3.5-1.7-7.4-1.8-13.2 3.1l-16.9 14c-10.1 8.2-21.6 9.4-31.1 4.8-11.8-5.7-21-19.4-10.6-41 4.7-9.7 13.3-19.4 19.9-24.1l14 16.3-.3.5c-15.4-2.1-26.4 4.4-30.9 13.8-3.8 7.9-1.2 12.6 2.4 14.4s7.8 1.5 13.4-2.9l17.7-14.2c11.3-9.2 19.8-9.5 29.2-5 15.3 7.4 21.9 24.7 13.6 41.9-6 12.2-13.6 20.7-21.8 26.3zm9.9-95c-19.4-17.6-21.5-43.7-4.9-62 6.8-7.6 16-13.7 24.9-17l13.5 25.7-.5.4c-13.5-9.4-25.2-9.4-33.7.1-7.8 8.6-6.2 19.9 4.3 29.4 16.1 14.6 35.5 15.1 48 1.4 7.1-7.8 8.6-14.2 5.2-21.5l.8-.4c11.9 16.9 11.9 32.1-.1 45.4-15.1 16.5-38.2 15.9-57.5-1.5zM283 83.6c-3.2 4-4 8.6-.4 14.9l28.3 49.9c3.6 6.3 7.8 8 13 7.3l.3.5-35.3 20-.3-.5c3.2-4 4-8.6.4-14.9l-13.7-24.1-20 11.4 13.7 24.1c3.6 6.3 7.8 8 13 7.3l.3.5-35.3 20-.3-.5c3.2-4 4-8.6.4-14.9l-28.3-49.9c-3.6-6.3-7.8-8-13-7.3l-.3-.5 35.3-20 .3.5c-3.2 4-4 8.6-.4 14.9l12.7 22.4 20-11.4-12.7-22.4c-3.6-6.3-7.8-8-13-7.3l-.3-.5 35.3-20 .3.5zm100.9-24.5 23-3.9.1.6c-6.1 2.9-7.8 7-6.6 14.4l11.9 70.5-.6.1-71.9-57.1 8.8 52.2c1.4 8.3 5 10.6 12.2 11.7l.1.6-24.4 4.1-.1-.6c7.2-3.3 9.1-6.8 7.7-15l-9.7-57.3-11.8-9.4-.1-.6 32.7-5.5 45.5 33.9-4.6-27c-1.2-7.3-3.5-10-12.1-11.2l-.1-.5zm122.3 77.7c1.2 6.8 3 11.3 7.7 14.3l-.1.6-42.4-6.7.1-.6c5.8-1.9 8.5-7 6.9-17.3l-2-12-25.5-4-7.3 14c-3.8 7.3-1.6 12.1 2.7 15.2l-.1.6-20.4-3.2.1-.6c5.5-1.4 8.8-5.5 13.1-13.5l34-63.5 19.7 3.1 13.5 73.6zm-53.4-29.2 22.9 3.6-6-35.9-16.9 32.3zm173.4 6.8-.3.5c-5.3-.4-8.8.4-12.5 7.7l-18.8 37.6c-8.5 17-24.2 22.9-42.8 13.6-20.2-10.1-25.5-26.3-15.3-46.7l17.2-34.3c3.7-7.4 2.2-10.6-1.3-14.6l.3-.5 38.4 19.2-.3.5c-6.7-.8-11.4.2-15.4 8.3l-16.7 33.5c-6.9 13.8-4.8 24.2 5.9 29.5 10.7 5.4 20.2.9 27.2-13l16.7-33.5c4-8 2-12.4-2.6-17.3l.3-.5 20 10zm-31.7 80 .4-.4 86.6-27.6-3.5-3.3c-15.8-14.2-31.3-8.7-46.8-1.6l-.4-.4 26.5-22.8 47.9 45.8-.4.4-86.2 28 3.5 3.3c16.1 14.6 39 7.2 49.9 1.3l.4.4-28.4 24.3-49.5-47.4zm122.9 102.5-30.8 13.9-32-55.9.5-.3c4 3.1 7.8 4.4 15.1.2l49.8-28.5c7.2-4.1 7.7-7.6 7-12.9l.5-.3 31.4 54.9-25.1 16.6-.3-.5c11-11.3 15.3-26.3 8.7-38l-1.5-2.6-30.8 17.6.6 1c5.4 9.5 14.4 11.1 21.6 9.6l.3.5-28.5 16.3-.3-.5c5.4-5.7 9.1-14.8 3.7-24.1l-.6-1-32.6 18.7 1.5 2.6c7.6 13.3 21.1 16.1 41.5 12.2l.3.5z"/>
        <path d="M542.9 224.1c2.9-3.3 5.7-3.1 7.9.6.4.7.8 1.8 1.6 1.5 2.2-.8 3.2.2 4.1 2 .6 1.1 1.9 1.6 3.2 1.6 3.8-.1 7.1 1.9 10.8 2.3 5.6.7 10.2 4 14 8.3 1.6 1.9 3.5 3.5 5.8 4.5 1.8.7 2.8 2.1 3.7 3.7 3.7 6.4 4.7 13.4 5.3 20.6.6 6.8 1.3 13.7 2.4 20.4.7 4.4-.5 8.4-4 11.1-2.9 2.3-3.7 5.2-3.7 8.7 0 3.3-.4 6.5-.7 9.8-.6 6.7-5 10.2-10.1 13-3 1.7-6.1 3.2-9.5 3.7-2.3.4-3.6 1.8-4.4 3.8-1.1 2.6-2 5.3-1.8 8 .3 4.4-1.2 6.8-5.1 9.1-5.8 3.4-10.7 8.1-15 13.3-2.7 3.2-5.5 6.5-8.3 9.7-1.9 2.2-3.1 4.8-4.3 7.5-.3.7-.4 1.6-1 2.2-.7.6-1.7.8-1.9-.3-.3-2.2-1.5-4.3-1.2-6.7.5-3.6.6-7.3.8-11.2-2.2 1.4-2.2 1.4-4.2-.6-.9-.9-2-1-2.9-.1-.6.6-.8 1.4-1.3 2.1-1.2 1.5-2 1.4-2.9-.4-.2-.4-.5-.8-.5-1.1.8-4.5-2.6-7.1-4.7-10.1-2.9-4-2.5-8.2-2-12.5.3-2.3-.3-3.5-2.4-3-2 .5-2.5-.2-2.7-1.8-.2-1.4-.2-2.7-2.3-2.6-1.3.1-1.4-1.1-1.3-2.1.1-1.1.4-2.2.4-3.3 0-.9.1-2.4-1-2.5-2.6-.2-2.8-1.8-2.4-3.7.2-1.5-.7-2.3-1.6-3.1-2.7-2.3-5.4-4.7-8.1-6.9-4.7-3.8-9.1-7.9-13.6-11.9-5.9-5.3-12.7-9.5-19.5-13.7-1.5-.9-3.3-1.1-5.1-1.5-13.1-2.3-26.3-3.8-39.5-5.6-6-.8-9.7-5-9.9-10.8-.1-4.5 3.7-8.1 8.2-7.5 1.8.2 3.5.8 5.2 1.1.8.2 1.8.5 2.1-.5.3-1 .5-2.2-.8-2.9-1-.5-2-.9-3-1.3-.6-.3-1.3-.7-1.2-1.5.1-.9.8-1.5 1.6-1.6 2.7-.4 5.6-1.7 8.2.4.3.2.8.1 1.2.1.1 0 .2-.1.3-.2.6-1.8-2.7-1.9-1.8-3.6.7-1.3 2.5-.8 3.8-1.2.9-.2 1.2-.8 1.1-1.9-.4-2.3-1.1-4.7-.7-6.8.5-2.3 3.7-2.5 5-4.4 1.1-1.5 2.2-2.1 3.6-.6 1.5 1.6 2.5.5 3.8-.5 2.7-2.2 4.5-5.2 6.8-7.8.8-.8 1.2-1.4 2.3-.8.7.4 1.4.2 1.7-.5 1.3-2.8 3.8-3.4 6.5-3.4 1.8.1 2.6-.3 2.2-2.3-.2-.9 0-2 .9-2 4.6-.5 7.7-3.8 11.7-5.6 4.9-2.1 9.9-4.1 14.6-6.7 1.5-.8 3.7-.2 5.1-1.8.1-.1.7-.1.8 0 1.2 2.5 2.3.7 3.8.3 2.1-.6 4.5-.1 6.8-.1 1.5 0 .9 2.4 2.5 3.3 2.3-3.3 5.5-3.2 8.9-1.9 3 1.1 6.4 1.3 9.3 2.2 2.4.7 5.9.1 7.6 3.3.7 1.2 2.7 1.2 3.9-.3 1-1.2 2.1-1.2 2.4.2.8 2.2 2.9 3.2 4.5 4.8.1.6.1 1.3.1 2 .1 2.7-.5 3.5-2.9 2.9-3.2-.9-7-.7-8.9-4.4-.8-1.5-5.2-2.6-5.8-1.7-1.6 2.5-3.3 1.1-4.9.5-4.5-1.6-8.9-3.5-13.9-2.7-1.2.2-1.8-.5-2.3-1.4-.6-1-1.8-1.6-2.4-.9-1.7 1.8-4.2 1-5.9 2.2-1.6 1.1-3.2 1.2-5 .8-2.5-.5-6.5 2.1-6.9 4.3-.1.7-.1 1.4-1 1.5-.8.1-1.1-.6-1.4-1.2-.7-1.4-.6-3.1-2-4.6 0 1-.2 1.6 0 2.1 1 2.3.3 3.8-1.7 5.1-3.9 2.6-7.8 5.1-12.5 6.1-.5.1-1.5.2-1.5.4-.5 3.1-4 2.5-5.3 4.4-1.1 1.6-2.7.2-3.7 1-1.1.9-.2 2.8-1.7 3.5-.4.2-.7.4-1.1.6-3.2 1.9-3.2 1.9-2.1 5.4.5 1.7.8 2.7-1.7 2.9-3.2.3-3.5 1.5-1.6 4.3.5.7.9 1.4 1.5 2 1.1 1.2 1.7 2 .4 3.8-1.8 2.4-.8 4.1 2.1 4.8 4 1 7.4 2.9 10.3 5.8 4 3.9 9.1 5.6 14.5 6.2 1.9.2 4 .4 5.2-1.6 1.2-2.1-.2-3.8-1.5-5.1-2.3-2.3-1.7-5.4.3-7.4 3.3-3.4 7.4-5.9 12-6.6 4.8-.7 9.6 0 14.1 2.1 2.2 1.1 4.5 2 6.9 2.7 3.4 1 5.6 3.3 6.8 6.6 3 8.3 2.8 16.4-1 24.4-2.4 5-4.9 9.8-7.3 14.8-1.2 2.5-2.5 4.9-3.6 7.4-.6 1.3-.3 2.1 1.3 2.2.5 0 1.1.2 1.6.2 2.8.3 3.2.4 3 3-.1 1.6.2 2.7 1.6 3.4 1.4.7 1.3 2.2 2 3.4.6-.1 1.1-.2 1.7-.3.9-.2 1.9-1 2.6.2.5.8-.1 1.6-.4 2.3-.6 1.2-1.1 2.5-1.6 3.8-.3.8-.9 1.8.3 2.7 1.4-.7 1.7-2.3 2.7-3.4.6-.7 1.4-1 2.2-.4.8.7 2.6.7 2.1 2.1-.8 2.5.3 5.5-1.9 7.7-.7.7-1.2 1.8-.8 3.5 1.6-3.3 3.8-2.5 5.8-1.4 1.8 1 2.4.2 3-1.3.8-1.9.3-3.8.6-5.7.2-1.6.7-2.9 2.4-1.2.7.7 1.3.4 1.5-.3.3-.8.3-1.6.5-2.4 2.4-10.6 3.5-21.4 5.5-32 .9-4.8 2.2-9.6 2.6-14.6.1-.8.4-1.8 1.4-1.8 1.1.1 1.1 1 .9 1.9-.4 2.3-.5 4.4.9 6.7.8 1.4.9 3.7-.1 5.6-2.4 4.5-3.3 9.6-5 14.4-.6 1.8-1 3.8-.4 6.2 1.6-1 2.2-2.2 2.1-3.6 0-1-.2-1.9.3-2.8.5-1 .6-2.6 2.3-2.5.8 0 2.1 2.9 1.7 3.9-.4 1-1 1.9-1.5 2.9-1.1 2.2-3 4.3-3 6.7.1 2.9-.6 5.4-1.4 8-.3 1.2-.4 2.1 1 2.6 1.3.5.8 1.5.3 2.4-1.1 1.9-2.3 3.8-3.3 5.7-.3.5-.5 1.6.6 1.4 2.6-.3 1.8 1.1 1.4 2.5-.5 1.8.3 2.6 1.9 2.3.8-.1 1.6-.5 2.3-.8 1.7-.8 1.1-3.2 2.5-4.1 1.4-.9 3.5.6 4.8-1.4.8-1.3 1.7-1.1 3-.2 2.1 1.6 4.7.2 4.9-2.5.2-1.9.1-3.9 0-5.8-1.1-15.3 3-29.7 7.1-44.1.9-3.1 2.3-5.9 4.4-8.3 4.4-5.2 11.1-5.3 15.7-.4 2.4 2.6 3.9 5.6 4.3 9.1.2 1.8-.2 3.8 1 5.9 2.2-1.1 2.9-3 3.1-5.1.1-1.8.1-3.6-.2-5.3-1.1-6.7-1.7-13.3-2.3-20-.4-4.4-1-8.8-2.6-12.9-1-2.5-1.3-5.9-5.3-5.7-2.7-2.7-6.7-3.9-8.7-7.6-.8-1.4-2.1-2.8-3.8-2.8-2.5.1-4.7-1.4-7.2-.9-1.1.2-2.2-.1-2.8-1.3-.5-1.1-1.4-1.4-2.3-.8-2 1.3-3.1.7-4.7-1-2-2.1-5.9-1.4-7.9-4.2-5.1.9-7.1-2-8.1-6.3 0-.3-.1-.4-.2-.5zM534.5 380c-.5 0-.7.4-.7.8s.2.9.7.6c.3-.2.4-.6.5-1 0-.1-.4-.3-.5-.4zm32.3-42.9c.2-.1.3-.3.5-.4-.2-.1-.3-.4-.5-.4s-.3.2-.5.4c.2.1.4.3.5.4zM500.4 215c-.2-.1-.4-.4-.5-.4-.3 0-.4.3-.2.5.1.1.2.2.3.2.3.2.4.1.4-.3zM339.7 475.2c-.2-.1-.5-.4-.6-.4-6.1 1.9-12.6 3-17.4 7.7-.9.8-1.8 1.1-2.9 1.2-2.6.5-5.1 1-7.7 1.5-1.1.2-2.2.6-2.6 1.7-.5 1.3-1.6 1.8-2.8 2.2-8.6 2.9-17.1 5.9-25.1 10.3-.7.4-1.6.9-2.2 0-.8-1.1.3-1.8 1-2.3 3.1-2.1 6.6-3.4 10-4.8 2-.8 4.1-1.3 5-3.8.5-1.5 2.5-1.6 3.8-2.2.5-.3.9-.7.7-1.3-.3-.8-1.2-1-1.7-.6-6.1 3.9-13.8 3.5-19.7 7.8-.6.4-1.4.7-1.9.3-2.3-1.8-4.2-.3-6 .7-16.4 9-32.7 18.1-47.5 29.6-4.2 3.3-8.6 6.5-12.9 9.5-6.2 4.4-12.1 9.1-17.6 14.2-5.3 4.8-10.7 9.4-16 14.3-22.1 20.5-41.3 43.3-55 70.4-4.2 8.2-8.5 16.3-12.7 24.5-.3.5-.5 1-.8 1.4-.5.9-1.3 1.6-2.3 1-.8-.5-.7-1.4-.4-2.2.2-.6.5-1.3.8-1.9 8.6-16.4 16.6-33.2 27-48.6 4.2-6.2 8.6-12 13.4-17.8 16.2-19.5 34.8-36.6 54.6-52.4 18.2-14.6 37.3-28.1 57.7-39.5 1.2-.6 2.6-1 3.2-2.4-1-.9-1.8-.1-2.7.2-3.4 1.2-6.7 2.3-10 3.7-14 5.7-28 11.3-42.2 16.4-3.6 1.3-7.1 2.9-10.4 4.9-20.6 12.3-41.5 24.2-61.7 37.2-18.5 11.9-33.4 27.1-46.7 44.2-2.7 3.5-5.2 7.1-8.3 10.3-.7.7-1.3 1.4-2.1 1.9-.6.4-1.3.3-1.8-.4-.4-.5-.4-1-.2-1.5.5-1 1.3-1.7 2.1-2.5 4.8-4.9 8.3-10.8 13.2-16.7-3.7 1.5-7.1 4.1-11 8.3-.7.8-1.5 1.6-2.3 2.3-.5.5-1.3.6-1.9.1-.6-.5-.5-1.3-.2-1.9.6-.9 1.2-1.9 2-2.6 1.7-1.7 3.6-3.4 5.4-5.1 4.9-4.4 10.1-8.5 14.7-13.2 7.6-7.6 16.1-14.2 25.2-19.9 5.6-3.5 10.9-7.4 15.7-12 4.5-4.2 9.5-8 14.8-11.2 9.2-5.6 18-11.6 26.9-17.6 6.3-4.2 12.7-8.2 19.5-11.4 1.7-.8 3.5-1.6 5.5-1.8.7-.1 1.3.3 1.5 1.1.1.6-.3 1-.8 1.3-.5.3-1 .4-1.5.7-11.7 4.7-21.7 12.3-31.9 19.4-.3.2-.6.5-.4 1.1 1.4 0 2.4-.9 3.6-1.6 4.4-2.5 8.9-5 13.2-7.7 7.5-4.7 15.4-8.5 23.8-11.3 13.4-4.5 26.3-10.4 39.5-15.4 6.3-2.4 12.6-4.6 19.2-6.3 1.4-.4 2.9-.6 3.6-2.4.5-1.3 1.8-1.6 3-1.9 6.5-1.7 13-3.3 19.5-5 1.2-.3 2.3-.6 3.5.4 1.7 1.5 3.3 1 5.2.1 9-4.2 18.2-7.6 27.8-10.3.3-.1.5-.1.8-.2 1.1-.3 2.5-.8 2.8.7.3 1.5-1.3 1.5-2.3 1.7-8.3 2.1-16.1 5.5-24 8.7-.9.4-2.2.5-2.6 2.1 1.5.2 2.7-.5 3.9-.9 6.4-1.9 12.6-4.8 19.4-5.3.3 0 .7 0 .8-.2 2.3-4 7.5-3 10.4-6.1.9-1 2.3-1.4 2.7-2.9.2-.8 1-1.4 1.8-1.6 3.3-.9 5.8-3.7 9.1-4.6.8-.2 1.7-.6 1.4-1.7-.5-2.4 1.2-2.8 2.8-3.3 2.1-.7 4.6-.7 5.1-3.8.1-.7 1.2-1 2-1.3 5.1-2 10.3-3.9 15.4-5.9.3-.1.5-.2.8-.3 1.1-.3 2.7-1.2 3.2.4.6 1.8-1.5 1.5-2.5 1.9-2.9 1.1-5.9 2.1-9.2 4.1 2.7.5 4.5-.4 6.3-.7 2-.4 4-.8 6.1-.7.7 0 1.5.1 1.4 1.1-.1.6-.5 1-1.1 1.1-1.9.4-3.8.6-5.7 1-1.2.2-2.4.4-3.6 1.6 1.8.1 3.3.2 4.9.4.4 0 .8.3.8.8.1.6-.3 1.1-.9 1.2-.9.2-1.9.2-2.9.3-1.5.2-3.2.2-3 2.5 0 .2-.2.7-.3.7-2.2.7-3.6 2.7-5.8 3.4-1.6.5-3.3.2-2.3 2.8.2.5-.7 1-1.5 1.1-1.5.3-3 .5-4.5.8-2 .4-4.1.4-4.8 3.1-.2.9-1.2 1-2.1 1.1-3 .5-5.7 2-8.2 3.6-8.7 5.6-16.4 12.3-23.5 19.9-15.2 16.2-28.7 33.6-40.2 52.6-8.5 13.9-14.3 29-19.9 44.3-1.9 5.2-2.6 10.7-3 16.1-.4 5.1-.6 10.1-.8 15.2-.1 6.1-1 12-1.8 18-.1.4-.1.8-.2 1.2-.4 1.2-.6 3.2-2.3 2.9-2.1-.4-.9-2.1-.8-3.4 1-7.4 2-14.7 2.1-22.1.1-14 2.8-27.3 8-40.5 11.9-30.6 30-57 51.8-81.1 6.7-7.5 13.5-14.9 21.8-20.6.1-.1.5-.5.5-1.2zm-20.7 5.5c-.2-.1-.4-.4-.5-.4-.2 0-.5.2-.6.4-.1.5.3.6.6.5.2-.1.3-.4.5-.5zm243.3 35.2c-1.4-3.2-3.4-5.9-5.5-8.7-5.6-7.4-10-15.4-13.5-24-5.3-13.3-10.6-26.5-15.9-39.8-1.6-4.1-3.7-8-6.4-11.5-1.3-1.7-2.8-3.5-3.2-5.7-.5-2.4-2.7-2-4.2-2.7-1.7-.8-2.1.7-2.6 1.7-.2.3-.5.8-.8.9-3.7.7-5.6 3.8-8.1 6.1-5 4.5-10.3 8.7-14.4 14.1-2.2 2.9-4.8 5.2-7.6 7.5-2.3 2-5.5 2.8-7.6 4.8-2.3 2.2-4.8 4-7.5 5.7-11.1 7.1-21.6 15-32.7 22.2-6.9 4.5-14.2 8.3-21.1 12.8-3.7 2.4-7.1 5.2-11.2 7-6.4 2.9-12.5 6.4-18.5 9.9-5.7 3.3-11.5 6.5-17.6 8.9-1 .4-2 .9-3 1.4-.7.4-1.5 1-1.1 1.9.4 1 1.3 1 2.1.7 2.8-1.1 5.7-1.6 8.4-3.1 10.4-5.9 20.7-11.9 31.4-17.3 4.4-2.2 9-4.3 13-7.1 10.3-7.4 21.7-13 32.4-19.6 1-.6 2.2-1.7 3.3-1.6 3.3.4 5.3-1.8 7.7-3.3 1.5-.9 3.1-1.9 4.7-2.5 11-4.5 22.3-7.4 34.4-6.7 8.1.5 15.8 1.6 22.2 7.3.9.8 2 1.4 3.1 2.1 7.1 4.3 13.3 9.7 19 15.6 1.3 1.3 2.4 2.7 3.2 4.2 2.5 4.6 5.1 9.1 7.3 13.9 1.2 2.6 3.2 4.7 4.4 7.4.7 1.5 2.3 1.9 3.8 2.2 1.6.4 3-1 2.9-2.8-.2-.4-.5-1.1-.8-1.9zm-346.7-34.8c-2.1-1-3.3-.4-4.6-.1-11 2.6-21.7 5.9-32.2 9.9-16.3 6.1-32.7 12.1-49.2 17.5-17.2 5.6-32.9 14.5-48.6 23.2-11.2 6.2-22.4 12.4-34 17.8-3.4 1.5-6.8 2.9-10.3 4.2-1.3.5-2.6.7-4 .9-.9.1-1.7-.2-1.8-1.2-.1-.8.5-1.2 1.2-1.5 3.5-1.3 7-2.3 10.4-3.9 1.6-.8 3.3-1.3 3.7-3.4.2-1.1 1.4-1.6 2.3-2.2 15.1-10.4 30.9-19.5 47.9-26.4 19.4-7.9 38.6-16.6 57.4-26 5.7-2.8 11.4-5.4 17.3-7.6 15.8-5.9 31.6-11.8 47.5-17.7 3.1-1.1 6.1-2.5 9.1-3.8.7-.3 1.8-.7 2-1.3 1.1-3.2 4-3.5 6.6-4.2 5.9-1.8 11.9-3.4 17.8-5.2.8-.2 1.6-.4 2.4-.5.4-.1.8.2.9.7.1.4.1.9-.3 1.1-1.1.7-2.3 1.3-3.5 2 1 1.2 2 .5 2.7.2 3.3-1 6.5-2.1 9.8-3.2 1.3-.4 2.6-1 4-.6.8.2 1.6.6 1.6 1.6 0 1.1-1 1-1.8 1.2-5.8 1.7-11.5 3.5-17.3 5.3-.7.2-1.3.6-1.2 1.4.3 2.3-1.5 2.7-3 3.2-5.8 2.1-11.6 4.2-17.2 6.9-2.8 1.3-5.9 2.3-8.3 4.5-.8.8-1.8.9-2.5-.1-.8-1-.1-1.9.7-2.4 1.6-1 3.3-1.9 5.1-2.7 5.9-2.7 11.8-5.1 17.9-7.3 1-.4 2.1-.5 2.9-1.4-10-.4-95.1 32.1-108.1 41.2 1 .8 1.8.1 2.7-.2 10.6-3.4 21-7.3 31.3-11.3 16.2-6.2 32.8-10.9 49.8-14.2 2.2-.4 4.3-1 6.3-1.8 4.3-1.7 8.7-3.3 13.2-4.5 1.1-.3 2.1-.5 3.2-.7.7-.1 1.5-.2 1.7.6.3.8-.4 1.3-1 1.5-.9.3-1.8.6-2.8.8-2.7.9-5.5 1.7-8.2 2.7-1.3.4-2.7.7-3.8 2.1 1.4.9 2.7.4 3.9.3 1.1-.1 2.2-.4 3.2.2.4.2.7.5.6.9-.1.3-.3.8-.7.9-.5.2-1 .3-1.6.3-4.3.1-8.4 1.3-12.5 2.5-2.2.6-4.5 1.1-6 3.3-.7 1.1-2.2 1.1-3.3 1.5-1.8.7-3.6 1.3-5.4 2-.7.3-1.8.8-1 1.7 1.3 1.5 0 1.8-.7 2.8-1.8 2.6-4.5 3.3-7.1 4.3-4.2 1.7-8.3 3.5-12 6.3-.9.7-1.8 1.5-2.9.6-.8-.6-2.4-.3-2.5-1.8-.1-1.3 1-1.9 2-2.4 1.7-.9 3.1-2.1 4-4 .5-1.1 1.8-1.7 2.9-2.3 2.9-1.5 5.9-3 8.8-4.4 2-1 4.3-1.6 5.6-3.9.6-1.1 2.1-1.2 3.2-1.7 2-.7 3.6-1.3 5.8-2.2zM82 526.8c-5.5 1.3-12.2 5.2-14.7 8.4 5.6-2.6 10.2-5.4 14.7-8.4zm676.7 98.8c23.9 13.5 27.8 19.5 51.7 33 .8.5 1.7 1 2.5 1.4.6.3 1.3.8 1.9 0 .5-.7.5-1.6 0-2.3-.9-1.1-2.2-1.6-3.4-2.3-28.1-15.9-36.1-24.3-64.2-40.1-2.8-1.6-5.5-3.1-7.7-5.4-30.8-31.8-64.8-60.2-97.7-89.6-.6-.5-1.1-.8-1.8-.3-.5.4-.5 1-.4 1.5.2 1.1 1 2 1.8 2.7 1.8 1.8 3.7 3.7 5.7 5.4 11.2 9.7 22.5 19.3 33.7 29.1 15 13.1 29.4 26.9 43.6 40.9.8.8 1.9 1.4 1.8 3.1-1.8-.4-3.1-1.3-4.3-2.1-17.5-10.4-34.9-20.8-52.3-31.3-4.5-2.7-9.1-5.1-13-8.6-.7-.6-1.4-1-2.1-.1-.7.8-.3 1.6.2 2.2 1.5 1.8 3.6 2.9 5.6 4.2 24 15.2 48.5 29.7 73.1 43.9 4.7 2.7 8.9 5.9 12.7 9.7 7.3 7.4 14.8 14.7 22.3 22 19 18.4 34 41 54.5 57.8.8.7 1.7 1.4 2.6 2.1.6.4 1.2.7 1.9.1.9-.7.5-1.5-.1-2.2-1.9-2.2-4.1-4-6.3-5.9-23.8-20-41.8-45.9-63.9-67.7-.8-.8-2-1.4-2-3.1 1.2.1 2.4 1.2 3.6 1.9zm-445.1-291c7.1-.2 14.3.4 21.4 1 .8.1 1.9.1 2-.9.2-1-.8-1.3-1.6-1.4-3.4-.4-6.8-1-10.2-.9-1.3 0-2.7.3-3.9-.9 2.9-1.1 3-1.1 6.1-.7 4.4.5 8.7 1 13 2 .8.2 1.8.1 2-.9.1-.8-.7-1-1.3-1.3-1.3-.7-3.1-.3-4.7-1.9h1.8c5.4.2 10.6 1 15.9 2.2.8.2 1.7.5 2.2-.4.7-1.3-.7-1.5-1.3-2.1-.2-.2-.9-.4-.2-.8 1.9-.4 4.7 2.7 5.5-1.6.1-.5 1.2-.4 1.9-.2 1.2.3 2.4.7 3.6 1 .6.2 1.1 0 1.4-.6.3-.6-.1-1.1-.5-1.4-1.1-.9-2.5-1.1-3.8-1.4-6.7-1.5-13.6-1.5-20.4-2.3-1.7-.2-4.3-1.7-4.3 2.1 0 .3-.8.6-1.3.9-1.7 1.1-3.5 1.4-5.5 1.2-2.3-.2-4.9-.8-6.8.9-1.8 1.7-3.8 1.8-6 2-1.5.1-3.4 0-3.8 1.8-.5 2.1-1.9 2.1-3.4 2.2-1.9.1-3.8.3-5.8.4-1.1.1-2.4.3-2.8 1.4-.7 1.9-2.1 1.9-3.6 2-2 .2-4.7-.2-5.7 1.6-1.5 2.6-3.7 2.2-6 2.7-3 .7-6.8-.4-8.5 3.6-.4 1-1.9.8-3 .9-2.3.1-4.7.3-6.9.8-1.1.3-2.3.5-2.6 1.7-.4 1.9-1.8 2.2-3.3 2.5-2.4.5-4.9.9-7.2 1.7-6 2.2-11.8 4.9-18.1 6-1.6.3-3.5.7-3.9 2.6-.4 1.9-1.7 2.3-3.1 2.8-2.3.8-4.7 1.6-7 2.5-1.2.4-2.6.9-3 2.1-.7 2.4-2.6 2.5-4.4 3-2.7.6-5.4 1-7.8 2.5-.8.5-1.7 1.2-1 2.3.5.9 1.4.3 2.2 0 7.4-2.8 15.1-4 22.9-4.5 1.3-.1 3.7.8 3.6-1.4-.1-1.8-2.5-.9-3.8-1.1-2-.2-4 .7-6.1 0 .3-1 .8-1.3 1.5-1.5 3.5-1.1 7-2.3 10.6-3.3 5.1-1.3 10.2-2.1 15.5-1.9.8 0 1.8-.2 2-1.1.2-1.1-.9-1.1-1.7-1.3-.8-.2-1.8-.1-2.4-1.1 2.6-.8 4.9-.6 7.2-.6 1.2 0 2.8.3 3.5-.7 1.9-2.6 4.5-2.2 7.1-2.2 2.2-.1 4.4.1 6.6 0 1.1 0 3 .6 3.1-1 .2-1.9-1.8-1-2.8-1.4-.7-.2-1.7.3-1.9-.8.4-.6.9-.7 1.5-.8 3.4-.4 6.8-.4 10.3-.4 1.4 0 2.7 0 4.1-.1.4 0 .8-.3.8-.8.1-.6-.2-1.1-.8-1.2-1.9-.3-3.9-.4-5.8-.6 4.3-.6 8.5-.6 12.8-.7 1 0 2.5.6 2.6-1.1.1-1.4-1.4-1.1-2.2-1.2l-7.8-.6c-1-.1-2.1.2-3.3-1 6.6-.9 12.7-1.4 18.9-.8 1.6.2 3.3.3 4.9.4.8.1 1.8.1 1.9-1 .1-.8-.7-1-1.4-1.2-2.5-.7-5.2-.7-7.8-.8-1.4-.1-2.8.2-4-.7 6.2-.4 12.3-.5 18.4.2 1.4.2 3.8 1.3 4.1-.9.2-1.6-2.4-1.4-3.8-1.6-2.8-.4-5.7 0-9.2-1.3 1.5-.8 3.1-.5 4.6-.6zm303.2 230.5c-5.3-7-10.6-14-15.7-21.2-3.3-4.7-7.5-8.8-9-14.6-.1-.6-.7-.9-1.2-.8-.6.1-.9.6-1 1.1-.3 1.4 0 2.8.7 4 1 1.8 2 3.6 3.2 5.3 7.4 10.6 16.8 23 24.7 33.1 1.3 1.7-2 7.1-3.5 9.7-.5.9.2 2.3 1.4 1.7 2.5-1.1 4.6-9.4 5.8-7.9 11.6 14.6 24.7 33.7 34.3 49.8 6.7 11.3 13.6 22.6 20.8 33.6 7.2 11 14.7 21.9 21.3 33.3.2.4.4.7.7 1 .6.7 1.2 1.8 2.3 1 1-.7.6-1.7.2-2.6-.5-1-.9-2-1.5-2.9-1.6-2.7-3.2-5.4-4.9-8.1-8.5-13.3-17.2-26.5-25.7-39.8-7-11.1-13.5-22.6-20.8-33.6-7.2-10.9-15.3-21.1-23.4-31.3-1.4-1.8-2.4-3.5-1.8-6 1.7-7.8 2.6-15.7 3.6-23.6 2.3-17.2-.4-33.3-9.8-48.2-3.7-5.8-7.3-11.6-11.5-17.1-.9-1.2-1.7-3.7-3.5-2.3-1.6 1.2.4 2.7 1.2 3.8 4.6 6.5 8.9 13.2 12.8 20.1 6.1 10.8 8.9 22.4 8.3 34.8-.4 9.5-2 18.8-3.5 28.2-.1.9-.3 1.9-1.2 2.5-1.7-.4-2.4-1.8-3.3-3zM325.4 370.8c5.5.5 10.2.9 14.9 1.3 1.7.1 3.3.3 4.8.9.3.1.7.6.7.9.1.6-.4 1-1 1-1.2 0-2.5 0-3.7-.1-3-.2-6-.5-9-.7-1.4-.1-2.7-.1-3.7 1.3-.9 1.3-2.4 1.1-3.8 1.1-6 .1-12.1.1-18.1.3-3.2.1-6.5.5-9.7 1.1 2 1 4.2.7 6.3.7 3.6 0 7.1.3 10.7.8.7.1 1.4.4 1.4 1.2 0 .9-.8 1-1.5 1-2.6-.1-5.2-.2-7.8-.2-1.4 0-2.8-.2-3.5 1.4-.6 1.2-1.8 1.1-2.9 1.2-4.2.5-8.4 1-12.7 1.5-1.3.2-2.7.3-4 1.6 2.6.7 4.7 0 6.8-.3.8-.1 1.6-.4 2.4-.4.5 0 1.1.3 1.2.9.1.6-.1 1.1-.6 1.4-1.4.7-2.9.8-4.4 1-4.3.4-8.6.9-12.9 1.7 2.6.1 5.2.3 7.8.4.8 0 1.6.1 2.4.2.7.1 1.3.5 1.2 1.4-.1.6-.7.9-1.2.9-1.6 0-3.3-.1-4.9 0-2.4.2-5.3-.9-6.7 2.4-.4.8-1.7.6-2.7.7-2.8.2-5.7.4-8.6 1.3 1.3.2 2.5.3 3.8.5.4.1.8.4.7.9-.1.4-.4.9-.6.9-.9.2-1.9.2-2.8.3-8.4.1-16.7.4-25 1.5-.5.1-1.1.1-1.6.1-.6 0-1.1-.1-1.3-.7-.3-.8.3-1.3.9-1.6.9-.3 1.8-.6 2.8-.7 2.1-.3 4.4-.1 5.7-2.4.7-1.3 2.5-.9 3.8-1.1 2.2-.4 4.4-.4 6.3-2.3 1.6-1.6 4.4-1.2 6.7-1.5 1.1-.2 2.3-.1 2.6-1.5.4-1.9 2-2.1 3.5-2.3 2.6-.3 5.2-.5 7.8-.7 1.1-.1 2.2-.2 2.5-1.6.5-2 2.2-2.3 3.8-2.7 2.6-.6 5.3-1.1 8.2-1.7-1.4-1-2.6-.6-3.8-.7-.8-.1-1.8 0-2-1-.2-1.4 1.1-1.4 1.9-1.6.7-.2 1.4-.2 2-.2 1.6-.1 3.3.1 3.7-2.2.2-1.1 1.4-1.2 2.3-1.5 1.3-.3 2.3-.7 2-2.4-.2-1.2 1-1.5 1.9-1.8 1.5-.5 3-.3 4.5-.4 1 0 2.3.2 2.7-.7 1.2-2.5 3.3-2.1 5.3-2.2 12.1-.8 24.1.4 36.2-.3h.8c.8.1 1.7.3 1.7 1.4 0 .8-.8 1.1-1.5 1.1-1 .1-1.9.1-2.9.1-4.8 0-9.6.1-14.4.1-1.7.3-3.2.1-5.4 1zm-25.6 3.1c.5.2.6.3.7.3.7 0 1.3 0 2-.2.3-.1.2-.5-.2-.5-.7-.1-1.3 0-2 0-.1 0-.2.2-.5.4zm.1 58.3c-4.6.1-9 .7-13.4 2-22.6 6.3-45.3 12.2-68.2 17.5-16.6 3.9-32.5 10.1-48.4 16-24.1 8.9-48 18.1-71.1 29.5-6 3-11.9 6.3-17.4 10.1-.9.6-1.8 1.3-2.6 2-.6.5-.7 1.2-.2 1.9.5.7 1.2.6 1.8.3 1.2-.6 2.4-1.3 3.6-2.1 6.4-4.1 13-7.7 19.8-11 20.7-10 42-18.4 63.5-26.3 16.5-6 32.8-12.7 49.9-16.8 19.2-4.7 38.5-9.1 57.5-14.6 6.9-2 13.6-4.4 20.7-5.2 1.9-.2 3.8-.3 5.7-.5.9-.1 1.6-.4 1.6-1.5-.5-1.4-1.7-1.3-2.8-1.3zM837.5 650c-13.3-13.1-32.3-31.8-46.8-43.6-30.3-24.6-62.1-47.1-95-68.1-16.1-10.3-32.8-19.5-50.2-27.3-.5-.2-1-.4-1.5 0-.6.5-.6 1.3-.2 1.9.8 1.4 2.3 1.9 3.7 2.5 8.5 3.6 16.7 7.7 24.7 12.3 29.4 17 57.2 36.4 84.6 56.4 26.9 19.6 57.4 47.1 81 70.7.6.6 1 1.3 2.2 1.4 1.1-3-.8-4.5-2.5-6.2zm-4.1-28c-5.2-5.3-10.5-10.5-16.1-15.4-18-15.8-37.7-29.3-57.7-42.5-23.7-15.6-48.4-29.8-72.5-44.8-13.4-8.3-27-16.4-39-26.8-.3-.3-.6-.5-1-.7-.5-.3-1-.3-1.5.1s-.5 1-.2 1.5c.7 1.4 1.9 2.3 3.1 3.3 5.6 4.7 11.5 9 17.5 13 16.6 11.1 33.8 21.1 50.8 31.4 22.2 13.5 44.2 27.1 65.4 42.2 18 12.8 35.5 26.4 50.7 42.6.5.5 1 .9 1.9 1.7.9-2.6 0-4.1-1.4-5.6zm-610-195.3c-2.6.5-5.1 1.2-7.6 1.9-13.5 4.1-27 8.3-40.7 11.9-37.4 9.8-74.8 19.9-111.6 32.1-9.6 3.2-19.3 6.2-28.7 10.1-1.8.7-3.6 1.4-5.1 2.7-.6.5-.8 1.1-.3 1.8.3.5.9.7 1.5.5.9-.3 1.8-.7 2.7-1 3.2-1.3 6.3-2.6 9.6-3.8 20.3-7.3 40.9-13.6 61.5-19.8 26.9-8.1 54.3-14.8 81.4-22.3 11-3 21.8-6.6 32.7-9.9 1.6-.5 3.2-1.3 5.1 0 1.4.9 2.9-.3 2.9-2.1-.1-1.6-1.3-2.5-3.4-2.1zm585.2 151.5c-20.6-17.2-42.7-32.2-66-45.6-18.2-10.5-13-7.6-31.6-17.4-13.5-7.1-26.8-14.5-38.4-24.6-.7-.6-1.6-1.5-2.5-.5-.9.9-.1 1.8.6 2.5.8.8 1.5 1.6 2.4 2.3 3.6 3.2 7.6 5.9 11.6 8.5 14.1 9.4 5.3 4.5 20.3 12.3 36.5 18.9 71.8 39.7 103.3 66.5.7.6 1.3 1.4 2.6 1.3 1.4-2.7-.7-3.9-2.3-5.3zM196.3 442.5c-22.7 5.9-45.3 11.9-67.6 19.3-28.5 9.4-56.8 19.5-84.1 32.3-6.5 3-12.9 6.1-19.1 9.6-1.8 1-3.6 2.1-4.8 3.8-.4.6-.6 1.2-.1 1.9.5.6 1.2.6 1.8.2 2.7-1.6 5.3-3.4 8.1-4.9 8.7-4.7 17.7-8.7 26.7-12.7 25.3-11.4 51.6-20.3 77.9-28.7 21-6.7 42.1-13.3 63.8-17.3.3 0 .5-.1.8-.2 1.1-.5 2.1-1 1.7-2.4-.3-1.1-1.4-1.2-2.9-1.2-.4 0-1.3.1-2.2.3zm252.6-50c-1.6 1.4-2 3.8-4.2 4.8-1.3.5-.9 1.8.6 2.2 1.8.5 3.6.8 5.6.2 3.9-1.1 7.9-2.3 12-2.6 1.9-.2 2-1.3.8-2.5-1.8-1.7-.4-2.3.9-2.8 1.4-.5 2.9-.8 4.3-1.3s1.5-1.3.3-2.3c-.5-.4-1.6 0-1.5-1.4.2-2.6 0-2.6-2.1-2.1-1 .2-2.4 1.4-2.9.1-1.3-3.1-3.5-2-5.5-1.4-10.2 2.9-21 3.9-30.8 8.4-3.5 1.6-7.3 2.3-11 3.3-1.3.4-2.7 1.3-3.9 1.1-5.6-1.1-10.5 1.4-15.7 2.3-2.9.5-4.1 2.4-4.7 4.9-.6 2.6.7 4.1 3.2 3.5 5.5-1.2 10.8-3 16.5-3.6 1-.1 2.1-.6 1.7-1.8-.6-2.3.9-2.9 2.5-3.4 7.5-2.1 14.8-5.1 22.6-6 .8-.1 1.7-.2 2.2-1 .9-1.3 2.3-1.3 3.6-1.8 3.4-1.4 7-.3 10.6-.5-1.4 2-3.6 2.4-5.1 3.7zm147.8 16.9c2.8 1.4 5.6 2.8 8.4 4.3.5.3 1.1.4 1.5-.1.6-.6.4-1.3-.1-1.8-.4-.4-.8-.8-1.3-1-5.6-3.4-12.1-5.2-17.7-8.7-.7-.5-1.7-.2-2.2.6-.6.9 0 1.6.7 2 2 1.1 4.9 1.5 4 5 0 .2.2.5.4.7 3.1 2 5.4 4.8 7.5 7.8.4.6 1.3 1 2 1.4 1.3.8 2.1 2 3.1 3.1 2.3 2.7 2.5 6.2 4.4 9.1 1 1.5 2.9 2.4 3.1 4.1.3 2.8 2.3 3.9 4.2 5.2 3.6 2.3 7.2 4.5 10.8 6.7.7.4 1.9.6 1.7 2.1-1.6-.2-2.9-.9-4.2-1.5-2.2-1.1-4.4-2.3-6.5-3.5-.5-.3-1.1-.4-1.5.1-.4.5-.3 1 .1 1.5.4.4.7.8 1.2 1.1 4.8 3 10.1 4.8 15.1 7.4.6.3 1.8-.2 1.5-.7-1-1.6.4-3.2-.2-4.6-.4-1.2-1.6-1.8-2.7-2.4-2.3-1.2-4.7-2.3-4.7-5.5 0-.3-.4-.7-.7-1-1.9-1.8-4.9-2.6-4.7-6.1 0-.6-1.4-1.2-2.1-1.8-.8-.6-2-.7-2.4-2 1.8.1 3.1 1.2 4.7 1.6.7.2 1.5.3 1.9-.3.4-.7 0-1.4-.7-1.7-4-2.1-6.6-6-10.9-7.9-2.7-1.2-5.5-2.4-6.5-5.8-.3-1-1.7-1.7-2.8-2.3-1.9-1.3-4-2.4-5.9-3.7-.8-.5-2-.9-2-2.3 1.4-.4 2.4.4 3.5.9zm-215.8-57.9c1.6.2 4.5 1.6 4.7-.2.4-2.4-2.8-1.9-4.4-2.2-8.9-1.5-17.9-2.4-26.9-3.1-2.3-.2-4.3-.1-6.2 1.3-.5.4-1.4.4-1.5 1.2-.1.9.6 1.5 1.4 1.8 1 .3 2.1.7 3.1.9 3.4.6 6.8.9 10.2 1.6 3.2.6 6.6.6 9.5 2.2-3 0-6-.1-9-.5-7.6-1-15.3-.8-22.9-2.3-2.2-.4-5.2.8-5 1.6.6 2.3 2.7 1.9 4.4 2.2 6.1.9 12.2 1.5 18.3 2.5 6.2 1.1 12.5 1.2 18.8 2.3.7.1 1.6.3 2 0 2.5-2.2 5.1-1.1 7.8-.5.9.2 1.9 1 2.7 0 .9-1.1-.2-2.1-.5-3.1-.4-1.3-1.6-1.9-2.8-2.2-2.1-.7-4.2-1.3-6.3-1.8-3.6-.8-7.2-1.5-10.7-2.2 4.5-1 8.9 0 13.3.5zm-65.4 271.8c.5 1.5.8 4.1 2.7 3.5 2.5-.8.7-3 .3-4.5-1.7-5.8-3.6-11.5-4.1-17.6-1.1-14.9.7-29.7 3.2-44.2 2.6-15.6 8.2-30.4 14.7-44.8.9-2 2-3.9 3.5-5.6.7-.8 2-1.6.8-2.7-1-.9-2.1-.1-2.9.8-.7.8-1.5 1.7-2 2.6-1.3 2.4-2.7 4.8-3.8 7.3-7.4 17.6-13.9 35.5-15.2 54.8-.6 8.1-1.6 16.1-1.8 20.4-.2 12.8 1.6 21.5 4.6 30zm-87.6-246.8c.8-.1 1.8-.2 1.9-1.2 0-1.1-1-1-1.8-1.1h-.8c-7.6.6-14.7 3.1-21.7 5.8-1.1.4-2.1 1.2-1.4 2.5 1 1.8-.3 2.1-1.3 2.7-4.1 2.1-8.3 4.2-12.4 6.4-1.2.6-2.8 1-3.5 2-2.1 3.1-5.4 4-8.5 5.4-1.4.6-2.8 1.1-3.9 2.2-.4.4-.6.9-.4 1.5.2.6.7.7 1.3.7 1.9 0 3.6.2 5.5-.9 3.1-1.8 6.6-2.6 10.1-3.4 1.7-.4 3.7-.2 3.5-3-.1-.8 1.1-1.2 1.9-1.4 1.6-.4 3.2-.6 4.8-1.1 1.3-.3 3.6.4 3.7-1.6.1-1.8-2.5-.5-3.4-1.9.9-.4 1.6-.9 2.5-1.2 3.2-1.1 6.5-2.3 9.9-2.6 1.2-.1 2.8-.2 2.7-1.8-.2-2 1.1-2.1 2.4-2.6 1.7-.6 3.6-.2 5.2-1.1.5-.3.9-.7.6-1.3-.2-.3-.6-.7-.9-.7-1.3 0-2.7.2-4 .3 2-2.1 5-2.2 8-2.6zm412.7 33.7c1.3.5 2.9 2.4 3.8.7.9-1.6-1.5-2.3-2.7-3-4.7-2.5-9.6-4.7-13.9-8-.6-.4-1.2-.9-1.8-.1-.5.7-.2 1.3.2 1.9.8 1.1 2.6 1.5 2.9 2.9.5 2.5 2.2 4 3.8 5.7.6.6 1.1 1.2 1.4 2 1.3 4.6 4 8.3 7.7 11.2 1.1.8 2.5 1.5 2.8 2.9.6 2.4 2.3 3.6 4.1 4.9 2.8 2 5.8 4.4 7.1 7.3 1.3 3 3.4 5.2 5.4 7.5 2.9 3.4 6.7 5.6 10.6 7.7.5.3 1.1.4 1.5-.1.6-.6.3-1.3-.2-1.8s-1.2-.7-1.6-1.2c-2.3-2.8-6.9-3.8-6.6-8.6 0-.3-.4-.7-.7-.9-2-1.5-4.1-2.8-4.5-5.5-3.2-1.7-4.9-4.9-7.3-7.4-1.6-1.6-3.2-3-3.8-5.1-1.1-3.6-3.8-5.9-6.6-8.1-2.3-1.9-4.7-3.7-7.1-6.6 2.7-.1 4 1.1 5.5 1.7zm-408.2 12.4c1 0 1.5-.8 1-1.7-.8-1.4.3-1.8 1.2-1.9 2.3-.3 4.6-.3 7-.5 1-.1 2.3-.2 2-1.4-.7-2.4 2.1-1.8 2.4-3.1.5-1.9 2-2 3.5-2 .7 0 1.5-.2 1.5-1 .1-1.2-.9-1.3-1.7-1.3-5.7.2-11.5-.1-17.2.9-1.1.2-2.3.5-2.7 1.6-.7 2-2.4 2.1-3.9 2.5-1.6.4-3.3.5-3.7 2.6-.2 1.1-1.2 1.5-2.1 1.6-4.3.5-8 2.7-12.1 3.6-.8.2-1.8.4-1.7 1.4 0 1.4 1.2 1.2 1.8 1.2 8.3-.9 16.4-2.5 24.7-2.5zm83.5-61.3c-.9 0-1.7.1-1.8 1.2 0 1 .8 1.4 1.6 1.5 1.2.1 2.5.2 3.7.3 14.9.9 29.9.3 44.8 1.6 2 .2 4.2-1.8 4-3.8-.2-2-2.1-1.8-3.5-2-4.1-.7-8.2-.6-12.3-.8-9-.5-18.1-.5-27.1.2-1.5.1-3 .1-4.2 1.3-1 1-2.3.6-3.5.6-.6 0-1.1 0-1.7-.1zm55.9 33.5c-6.4 1.4-12.9 2.7-19.3 4.1-18.9 4.1-37.2 10.1-55.3 17-.9.3-1.8.7-2.6 1.2-.6.3-1.2.7-1.7 1.1-.5.5-.8 1.1-.5 1.8.3.7 1 1 1.7.9 1.7-.2 3.2-.8 4.5-1.9 1.1-.9 2.2-1.6 3.5-2 7.8-2.7 15.5-5.5 23.4-7.7 16.2-4.6 32.5-8.6 48.8-12.5.8-.2 2.2 0 1.9-1.5-.2-1.1-1.2-.9-2.2-.9-.6.1-1.4.3-2.2.4zM341.9 411c-.6.4-1 1-.8 1.7.3 1 1.2 1.1 2 .9.5-.1 1-.4 1.5-.6 9.2-3.5 18.7-6.2 28.3-8.2 1.9-.4 5.1.7 3.9-3.4 0-.1.2-.2.3-.3.6-.5 1.6-.9 1-1.9-.6-1.1-1.7-.6-2.6-.4-6.2.8-12.4 2-18.5 3.6-7.5 2-15.1 3.8-22.5 6.4-1.3.5-3.5.8-2.6 2.8.9 1.9 2.6.9 3.9.1 2.6-1.7 5.5-2.3 8.5-2.2-.7.6-1.6 1-2.4 1.5zm273.8 39.7c.1.9.8 1.4 1.4 2 5 4.6 10.8 8.3 15.6 13.1 1.8 1.8 4.4 2.8 5 5.7.2.9 1.4 1.7 2.2 2.3 2.3 1.8 4.6 3.4 7 5.1 1.9 1.3 4 2.4 6.2 3.2.6.3 1.4.5 1.9-.1.8-.8.1-1.6-.3-2.2-.4-.5-.9-1.1-1.5-1.4-1.7-.8-3.1-1.6-3.7-3.6-.4-1.2-1.7-1.8-2.7-2.4-1.8-1.2-3.6-2.5-5.5-3.6-1.5-.9-2.1-1.9-2.4-3.8-.7-5.2-1-5.1-6.3-7.1-5-1.9-9.9-4.1-14.2-7.3-.5-.4-1-.9-1.7-1-.8.1-1.1.5-1 1.1zM340.8 459c.7-.1 1.5.1 1.6-.8.2-1.2-.7-1.3-1.5-1.4-3.2-.4-6.2.5-9.2 1.5-9.1 2.9-16.6 8.6-25 12.8-.4.2-.7.5-.9.8-.6 1.1-.4 1.9.9 2.1.7.1 1.4.1 1.9-.4 2.4-2 5.4-2.6 8.2-3.5 4.4-1.5 8.9-2.8 13.3-4.1.8-.2 1.7-.4 1.6-1.5-.1-1.2-1.1-.9-1.9-.9-.8 0-1.6.7-2.3-.1 3.5-2.8 6.7-3.9 13.3-4.5zm153.4-82.9c-.1-1.5-.7-2.1-2-1.3-4.8 3.1-9.6 6.3-14.3 9.6-1.6 1.1-1.3 2 .7 2.4 1.8.4 1.6 1.2.8 2.2-1.1 1.2-2.6 2-3.4 3.5-.3.5-.4 1.1.2 1.4.3.2.9.3 1.1.1.7-.4 1.3-.9 2-1.4 3.9-3.1 8.2-5.4 12.7-7.5 1.3-.6 3.8-.5 3.4-2.2-.5-2.4-2.8.2-4.6-1 1.8-1.7 3.5-3.2 3.4-5.8zm-212.4 98.4c3.4-1.5 6.8-3 10.1-4.5.8-.4 2.2-.7 1.7-1.9-.6-1.5-1.9-.7-2.8-.3-6.8 3-13.5 6-20.3 9.1-1.7.8-2.6 1.9-2.7 4.1-.1 3-.1 3.3 2.4 2.2 6.4-2.5 12.8-4.9 19.5-6.4.9-.2 2.2-.2 2-1.5-.2-1.2-1.4-1.1-2.4-.9-.9.1-1.9.4-2.8.6-2.8.8-5.5 1.5-9.1 2.5 1.6-2 3.1-2.3 4.4-3zm121.7-84.4c-2.7.6-5.2 1.8-7.4 3.4-.7.5-1.5 1-1.1 1.9.4 1.1 1.3.6 2.1.3 3.3-1.4 6.8-1.9 10.4-2.4 1.1-.2 2.2-.2 3.3-.3 1.5-.2 3.4-2.2 3-3.3-.5-1.6-1.9-1.2-3.1-1.1-1 .1-2 .4-2.5-.7-1.1-2.4-3.2-2.4-5.3-2.3-6.8.1-13.3 1.5-19.6 3.8-1 .4-2 .9-2.7 1.8-.3.5-.5 1-.2 1.5.4.5 1 .5 1.5.3.4-.1.7-.4 1.1-.5 5.4-2.6 11.2-3.6 17-4.4 1.7-.2 3.5-.5 5.3.5-.5 1.3-1.1 1.4-1.8 1.5zm-54 28.1c1.8-1.5 4.1-2.1 6.3-2.9 7.5-2.6 15.1-4.9 22.8-6.7.9-.2 2.2-.4 2-1.6-.2-1.2-1.4-1-2.4-.8-1.2.2-2.4.5-3.6.7-7.8 1.9-15.6 4.3-23.2 6.9-1 .4-2.1.7-3.1 1.2s-2.1 1.1-1.6 2.4c.6 1.4 1.8.9 2.8.5.1.2 0 .3 0 .3zm66.5-71c.5-.1 1.1-.4 1.1-1 0-.7-.6-.9-1.1-1-4.5-.5-9-.3-13.4-1.3-.5-.1-1.1.1-1.2.8 0 .6.2 1 .7 1.3 1.2.9 2.7 1.1 4.2 1.3-2.4.5-4.7.3-7-.1-.9-.1-2.2-.6-2.4.7-.2 1.4 1.2 1.6 2.2 1.9.4.1.8.1 1.2.1 3.7.3 7.3.7 11 .9 1.3.1 3.4 1.1 3.8-.9.3-1.8-2.3-.8-3.5-2.3 1.8 0 3.1-.1 4.4-.4zm-181.3 58.6c-1.1.2-2.1.5-3.1.9-.7.2-1.2.9-1 1.6.2 1.1 1.1 1 2 .8 8.3-2.1 16.7-2.7 25.1-3.5.7-.1 1.4-.1 2-.4.3-.1.5-.6.6-1 .1-.4-.3-.8-.7-.8-1.4-.1-2.7 0-4.1 0-7.1.4-14 1.1-20.8 2.4zm116.9 15.5c-.8 1.1-2.1 1.2-3.1 1.8-.7.4-1.6.8-1.1 1.9.5 1 1.4.7 2.2.4 3.1-.9 6.3-1.9 9.4-2.7 4.2-1.1 8.5-1.9 12.9-2.2.7-.1 1.5-.1 1.5-1 0-1.1-.9-1.2-1.7-1.3-1.9-.1-3.8.2-5.7.4-4.9.8-9.6 2.3-14.4 2.7-.1 0 0 0 0 0zm0 0s-.1 0 0 0c5.5-2.4 11.3-3.8 17.1-5.3 1.3-.3 2.7-.6 4-.9.7-.2 1.4-.5 1.2-1.3-.2-.9-1-.9-1.6-.8-1.5.2-3 .4-4.4.7l-18.3 4.5.1-.1c-.1 1.5.3 2.6 1.9 3.2zm70.4-21.4c3.8-1.1 7.6-2.2 11.4-3.2 1.3-.4 2.7-.6 4-.9.8-.2 1.8-.3 1.5-1.4-.2-1-1.3-.9-2-.8-.7 0-1.4.1-2 .3-4.9 1.3-9.8 2.5-14.6 3.8-.7.2-1.3.5-1.9.8-.6.3-1.2.8-.9 1.6.2.6.8.6 1.9.6.5-.3 1.6-.6 2.6-.8zM279 502.3c-.8.5-1.7 1.3-.8 2.3.7.8 1.5.1 2.2-.2 4.8-2.7 9.8-4.9 15.1-6.2.8-.2 1.8-.3 1.7-1.4-.1-1-1.1-1-2.6-1-5 1.4-10.5 3.4-15.6 6.5zM400.4 341h9c.7 0 1.5 0 1.6-.9.2-1.2-.9-1.2-1.6-1.2-5.6-.2-11.2 0-16.8.3-.4 0-.8.2-1.2.3-.7.3-1.3.7-1.2 1.4.1.8.9 1 1.6.9 2.9-.2 5.7-.4 8.6-.6v-.2z"/>
        </svg>
    </a>
    <h2>Dimension auf ihre Wand bringen!</h2>
    </div>

    <nav>
      <a href="/anleitung/">Anleitung</a>
      <a href="/anleitung/design-ideen">Design Ideen</a>
      <a href="/anleitung/tips">Tips Und Tricks</a>
      <a target="_blank" rel="noopener" href="http://schnauze-fabrik.app">Pattern Maker App</a>
      ${ShopButton({ primary: true, size: 'large' })}
    </nav>
    `;
  }
}