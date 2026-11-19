import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';
import {useThemeConfig} from '@docusaurus/theme-common';

// Footer laid out like security.arpe.vision: logo + short description on the left
// (two columns wide), then one column per link group from themeConfig.footer.links,
// and a centered copyright line under a thin divider.
function FooterLink({label, to, href}) {
  const target = href ?? to;
  const isExternal = /^(https?:|mailto:)/.test(target);
  return (
    <Link
      className="site-footer__link"
      {...(isExternal ? {href: target} : {to: target})}>
      {label}
    </Link>
  );
}

export default function Footer() {
  const {footer, navbar} = useThemeConfig();
  if (!footer) {
    return null;
  }
  const {links = [], copyright} = footer;
  const {logo} = navbar;

  return (
    <footer className="site-footer">
      <div className="site-footer__container">
        <div className="site-footer__grid">
          <div className="site-footer__brand">
            <Link to={useBaseUrl('/')} className="site-footer__logo">
              <ThemedImage
                alt="Arpe.vision"
                sources={{light: useBaseUrl(logo.src), dark: useBaseUrl(logo.srcDark)}}
              />
            </Link>
            <p className="site-footer__description">
              User guides and changelog for the Arpe.vision extensions for Tableau.
            </p>
          </div>
          {links.map((column) => (
            <div key={column.title}>
              <h4 className="site-footer__title">{column.title}</h4>
              <ul className="site-footer__list">
                {column.items.map((item) => (
                  <li key={item.label}>
                    <FooterLink {...item} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {copyright && (
          <div
            className="site-footer__copyright"
            dangerouslySetInnerHTML={{__html: copyright}}
          />
        )}
      </div>
    </footer>
  );
}
