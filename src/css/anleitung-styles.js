import { css } from 'lit';

export const AnleitungStyles = css`
    .num,
    .note {
        font-family: 'GT-Super-Display-Super', Rockwell, serif;
        font-weight: bold;
        font-size: 4em;
        line-height: .7em;
        color: var(--shadow-color);
        float: left;
        text-shadow: 1px 1px 0 var(--primary-color),6px 4px 0px  var(--highlight-color);
        margin: 0.1em 0.15em 0em 0em;
    }

    .note {
        font-size: 2em;
    }

    .instStep {
        margin-bottom: 1em;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }

    .instImg {
        max-height: 200px;
        height: 200px;
        display: flex;
        flex-wrap: wrap;
    }

    .instImg img {
        height: 100%;
        max-width: 100%;
    }

    .instStep p{
        display: flex;
        flex-wrap: wrap;
        max-width: 450px;
        margin-right: auto;
    }
`;