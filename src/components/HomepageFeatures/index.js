import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'I am a software engineer.',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        So I always mix up Christmas and Halloween because <code>Dec 25</code> is <code>Oct 31</code>.
        </>
    ),
  },
  {
    title: 'There\'re 10 types of people in the world.',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        • Those who understand <i>binary</i>.
        <br />
        • Those who don't.
      </>
    ),
  },
  {
    title: 'The best thing about a Boolean is that',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        even if you are wrong, you are only off by a bit.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
