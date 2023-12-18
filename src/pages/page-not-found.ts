import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import GlobalStyles from '@/css/global-styles.css?inline';

@customElement('page-not-found')
export class PageNotFound extends LitElement {
  static styles = [
    GlobalStyles,
    css`
      :host{
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: center;
      }

      h1,h2,h3,h4,span {
        display: flex;
      }
    `
  ];

  @state()
    possibleMsgs = [
      {
        msg: 'Ick wees nüscht, kann nüscht, hab aba jede Menge Potenzial.',
        trans: 'Ich weiß nichts, kann nichts, habe aber jede Menge Potenzial.'
      },

      {
        msg: 'Wat willste Du Flietzpiepe?',
        trans: 'Hast Du ein Problem, Kleiner?'
      },

      {
        msg: 'Mach ma hier keene Fisimatenten!',
        trans: 'Mach mal hier keine Fisimatenten! (Mach keinen Unsinn!)'
      },

      {
        msg: 'Mach de Oogen zu, dann weesde, wat dir jehört.',
        trans: 'Mach die Augen zu, dann weißt Du was Dir gehört.'
      },

      {
        msg: "Ick gloob jetz hackt's!",
        trans: 'Ich glaube jetzt hackt es! (Mir reicht es jetzt!'
      },

      {
        msg: "Mach ma hier nich so'n Feez!",
        trans: 'Mach mal hier nicht solch einen Feez! (Nicht aufegen!)'
      },

      {
        msg: 'Da wird ja der Hund in de Fanne varrückt!',
        trans: 'Da wird ja der Hund in der Pfanne verrückt!(Ich bin erstaunt!'
      },

      {
        msg: "Jeh mir nich uff'n Keks Keule!",
        trans: 'Geh mir nicht auf den Keks mein Freund! (Nerv mich nicht!'
      },

      {
        msg: 'Ick gloob meen Schwein feift!',
        trans: 'Ich glaube mein Schwein pfeift! (Unglaublich!)'
      },
    ]

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  renderRandomMsg() {
    const randomIndex = this.getRandomInt(0, this.possibleMsgs.length-1);
    const randomMsg = this.possibleMsgs[randomIndex]
    return html`
      <h3>${randomMsg.msg}</h3>
      <span>${randomMsg.trans}</span>
    `;
  }

  render() {
    return html`
      <h1>404 ~ Not found</h1>
      ${this.renderRandomMsg()}
  `;
  }
}