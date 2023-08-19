import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/layout';

const FirstPost = () => {
    return (
        <Layout>
            <div>
                <Head>
                <title>First Post</title>
                <link rel="icon" href="/favicon.ico" /> 
                </Head>
                <Script
                    src="https://connect.facebook.net/en_US/sdk.js"
                    strategy="lazyOnload"
                    onLoad={() =>
                    console.log(`script loaded correctly, window.FB has been populated`)
                    }
                />
                <h1>First Post</h1>
                <Link href="/" >Home Page</Link>
            </div>
        </Layout>
    )
}

export default FirstPost;