import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import ThemedImage from '@theme/ThemedImage';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Radar',
    Svg: require('@site/static/media/example-radar.png').default,
    SvgDark: require('@site/static/media/example-radar-dark.png').default,
    link: '/docs/dashboard-extension/Radar',
    description: (
      <>
        Visualize data in a circular layout<br />
        Show relationships between different data points<br />
        Ideal for displaying multi-dimensional data<br />
      </>
    ),
  },
  {
    title: 'Circular Sankey',
    Svg: require('@site/static/media/example-sankeyC.png').default,
    SvgDark: require('@site/static/media/example-sankeyC-dark.png').default,
    link: '/docs/dashboard-extension/Circular-Sankey',
    description: (
      <>
        Illustrate flow and displays cycles within a system<br />
        Show proportions of flow between different nodes<br />
        Ideal for displaying energy, material, or cost transfers<br />
      </>
    ),
  },
  {
    title: 'Tree',
    Svg: require('@site/static/media/example-tree.png').default,
    SvgDark: require('@site/static/media/example-tree-dark.png').default,
    link: '/docs/dashboard-extension/Tree',
    description: (
      <>
        Visualize hierarchical data structures<br />
        Show parent-child relationships<br />
        Ideal for displaying tree-like data<br />
      </>
    ),
  },
  {
    title: 'Sunburst',
    Svg: require('@site/static/media/example-sunburst.png').default,
    SvgDark: require('@site/static/media/example-sunburst-dark.png').default,
    link: '/docs/dashboard-extension/Sunburst',
    description: (
      <>
        Visualize hierarchical data in a radial layout<br />
        Show proportions of categories within a whole<br />
        Ideal for displaying multi-level data<br />
      </>
    ),
  },
  {
    title: 'Sankey',
    Svg: require('@site/static/media/example-sankey.png').default,
    SvgDark: require('@site/static/media/example-sankey-dark.png').default,
    link: '/docs/dashboard-extension/Sankey',
    description: (
      <>
        Illustrate flow and connections between entities<br />
        Show proportions of flow between different nodes<br />
        Ideal for displaying energy, material, or cost transfers<br />
      </>
    ),
  }
];

function Feature({ Svg, SvgDark, title, description, link }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Link to={link}>
          <ThemedImage
            alt={title}
            sources={{ light: Svg, dark: SvgDark ?? Svg }}
            className={styles.featureSvg}
          />
        </Link>
      </div>
      <div className="text--center padding-horiz--md">
        <Link to={link} style={{ textDecoration: 'none', color: 'inherit' }}>
          <Heading as="h3">{title}</Heading>
        </Link>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  const firstRow = FeatureList.slice(0, 3);
  const secondRow = FeatureList.slice(3);
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {firstRow.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        {secondRow.length > 0 && (
          <div className="row" style={{ justifyContent: 'center', display: 'flex' }}>
            {secondRow.map((props, idx) => (
              <Feature key={idx + 3} {...props} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
