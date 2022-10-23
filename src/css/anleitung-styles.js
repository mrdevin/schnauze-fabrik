import { css } from 'lit';

export const AnleitungStyles = css`
    .num,
    .note {
        font-family: GT-Super-Display-Super,Rockwell,serif;
        font-weight: 700;
        font-size: 4em;
        color: var(--shadow-color);
        float: left;
        text-shadow: 1px 1px 0 var(--primary-color),6px 4px 0 var(--highlight-color);
        float: left;
        line-height: .6em;
        padding-top: 0px;
        padding-bottom: 2px;
        padding-right: 8px;
        padding-left: 3px;
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

    div.instImg {
        height: min-content;
    }

    .instImg img,
    .icon img {
        height: 100%;
        max-width: 100%;
    }

    .icon img {
        border: unset;
        box-shadow: unset;
        stroke-width: 20px;

    }

    .instStep p{
        /* display: inline-flex;
        flex-wrap: wrap; */
        max-width: 450px;
        width: auto;
        margin-right: auto;
    }

    .icon {
        display: flex;
        flex-wrap: wrap;
        width: 80px;
        max-height: 80px;
        margin: 0;
        float: left;
        margin-right: 1em;
        align-content: end;
    }
`;