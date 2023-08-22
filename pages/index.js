import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date';
import Blog from '../components/blog/blog';

export const getStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

const Home = ({ allPostsData }) => {
  return (
    <Layout home>
      <div className={styles.container}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hey, I'm Tom Wasnidge! I currently work as an Asscociate Engineer for Sainsbury's,
          This website is a small portfolio WebApp built using the NextJS framework!
          I'm building this site in order to get better at web development and hopefully
          learn and experiment with a few different technologies! I'm hoping if I start to write about 
          thing then I'll start to learn them quicker!
          Anyways, I hope you enjoy!
        </p>
        <br />
        <Blog allPostsData={allPostsData} />
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

    </div>
    </Layout>

  )
}

export default Home;
