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
                kleben und auf die Wand hängen.</h2>

            </header>
            <div class="split-2">
                <div>
                    <h3><em>Flache Fliese</em> - Montageanleitung</h3>
                    <picture class="icon">
                        <img height="253" width="400" loading="lazy" src="${FlatSvg}">
                    </picture>
                    <a href="/anleitung/flach-hex">
                        zum Anleitung mit video.
                    </a>
                </div>
                <div>
                    <h3><em>Spitzige Fliese</em> - Montageanleitung</h3>
                    <picture class="icon">
                        <img height="253" width="400" loading="lazy" src="${PointedSvg}">
                    </picture>
                    <a href="/anleitung/spitzig-hex">
                        zum Anleitung mit video.
                    </a>
                </div>
            </div>
            <h3 class="tape-title">Mehre Ressourcen</h3>
            <section id="resources">
                <article>
                    <p>Instructions for hanging your tiles in text and video form. You will also find links to download additional hanging templates.</p>
                    <a href="/anleitung/aufhaengen">Aufhängen</a>
                </article>
                <article>
                    <p>A popular uses of the flache Fliese is as picture frames. For this purpose I have created a cropping template and instructions.</p>
                    <a download rel="noopener noreferrer" target="_blank" href="/photo-cropping-template.pdf">Photo Cropping Template</a>

                </article>
                <article>
                    <p>Some terms that I use may be new to you, here you can find a list of definitions for the jargon that we use.</p>
                    <a href="/anleitung/glossar">Glossar</a>
                </article>
            </section>


        `
    }
}