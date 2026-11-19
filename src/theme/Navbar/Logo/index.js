import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';
import {useThemeConfig} from '@docusaurus/theme-common';

// Same lockup as the arpe.vision header: logo + "Arpe" + ".vision" in accent color,
// then a divider and a small uppercase "Docs" label, like security.arpe.vision
export default function NavbarLogo() {
  const {navbar: {logo}} = useThemeConfig();
  return (
    <Link to={useBaseUrl('/')} className="navbar__brand">
      <div className="navbar__logo">
        <ThemedImage
          alt={logo.alt}
          sources={{light: useBaseUrl(logo.src), dark: useBaseUrl(logo.srcDark)}}
        />
      </div>
      <span className="navbar__title brand-wordmark">
        Arpe<span className="brand-accent">.vision</span>
      </span>
      <span className="brand-suffix">
        <span className="brand-divider" aria-hidden="true" />
        <span className="brand-suffix-label">Docs</span>
      </span>
    </Link>
  );
}
