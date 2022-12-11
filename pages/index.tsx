import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Banner from './home/components/banner';

export default function Home() {

  const title = process.env.HOME_TITLE || "Store";

  return (
    <>
      <Head>
        <title>{title}</title>
        {/* <meta itemProp="name" content={title} />
          {description && <meta itemProp="description" content={description} />}
          {image && <meta itemProp="image" content={image} />} */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner/>
    </>
  )
}
