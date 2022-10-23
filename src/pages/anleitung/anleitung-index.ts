import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import FlatSvg from '@/img/flat-icon.svg';
import PointedSvg from '@/img/pointed-icon.svg';
import { AnleitungStyles } from '/src/css/anleitung-styles.js';

@customElement('anleitung-index')
export class AnleitungIndex extends LitElement {
    static styles = [
        AnleitungStyles,
        css``
    ]

    createRenderRoot() { return this; }

    render() {
        return html`
            <style>
                ${AnleitungStyles}
            </style>
            <h1>Anleitung</h1>

            <h2>Einfache Montage, Teile herausnehmen, falten,
                kleben und auf die Wand hängen.</h2>

            <h3>Flache Fliese - Montageanleitung</h3>
            <picture class="icon">
                <img height="253" width="400" loading="lazy" src="${FlatSvg}">
            </picture>
            <a href="/anleitung/flach-hex">zum Anleitung mit video.

            </a>

            <h3>Spitzig Fliese - Montageanleitung</h3>
            <picture class="icon">
                <img height="253" width="400" loading="lazy" src="${PointedSvg}">
            </picture>
            <a href="/anleitung/spitzig-hex">zum Anleitung mit video.

            </a>
            <h3>Ressourcen</h3>
            <a href="/anleitung/tips">Tips Und Tricks </a>
            <br/>
            <a href="/anleitung/aufhaengen">Aufhängen</a>
            <br/>
            <a href="/anleitung/glossar">Glossar</a>


        `
    }
}