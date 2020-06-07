import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Glasgow University Mens Football Club</>,
    imageUrl: 'img/me2.svg',
    description: (
      <>
      Ex Sponsorship Convenor, Social Media Convenor and current Vice Captain for Mens Football. 
      Won Bucs 3A 2019-2020.
      </>
    ),
  },
  {
    title: <>Charity Events</>,
    imageUrl: 'img/charity.svg',
    description: (
      <>
      Ran Great Scottish Run 2019 to raise money for Alzheimer Scotland.
      Organised Football Teams charity week for Mental Health Week where we ran/cycled/walked over 2600KM for BackOnside, a charity focusing on mental
      health within sport.  
      </>
    ),
  },
  {
    title: <>Software Interests</>,
    imageUrl: 'img/coding.svg',
    description: (
      <>
      Always looking to try new technologies, check my Projects to see past and present projects.
      I have a particular interest in Neural Networks and have enjoyed using Pytorch for computer vision and image classification.

      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Projects
            </Link>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={'https://pdfhost.io/v/YuwZQAiNY_Microsoft_Word_Gregor_Alexander_Kerr_cvdocx.pdf'}>
              MyCV
            </Link>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={'https://github.com/GregorKerr1996/'}>
              My Github
            </Link>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={'https://uk.linkedin.com/in/gregor-kerr'}>
              linkedin
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
