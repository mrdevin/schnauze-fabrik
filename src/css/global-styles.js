import { css } from 'lit';

export const GlobalStyles = css`
:host, html, html * {
    --primary-color: hsla(var(--primary-color-hue, 50), var(--primary-color-saturation, 100%), var(--primary-color-luminance, 50%), var(--primary-color-alpha, 1));
    --logo-secondary-fill: var(--primary-color);
    --highlight-color: rgba(239, 229, 169, var(--highlight-color-alpha));
    --shadow-color-alpha: 1;
    --shadow-color: rgba(40, 40, 40, var(--shadow-color-alpha));
    --link-color: var(--shadow-color);
}

h1, h2, h3, h4, h6 {
    font-family: 'GT-Super-Display-Super', Rockwell, serif;
}

p {
    margin-bottom: 1.8em;
}

* {
    box-sizing: border-box;
}

.parent {
    min-height: 100%;
    max-width: 100%;
    display: grid;
    grid-template-rows: auto 1fr auto;
    margin: 0;
    /* padding: 0; */
    padding:  1rem 0;
}

 nav {
    background-color: var(--primary-color);
    width: 100%;
    max-width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    /* padding: 0 1rem ; */
}

sf-header::part(link) {
    width: 100%;
    display: flex;
    align-content: center;
    justify-content: center;
}

sf-header {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
    padding:  0 0 1rem  0;
    background-color: var(--primary-color);
}

nav a {
    height: 100%;
    display: flex;
    align-content: center;
    justify-content: center;
    text-decoration: none;
}

 a {
    color: var(--link-color);
    font-weight: bolder;
    font-size: 1em;
    display: inline-block;
    padding: .5em .75em;
    background-color: var(--highlight-color);
    border: 2px solid var(--link-color);
    border-radius:  8px 0;
    box-shadow: 2px 2px 0px var(--link-color);
    margin: .5em 0;
    letter-spacing: .05em;
    text-decoration: none;
    transition: box-shadow .2s linear;
    max-width: 88%;
    text-align: center;
    vertical-align: middle;
}

 a:hover,
 a:focus{
    box-shadow: 5px 5px 0px var(--link-color);
}

 a:active{
    box-shadow: 1px 1px 2px var(--link-color);
}

picture img, video {
    display: flex;
    margin: .5em 0 .8em;
    width: auto;
    height: auto;
    border: 5px solid var(--highlight-color);
    border-radius:  10px ;
    box-shadow: var(--primary-color) 0px 0px 0px 2px inset, var(--primary-color) 8px 8px 0px -4px, var(--shadow-color) 8px 8px;
    max-width: 100%;
}

video {
    background-color: var(--highlight-color);
}

observed-section {
    max-width: 99vw;
}

.split-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: .5em;
}
.split-item {
    display: grid;
    grid-template-rows: auto 1fr;
    row-gap: 0;
}
.split-item h5{
    background-color: var(--highlight-color);
    text-align: center;
    padding: 0.8em 0.35em;
    border-radius: 13px 13px 0px 0px;
    display: flex;
    align-items: center;
    height: fit-content;
    margin: 0;
}

.split-item h5 i {
    display: inline;
}

.split-item sf-model {
    grid-row: 2/3;
    border: 3px solid var(--highlight-color);
    border-top: unset;
    border-radius: 0px 0px 13px 13px ;
}

.split-2 picture img{
    /* height: 300px; */
    max-width: 95%;
}

.split-2 picture {
    display: flex;
    align-items: center;
    justify-content: center;
}

video {
    aspect-ratio: 16 / 9 ;
    width: 100%;
    max-width: 100vw;
}

.split-color {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr ;
}
/*mobile*/
@media (max-width: 480px) {
   .split-color {
        display: grid;
        grid-template-columns: 1fr 1fr ;
    }
}

  /*tablet*/
@media (min-width: 480px) and (max-width: 768px) {
   .split-color {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr ;
    }
}

main {
    padding: 1em 16px 16px 16px;
    max-width: 900px;
    margin: var(--sf-logo-size) auto 0;
    width: 100%;

    min-height:calc(100vh - (350px));
    min-height: calc(100svh - (350px));
}

sf-model {
    max-height: 200px;
    width: auto;
    min-height: 150px;
    height: auto;
}

li {
    list-style-type: none;
}

footer {
    display: flex;
    --primary-color-hue: 50;
    --primary-color-saturation: 100%;
    --primary-color-luminance: 34%;
    --primary-color-alpha: 1;
    background-color: var(--primary-color);
    padding: 1rem ;
    align-items: center;
    justify-content: center;
}
`;
