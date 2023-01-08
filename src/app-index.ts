import { LitElement,  html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Router } from '@vaadin/router';
import { registerSW } from 'virtual:pwa-register';

import '/src/pages/page-home';
import '/src/components/sf-header';
import GlobalStyles from '@/css/global-styles.css?inline';
import AppIndexStyles from '/src/css/app-index-styles.css?inline';

@customElement('app-index')
export class AppIndex extends LitElement {
    static styles = [
      GlobalStyles,
      AppIndexStyles
    ]


    constructor() {
        super();
        this.querySelector('svg').remove();
    }

    firstUpdated() {
        // this method is a lifecycle even in lit
        // for more info check out the lit docs https://lit.dev/docs/components/lifecycle/

        // For more info on using the @vaadin/router check here https://vaadin.com/router
        const router = new Router(this.shadowRoot?.querySelector('#routerOutlet'));
        router.setRoutes([
            // temporarily cast to any because of a Type bug with the router
            {
                path: (import.meta as any).env.BASE_URL,
                animate: true,
                children: [
                    { path: '', component: 'page-home' },
                    {
                        path: 'anleitung',
                        component: 'anleitung-index',
                        action: async () => {
                          await import('./pages/anleitung/anleitung-index.js');
                        },

                    },{
                      path: 'anleitung/flach-hex',
                      component: 'anleitung-flach-hex',
                      action: async () => {
                        await import('./pages/anleitung/anleitung-flach-hex.js');
                      }
                    },{
                      path: 'anleitung/spitzig-hex',
                      component: 'anleitung-spitzig-hex',
                      action: async () => {
                        await import('./pages/anleitung/anleitung-spitzig-hex.js');
                      }
                    },{
                      path: 'anleitung/tips',
                      component: 'anleitung-tips',
                      action: async () => {
                        await import('./pages/anleitung/anleitung-tips.js');
                      }
                    },{
                      path: 'anleitung/design-ideen',
                      component: 'anleitung-design-ideen',
                      action: async () => {
                        await import('./pages/anleitung/anleitung-design-ideen.js');
                      }
                    },{
                      path: 'anleitung/aufhaengen',
                      component: 'anleitung-aufhaengen',
                      action: async () => {
                        await import('./pages/anleitung/anleitung-aufhaengen.js');
                      }
                    },{
                    },{
                      path: 'anleitung/glossar',
                      component: 'anleitung-glossar',
                      action: async () => {
                        await import('./pages/anleitung/anleitung-glossar.js');
                      }
                    },{
                      path: 'Impressum',
                      component: 'page-impressum',
                      action: async () => {
                        await import('./pages/page-impressum.js');
                      },
                    },{
                      path: 'About',
                      component: 'page-about',
                      action: async () => {
                        await import('./pages/page-about.js');
                      }
                  },
                ],
            } as any,
        ]);
        registerSW({ immediate: true });
    }

    render() {
      return html`
        <!-- <div class="parent"> -->
            <sf-header></sf-header>

            <main id="routerOutlet">
            </main>
            <footer>
                <nav>
                  <a href="/impressum/">Impressum</a>
                  <span>${new Date().getFullYear() } <span class="copyrightSymbol">©</span> Schnauze Fabrik</span>
                </nav>

            </footer>
        <!-- </div> -->
    `;
    }
}