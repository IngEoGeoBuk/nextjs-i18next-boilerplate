import type { NextPage } from 'next'
import Head from 'next/head'
import { useTranslation } from 'react-i18next';

const Home: NextPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>IngEoGeoBuk | Home</title>
        <meta name="keywords" content="ninjas"/>
      </Head>
      <div>
        <h1>Home</h1>
        <p>{t('hello')}</p>
      </div>
    </>
  )
}

export default Home
