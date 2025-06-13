import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Translate, {translate} from '@docusaurus/Translate';

import styles from './index.module.css';

/**
 * NOTE: add slug: / will delete existing homepage ./src/pages/index.js
 */

function HomepageHeader() {
  const { siteConfig: {
    customFields: {},
  }} = useDocusaurusContext(); // contains site metadata from docusaurus.config.js


  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">
          <Translate
            id="HomepageHeader.pageTitle"
            description="The homepage title"
          >
            🔨 select * from &lt;me/&gt; ...
          </Translate>
        </h1>
        <p className="hero__subtitle">
          <Translate
            id="HomepageHeader.tagline"
            description="The homepage tag line"
          >
            I don't want my editor to look like a Christmas tree.
          </Translate>
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/">
            <Translate
              id="HomepageHeader.buttonWord"
              description="The word on the center button of home page"
            >
              Lorem ipsum ✨
            </Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title={
        translate({
          message: 'i\'m',
          description: 'title on the browser bar',
        })
      }
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
