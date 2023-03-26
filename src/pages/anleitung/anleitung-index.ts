import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import FlatSvg from '@/img/flat-icon.svg';
import PointedSvg from '@/img/pointed-icon.svg';
import AnleitungStyles from '/src/css/anleitung-styles.css?inline';
import TapeTitle from '@/css/tape-title.css?inline';
import GlobalStyles from '@/css/global-styles.css?inline';

@customElement('anleitung-index')
export class AnleitungIndex extends LitElement {
    static  styles = [
        GlobalStyles,
        AnleitungStyles,
        TapeTitle,
        css``
    ]

    render() {
        return html`
           <header id="styled-head">
                <h1 class="tape-title">Anleitung</h1>

                <h2>Einfache Montage, Teile herausnehmen, falten,
                kleben und an die Wand hängen.</h2>

            </header>
            <div class="split-2">
                <div>
                    <h3><em>Flach Fliese</em> - Montageanleitung</h3>
                    <picture class="icon">
                        <img height="253" width="400" alt="Outline of Flat Paper tile" src="${FlatSvg}">
                    </picture>
                    <a href="/anleitung/flach-hex">
                        Zur Anleitung mit Video.
                    </a>
                </div>
                <div>
                    <h3><em>Spitze Fliese</em> - Montageanleitung</h3>
                    <picture class="icon">
                        <img height="253" width="400" alt="Outline of Pointed Paper tile" src="${PointedSvg}">
                    </picture>
                    <a href="/anleitung/spitze-hex">
                        Zur Anleitung mit Video.
                    </a>
                </div>
            </div>
            <h3 class="tape-title">Mehre Ressourcen</h3>
            <section id="resources">
                <article>
                    <p>Anleitung zum Aufhängen Ihrer Fliesen in Text- und Videoform. Sie finden auch Links zum Herunterladen zusätzlicher Aufhängevorlagen.</p>
                    <a href="/anleitung/aufhaengen">Aufhängen</a>
                </article>
                <article>
                    <p>Eine beliebte Verwendung der flache Fliesen ist als Bilderrahmen. Dazu habe ich eine Zuschneidevorlage und eine Anleitung erstellt.</p>
                    <a download rel="noopener noreferrer" target="_blank" href="/photo-cropping-template.pdf">Photo Cropping Template</a>

                </article>
                <article>
                    <p>Einige Begriffe, die ich verwende, sind möglicherweise neu für Sie. Hier finden Sie eine Liste mit Definitionen für den von uns verwendeten Jargon.</p>
                    <a href="/anleitung/glossar">Glossar</a>
                </article>
            </section>


        `
    }
}