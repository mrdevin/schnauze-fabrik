import { html } from 'lit-html';
// import { styleMap } from 'lit-html/directives/style-map.js';
import ShopButtonStyles from '../css/shop-button.css?inline';

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;

  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label?: string;
  /**
 * external link
 */
  href?: string;

}
/**
 * Primary UI component for user interaction
 */
export const ShopButton = ({ primary, size, label="Kaufen", href="https://shchnauze-fabrik.shop" }: ButtonProps) => {
  const mode = primary ? 'shop-button--primary' : 'shop-button--secondary';

  return html`
    <style>
      ${ShopButtonStyles}
    </style>
    <a
      type="button"
      href="${href}"
      target="_blank"
      class=${['shop-button', `shop-button--${size || 'medium'}`, mode].join(' ')}

    >
      <span class="inner">${label}</span>
    </a>
  `;
};
