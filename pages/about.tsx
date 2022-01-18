import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useTranslation } from 'react-i18next';

const about: NextPage = () => {
    const { t } = useTranslation();
    return (
        <>
            <Head>
                <title>IngEoGeoBuk | About</title>
                <meta name="keywords" content="ninjas"/>
            </Head>
            <div>
                <h1>About</h1>
                <p>{t('bye')}</p>
            </div>
        </>
    )
}

export default about
