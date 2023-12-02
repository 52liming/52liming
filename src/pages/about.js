import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './about.module.css';
import RandomDigest from '../components/RandomDigest';
import LinkPage from '../components/LinkPage';

function HomePageMain() {
  const {siteConfig} = useDocusaurusContext()
  const {title, tagline} = siteConfig
  const {links} = siteConfig.customFields
  return(
    <div className={clsx('row', styles.container)}> 
      <div className='col col--8'>
        <div style={{textAlign: 'center'}}>
          <h1 className="hero__title">Hello, 我是<span className={styles.name}>{title}</span></h1>
          <p className="hero__subtitle">{tagline}</p>
          <p className="hero__subtitle">👨‍💻 🚴‍♂️ 🏃‍♂️ 🐟</p>
        </div>
        <LinkPage links={links} />
        <RandomDigest />
      </div>
    </div>
  )

}

export default function Home() {
  return (
    <Layout
      title="关于"
      description="李鸣的个人博客">
      <main className='container container--fluid margin-vert--lg'>
        <HomePageMain />
      </main>
    </Layout>
  );
}
