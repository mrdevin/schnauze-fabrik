import { css } from 'lit';

export const AppIndexStyles = css`
    :host {
            min-height: 100%;
            max-width: 900px;
            display: grid;
            grid-template-rows: 1fr;
            margin: 0 auto;
            padding:  1rem 0;
        }

        .copyrightSymbol {
          font-size: 1.3em;
          vertical-align: middle;
        }
        #routerOutlet {
            display: flex;
            flex-wrap: wrap;
        }

        #routerOutlet > * {
          width: 100% !important;
        }
        #routerOutlet > .leaving {
          animation: 160ms fadeOut ease-in-out;
        }
        #routerOutlet > .entering {
          animation: 160ms fadeIn linear;
        }
        @keyframes fadeOut {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0.2;
          }
          to {
            opacity: 1;
          }
        }
        nav {
            width: 100%;
            max-width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-evenly;
        }

        observed-section {
            display: flex;
            flex-wrap: wrap;
            max-width: 99vw;
            margin-bottom: 3em;
            justify-content: center;
        }

        video {
            aspect-ratio: 16 / 9 ;
            width: 100%;
            max-width: 100vw;
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
            padding: 1rem ;
            align-items: center;
            justify-content: center;
        }
`;