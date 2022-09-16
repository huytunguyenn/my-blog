import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

/**
 * NOTE: add slug: / will delete existing homepage ./src/pages/index.js
 */

function HomepageHeader() {
  const { siteConfig: {
    customFields: {
      homePage,
    },
    tagline,
  }} = useDocusaurusContext(); // contains site metadata from docusaurus.config.js

  const {
    pageTitle,
    buttonWord,
  } = homePage;


  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{pageTitle}</h1>
        <p className="hero__subtitle">{tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/">
            {buttonWord}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig: {
    customFields: {
      homePage,
    },
  }} = useDocusaurusContext(); // contains site metadata from docusaurus.config.js

  const {
    headTitle,
  } = homePage;

  return (
    <Layout
      title={headTitle}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
