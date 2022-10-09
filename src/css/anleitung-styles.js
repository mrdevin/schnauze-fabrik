import { css } from 'lit';

export const AnleitungStyles = css`
.instStep {
    margin-bottom: 1em;
}


.num,
.note {
    font-family: 'GT-Super-Display-Super', Rockwell, serif;

    font-weight: bold;
    font-size: 4em;
    line-height: .7em;
    color: var(--primary-color);
    float: left;
    /* opacity: 0.8; */
    text-shadow: 4px 1px 0  var(--highlight-color),  7px 4px 0  var(--shadow-color);
    margin: 0.1em 0.15em 0em 0em;
}

.note {
    font-size: 2em;
}
`;