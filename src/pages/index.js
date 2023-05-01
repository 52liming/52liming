import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import ContactMe  from '../components/ContactMe';
import RandomDigest from '../components/RandomDigest';

function HomePageMain() {
  const {siteConfig} = useDocusaurusContext()
  return(
    <div className={clsx('container', styles.container)}>
      <h1 className="hero__title">Hello, 我是<span className={styles.name}>{siteConfig.title}</span></h1>
      <p className="hero__subtitle">{siteConfig.tagline}</p>
      <p className="hero__subtitle">👨‍💻 🚴‍♂️ 🏃‍♂️ 🐟</p>
      <ul className={clsx('pills', styles.pills)}>
        <li className="pills__item ">Java</li>
        <li className="pills__item ">Python</li>
        <li className="pills__item ">React</li>
      </ul>
      <ul className={clsx('pills', styles.pills)}>
        <li className="pills__item pills__item--active">< a href="https://52liming.cnblogs.com/" target={'_blank'} title='小鸣的网络日志'>博客园</a></li>
        <li className="pills__item pills__item--active">< a href="https://space.bilibili.com/211909658" target={'_blank'} title='小鸣Cycling'>bilibili</a></li>
        <li className="pills__item pills__item--active">< a href="https://gitee.com/forxiaoming" target={'_blank'} title='小鸣Cycling'>Gitee</a></li>

        <li className="pills__item pills__item--active">< a href="https://stackoverflow.com/users/11966119/xiaoming" target={'_blank'} title=''>StackOverflow</a></li>
        <li className="pills__item pills__item--active">< a href="https://segmentfault.com/u/52liming" target={'_blank'} title=''>思否</a></li>
      </ul>
      <ul className={clsx('pills', styles.pills)}>
        <li className="pills__item pills__item--active">< a href="/shop" title='小鸣Cycling' >微信小商店</a></li>
      </ul>
      <ContactMe />
      <RandomDigest />
    </div>
  )

}

export default function Home() {
  return (
    <Layout
      title="首页"
      description="李鸣的个人博客">
      <main>
        <HomePageMain />
      </main>
    </Layout>
  );
}
