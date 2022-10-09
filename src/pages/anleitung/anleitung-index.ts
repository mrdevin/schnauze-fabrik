import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('anleitung-index')
export class AnleitungIndex extends LitElement {

    createRenderRoot() { return this; }

    render() {
        return html`

            <h1>Anleitung</h1>

            <h2>Einfache Montage, Teile herausnehmen, falten,
                kleben und auf die Wand hängen.</h2>

            <h3>Flache Fliese - Montageanleitung</h3>
            <a href="/anleitung/flach-hex">zum Anleitung mit video.</a>
            <h3>Spitzig Fliese - Montageanleitung</h3>
            <a href="/anleitung/spitzig-hex">zum Anleitung mit video.</a>
            <h3>Ressourcen</h3>
            <a href="/anleitung/tips">Tips Und Tricks </a>
            <br/>
            <a href="/anleitung/aufhaengen">Aufhängen</a>
            <br/>
            <a href="/anleitung/glossar">Glossar</a>


        `
    }
}